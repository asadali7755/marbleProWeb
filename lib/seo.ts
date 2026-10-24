// Google shows about 60 characters of a title and ~155 of a description;
// longer ones get cut mid-word in search results.
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 158;

/**
 * `heading + suffix`, dropping the heading's " — tagline" part when the whole
 * thing is too long. `mustInclude` (e.g. the emirate name) is added back if
 * the shortened heading lost it.
 */
export function fitTitle(heading: string, suffix: string, mustInclude?: string): string {
  const full = `${heading}${suffix}`;
  if (full.length <= TITLE_MAX) return full;
  let core = heading.split(' — ')[0].trim();
  if (mustInclude && !core.toLowerCase().includes(mustInclude.toLowerCase())) {
    core = `Marble Polishing ${mustInclude}`;
  }
  return `${core}${suffix}`;
}

/** Whole sentences of `text` that fit together with `suffix`. */
export function fitDescription(text: string, suffix: string): string {
  const room = DESCRIPTION_MAX - suffix.length - 1;
  const sentences = text.split(/(?<=[.!?])\s+/);
  let out = '';
  for (const s of sentences) {
    const next = out ? `${out} ${s}` : s;
    if (next.length > room) break;
    out = next;
  }
  if (!out) {
    out = text.slice(0, room - 1);
    out = `${out.slice(0, out.lastIndexOf(' '))}…`;
  }
  return `${out} ${suffix}`;
}
