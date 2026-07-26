'use client';
import { useRef, useEffect } from 'react';

interface BAVideoEntry {
  slug: string;
  service: string;
  h2: string;
  lead: string;
  bullets: string[];
  cta: string;
  before: { mp4: string; poster: string; label: string };
  after:  { mp4: string; poster: string; label: string };
}

const ENTRIES: BAVideoEntry[] = [
  {
    slug: 'granite-polishing-before-after',
    service: 'Granite Polishing',
    h2: 'Granite Polishing Before & After — Real Results in Dubai',
    lead: 'See the difference professional diamond granite polishing makes on dull, scratched and stained surfaces. These are real MarblePro jobs filmed on site — same stone, same lighting, no filters.',
    bullets: [
      'Scratches, etch marks and dull patches removed completely',
      'Deep mirror gloss restored using industrial diamond discs',
      'Colour-enhancing sealer locks in the finish for years',
      'Completed in 1-2 days with zero dust',
    ],
    cta: 'Get a free granite polishing quote',
    before: {
      mp4: '/videos/granite-polishing-before.mp4',
      poster: '/videos/granite-polishing-before-poster.jpg',
      label: 'Before — dull, scratched granite surface',
    },
    after: {
      mp4: '/videos/granite-polishing-after.mp4',
      poster: '/videos/granite-polishing-after-poster.jpg',
      label: 'After — mirror-polished granite by MarblePro',
    },
  },
  {
    slug: 'granite-staircase-polishing-before-after',
    service: 'Granite Staircase Polishing',
    h2: 'Granite Staircase Polishing Before & After — Dubai Villa',
    lead: 'Outdoor and indoor granite staircases take a beating from foot traffic, weather and sand. Watch a heavily weathered dark granite staircase restored to a deep, reflective mirror finish by MarblePro.',
    bullets: [
      'Heavy weathering, stains and calcium deposits stripped away',
      'Each step and riser individually diamond-polished',
      'Anti-slip nosing profile preserved during restoration',
      'Sealed against moisture and UV for outdoor durability',
    ],
    cta: 'Get a free staircase polishing quote',
    before: {
      mp4: '/videos/granite-staircase-polishing-before.mp4',
      poster: '/videos/granite-staircase-polishing-before-poster.jpg',
      label: 'Before — weathered, stained granite staircase',
    },
    after: {
      mp4: '/videos/granite-staircase-polishing-after.mp4',
      poster: '/videos/granite-staircase-polishing-after-poster.jpg',
      label: 'After — mirror-gloss granite staircase by MarblePro',
    },
  },
  {
    slug: 'crema-marfil-floor-polishing-before-after',
    service: 'Crema Marfil Floor Polishing',
    h2: 'Crema Marfil Marble Floor Polishing Before & After — UAE Villa',
    lead: 'Crema Marfil is the most installed marble in UAE homes. Over time sand abrasion and cleaning chemicals dull its warm cream tones. Watch MarblePro restore a full villa floor to a flawless high-gloss finish.',
    bullets: [
      'Sand abrasion and chemical damage fully reversed',
      'Warm cream tones and golden veining restored',
      'Italian crystallization for a durable mirror finish',
      'Breathable sealer protects without trapping moisture',
    ],
    cta: 'Get a free marble polishing quote',
    before: {
      mp4: '/videos/crema-marfil-floor-polishing-before.mp4',
      poster: '/videos/crema-marfil-floor-polishing-before-poster.jpg',
      label: 'Before — dull Crema Marfil marble floor with polishing machine',
    },
    after: {
      mp4: '/videos/crema-marfil-floor-polishing-after.mp4',
      poster: '/videos/crema-marfil-floor-polishing-after-poster.jpg',
      label: 'After — mirror-polished Crema Marfil floor by MarblePro',
    },
  },
];

function AutoVideo({ mp4, poster, label }: { mp4: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? el.play().catch(() => {}) : el.pause(); },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref} muted loop playsInline preload="none" poster={poster}
      aria-label={label} title={label}
      className="ba-vid-player"
    >
      <source src={mp4} type="video/mp4" />
    </video>
  );
}

export default function BeforeAfterVideos() {
  return (
    <section className="ba-vid-section" data-screen-label="before-after-videos">
      <div className="ba-vid-inner">
        <span className="sec-eyebrow">— Before &amp; after · video proof</span>
        <h2 className="sec-title" style={{ marginTop: 12, maxWidth: '28ch' }}>
          Watch the <em>Transformation.</em>
        </h2>
        <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.6, opacity: 0.78, maxWidth: '58ch' }}>
          Real before &amp; after videos from MarblePro polishing jobs across Dubai and UAE —
          filmed on the same day, same stone, same camera angle. No editing, no filters.
        </p>

        {ENTRIES.map((e) => (
          <div key={e.slug} className="ba-vid-row" id={e.slug}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org', '@type': 'VideoObject',
              name: `${e.service} Before & After — MarblePro UAE`,
              description: e.lead,
              thumbnailUrl: `https://www.marblepro.ae${e.after.poster}`,
              contentUrl: `https://www.marblepro.ae${e.after.mp4}`,
              uploadDate: '2026-07-26',
              publisher: { '@type': 'Organization', name: 'MarblePro UAE', logo: { '@type': 'ImageObject', url: 'https://www.marblepro.ae/raw/twittercard.jpg' } },
            }) }} />

            <div className="ba-vid-card ba-vid-before">
              <span className="ba-vid-tag before">Before</span>
              <AutoVideo mp4={e.before.mp4} poster={e.before.poster} label={e.before.label} />
            </div>

            <div className="ba-vid-content">
              <h3>{e.h2}</h3>
              <p>{e.lead}</p>
              <ul>
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <a href="/contact" className="btn btn-primary">
                {e.cta}
                <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
              </a>
            </div>

            <div className="ba-vid-card ba-vid-after">
              <span className="ba-vid-tag after">After</span>
              <AutoVideo mp4={e.after.mp4} poster={e.after.poster} label={e.after.label} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
