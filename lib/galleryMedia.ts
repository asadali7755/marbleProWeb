// Every photo and video on /gallery, grouped into the two gallery sections.
// Server-safe (no client hooks).
//
// `pendingReview: true` marks media we could not confirm is MarblePro's own
// work (looks AI-made or internet-sourced). The owner chose to keep it on
// the page (25 Oct 2026); to hide all of it, filter on this flag in
// GalleryClient. It is never put in VideoObject schema.

export type CategoryId = 'floors' | 'countertops';

export interface GalleryPhoto { src: string; alt: string; caption: string; w: number; h: number; }
export interface BeforeAfterPair { before: string; after: string; caption: string; note: string; pendingReview?: boolean; }
export interface GalleryVideo {
  mp4: string; poster: string; caption: string; duration: string;
  orientation: 'portrait' | 'landscape'; pendingReview?: boolean;
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

const FLOOR_ALT = 'Polished marble floor restored to a high-gloss finish by MarblePro';

const floorPhoto = (n: number, w: number, h: number): GalleryPhoto => ({
  src: `/images/projects/polished-marble-floor-dubai-${n}.webp`,
  alt: FLOOR_ALT,
  caption: 'Polished marble floor · villa',
  w,
  h,
});

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'floors',
    title: 'Floors',
    intro: 'Marble, granite and terrazzo floors — grinding, honing, polishing and crystallisation, including inlays and medallions.',
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
    ],
  },
  {
    id: 'countertops',
    title: 'Countertops',
    intro: 'Kitchen islands, vanities and bathroom tops — marble, granite, onyx, quartz, quartzite and Corian.',
    cover: '/images/projects/honey-onyx-bathroom-vanity-polishing-dubai.jpg',
    beforeAfter: [
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
      v('kitchen-top-polishing-dubai-process', 'Kitchen top polishing & sealing', '1:15', 'portrait'),
      v('quartz-countertop-polishing-dubai-process', 'Fusion quartzite countertop', '0:23', 'landscape'),
      v('volakas-marble-countertop-polishing-dubai-process', 'Volakas marble countertop', '0:19', 'portrait'),
      v('corian-countertop-polishing-dubai-process', 'Corian countertop', '0:25', 'landscape'),
      v('granite-countertop-polishing-dubai-process', 'Grey granite kitchen top', '0:13', 'landscape'),
    ],
    photos: [
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-1.jpg', alt: 'Fusion quartz kitchen island countertop polished by MarblePro', caption: 'Fusion quartz · kitchen island', w: 414, h: 311 },
      { src: '/images/projects/honey-onyx-bathroom-vanity-polishing-dubai.jpg', alt: 'Honey onyx bathroom vanity polished to a high-gloss finish by MarblePro', caption: 'Honey onyx bathroom vanity', w: 2040, h: 1530 },
      { src: '/images/projects/granite-kitchen-countertop-polishing-dubai.jpg', alt: 'Dark grey granite kitchen countertop polished by MarblePro', caption: 'Grey granite kitchen top', w: 960, h: 1280 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-2.jpg', alt: 'Fusion quartz countertop veining restored by MarblePro', caption: 'Fusion quartz · veining', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-3.jpg', alt: 'Fusion quartz bathroom vanity countertop polished by MarblePro', caption: 'Fusion quartz · vanity', w: 414, h: 311 },
      { src: '/images/projects/fusion-quartz-countertop-polishing-dubai-4.jpg', alt: 'Fusion quartz kitchen countertop detail polished by MarblePro', caption: 'Fusion quartz · detail', w: 414, h: 311 },
    ],
  },
];

/** Intro film shown large at the top of the gallery (not in the section grids). */
export const SHOWCASE_VIDEO: GalleryVideo = v('marblepro-showcase-uae', 'MarblePro — marble polishing & floor restoration showcase', '1:29', 'landscape', true);

export function categoryCounts(c: GalleryCategory) {
  return {
    photos: c.photos.length,
    beforeAfter: c.beforeAfter.length + c.videoPairs.length,
    videos: c.videos.length,
  };
}
