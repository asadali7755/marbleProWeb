// Every photo and video on /gallery, grouped into the two gallery sections.
// Server-safe (no client hooks).
//
// `pendingReview: true` marks media we could not confirm is MarblePro's own
// work (looks AI-made or internet-sourced). The owner chose to keep it on
// the page (25 Oct 2026); to hide all of it, filter on this flag in
// GalleryClient. It is never put in VideoObject schema.

export type CategoryId = 'floors' | 'countertops';

export interface GalleryPhoto { src: string; alt: string; caption: string; w: number; h: number; }
/** Set when the two photos were shot from different angles, so a drag slider would not line up. */
export interface SideBySide { beforeAlt: string; afterAlt: string; w: number; h: number; }
export interface BeforeAfterPair { before: string; after: string; caption: string; note: string; pendingReview?: boolean; sideBySide?: SideBySide; }
export interface GalleryVideo {
  mp4: string; poster: string; caption: string; duration: string;
  orientation: 'portrait' | 'landscape'; pendingReview?: boolean; uploadDate?: string;
}
export interface VideoPair { before: GalleryVideo; after: GalleryVideo; caption: string; }

/** The service page a row links to; `label` is read inside a sentence ("We offer {label} in …"). */
export interface ServiceLink { slug: string; label: string; }
/**
 * One finished-work clip shown as a row with text beside it.
 * `areas` are places we serve, not where this job was: the boss cannot say
 * which job was where, so copy must never tie a clip to a place.
 */
export interface VideoRow { video: GalleryVideo; title: string; body: string; service: ServiceLink; areas: string[]; }
/** Photos of one kind of work, shown together with text beside them. */
export interface PhotoGroup { title: string; body: string; service: ServiceLink; areas: string[]; photos: GalleryPhoto[]; }

export interface GalleryCategory {
  id: CategoryId;
  title: string;
  intro: string;
  cover: string;
  beforeAfter: BeforeAfterPair[];
  videoPairs: VideoPair[];
  /** Finished work only. Before and in-progress clips live in the pairs above or on service pages. */
  videos: VideoRow[];
  photoGroups: PhotoGroup[];
}

const v = (name: string, caption: string, duration: string, orientation: GalleryVideo['orientation'], pendingReview?: boolean): GalleryVideo => ({
  mp4: `/videos/${name}.mp4`,
  poster: `/videos/${name}-poster.jpg`,
  caption,
  duration,
  orientation,
  ...(pendingReview ? { pendingReview } : {}),
});

const ba = (name: string, caption: string, note: string, pendingReview?: boolean, ext = 'webp'): BeforeAfterPair => ({
  before: `/images/gallery/${name}-before.${ext}`,
  after: `/images/gallery/${name}-after.${ext}`,
  caption,
  note,
  ...(pendingReview ? { pendingReview } : {}),
});

/** What each floor photo shows. Places stay off captions unless the boss has confirmed the job's location. */
const FLOOR_CAPTIONS: Record<number, string> = {1: 'Beige marble floor · bright room', 2: 'Beige marble floor · reception room', 3: 'Cream marble hall with brown inlay border', 4: 'Grey striped marble floor', 5: 'White marble with dark veins · glass-walled room', 6: 'Cream marble with inlay border · window bay', 7: 'Beige marble hall with black border', 8: 'Cream marble with brown border', 9: 'Cream marble hall · full view', 10: 'Cream marble with curved inlay border', 11: 'White marble with dark veins · full room', 12: 'Cream marble with patterned inlay panels', 13: 'White and grey veined marble floor'};

const floorPhoto = (n: number, w: number, h: number): GalleryPhoto => ({
  src: `/images/projects/polished-marble-floor-dubai-${n}.webp`,
  alt: `${FLOOR_CAPTIONS[n]}, polished to a high gloss by MarblePro`,
  caption: FLOOR_CAPTIONS[n],
  w,
  h,
});

/** A job photo pair shot from different angles, cropped to 720×900. */
const sidePair = (name: string, caption: string, note: string, beforeAlt: string, afterAlt: string): BeforeAfterPair => ({
  ...ba(name, caption, note),
  sideBySide: { beforeAlt, afterAlt, w: 720, h: 900 },
});

/** A clip from the boss's 2 Nov 2026 batch. */
const nv = (name: string, caption: string, duration: string, orientation: GalleryVideo['orientation']): GalleryVideo => ({
  ...v(name, caption, duration, orientation),
  uploadDate: '2026-11-02',
});

const photo = (name: string, alt: string, caption: string, w: number, h: number): GalleryPhoto => ({
  src: `/images/projects/${name}.webp`,
  alt,
  caption,
  w,
  h,
});

const COFFEE_TABLE_PAIR = sidePair('coffee-table-polishing-dubai', 'Dark stone coffee table · Dubai Creek Harbour', 'Water rings → high gloss',
  'Dark stone coffee table in Dubai Creek Harbour with white water rings and dull patches, before polishing',
  'The same coffee table in Dubai Creek Harbour with a high-gloss finish after MarblePro polishing, plastic sheets covering the rug');
const GREY_VANITY_PAIR = sidePair('grey-marble-vanity-polishing-dubai', 'Grey marble vanity', 'Water marks → clean gloss',
  'Grey marble vanity with white water marks beside the basin, before polishing',
  'Grey marble vanity with clean, glossy stone around the basin after MarblePro polishing');
const TRAVERTINE_BASIN_PAIR = sidePair('travertine-basin-polishing-dubai', 'Travertine basin', 'Dark marks → clean stone',
  'Travertine bathroom basin with dark marks down the centre, before cleaning',
  'The travertine basin clean and even after the dark marks were removed by MarblePro');

const COFFEE_TABLE_VIDEO = nv('coffee-table-polishing-dubai-before', 'Dark stone coffee table in Dubai Creek Harbour · before', '0:12', 'portrait');
const GREY_VANITY_VIDEO = nv('grey-marble-vanity-polishing-dubai-after', 'Grey marble vanity · after', '0:14', 'portrait');
const TRAVERTINE_BASIN_VIDEO = nv('travertine-basin-polishing-dubai-after', 'Travertine basin · after', '0:06', 'landscape');
const WHITE_TABLE_VIDEO = nv('white-marble-table-polishing-dubai', 'White marble table · polished', '0:06', 'landscape');
const ROUND_TABLE_VIDEO = nv('round-marble-table-polishing-dubai', 'Round marble table · close-up', '0:04', 'landscape');
const TRAVERTINE_FLOOR_VIDEO = nv('travertine-floor-polishing-dubai-before', 'Travertine floor · before', '0:12', 'portrait');
const TRAVERTINE_STEP_VIDEO = nv('travertine-step-chip-repair-dubai-before', 'Chipped travertine step · before', '0:17', 'portrait');
const STRIPED_FLOOR_VIDEO = nv('striped-marble-floor-polishing-dubai', 'Striped marble floor · high gloss', '0:05', 'landscape');
const PATTERNED_FLOOR_VIDEO = nv('patterned-marble-floor-polishing-dubai', 'Patterned marble floor · high gloss', '0:12', 'landscape');
const BEIGE_FLOOR_VIDEO = nv('beige-marble-corridor-floor-polishing-dubai', 'Beige marble corridor floor', '0:08', 'landscape');

const WHITE_TABLE_1 = photo('white-marble-dining-table-polished-dubai-1', 'Polished white marble dining table with grey veins, set with upholstered chairs', 'White marble dining table', 720, 900);
const WHITE_TABLE_2 = photo('white-marble-dining-table-polished-dubai-2', 'Polished white marble table with grey veins on black legs', 'White marble table · black legs', 598, 747);
const WHITE_TABLE_3 = photo('white-marble-dining-table-polished-dubai-3', 'Close view of a polished white marble table top with long grey veins', 'White marble table · veining', 598, 747);
const TRAVERTINE_HALLWAY = photo('travertine-hallway-floor-polishing-dubai', 'Travertine hallway floor at Marina Plaza, Dubai Marina, with a glossy polished section beyond a dull section', 'Travertine hallway · Marina Plaza, Dubai Marina', 720, 1280);
const TRAVERTINE_ENTRANCE = photo('travertine-entrance-floor-polishing-dubai', 'Polished travertine entrance floor at Marina Plaza, Dubai Marina, reflecting the glass doors, next to dull stone', 'Travertine entrance · Marina Plaza, Dubai Marina', 720, 1280);
const SHOWER_JOINT_1 = photo('travertine-shower-joint-repair-dubai-1', 'Dark joint in the corner of a travertine shower, before repair', 'Dark joint in a travertine shower corner', 720, 900);
const SHOWER_JOINT_2 = photo('travertine-shower-joint-repair-dubai-2', 'Open joint between two travertine slabs in a shower, before repair', 'Open joint in travertine · before repair', 720, 900);

const FLOOR_POLISHING: ServiceLink = { slug: 'floor-polishing-dubai', label: 'stone floor polishing' };
const MARBLE_POLISHING: ServiceLink = { slug: 'marble-polishing-dubai', label: 'marble polishing' };
const MOSAIC: ServiceLink = { slug: 'mosaic-floor-polishing-dubai', label: 'inlay and pattern floor polishing' };
const COUNTERTOP: ServiceLink = { slug: 'marble-countertop-polishing', label: 'countertop and vanity polishing' };
const TABLE: ServiceLink = { slug: 'marble-table-polishing-dubai', label: 'marble table polishing' };

const ROWS_FLOORS: VideoRow[] = [
  {
    video: STRIPED_FLOOR_VIDEO,
    title: 'Striped marble floor polishing',
    body: 'A striped marble floor after polishing. The ceiling lights show as sharp points across the stone and the window reflects clearly, which is what an even polish looks like. Every tile has the same gloss, with no dull patches between them.',
    service: FLOOR_POLISHING,
    areas: ['Dubai Marina', 'JLT', 'Al Barsha', 'Sharjah'],
  },
  {
    video: PATTERNED_FLOOR_VIDEO,
    title: 'Patterned marble floor polishing',
    body: 'This floor uses two shades of marble cut into a geometric pattern. After polishing, both shades have the same gloss, so the pattern looks crisp from one side of the room to the other.',
    service: MOSAIC,
    areas: ['Downtown Dubai', 'Business Bay', 'Al Majaz in Sharjah'],
  },
  {
    video: v('beige-marble-floor-polishing-apartment-dubai', 'Beige marble floor · apartment walkthrough', '0:26', 'landscape'),
    title: 'Beige marble apartment floor',
    body: 'A walk through an apartment after its beige marble floor was polished. The gloss carries from the living area into the corridor and through each doorway, with no dull patches between rooms.',
    service: MARBLE_POLISHING,
    areas: ['Jumeirah Village Circle', 'Al Nahda', 'Ajman'],
  },
  {
    video: BEIGE_FLOOR_VIDEO,
    title: 'Marble corridor floor polishing',
    body: 'Another view from the same apartment: the marble corridor. Corridors take the most foot traffic in a home, so they often lose their shine first. Here the lights reflect evenly along the full length.',
    service: FLOOR_POLISHING,
    areas: ['Mirdif', 'Al Qusais', 'Muwaileh in Sharjah'],
  },
  {
    video: v('marble-polishing-results-dubai', 'Marble floor results · villa', '0:16', 'landscape'),
    title: 'Villa marble floor with inlay border',
    body: 'A villa floor of cream marble with a brown inlay border, after polishing. The windows and chandelier reflect in the stone, and the border shines as evenly as the main floor.',
    service: MARBLE_POLISHING,
    areas: ['Palm Jumeirah', 'Emirates Hills', 'Arabian Ranches'],
  },
  {
    video: v('marble-floor-restoration-process', 'Grey striped marble floor · high gloss', '0:04', 'portrait'),
    title: 'Grey striped marble floor',
    body: 'A light grey marble floor with long dark stripes, after polishing. The room lights show as straight, sharp lines in the stone. On a floor this pale, any dull or scratched patch would stand out.',
    service: FLOOR_POLISHING,
    areas: ['Jumeirah', 'Al Khan in Sharjah', 'Al Nuaimiya in Ajman'],
  },
];

const ROWS_COUNTERTOPS: VideoRow[] = [
  {
    video: GREY_VANITY_VIDEO,
    title: 'Grey marble vanity polishing',
    body: 'The finished vanity, after the white water marks around the basin were removed. Light now reflects evenly across the top, right up to the basin edge. Before and after photos of this vanity are in the before-and-after section above.',
    service: COUNTERTOP,
    areas: ['Dubai Marina', 'Al Barsha', 'Al Majaz in Sharjah'],
  },
  {
    video: TRAVERTINE_BASIN_VIDEO,
    title: 'Travertine basin cleaning',
    body: 'This travertine basin had dark marks down the centre. Here it is after our work, clean and even in colour. The before photo is in the before-and-after section above.',
    service: { slug: 'travertine-polishing-dubai', label: 'travertine polishing and cleaning' },
    areas: ['Jumeirah', 'Mirdif', 'Ajman'],
  },
  {
    video: WHITE_TABLE_VIDEO,
    title: 'White marble table polishing',
    body: 'A long white marble table top after polishing. Light runs cleanly across the surface and the grey veins stand out. White marble shows every ring and scratch, so an even finish matters more on light stone.',
    service: TABLE,
    areas: ['Downtown Dubai', 'Business Bay', 'Sharjah'],
  },
  {
    video: ROUND_TABLE_VIDEO,
    title: 'Round marble table close-up',
    body: 'A close look at a round white marble table top after polishing. The line of light moves smoothly across the stone without breaking, which shows the surface is even.',
    service: TABLE,
    areas: ['Arabian Ranches', 'Jumeirah Village Circle', 'Ajman'],
  },
  {
    video: v('quartz-countertop-polishing-dubai-process', 'Fusion quartzite countertop', '0:23', 'landscape'),
    title: 'Fusion quartzite kitchen countertop',
    body: 'A kitchen and island in Fusion quartzite, a stone with bold brown, blue and cream patterns. After polishing, the top reflects the room and the colours look deep and clear.',
    service: COUNTERTOP,
    areas: ['Palm Jumeirah', 'Emirates Hills', 'Al Barsha'],
  },
  {
    video: v('volakas-marble-countertop-polishing-dubai-process', 'Volakas marble countertop', '0:19', 'portrait'),
    title: 'Volakas marble kitchen top',
    body: 'A white Volakas marble kitchen top and island after polishing. Kitchen marble loses its shine from daily use, and here the gloss is back across the whole top.',
    service: { slug: 'kitchen-top-polishing', label: 'kitchen top polishing' },
    areas: ['Dubai Marina', 'JLT', 'Al Nahda in Sharjah'],
  },
  {
    video: v('corian-countertop-polishing-dubai-process', 'Corian countertop', '0:25', 'landscape'),
    title: 'Corian countertop polishing',
    body: 'A large Corian countertop after polishing, with the cabinets still wrapped in protective sheets. Corian is a man-made surface, so it is treated differently from natural stone. The finished top has a smooth, even sheen.',
    service: { slug: 'corian-countertop-polishing', label: 'Corian countertop polishing' },
    areas: ['Mirdif', 'Al Qusais', 'Sharjah'],
  },
  {
    video: v('granite-countertop-polishing-dubai-process', 'Grey granite kitchen top', '0:13', 'landscape'),
    title: 'Grey granite kitchen top',
    body: 'A dark grey granite kitchen top after polishing. The bar stools and window reflect clearly in the surface, from the curved end to the corner by the sink.',
    service: { slug: 'granite-polishing', label: 'granite polishing' },
    areas: ['Business Bay', 'Jumeirah', 'Ajman'],
  },
];

const PHOTOS_FLOORS: PhotoGroup[] = [
  {
    title: 'Cream marble floors with inlay borders',
    body: 'Halls and rooms in cream and beige marble, with darker borders, curved inlays and a medallion. On these floors, the border and the main stone need the same gloss so the pattern looks clean.',
    service: MOSAIC,
    areas: ['Palm Jumeirah', 'Emirates Hills', 'Al Majaz in Sharjah'],
    photos: [
      { src: '/images/projects/decorative-marble-medallion-dubai-1.webp', alt: 'Decorative marble medallion inlay polished to a mirror finish by MarblePro', caption: 'Marble medallion inlay · entrance', w: 1050, h: 1400 },
      floorPhoto(10, 1050, 1400),
      { src: '/images/projects/decorative-marble-medallion-dubai-4.webp', alt: 'Polished marble hall with inlay border by MarblePro', caption: 'Marble hall with inlay border', w: 1050, h: 1400 },
      floorPhoto(3, 1050, 1400),
      floorPhoto(7, 1280, 960),
      floorPhoto(6, 1050, 1400),
      floorPhoto(8, 1050, 1400),
      floorPhoto(9, 1050, 1400),
      floorPhoto(12, 1050, 1400),
    ],
  },
  {
    title: 'Beige marble floors',
    body: 'Plain beige marble in a bright room and a reception room, after polishing. Plain floors show every dull patch, so the gloss has to be even from wall to wall.',
    service: MARBLE_POLISHING,
    areas: ['Al Barsha', 'Mirdif', 'Ajman'],
    photos: [floorPhoto(1, 1050, 1400), floorPhoto(2, 1050, 1400)],
  },
  {
    title: 'Veined and dark marble floors',
    body: 'White, grey and dark Emperador marble floors after polishing. A deep gloss brings out the veins, which is why these stones look best with a high polish.',
    service: MARBLE_POLISHING,
    areas: ['Downtown Dubai', 'Dubai Marina', 'Sharjah'],
    photos: [
      floorPhoto(13, 1400, 788),
      floorPhoto(4, 1050, 1400),
      floorPhoto(5, 960, 1280),
      floorPhoto(11, 960, 1280),
      { src: '/images/projects/dark-emperador-floor-polishing-dubai.jpg', alt: 'Dark Emperador marble floor polished to a deep gloss by MarblePro', caption: 'Dark Emperador floor · lounge', w: 414, h: 311 },
    ],
  },
  {
    title: 'Travertine floors',
    body: 'A travertine floor at Marina Plaza in Dubai Marina, with polished stone next to dull stone, so you can see the difference in one view. The polished part reflects the doors and lights; the rest had not been polished yet.',
    service: { slug: 'travertine-polishing-dubai', label: 'travertine floor polishing' },
    areas: ['Dubai Marina', 'JLT', 'Jumeirah', 'Ajman'],
    photos: [TRAVERTINE_HALLWAY, TRAVERTINE_ENTRANCE],
  },
];

const PHOTOS_COUNTERTOPS: PhotoGroup[] = [
  {
    title: 'White marble dining tables',
    body: 'White marble tables with grey veins, after polishing. Light runs across each top without dull rings or patches.',
    service: TABLE,
    areas: ['Dubai Marina', 'Business Bay', 'Sharjah'],
    photos: [WHITE_TABLE_1, WHITE_TABLE_2, WHITE_TABLE_3],
  },
  {
    title: 'Fusion quartz countertops',
    body: 'A Fusion quartz kitchen island and vanity after polishing. The bold veins look clear again once the surface is even.',
    service: COUNTERTOP,
    areas: ['Palm Jumeirah', 'Al Barsha', 'Ajman'],
    photos: [
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-1.jpg', alt: 'Fusion quartz kitchen island countertop polished by MarblePro', caption: 'Fusion quartz · kitchen island', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-2.jpg', alt: 'Fusion quartz countertop veining restored by MarblePro', caption: 'Fusion quartz · veining', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-3.jpg', alt: 'Fusion quartz bathroom vanity countertop polished by MarblePro', caption: 'Fusion quartz · vanity', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-4.jpg', alt: 'Fusion quartz kitchen countertop detail polished by MarblePro', caption: 'Fusion quartz · detail', w: 414, h: 311 },
    ],
  },
  {
    title: 'Vanities and kitchen tops',
    body: 'A honey onyx vanity, a grey granite kitchen top and a dark marble bathroom ledge. Each stone needs its own method, and each top here has an even finish.',
    service: COUNTERTOP,
    areas: ['Emirates Hills', 'Mirdif', 'Al Nahda in Sharjah'],
    photos: [
      { src: '/images/projects/honey-onyx-bathroom-vanity-polishing-dubai.jpg', alt: 'Honey onyx bathroom vanity polished to a high-gloss finish by MarblePro', caption: 'Honey onyx bathroom vanity', w: 2040, h: 1530 },
      { src: '/images/projects/granite-kitchen-countertop-polishing-dubai.jpg', alt: 'Dark grey granite kitchen countertop polished by MarblePro', caption: 'Grey granite kitchen top', w: 960, h: 1280 },
      photo('dark-marble-bathroom-ledge-dubai', 'Dark marble bathroom ledge with white veins', 'Dark marble bathroom ledge', 1280, 450),
    ],
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'floors',
    title: 'Floors',
    intro: 'Marble, granite, travertine and terrazzo floors — grinding, honing, polishing and crystallization, including inlays and medallions.',
    cover: '/images/projects/polished-marble-floor-dubai-10.webp',
    beforeAfter: [
      ba('emperador', 'Emperador marble floor', 'Dull, etched → deep gloss'),
      ba('onyx', 'Onyx marble floor', 'Scratched → polished'),
      ba('ba2', 'Bathroom stone floor', 'Dull → high gloss'),
      ba('ba1', 'Marble floor restoration', 'Before → after', true),
      ba('ba4', 'Terrazzo floor', 'Before → after', true),
      ba('ba5', 'Travertine floor', 'Before → after', true),
      ba('calacatta', 'Calacatta marble floor', 'Before → after', true),
      ba('granite', 'Dark marble lobby floor', 'Before → after', true),
      ba('marble-villa', 'Marble villa floor', 'Before → after', true),
      ba('terrazzo', 'Terrazzo lobby floor', 'Before → after', true),
      ba('travertine', 'Travertine living room', 'Before → after', true),
      ba('whitemarble', 'White marble floor', 'Before → after', true),
    ],
    videoPairs: [
      {
        caption: 'Granite staircase',
        before: v('granite-staircase-polishing-before', 'Granite staircase · before', '0:18', 'landscape'),
        after: v('granite-staircase-polishing-after', 'Granite staircase · after', '0:17', 'landscape'),
      },
      {
        caption: 'Crema Marfil floor',
        before: v('crema-marfil-floor-polishing-before', 'Crema Marfil floor · before', '0:37', 'landscape'),
        after: v('crema-marfil-floor-polishing-after', 'Crema Marfil floor · after', '0:13', 'landscape'),
      },
    ],
    videos: ROWS_FLOORS,
    photoGroups: PHOTOS_FLOORS,
  },
  {
    id: 'countertops',
    title: 'Countertops & tables',
    intro: 'Kitchen islands, vanities, bathroom tops and tables — marble, granite, onyx, quartz, quartzite and Corian.',
    cover: '/images/projects/honey-onyx-bathroom-vanity-polishing-dubai.jpg',
    beforeAfter: [
      GREY_VANITY_PAIR,
      COFFEE_TABLE_PAIR,
      TRAVERTINE_BASIN_PAIR,
      ba('corian', 'Corian vanity top', 'Scratches removed'),
      ba('quartz', 'Quartz countertop', 'Dull → polished'),
      ba('ba3', 'Marble kitchen island', 'Before → after', true),
      ba('ba6', 'Marble double-sink vanity', 'Before → after', true),
    ],
    videoPairs: [
      {
        caption: 'Granite countertop',
        before: v('granite-polishing-before', 'Granite countertop · before', '0:11', 'landscape'),
        after: v('granite-polishing-after', 'Granite countertop · after', '0:17', 'landscape'),
      },
      {
        caption: 'Marble bathroom countertop',
        before: v('marble-bathroom-countertop-polishing-before', 'Marble bathroom countertop · before', '0:19', 'landscape'),
        after: v('marble-bathroom-countertop-polishing-after', 'Marble bathroom countertop · after', '0:16', 'landscape'),
      },
      {
        caption: 'Brown marble countertop',
        before: v('brown-marble-countertop-polishing-before', 'Brown marble countertop · before', '0:11', 'landscape'),
        after: v('brown-marble-countertop-polishing-after', 'Brown marble countertop · after', '0:13', 'landscape'),
      },
    ],
    videos: ROWS_COUNTERTOPS,
    photoGroups: PHOTOS_COUNTERTOPS,
  },
];

export type WorkTag = 'Before' | 'After';
export type WorkShot = GalleryPhoto & { tag?: WorkTag };
export interface WorkVideo { video: GalleryVideo; caption: string; tag?: WorkTag; }
/** `wide` shows every item at 16:9 instead of 4:5, for landscape clips. */
export interface ServiceWorkItem { h2: string; body: string; shots?: WorkShot[]; videos?: WorkVideo[]; wide?: boolean; }

const pairShots = (p: BeforeAfterPair, beforeCaption: string, afterCaption: string): WorkShot[] => {
  const { beforeAlt, afterAlt, w, h } = p.sideBySide as SideBySide;
  return [
    { src: p.before, alt: beforeAlt, caption: beforeCaption, w, h, tag: 'Before' },
    { src: p.after, alt: afterAlt, caption: afterCaption, w, h, tag: 'After' },
  ];
};

/** Real jobs shown on a service page, keyed by service slug. */
export const SERVICE_WORK: Record<string, ServiceWorkItem[]> = {
  'marble-table-polishing-dubai': [
    {
      h2: 'Coffee table polishing in Dubai Creek Harbour',
      body: 'This dark stone coffee table, in a home in Dubai Creek Harbour, had white water rings and dull patches across its top. The video shows the marks up close. After polishing, the top has a high gloss that reflects the lights in the room.',
      shots: pairShots(COFFEE_TABLE_PAIR, 'Water rings and dull patches', 'High-gloss finish'),
      videos: [{ video: COFFEE_TABLE_VIDEO, caption: 'Video: the marks up close', tag: 'Before' }],
    },
    {
      h2: 'White marble tables after polishing',
      body: 'White marble shows every mark, so an even finish matters. On these tops, light runs cleanly across the stone and the grey veins stand out.',
      shots: [WHITE_TABLE_1, WHITE_TABLE_2],
      videos: [{ video: WHITE_TABLE_VIDEO, caption: 'Video: light across the top' }],
    },
  ],
  'marble-countertop-polishing': [
    {
      h2: 'Bathroom vanity polishing: before and after',
      body: 'White water marks had spread across this grey marble vanity. After polishing, the marks are gone and the stone has an even gloss. The video shows the finished top.',
      shots: pairShots(GREY_VANITY_PAIR, 'White water marks by the basin', 'Clean, even gloss'),
      videos: [{ video: GREY_VANITY_VIDEO, caption: 'Video: the finished vanity', tag: 'After' }],
    },
  ],
  'travertine-polishing-dubai': [
    {
      h2: 'Travertine basin: before and after',
      body: 'Dark marks had built up along the centre of this travertine basin. After our work, the stone is clean and even. The video shows the finished basin.',
      shots: pairShots(TRAVERTINE_BASIN_PAIR, 'Dark marks down the centre', 'Clean, even stone'),
      videos: [{ video: TRAVERTINE_BASIN_VIDEO, caption: 'Video: the finished basin', tag: 'After' }],
    },
    {
      h2: 'Travertine floors: polished beside dull stone',
      body: 'These photos are from a travertine floor at Marina Plaza in Dubai Marina. They show glossy polished travertine next to dull stone, so you can see the difference on one floor. The video shows another travertine floor before polishing, with worn and dull areas.',
      shots: [TRAVERTINE_HALLWAY, TRAVERTINE_ENTRANCE],
      videos: [{ video: TRAVERTINE_FLOOR_VIDEO, caption: 'Video: a worn floor', tag: 'Before' }],
    },
  ],
  'marble-stairs-polishing-dubai': [
    {
      h2: 'Chipped stone steps before repair',
      body: 'Steps take more wear than flat floors, and the front edge often chips first. This video shows chips along the edge of a travertine step and holes in the stone beside it. We check damage like this at the site visit and tell you what repair can do.',
      videos: [{ video: TRAVERTINE_STEP_VIDEO, caption: 'Video: chips on a step edge', tag: 'Before' }],
    },
  ],
  'grout-joint-repair-dubai': [
    {
      h2: 'Open joints in a travertine shower',
      body: 'These photos show joints that need repair in a travertine shower. One has turned dark, and the other has opened into a gap where dirt and water can collect.',
      shots: [{ ...SHOWER_JOINT_1, tag: 'Before' }, { ...SHOWER_JOINT_2, tag: 'Before' }],
    },
  ],
  'floor-polishing-dubai': [
    {
      h2: 'Polished stone floors: our work',
      body: 'These short videos show finished stone floors. Look at how the lights reflect in each one: a sharp reflection shows an even polish.',
      wide: true,
      videos: [
        { video: STRIPED_FLOOR_VIDEO, caption: 'Striped marble floor' },
        { video: PATTERNED_FLOOR_VIDEO, caption: 'Patterned marble floor' },
        { video: BEIGE_FLOOR_VIDEO, caption: 'Beige marble corridor' },
      ],
    },
  ],
};

/** Intro film shown large at the top of the gallery (not in the section grids). */
export const SHOWCASE_VIDEO: GalleryVideo = v('marblepro-showcase-uae', 'MarblePro — marble polishing & floor restoration showcase', '1:29', 'landscape', true);

/** Every photo in a category, in page order (the lightbox steps through this). */
export function categoryPhotos(c: GalleryCategory): GalleryPhoto[] {
  return c.photoGroups.flatMap((g) => g.photos);
}

/** "A, B and C" */
export function joinAreas(areas: string[]): string {
  return areas.length < 2 ? areas.join('') : `${areas.slice(0, -1).join(', ')} and ${areas[areas.length - 1]}`;
}

export function categoryCounts(c: GalleryCategory) {
  return {
    photos: categoryPhotos(c).length,
    beforeAfter: c.beforeAfter.length + c.videoPairs.length,
    videos: c.videos.length,
  };
}
