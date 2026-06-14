// Real MarblePro job photos (client-supplied). Used in the "Real Projects"
// gallery showcase. Server-safe.

export interface Project { src: string; alt: string; medallion: boolean; }

const FLOOR_ALT = 'Polished marble floor restored to a high-gloss mirror finish by MarblePro — real villa project in Dubai, UAE';
const MEDALLION_ALT = 'Decorative marble medallion inlay polished to a mirror finish by MarblePro — luxury villa entrance in Dubai, UAE';

export const PROJECTS: Project[] = [
  // Featured: decorative medallion inlay work (signature jobs)
  { src: '/images/projects/decorative-marble-medallion-dubai-1.webp', alt: MEDALLION_ALT, medallion: true },
  { src: '/images/projects/decorative-marble-medallion-dubai-2.webp', alt: MEDALLION_ALT, medallion: true },
  { src: '/images/projects/decorative-marble-medallion-dubai-3.webp', alt: MEDALLION_ALT, medallion: true },
  { src: '/images/projects/decorative-marble-medallion-dubai-4.webp', alt: MEDALLION_ALT, medallion: true },
  // Polished marble floors & halls
  { src: '/images/projects/polished-marble-floor-dubai-1.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-2.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-3.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-4.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-5.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-6.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-7.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-8.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-9.webp',  alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-10.webp', alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-11.webp', alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-12.webp', alt: FLOOR_ALT, medallion: false },
  { src: '/images/projects/polished-marble-floor-dubai-13.webp', alt: FLOOR_ALT, medallion: false },
];

export const RESULTS_VIDEO = {
  mp4: '/videos/marble-polishing-results-dubai.mp4',
  poster: '/videos/marble-polishing-results-dubai-poster.jpg',
  name: 'Real Marble Polishing Results in a Dubai Villa — MarblePro UAE',
  description: 'A walkthrough of a real MarblePro project: marble floors restored to a deep mirror gloss in a Dubai villa, UAE.',
};
