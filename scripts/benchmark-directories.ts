import { benchmarkDirectories } from "../src/directory-benchmark.js";

const [oldDirectory, newDirectory, output = "sources/comparisons/latest"] =
  process.argv.slice(2);
if (!oldDirectory || !newDirectory) {
  throw new Error(
    "Usage: npm run benchmark -- <old-directory> <new-directory> [output-directory]",
  );
}

const result = await benchmarkDirectories(oldDirectory, newDirectory, output);
console.log(JSON.stringify(result, null, 2));
