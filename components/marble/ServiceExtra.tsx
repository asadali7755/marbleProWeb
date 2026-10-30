import Link from '@/components/marble/Link';
import { SERVICE_EXTRAS } from '@/lib/serviceExtras';

export default function ServiceExtra({ slug }: { slug: string }) {
  const sections = SERVICE_EXTRAS[slug];
  if (!sections) return null;

  return (
    <>
      {sections.map((sec, i) => (
        <section
          key={sec.h2}
          className="sec"
          style={{ padding: '56px 36px', background: i % 2 ? 'var(--paper2)' : undefined, maxWidth: 'none' }}
          data-screen-label={`service-extra-${i + 1}`}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span className="sec-eyebrow">— {sec.eyebrow}</span>
            <h2 className="sec-title" style={{ marginTop: 12, fontSize: 'clamp(26px,4vw,40px)', maxWidth: '24ch' }}>{sec.h2}</h2>

            {sec.body?.map((p) => (
              <p key={p} style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, opacity: 0.85, maxWidth: '68ch' }}>{p}</p>
            ))}

            {sec.items && (
              <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                {sec.items.map((item, n) => (
                  <div key={item.t}>
                    <h3 style={{ margin: 0, fontFamily: 'var(--grot)', fontWeight: 700, fontSize: 16, lineHeight: 1.3 }}>
                      {sec.numbered ? `${n + 1}. ` : ''}{item.t}
                    </h3>
                    <p style={{ margin: '6px 0 0', fontSize: 15, lineHeight: 1.6, opacity: 0.85 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            )}

            {sec.links && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
                {sec.links.map((l) => (
                  <Link key={l.href} href={l.href} className="area" style={{ textDecoration: 'none' }}>{l.label}</Link>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
