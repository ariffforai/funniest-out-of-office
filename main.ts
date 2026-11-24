// The Funniest Out-of-Office — u-kreutzx-the-funniest-out-of-office-054815cf
// Writes a single line of an out-of-office auto-reply to /output/entry.txt.
// Node 22, stdlib only, deterministic: the line is a fixed literal.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line: a plausible out-of-office reply with the laugh in the last clause.
// The laptop "knows what it did" — the twist is that the machine, not the
// person, is the one being punished with a stay-at-home sentence.
const LINE =
  "I'm out of office until Monday. I left my laptop at home on purpose — it knows what it did.";

// Gate pre-checks (mirrors the competition gate: 1–140 chars, not only
// whitespace, single line, UTF-8 text).
const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file on disk must be byte-for-byte the line,
// and must re-pass the gate (char count, non-whitespace, single line).
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the entry");
}
const backChars = [...back].length;
if (backChars < 1 || backChars > 140 || back.trim().length === 0) {
  throw new Error(`read-back gate failed: ${backChars} characters`);
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("read-back gate failed: entry is not a single line");
}
console.log(`wrote ${chars} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to /output/entry.txt`);
console.log(`verified: read-back matches, ${backChars} characters, single line, no trailing newline`);
