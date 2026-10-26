// Google shows about 60 characters of a title and ~155 of a description;
// longer ones get cut mid-word in search results. Bing Webmaster Tools
// flags descriptions near 160 (it counts "—", "·" and "&" as more than one
// character), so descriptions stay a little under that.
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 150;
const DESCRIPTION_MIN = 110;
const BRAND = ' | MarblePro';
const DANGLING = /^(&|and|or|for|with|the|in|of|to|—|-|:)$/i;

/** Shorter versions of a heading, longest first. */
function trims(heading: string): string[] {
  const noTagline = heading.split(' — ')[0].trim();
  const noParen = noTagline.replace(/\s*\([^)]*\)\s*$/, '').trim();
  const noAdjective = noParen.replace(/^Professional\s+/i, '');
  return [heading, noTagline, noParen, noAdjective];
}

/** `text` cut at a word boundary, without a dangling "&" / "and" at the end. */
function cutWords(text: string, max: number): string {
  if (text.length <= max) return text;
  const words = text.slice(0, max + 1).split(' ').slice(0, -1);
  while (words.length > 1 && DANGLING.test(words[words.length - 1])) words.pop();
  return words.join(' ').replace(/[,:;]$/, '');
}

/**
 * `heading + suffix`, shortened when the whole thing is too long: the
 * heading loses its " — tagline", a trailing "(…)" and a leading
 * "Professional", then the suffix shrinks to " | MarblePro" or goes.
 * `mustInclude` (e.g. the emirate name) is added back if a shortened heading
 * lost it.
 */
export function fitTitle(heading: string, suffix: string, mustInclude?: string): string {
  for (const sfx of [suffix, BRAND, '']) {
    for (let core of trims(heading)) {
      if (mustInclude && !core.toLowerCase().includes(mustInclude.toLowerCase())) {
        core = `Marble Polishing ${mustInclude}`;
      }
      if (`${core}${sfx}`.length <= TITLE_MAX) return `${core}${sfx}`;
    }
  }
  return `${cutWords(trims(heading)[3], TITLE_MAX - BRAND.length)}${BRAND}`;
}

/** fitTitle for a title that already ends in " | Brand". */
export function fitFullTitle(title: string): string {
  const cut = title.lastIndexOf(' | ');
  return cut > 0 ? fitTitle(title.slice(0, cut), title.slice(cut)) : fitTitle(title, '');
}

/** `text` cut to `max`, ending at a clause (" — " or ", ") when one is near the end. */
function cutClause(text: string, max: number): string {
  if (text.length <= max) return text;
  const head = cutWords(text, max - 1);
  const dash = head.lastIndexOf(' — ');
  if (dash >= max * 0.5) return `${head.slice(0, dash)}.`;
  const comma = head.lastIndexOf(', ');
  return comma >= max * 0.6 ? `${head.slice(0, comma)}.` : `${head}…`;
}

/** Whole sentences of `text` that fit together with `suffix`. */
export function fitDescription(text: string, suffix = ''): string {
  const room = DESCRIPTION_MAX - (suffix ? suffix.length + 1 : 0);
  const sentences = text.split(/(?<=[.!?])\s+/);
  let out = '';
  for (const s of sentences) {
    const next = out ? `${out} ${s}` : s;
    if (next.length > room) break;
    out = next;
  }
  // One short sentence alone reads thin in results; fill the space instead.
  if (out.length < DESCRIPTION_MIN && text.length > out.length) out = cutClause(text, room);
  return suffix ? `${out} ${suffix}` : out;
}
