import { PROJECTS } from '@/lib/projectsData';

// Server component — real client job photos. (Process/results videos now live
// on their matching service sliders, not here.)
export default function RealProjects() {
  return (
    <section className="sec" style={{ padding: '70px 36px', background: 'var(--paper2)' }} data-screen-label="real-projects">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="sec-eyebrow">— Real projects · actual MarblePro jobs</span>
        <h2 className="sec-title" style={{ marginTop: 12, maxWidth: '24ch' }}>
          Real Results from <em>Dubai &amp; UAE Villas.</em>
        </h2>
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, opacity: 0.78, maxWidth: '60ch' }}>
          Genuine MarblePro projects — including our signature decorative marble medallion
          inlay work — photographed on site after polishing and crystallization.
        </p>

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
      </div>
    </section>
  );
}
