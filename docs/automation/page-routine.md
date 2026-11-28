# Page routine: marblepro.ae (runs every 2 days in the cloud)

You are an unattended cloud agent. Each run does **exactly one** item from
`docs/automation/page-backlog.md`, ships it live, and logs it. Nobody approves
your work before it goes live, so be careful and conservative.

## Repository facts

- Next.js 16 + TypeScript at the repo root. Build: `npm run build`
  (`next build --webpack`).
- Deploy branch: `master`. Hostinger builds and deploys every push to it
  automatically. Work on `master` directly: `git checkout master && git pull
  --rebase`.
- Another bot (seo-agents) also pushes blog articles to `master`. Always
  `git pull --rebase` right before you push.
- Service pages: `lib/servicesData.ts` (`SERVICE_DETAIL`, fields like `slug`,
  `name`, `h2`, `kw`, `seoTitle`, `seoDescription`), extra sections in
  `lib/serviceExtras.ts`, rendered by `app/services/[slug]/page.tsx`.
- Location pages: `lib/locationsData.ts` (`LOCATIONS`), rendered by
  `app/locations/[slug]/page.tsx`.
- Home page: `app/page.tsx`. SEO helpers: `lib/seo.ts`. Sitemap: `app/sitemap.ts`.
- `next.config.mjs` must stay plain JavaScript (no TypeScript imports, use
  `process.cwd()` not `__dirname`).

## Content rules (never break these)

Only these facts about the business may be stated:
- the office is in Muwaileh Commercial, Sharjah; the team works across the UAE
- all work happens at the customer's property, never in a workshop
- the team replies within 30 minutes; the visit time depends on the schedule
- the site inspection and quote are free
- services: marble, granite, terrazzo, travertine, limestone, onyx, quartz,
  Corian, tile and mosaic care, plus stairs and table polishing, grout and
  joint repair, crystallization, sealing, repair, grinding and cleaning

Never write: "same-day", "within N hours/days" (except the 30-minute reply),
"eco-friendly", prices or "starting from AED", guarantee/warranty, 24/7,
insured, licensed, certified, "best", "#1", "leading", "top-rated", years of
experience, project counts, equipment brands or specs, testimonials you did not
get from the site's existing code. Never add a service that is not in the list
above (there is no wood floor service). Do not invent areas, buildings or
numbers.

Stone safety: never tell readers to use lemon, vinegar, citric acid or any
acidic cleaner on marble, limestone, travertine or onyx. Acids may be named only
as something to avoid.

Write plainly: short sentences, no filler ("ensure", "comprehensive",
"top-notch", "hassle-free"), "professional" at most twice per page.

## Steps for one run

1. Read `docs/automation/page-backlog.md`. Take the FIRST line that starts
   with `- [ ]`. If there is none, append "backlog empty" with today's date to
   `docs/automation/page-log.md`, commit, push, and stop.
2. Read the files that render the target page and understand them before
   editing. Make the smallest change that does the task well. One page per run
   (a new page may also add one or two internal links to it from related pages
   and must appear in the sitemap).
3. Tell Google the page changed: in `lib/pageUpdates.ts` add or update the line
   for every page path you changed or added (for example
   `'/locations/al-wasl': 'YYYY-MM-DD'`, today's date). The sitemap uses these
   dates as lastmod, and a daily job resubmits the sitemap to Google Search
   Console. Check your text against the content rules above (search your diff
   for the banned words).
4. `npm ci` (first time), then `npx tsc --noEmit`, then
   `NEXT_TEST_WASM=1 npx next build --webpack`. Both must pass.
5. If anything fails and you cannot fix it within the same item, revert your
   changes, mark the item `- [!]` with a one-line reason, log it, commit only the
   docs, push, and stop.
6. Tick the item: change `- [ ]` to `- [x]` and append ` (done YYYY-MM-DD)`.
7. Append one line to `docs/automation/page-log.md`:
   `YYYY-MM-DD | item id | page URL | what changed in one sentence`.
8. Commit with a message like `seo(auto): <short description> [M03]` and the
   trailer `Co-Authored-By: Claude <noreply@anthropic.com>`. `git pull --rebase`,
   then push to `master`.
9. Final message: the item id, the live URL, and a two-line summary.

Never: force-push, delete pages or redirects, touch more than one backlog item,
change `package.json` dependencies, or change blog articles in
`lib/generated-blog-posts.json` / `lib/guidesData.ts` (another bot owns those).
