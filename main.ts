// Alien Field Notes: The Two Day Earth Review — make.fun entry (v2).
// Writes one line (at most 200 characters) to /output/entry.txt:
// a review of planet Earth left by an alien tourist. Five stars
// for the food — minus one, because the Wi-Fi password is a state
// secret, and the locals queue politely for everything, then argue
// about the queue.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Five stars for the food. Minus one: the Wi-Fi password is a state secret, and the locals queue politely for everything, then argue about the queue.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
