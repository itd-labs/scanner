import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

import { assertSafeDirectory } from "./path-utils.js";
import type { LogicalResource, SnapshotManifest } from "./types.js";

export async function readPreviousManifest(
  output: string,
): Promise<SnapshotManifest | undefined> {
  try {
    return JSON.parse(
      await readFile(join(resolve(output), "manifest.json"), "utf8"),
    ) as SnapshotManifest;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw error;
  }
}

export async function writeMirror(
  resources: Iterable<LogicalResource>,
  directory: string,
): Promise<void> {
  const target = assertSafeDirectory(directory);
  const stage = `${target}.stage-${process.pid}`;
  await rm(stage, { recursive: true, force: true });
  await mkdir(stage, { recursive: true });
  try {
    for (const resource of resources) {
      const destination = join(stage, resource.originalPath);
      await mkdir(dirname(destination), { recursive: true });
      await writeFile(destination, resource.bytes);
    }
    await replaceDirectory(stage, target);
  } catch (error) {
    await rm(stage, { recursive: true, force: true });
    throw error;
  }
}

export async function writeSnapshot(options: {
  output: string;
  resources: LogicalResource[];
  canonicalSources: ReadonlyMap<string, string>;
  manifest: SnapshotManifest;
  summary: string;
}): Promise<void> {
  const target = assertSafeDirectory(options.output);
  const stage = `${target}.stage-${process.pid}`;
  await rm(stage, { recursive: true, force: true });
  await mkdir(stage, { recursive: true });
  try {
    for (const resource of options.resources) {
      const rawPath = join(stage, "raw", resource.originalPath);
      await mkdir(dirname(rawPath), { recursive: true });
      await writeFile(rawPath, resource.bytes);
    }
    for (const [logicalPath, source] of options.canonicalSources) {
      const sourcePath = join(stage, "source", logicalPath);
      await mkdir(dirname(sourcePath), { recursive: true });
      await writeFile(sourcePath, source, "utf8");
    }
    await mkdir(join(stage, "reports"), { recursive: true });
    await writeFile(
      join(stage, "manifest.json"),
      stableJson(options.manifest),
      "utf8",
    );
    await writeFile(
      join(stage, "reports", "summary.md"),
      options.summary,
      "utf8",
    );
    await writeFile(
      join(stage, "reports", "analysis.json"),
      stableJson(options.manifest.analysis),
      "utf8",
    );
    await replaceDirectory(stage, target);
  } catch (error) {
    await rm(stage, { recursive: true, force: true });
    throw error;
  }
}

async function replaceDirectory(stage: string, target: string): Promise<void> {
  await rm(target, { recursive: true, force: true });
  await rename(stage, target);
}

function stableJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}
