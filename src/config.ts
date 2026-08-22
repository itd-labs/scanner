import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import type { ScannerConfig } from "./types.js";

const REQUIRED_STRING_KEYS = ["target", "output", "userAgent"] as const;
const REQUIRED_NUMBER_KEYS = [
  "requestTimeoutMs",
  "retries",
  "maxResources",
  "maxResourceBytes",
  "maxTotalBytes",
] as const;

export async function loadConfig(path: string): Promise<ScannerConfig> {
  const absolutePath = resolve(path);
  const parsed: unknown = JSON.parse(await readFile(absolutePath, "utf8"));

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Configuration must be a JSON object: ${absolutePath}`);
  }

  const record = parsed as Record<string, unknown>;
  for (const key of REQUIRED_STRING_KEYS) {
    if (typeof record[key] !== "string" || record[key].length === 0) {
      throw new Error(
        `Configuration property ${key} must be a non-empty string`,
      );
    }
  }
  for (const key of REQUIRED_NUMBER_KEYS) {
    if (
      typeof record[key] !== "number" ||
      !Number.isFinite(record[key]) ||
      record[key] < 0
    ) {
      throw new Error(
        `Configuration property ${key} must be a positive number`,
      );
    }
  }

  const config = record as unknown as ScannerConfig;
  const target = new URL(config.target);
  if (target.protocol !== "https:") {
    throw new Error("Only HTTPS targets are allowed");
  }
  if (
    config.maxResources < 1 ||
    config.maxResourceBytes < 1 ||
    config.maxTotalBytes < 1
  ) {
    throw new Error("Resource limits must be greater than zero");
  }

  return config;
}
