// Checks that each cursus/week-NN/README.md heading matches cursus/cursus.json.
// cursus.json owns the week titles; the README heading is a copy.
import { existsSync, readFileSync } from "node:fs";

const { fasen, weken } = JSON.parse(readFileSync("cursus/cursus.json", "utf8"));
const fouten = [];

for (const w of weken) {
  if (!fasen.includes(w.fase)) fouten.push(`week ${w.nr}: fase "${w.fase}" staat niet in fasen`);
  const nn = String(w.nr).padStart(2, "0");
  const f = `cursus/week-${nn}/README.md`;
  if (!existsSync(f)) continue;
  const h1 = readFileSync(f, "utf8").match(/^#\s+(.+)$/m)?.[1].trim();
  const verwacht = `Week ${w.nr} — ${w.titel}`;
  if (h1 !== verwacht) fouten.push(`${f}\n  kop:      ${h1}\n  verwacht: ${verwacht}`);
}

if (fouten.length) {
  console.error(`cursus.json en de weekbestanden lopen uiteen:\n\n${fouten.join("\n")}`);
  process.exit(1);
}
console.log(`OK: ${weken.length} weken, koppen kloppen met cursus.json`);
