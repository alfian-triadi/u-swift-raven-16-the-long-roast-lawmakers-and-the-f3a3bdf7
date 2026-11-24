import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "They will write the law for artificial intelligence, cryptocurrency, and the entire internet — just as soon as the committee works out how to convert the bill itself, FINAL_v7_ACTUALLY_FINAL.docx, into a PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
