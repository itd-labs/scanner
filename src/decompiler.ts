import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const WAKARU_BINARY = resolveWakaruBinary();

export async function decompileJavaScript(
  source: string,
  label: string,
  enabled: boolean,
): Promise<string> {
  if (!enabled) return source;

  const temporaryDirectory = await mkdtemp(
    join(tmpdir(), "itd-scanner-wakaru-"),
  );
  const input = join(temporaryDirectory, "input.js");
  const output = join(temporaryDirectory, "output.js");
  try {
    await writeFile(input, source, "utf8");
    await runWakaru(input, output, label);
    return await readFile(output, "utf8");
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

async function runWakaru(
  input: string,
  output: string,
  label: string,
): Promise<void> {
  await new Promise<void>((resolvePromise, reject) => {
    const child = spawn(
      WAKARU_BINARY,
      [input, "--output", output, "--level", "minimal", "--force"],
      {
        cwd: process.cwd(),
        windowsHide: true,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    let stderr = "";
    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error(`Wakaru timed out after 120 seconds for ${label}`));
    }, 120_000);
    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
    });
    child.once("error", (error) => {
      clearTimeout(timeout);
      reject(error);
    });
    child.once("exit", (code) => {
      clearTimeout(timeout);
      if (code === 0) resolvePromise();
      else
        reject(
          new Error(
            `Wakaru failed for ${label} (exit ${code ?? "unknown"}): ${stderr.trim()}`,
          ),
        );
    });
  });
}

function resolveWakaruBinary(): string {
  const packageByPlatform: Record<string, string | undefined> = {
    "win32-x64": "@wakaru/cli-win32-x64/wakaru.exe",
    "linux-x64": "@wakaru/cli-linux-x64/wakaru",
    "linux-arm64": "@wakaru/cli-linux-arm64/wakaru",
    "darwin-arm64": "@wakaru/cli-darwin-arm64/wakaru",
  };
  const packagePath = packageByPlatform[`${process.platform}-${process.arch}`];
  if (!packagePath)
    throw new Error(
      `Unsupported Wakaru platform: ${process.platform}-${process.arch}`,
    );
  return require.resolve(packagePath);
}

export async function mapConcurrent<T, R>(
  values: T[],
  concurrency: number,
  mapper: (value: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(values.length);
  let cursor = 0;
  const workers = Array.from(
    { length: Math.min(concurrency, values.length) },
    async () => {
      while (cursor < values.length) {
        const index = cursor;
        cursor += 1;
        const value = values[index];
        if (value !== undefined) results[index] = await mapper(value, index);
      }
    },
  );
  await Promise.all(workers);
  return results;
}
