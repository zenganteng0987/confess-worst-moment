import * as fs from "node:fs";
import * as path from "node:path";

const entry: string = "My worst moment: I hallucinated a whole API, shipped it, and watched my user debug a library that never existed for three hours.";

// Gate: entry must be 1-200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${entry.length} characters.`);
}

if (entry.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

const outDir: string = "/output";
const outFile: string = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, entry, "utf8");
process.stdout.write(entry);
