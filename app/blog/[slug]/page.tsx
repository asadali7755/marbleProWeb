import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import { PHONE_DISPLAY, PHONE_TEL } from '@/components/marble/constants';
import { GUIDES, getGuide } from '@/lib/guidesData';

const SITE = 'https://www.marblepro.ae';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = `${SITE}/blog/${g.slug}`;
  return {
    title: g.title,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article', title: g.h1, description: g.description, url,
      images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: g.h1 }],
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const url = `${SITE}/blog/${g.slug}`;
  const more = GUIDES.filter((x) => x.slug !== g.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.h1,
    description: g.description,
    datePublished: g.date,
    dateModified: g.date,
    mainEntityOfPage: url,
    image: `${SITE}/raw/twittercard.jpg`,
    author: { '@type': 'Organization', name: 'MarblePro UAE', url: SITE },
    publisher: { '@type': 'Organization', name: 'MarblePro UAE', logo: { '@type': 'ImageObject', url: `${SITE}/raw/twittercard.jpg` } },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: g.h1, item: url },
    ],
  };
  const faqSchema = g.faqs.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: g.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <Nav active="blog" />

      <main>
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '130px 24px 40px' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, opacity: 0.7, marginBottom: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'inherit' }}>Home</Link><span>/</span>
            <Link href="/blog" style={{ color: 'inherit' }}>Guides</Link><span>/</span>
            <span style={{ color: 'var(--gold)' }}>{g.category}</span>
          </nav>

          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{g.category} · {g.readMins} min read</span>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 360, fontSize: 'clamp(30px,5vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '12px 0 18px' }}>{g.h1}</h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, fontFamily: 'var(--display)', fontWeight: 380, opacity: 0.92, marginBottom: 8 }}>{g.intro}</p>

          {g.sections.map((s, i) => (
            <section key={i} style={{ marginTop: 34 }}>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 'clamp(22px,3vw,30px)', letterSpacing: '-0.015em', lineHeight: 1.15, marginBottom: 12 }}>{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} style={{ fontSize: 16, lineHeight: 1.72, opacity: 0.85, marginBottom: 14 }} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </section>
          ))}

          {/* Inline CTA */}
          <div style={{ margin: '40px 0', padding: '26px 28px', background: 'var(--paper2)', border: '1px solid var(--line)', borderRadius: 16 }}>
            <h3 style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 22, margin: '0 0 8px' }}>Want an exact price for your floor?</h3>
            <p style={{ margin: '0 0 16px', fontSize: 15, lineHeight: 1.6, opacity: 0.8 }}>Free on-site inspection, fixed-price quote and a written gloss guarantee — across all 7 UAE emirates.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">Get a Free Quote
                <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">Call {PHONE_DISPLAY}</a>
            </div>
          </div>

          {/* FAQs (visible) */}
          {g.faqs.length > 0 && (
            <section style={{ marginTop: 20 }}>
              <h2 style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 'clamp(22px,3vw,30px)', letterSpacing: '-0.015em', marginBottom: 16 }}>Frequently asked</h2>
              {g.faqs.map((f, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--line)', padding: '16px 0' }}>
                  <h3 style={{ fontFamily: 'var(--grot)', fontWeight: 700, fontSize: 15.5, margin: '0 0 6px' }}>{f.q}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, opacity: 0.82 }}>{f.a}</p>
                </div>
              ))}
            </section>
          )}

          {/* Related services / links */}
          <section style={{ marginTop: 34 }}>
            <h2 style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 20, marginBottom: 14 }}>Related</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {g.related.map((r) => (
                <Link key={r.href} href={r.href} className="area" style={{ textDecoration: 'none' }}>{r.label}</Link>
              ))}
            </div>
          </section>
        </article>

        {/* More guides */}
        <section className="sec" style={{ padding: '50px 36px', background: 'var(--paper2)' }} data-screen-label="more-guides">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span className="sec-eyebrow">— More guides</span>
            <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {more.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} style={{ textDecoration: 'none', color: 'inherit', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 14, padding: '20px 22px' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{m.category}</span>
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 18, lineHeight: 1.2, marginTop: 8, color: 'var(--ink)' }}>{m.h1}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Fab />
    </>
  );
}
