import generate from "@babel/generator";
import { spawn } from "node:child_process";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { format } from "prettier";

import { normalizeCss } from "./css-normalizer.js";
import { structuralSignature } from "./hash.js";
import {
  buildExportMaps,
  collectCssClassNames,
  normalizeJavaScript,
  parseJavaScript,
} from "./js-normalizer.js";
import { assertSafeDirectory, toKebabCase } from "./path-utils.js";

interface FixtureFile {
  absolutePath: string;
  relativePath: string;
  basename: string;
  extension: ".js" | ".css";
  source: string;
  shapeHash: string;
  minhash: string[];
  logicalPath?: string;
}

interface DiffStats {
  files: number;
  changedFiles: number;
  addedLines: number;
  removedLines: number;
}

export interface DirectoryBenchmarkResult {
  oldDirectory: string;
  newDirectory: string;
  beautified: DiffStats;
  canonical: DiffStats;
  changedLineReductionPercent: number;
}

const HASHED_FILE = /^(.*)-[A-Za-z0-9_-]{8}(\.(?:js|css))$/u;

export async function benchmarkDirectories(
  oldDirectory: string,
  newDirectory: string,
  output: string,
): Promise<DirectoryBenchmarkResult> {
  const oldFiles = await loadFixture(oldDirectory);
  const newFiles = await loadFixture(newDirectory);
  assignPairedLogicalPaths(oldFiles, newFiles);

  const oldViews = await createViews(oldFiles);
  const newViews = await createViews(newFiles);
  const target = assertSafeDirectory(output);
  await rm(target, { recursive: true, force: true });
  await mkdir(target, { recursive: true });
  const oldBeautified = join(target, "old", "beautified");
  const oldCanonical = join(target, "old", "canonical");
  const newBeautified = join(target, "new", "beautified");
  const newCanonical = join(target, "new", "canonical");
  await writeViews(oldBeautified, oldViews.beautified);
  await writeViews(oldCanonical, oldViews.canonical);
  await writeViews(newBeautified, newViews.beautified);
  await writeViews(newCanonical, newViews.canonical);

  const beautified = await calculateDiffStats(
    oldBeautified,
    newBeautified,
    new Set([...oldViews.beautified.keys(), ...newViews.beautified.keys()])
      .size,
  );
  const canonical = await calculateDiffStats(
    oldCanonical,
    newCanonical,
    new Set([...oldViews.canonical.keys(), ...newViews.canonical.keys()]).size,
  );
  const oldChangedLines = beautified.addedLines + beautified.removedLines;
  const canonicalChangedLines = canonical.addedLines + canonical.removedLines;
  const changedLineReductionPercent =
    oldChangedLines === 0
      ? 0
      : Math.max(
          0,
          Math.round((1 - canonicalChangedLines / oldChangedLines) * 10_000) /
            100,
        );
  const result: DirectoryBenchmarkResult = {
    oldDirectory: resolve(oldDirectory),
    newDirectory: resolve(newDirectory),
    beautified,
    canonical,
    changedLineReductionPercent,
  };

  await writeFile(
    join(target, "benchmark.json"),
    `${JSON.stringify(result, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    join(target, "summary.md"),
    createBenchmarkSummary(result),
    "utf8",
  );
  return result;
}

async function loadFixture(directory: string): Promise<FixtureFile[]> {
  const root = resolve(directory);
  const paths = await walk(root);
  return Promise.all(
    paths
      .filter((path) => /\.(?:js|css)$/u.test(path))
      .map(async (absolutePath) => {
        const extension = extname(absolutePath) as ".js" | ".css";
        const source = await readFile(absolutePath, "utf8");
        return {
          absolutePath,
          relativePath: relative(root, absolutePath).replaceAll("\\", "/"),
          basename: basename(absolutePath),
          extension,
          source,
          ...structuralSignature(source),
        };
      }),
  );
}

async function walk(directory: string): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(path)));
    else if (entry.isFile()) result.push(path);
  }
  return result;
}

function assignPairedLogicalPaths(
  oldFiles: FixtureFile[],
  newFiles: FixtureFile[],
): void {
  const oldExplicit = groupByStableKey(oldFiles);
  const newExplicit = groupByStableKey(newFiles);
  for (const [key, oldGroup] of oldExplicit) {
    const newGroup = newExplicit.get(key);
    if (
      oldGroup.length === 1 &&
      newGroup?.length === 1 &&
      !key.startsWith("<root-index>")
    ) {
      oldGroup[0]!.logicalPath = key;
      newGroup[0]!.logicalPath = key;
    }
  }

  assignEntrypoint(oldFiles, newFiles, ".js");
  assignEntrypoint(oldFiles, newFiles, ".css");

  const unmatchedOld = oldFiles.filter((file) => !file.logicalPath);
  const unmatchedNew = newFiles.filter((file) => !file.logicalPath);
  let sequence = 0;
  for (const oldFile of unmatchedOld.sort((left, right) =>
    left.shapeHash.localeCompare(right.shapeHash),
  )) {
    sequence += 1;
    const candidates = unmatchedNew
      .filter(
        (file) => !file.logicalPath && file.extension === oldFile.extension,
      )
      .map((file) => ({
        file,
        score: file.minhash.filter(
          (value, index) => value === oldFile.minhash[index],
        ).length,
      }))
      .sort((left, right) => right.score - left.score);
    const logicalPath = `shared/candidate-${String(sequence).padStart(3, "0")}${oldFile.extension}`;
    oldFile.logicalPath = logicalPath;
    if (candidates[0]) candidates[0].file.logicalPath = logicalPath;
  }
  for (const newFile of unmatchedNew.filter((file) => !file.logicalPath)) {
    sequence += 1;
    newFile.logicalPath = `shared/candidate-${String(sequence).padStart(3, "0")}${newFile.extension}`;
  }
}

function groupByStableKey(files: FixtureFile[]): Map<string, FixtureFile[]> {
  const result = new Map<string, FixtureFile[]>();
  for (const file of files) {
    const parent = dirname(file.relativePath).replaceAll("\\", "/");
    const match = file.basename.match(HASHED_FILE);
    const stem = match?.[1] ?? file.basename.slice(0, -file.extension.length);
    let key: string;
    if (
      stem.toLowerCase() === "index" &&
      (parent === "." || parent === "raw")
    ) {
      key = `<root-index>${file.extension}`;
    } else if (stem.toLowerCase() === "index") {
      const section = toKebabCase(basename(parent));
      key = `routes/${section}${file.extension}`;
    } else {
      const cleanStem = toKebabCase(stem);
      const section =
        parent === "." || parent === "raw"
          ? "shared"
          : `routes/${toKebabCase(basename(parent))}`;
      key = `${section}/${cleanStem}${file.extension}`;
    }
    const group = result.get(key) ?? [];
    group.push(file);
    result.set(key, group);
  }
  return result;
}

function assignEntrypoint(
  oldFiles: FixtureFile[],
  newFiles: FixtureFile[],
  extension: ".js" | ".css",
): void {
  const choose = (files: FixtureFile[]) =>
    files
      .filter(
        (file) =>
          !file.logicalPath &&
          file.extension === extension &&
          (dirname(file.relativePath) === "." ||
            dirname(file.relativePath) === "raw") &&
          file.basename.startsWith("index-"),
      )
      .sort((left, right) => right.source.length - left.source.length)[0];
  const oldEntry = choose(oldFiles);
  const newEntry = choose(newFiles);
  const logicalPath = extension === ".js" ? "entry.js" : "entry.css";
  if (oldEntry) oldEntry.logicalPath = logicalPath;
  if (newEntry) newEntry.logicalPath = logicalPath;
}

async function createViews(files: FixtureFile[]): Promise<{
  beautified: Map<string, string>;
  canonical: Map<string, string>;
}> {
  const jsFiles = files.filter((file) => file.extension === ".js");
  const sourceByUrl = new Map(
    jsFiles.map((file) => [fixtureUrl(file.basename), file.source]),
  );
  const logicalByUrl = new Map(
    files.map((file) => [fixtureUrl(file.basename), requiredLogicalPath(file)]),
  );
  const exportMaps = buildExportMaps(sourceByUrl);
  const cssClasses = collectCssClassNames(
    sourceByUrl.values(),
    files
      .filter((file) => file.extension === ".css")
      .map((file) => file.source),
  );
  const beautified = new Map<string, string>();
  const canonical = new Map<string, string>();

  for (const file of files) {
    const logicalPath = requiredLogicalPath(file);
    if (file.extension === ".js") {
      beautified.set(
        logicalPath,
        await format(generate(parseJavaScript(file.source)).code, {
          parser: "babel",
          endOfLine: "lf",
        }),
      );
      canonical.set(
        logicalPath,
        await normalizeJavaScript(file.source, {
          logicalPath,
          sourceUrl: fixtureUrl(file.basename),
          urlToLogicalPath: logicalByUrl,
          exportMaps,
          cssClassNames: cssClasses,
        }),
      );
    } else {
      beautified.set(
        logicalPath,
        await format(file.source, { parser: "css", endOfLine: "lf" }),
      );
      canonical.set(logicalPath, await normalizeCss(file.source, cssClasses));
    }
  }
  return { beautified, canonical };
}

function fixtureUrl(name: string): string {
  return `https://fixture.invalid/assets/${name}`;
}

function requiredLogicalPath(file: FixtureFile): string {
  if (!file.logicalPath)
    throw new Error(`No logical path assigned to ${file.relativePath}`);
  return file.logicalPath;
}

async function calculateDiffStats(
  oldDirectory: string,
  newDirectory: string,
  files: number,
): Promise<DiffStats> {
  const output = await gitDiffNumstat(oldDirectory, newDirectory);
  let addedLines = 0;
  let removedLines = 0;
  const lines = output.split(/\r?\n/u).filter(Boolean);
  for (const line of lines) {
    const [added, removed] = line.split("\t", 3);
    if (added && added !== "-") addedLines += Number.parseInt(added, 10);
    if (removed && removed !== "-")
      removedLines += Number.parseInt(removed, 10);
  }
  return { files, changedFiles: lines.length, addedLines, removedLines };
}

function gitDiffNumstat(
  oldDirectory: string,
  newDirectory: string,
): Promise<string> {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(
      "git",
      [
        "-c",
        "core.autocrlf=false",
        "diff",
        "--no-index",
        "--no-renames",
        "--numstat",
        "--",
        oldDirectory,
        newDirectory,
      ],
      { windowsHide: true, stdio: ["ignore", "pipe", "pipe"] },
    );
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0 || code === 1) resolvePromise(stdout);
      else reject(new Error(`git diff exited with ${code}: ${stderr.trim()}`));
    });
  });
}

async function writeViews(
  directory: string,
  files: Map<string, string>,
): Promise<void> {
  for (const [path, source] of files) {
    const destination = join(directory, path);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, source, "utf8");
  }
}

function createBenchmarkSummary(result: DirectoryBenchmarkResult): string {
  return `# Historical normalization benchmark

- Old: \`${result.oldDirectory}\`
- New: \`${result.newDirectory}\`
- Changed-line reduction: **${result.changedLineReductionPercent}%**

| View | Changed files | Added lines | Removed lines |
| --- | ---: | ---: | ---: |
| Beautified only | ${result.beautified.changedFiles} | ${result.beautified.addedLines} | ${result.beautified.removedLines} |
| Canonical | ${result.canonical.changedFiles} | ${result.canonical.addedLines} | ${result.canonical.removedLines} |
`;
}
