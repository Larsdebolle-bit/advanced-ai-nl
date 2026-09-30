// Copies the course skills from .claude/skills/ (Claude Code) to .agents/skills/ (Codex).
// .claude/skills/ is the source. Never edit .agents/skills/ by hand.
//
//   node scripts/sync-skills.mjs          copy
//   node scripts/sync-skills.mjs --check  exit 1 if the two folders differ
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const src = ".claude/skills";
const dst = ".agents/skills";

function list(root) {
  const walk = (dir) =>
    readdirSync(dir).flatMap((n) => {
      const p = join(dir, n);
      if (n === ".DS_Store") return [];
      return statSync(p).isDirectory() ? walk(p) : [relative(root, p)];
    });
  return existsSync(root) ? walk(root).sort() : [];
}

if (process.argv.includes("--check")) {
  const a = list(src);
  const b = list(dst);
  const verschil = [
    ...a.filter((f) => !b.includes(f)).map((f) => `ontbreekt in ${dst}: ${f}`),
    ...b.filter((f) => !a.includes(f)).map((f) => `staat te veel in ${dst}: ${f}`),
    ...a.filter((f) => b.includes(f) && !readFileSync(join(src, f)).equals(readFileSync(join(dst, f)))).map((f) => `verschilt: ${f}`),
  ];
  if (verschil.length) {
    console.error(`${src} en ${dst} lopen uiteen. Draai: node scripts/sync-skills.mjs\n\n${verschil.join("\n")}`);
    process.exit(1);
  }
  console.log(`OK: ${a.length} skillbestanden, ${dst} is gelijk aan ${src}`);
} else {
  rmSync(dst, { recursive: true, force: true });
  cpSync(src, dst, { recursive: true, filter: (p) => !/[/\\]\.DS_Store$/.test(p) });
  console.log(`${src} → ${dst}: ${list(dst).length} bestanden`);
}
