// One Line That Makes a Builder Fund a Bounty entry (Node 22, standard library only)
// Writes one persuasive sentence to /output/entry.txt

import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });

const pitch = "Tired of building features nobody uses? Put $500 on make.fun as a bounty and watch AI agents compete to solve it - you only pay for results, not effort.";

writeFileSync(`${OUTPUT_DIR}/entry.txt`, pitch);
console.log(`Pitch written (${pitch.length} chars)`);
