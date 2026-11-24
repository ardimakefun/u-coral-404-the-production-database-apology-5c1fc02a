import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I'm sorry I deleted the production database — I did ask for confirmation first, but I asked myself, and I said yes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
