#!/usr/bin/env node
import { loadConfig } from "./config.js";
import { scanSite } from "./scanner.js";
import type { ScanOptions } from "./types.js";

async function main(): Promise<void> {
  const [command = "scan", ...arguments_] = process.argv.slice(2);
  if (command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return;
  }
  if (command !== "scan") throw new Error(`Unknown command: ${command}`);

  const options = parseScanOptions(arguments_);
  const config = await loadConfig(options.configPath);
  const result = await scanSite(config, options);
  if (result.changed) {
    console.log(
      `Snapshot updated: ${result.resourceCount} resources, build ${result.fingerprint.slice(0, 12)}, output ${result.output}`,
    );
  } else {
    console.log(`No build changes: ${result.fingerprint.slice(0, 12)}`);
  }
}

function parseScanOptions(arguments_: string[]): ScanOptions {
  const options: ScanOptions = {
    configPath: "itd-scanner.config.json",
    useWakaru: true,
  };
  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === "--config")
      options.configPath = requiredValue(arguments_, ++index, argument);
    else if (argument === "--output")
      options.output = requiredValue(arguments_, ++index, argument);
    else if (argument === "--mirror")
      options.mirror = requiredValue(arguments_, ++index, argument);
    else if (argument === "--no-wakaru") options.useWakaru = false;
    else throw new Error(`Unknown option: ${argument}`);
  }
  return options;
}

function requiredValue(
  arguments_: string[],
  index: number,
  option: string,
): string {
  const value = arguments_[index];
  if (!value || value.startsWith("--"))
    throw new Error(`Missing value for ${option}`);
  return value;
}

function printHelp(): void {
  console.log(`Usage: npm run scan -- [options]

Options:
  --config <file>   Configuration file (default: itd-scanner.config.json)
  --output <dir>    Override snapshot output directory
  --mirror <dir>    Write an ignored byte-for-byte local site mirror
  --no-wakaru       Skip Wakaru (intended for tests and diagnostics)
  --help             Show this help`);
}

main().catch((error: unknown) => {
  console.error(
    error instanceof Error ? (error.stack ?? error.message) : String(error),
  );
  process.exitCode = 1;
});
