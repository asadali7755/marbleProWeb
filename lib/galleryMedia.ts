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

export interface GalleryCategory {
  id: CategoryId;
  title: string;
  intro: string;
  cover: string;
  beforeAfter: BeforeAfterPair[];
  videoPairs: VideoPair[];
  videos: GalleryVideo[];
  photos: GalleryPhoto[];
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

/** What each floor photo shows. Places stay off captions unless the job's location is known. */
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

const COFFEE_TABLE_PAIR = sidePair('coffee-table-polishing-dubai', 'Dark stone coffee table', 'Water rings → high gloss',
  'Dark stone coffee table with white water rings and dull patches, before polishing',
  'Dark stone coffee table with a high-gloss finish after MarblePro polishing, plastic sheets covering the rug');
const GREY_VANITY_PAIR = sidePair('grey-marble-vanity-polishing-dubai', 'Grey marble vanity', 'Water marks → clean gloss',
  'Grey marble vanity with white water marks beside the basin, before polishing',
  'Grey marble vanity with clean, glossy stone around the basin after MarblePro polishing');
const TRAVERTINE_BASIN_PAIR = sidePair('travertine-basin-polishing-dubai', 'Travertine basin', 'Dark marks → clean stone',
  'Travertine bathroom basin with dark marks down the centre, before cleaning',
  'The travertine basin clean and even after the dark marks were removed by MarblePro');

const COFFEE_TABLE_VIDEO = nv('coffee-table-polishing-dubai-before', 'Dark stone coffee table · before', '0:12', 'portrait');
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
const TRAVERTINE_HALLWAY = photo('travertine-hallway-floor-polishing-dubai', 'Travertine hallway floor with a glossy polished section beyond a dull section', 'Travertine hallway · polished and dull sections', 720, 1280);
const TRAVERTINE_ENTRANCE = photo('travertine-entrance-floor-polishing-dubai', 'Polished travertine entrance floor reflecting the glass doors, next to dull stone', 'Travertine entrance · polished section', 720, 1280);
const SHOWER_JOINT_1 = photo('travertine-shower-joint-repair-dubai-1', 'Dark joint in the corner of a travertine shower, before repair', 'Dark joint in a travertine shower corner', 720, 900);
const SHOWER_JOINT_2 = photo('travertine-shower-joint-repair-dubai-2', 'Open joint between two travertine slabs in a shower, before repair', 'Open joint in travertine · before repair', 720, 900);

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
    videos: [
      STRIPED_FLOOR_VIDEO,
      PATTERNED_FLOOR_VIDEO,
      BEIGE_FLOOR_VIDEO,
      TRAVERTINE_FLOOR_VIDEO,
      TRAVERTINE_STEP_VIDEO,
      v('beige-marble-floor-polishing-apartment-dubai', 'Beige marble floor · apartment walkthrough', '0:26', 'landscape'),
      v('onyx-marble-polishing-dubai-process', 'Onyx polishing', '1:30', 'portrait'),
      v('marble-polishing-results-dubai', 'Marble floor results · villa', '0:16', 'landscape'),
      v('marble-floor-restoration-process', 'Marble floor restoration', '0:04', 'portrait'),
      v('marble-polishing-process-closeup-dubai', 'Polishing close-up', '0:10', 'landscape'),
      v('crema-marfil-polishing-dubai-process', 'Crema Marfil floor with inlay', '0:24', 'landscape'),
      v('calacatta-marble-polishing-dubai-process', 'Calacatta floor polishing', '0:05', 'landscape'),
      v('travertine-polishing-dubai-process', 'Travertine floor', '1:06', 'landscape', true),
      v('marble-polishing-process-dubai', 'Marble polishing process', '0:53', 'landscape', true),
    ],
    photos: [
      TRAVERTINE_HALLWAY,
      TRAVERTINE_ENTRANCE,
      SHOWER_JOINT_2,
      { src: '/images/projects/decorative-marble-medallion-dubai-1.webp', alt: 'Decorative marble medallion inlay polished to a mirror finish by MarblePro', caption: 'Marble medallion inlay · entrance', w: 1050, h: 1400 },
      floorPhoto(10, 1050, 1400),
      { src: '/images/projects/dark-emperador-floor-polishing-dubai.jpg', alt: 'Dark Emperador marble floor polished to a deep gloss by MarblePro', caption: 'Dark Emperador floor · lounge', w: 414, h: 311 },
      floorPhoto(1, 1050, 1400),
      floorPhoto(13, 1400, 788),
      { src: '/images/projects/decorative-marble-medallion-dubai-4.webp', alt: 'Polished marble hall with inlay border by MarblePro', caption: 'Marble hall with inlay border', w: 1050, h: 1400 },
      floorPhoto(2, 1050, 1400),
      floorPhoto(7, 1280, 960),
      floorPhoto(3, 1050, 1400),
      { src: '/images/projects/crema-marfil-floor-polishing-apartment-dubai.jpg', alt: 'Crema Marfil marble floor being polished with a grinding machine by MarblePro', caption: 'Crema Marfil floor · polishing in progress', w: 1530, h: 2040 },
      floorPhoto(4, 1050, 1400),
      floorPhoto(5, 960, 1280),
      floorPhoto(6, 1050, 1400),
      floorPhoto(8, 1050, 1400),
      floorPhoto(9, 1050, 1400),
      floorPhoto(11, 960, 1280),
      floorPhoto(12, 1050, 1400),
      SHOWER_JOINT_1,
    ],
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
    videos: [
      COFFEE_TABLE_VIDEO,
      GREY_VANITY_VIDEO,
      TRAVERTINE_BASIN_VIDEO,
      WHITE_TABLE_VIDEO,
      ROUND_TABLE_VIDEO,
      v('kitchen-top-polishing-dubai-process', 'Kitchen top polishing & sealing', '1:15', 'portrait'),
      v('quartz-countertop-polishing-dubai-process', 'Fusion quartzite countertop', '0:23', 'landscape'),
      v('volakas-marble-countertop-polishing-dubai-process', 'Volakas marble countertop', '0:19', 'portrait'),
      v('corian-countertop-polishing-dubai-process', 'Corian countertop', '0:25', 'landscape'),
      v('granite-countertop-polishing-dubai-process', 'Grey granite kitchen top', '0:13', 'landscape'),
    ],
    photos: [
      WHITE_TABLE_1,
      WHITE_TABLE_2,
      WHITE_TABLE_3,
      photo('grey-marble-double-vanity-water-marks-dubai', 'Grey marble double vanity with white water marks around the basins, before polishing', 'Grey marble double vanity · before', 1280, 720),
      photo('grey-marble-vanity-water-marks-dubai', 'Grey marble vanity with white water marks around the basin, before polishing', 'Grey marble vanity · water marks', 1180, 530),
      photo('travertine-basin-dark-marks-dubai', 'Close view of dark marks inside a travertine basin, before cleaning', 'Travertine basin · dark marks', 720, 960),
      photo('dark-marble-bathroom-ledge-dubai', 'Dark marble bathroom ledge with white veins', 'Dark marble bathroom ledge', 1280, 450),
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-1.jpg', alt: 'Fusion quartz kitchen island countertop polished by MarblePro', caption: 'Fusion quartz · kitchen island', w: 414, h: 311 },
      { src: '/images/projects/honey-onyx-bathroom-vanity-polishing-dubai.jpg', alt: 'Honey onyx bathroom vanity polished to a high-gloss finish by MarblePro', caption: 'Honey onyx bathroom vanity', w: 2040, h: 1530 },
      { src: '/images/projects/granite-kitchen-countertop-polishing-dubai.jpg', alt: 'Dark grey granite kitchen countertop polished by MarblePro', caption: 'Grey granite kitchen top', w: 960, h: 1280 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-2.jpg', alt: 'Fusion quartz countertop veining restored by MarblePro', caption: 'Fusion quartz · veining', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-3.jpg', alt: 'Fusion quartz bathroom vanity countertop polished by MarblePro', caption: 'Fusion quartz · vanity', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-4.jpg', alt: 'Fusion quartz kitchen countertop detail polished by MarblePro', caption: 'Fusion quartz · detail', w: 414, h: 311 },
    ],
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
      h2: 'Coffee table polishing: before and after',
      body: 'This dark stone coffee table had white water rings and dull patches across its top. The video shows the marks up close. After polishing, the top has a high gloss that reflects the lights in the room.',
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
      body: 'These photos show glossy polished travertine next to dull stone, so you can see the difference on one floor. The video shows another travertine floor before polishing, with worn and dull areas.',
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

export function categoryCounts(c: GalleryCategory) {
  return {
    photos: c.photos.length,
    beforeAfter: c.beforeAfter.length + c.videoPairs.length,
    videos: c.videos.length,
  };
}
