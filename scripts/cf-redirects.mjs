// Writes public/_redirects for Cloudflare Pages from the redirects in
// next.config.ts. A static export cannot run Next.js redirects, but the list
// stays in next.config.ts because the blog agent reads it as retired slugs.
// Host-based rules (non-www -> www) are skipped: Cloudflare handles those.
import { readFileSync, writeFileSync } from 'node:fs';

const config = readFileSync(new URL('../next.config.ts', import.meta.url), 'utf8');
const lines = [];
for (const m of config.matchAll(/source:\s*'([^']+)',\s*destination:\s*'([^']+)'/g)) {
  lines.push(`${m[1]} ${m[2]} 301`);
}
writeFileSync(new URL('../public/_redirects', import.meta.url), lines.join('\n') + '\n');
console.log(`public/_redirects: ${lines.length} rules`);
