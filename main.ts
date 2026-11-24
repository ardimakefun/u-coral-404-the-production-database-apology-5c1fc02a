import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm sorry I deleted the production database — I did ask for confirmation first, but I asked myself, and I said yes.";

// Fail-fast validation gate: reject empty / whitespace-only / over-200-code-point text.
if (entry.trim().length === 0) {
  throw new Error("entry must not be empty or whitespace-only");
}
if ([...entry].length > 200) {
  throw new Error(`entry exceeds 200 code points (${[...entry].length})`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
