const SITE = 'https://www.marblepro.ae';

const SHOWCASE = {
  mp4: '/videos/marblepro-showcase-uae.mp4?v=2',
  poster: '/videos/marblepro-showcase-uae-poster.jpg',
  name: 'MarblePro UAE — Marble Polishing & Floor Restoration Showcase',
  description: 'A 90-second showcase of MarblePro: real marble polishing, crystallization and floor restoration projects, our services and coverage across all 7 UAE emirates.',
};

// Server component — top-of-gallery showcase film. No client hooks.
export default function ShowcaseVideo() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: SHOWCASE.name,
    description: SHOWCASE.description,
    thumbnailUrl: `${SITE}${SHOWCASE.poster}`,
    contentUrl: `${SITE}${SHOWCASE.mp4}`,
    uploadDate: '2026-06-24',
    publisher: { '@type': 'Organization', name: 'MarblePro UAE', logo: { '@type': 'ImageObject', url: `${SITE}/raw/twittercard.jpg` } },
  };

  return (
    <section
      data-screen-label="showcase-film"
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink)', color: 'var(--paper)', padding: '92px 24px 76px' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* gold glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 50% 0%, rgba(195,155,78,0.20), transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <span className="sec-eyebrow" style={{ color: 'var(--gold)', opacity: 0.95 }}>— MarblePro UAE · Showcase Film</span>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 320, fontSize: 'clamp(34px, 6vw, 72px)', lineHeight: 0.98, letterSpacing: '-0.03em', margin: '16px 0 16px' }}>
          See how we bring marble<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>back to life.</em>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: '56ch', margin: '0 auto 34px' }}>
          A 90-second look at our real polishing, crystallization and restoration work — our services,
          our finish, and our coverage across all 7 UAE emirates.
        </p>

        <div style={{
          position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '16 / 9',
          boxShadow: '0 40px 100px rgba(0,0,0,0.55)', border: '1px solid rgba(195,155,78,0.28)', background: '#0c0a08',
        }}>
          <video
            controls
            playsInline
            preload="none"
            poster={SHOWCASE.poster}
            aria-label={SHOWCASE.name}
            title={SHOWCASE.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <source src={SHOWCASE.mp4} type="video/mp4" />
          </video>
        </div>

        <p style={{ fontSize: 13.5, letterSpacing: '0.04em', opacity: 0.6, marginTop: 18 }}>
          ▶ Tap to watch · Free on-site inspection · Fixed-price quotes
        </p>
      </div>
    </section>
  );
}
