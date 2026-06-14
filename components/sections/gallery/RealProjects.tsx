import { PROJECTS, RESULTS_VIDEO, PROCESS_VIDEO } from '@/lib/projectsData';

const SITE = 'https://www.marblepro.ae';

function videoLd(v: { mp4: string; poster: string; name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.name,
    description: v.description,
    thumbnailUrl: `${SITE}${v.poster}`,
    contentUrl: `${SITE}${v.mp4}`,
    uploadDate: '2026-06-13',
    publisher: { '@type': 'Organization', name: 'MarblePro UAE', logo: { '@type': 'ImageObject', url: `${SITE}/raw/twittercard.jpg` } },
  };
}

// Server component — real client job photos + results & process videos. No client hooks.
export default function RealProjects() {
  const videoSchema = videoLd(RESULTS_VIDEO);
  const processSchema = videoLd(PROCESS_VIDEO);

  return (
    <section className="sec" style={{ padding: '70px 36px', background: 'var(--paper2)' }} data-screen-label="real-projects">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }} />
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="sec-eyebrow">— Real projects · actual MarblePro jobs</span>
        <h2 className="sec-title" style={{ marginTop: 12, maxWidth: '24ch' }}>
          Real Results from <em>Dubai &amp; UAE Villas.</em>
        </h2>
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, opacity: 0.78, maxWidth: '60ch' }}>
          These are genuine MarblePro projects — including our signature decorative marble medallion
          inlay work — photographed on site after polishing and crystallization.
        </p>

        {/* Results video */}
        <div style={{ marginTop: 30, borderRadius: 18, overflow: 'hidden', boxShadow: '0 20px 60px rgba(11,11,11,0.18)', background: '#1a1410' }}>
          <video
            controls
            playsInline
            preload="none"
            poster={RESULTS_VIDEO.poster}
            aria-label={RESULTS_VIDEO.name}
            style={{ display: 'block', width: '100%', height: 'auto', maxHeight: 520, objectFit: 'cover' }}
          >
            <source src={RESULTS_VIDEO.mp4} type="video/mp4" />
          </video>
        </div>

        {/* Photo grid */}
        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
          {PROJECTS.map((p, i) => (
            <figure key={i} style={{ margin: 0, position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '3/4', background: '#1a1410' }}>
              <img
                src={p.src}
                alt={p.alt}
                title={p.medallion ? 'Decorative marble medallion — MarblePro Dubai' : 'Polished marble floor — MarblePro Dubai'}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {p.medallion && (
                <figcaption style={{ position: 'absolute', left: 10, bottom: 10, padding: '5px 10px', borderRadius: 999, background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--grot)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Signature inlay
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {/* Process video — shown below the photo grid */}
        <h3 style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 'clamp(20px,3vw,28px)', letterSpacing: '-0.01em', margin: '40px 0 14px' }}>
          See the <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>polishing in action.</em>
        </h3>
        <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 20px 60px rgba(11,11,11,0.18)', background: '#1a1410' }}>
          <video
            controls
            playsInline
            preload="none"
            poster={PROCESS_VIDEO.poster}
            aria-label={PROCESS_VIDEO.name}
            style={{ display: 'block', width: '100%', height: 'auto', maxHeight: 520, objectFit: 'cover' }}
          >
            <source src={PROCESS_VIDEO.mp4} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
