import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

import { assertSafeDirectory } from "../src/path-utils.js";

const [repository, ...commits] = process.argv.slice(2);
if (!repository || commits.length === 0) {
  throw new Error(
    "Usage: npm run materialize:reference -- <repository> <commit> [commit...]",
  );
}

for (const commit of commits) {
  if (!/^[0-9a-f]{7,40}$/iu.test(commit))
    throw new Error(`Unsafe commit identifier: ${commit}`);
  const output = assertSafeDirectory(join("sources", "reference", commit));
  const files = (
    await git(repository, ["ls-tree", "-r", "--name-only", commit, "--", "raw"])
  )
    .toString("utf8")
    .split(/\r?\n/u)
    .filter(Boolean);
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const path of files) {
    const relativePath = path.replace(/^raw\//u, "");
    const destination = resolve(output, relativePath);
    if (
      !destination.startsWith(
        `${resolve(output)}${process.platform === "win32" ? "\\" : "/"}`,
      )
    ) {
      throw new Error(`Unsafe repository path: ${path}`);
    }
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(
      destination,
      await git(repository, ["show", `${commit}:${path}`]),
    );
  }
  console.log(
    `Materialized ${files.length} files from ${commit} into ${output}`,
  );
}

function git(repositoryPath: string, arguments_: string[]): Promise<Buffer> {
  return new Promise((resolvePromise, reject) => {
    const absoluteRepository = resolve(repositoryPath);
    const child = spawn(
      "git",
      [
        "-c",
        `safe.directory=${absoluteRepository}`,
        "-C",
        absoluteRepository,
        ...arguments_,
      ],
      {
        windowsHide: true,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    const stdout: Buffer[] = [];
    const stderr: Buffer[] = [];
    child.stdout.on("data", (chunk: Buffer) => stdout.push(chunk));
    child.stderr.on("data", (chunk: Buffer) => stderr.push(chunk));
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0) resolvePromise(Buffer.concat(stdout));
      else
        reject(
          new Error(
            `git exited with ${code}: ${Buffer.concat(stderr).toString("utf8")}`,
          ),
        );
    });
  });
}
