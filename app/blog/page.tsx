import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import { GUIDES } from '@/lib/guidesData';

const SITE = 'https://www.marblepro.ae';

export const metadata: Metadata = {
  title: 'Marble Care Guides — Polishing Cost, Stain Removal & Maintenance | MarblePro UAE',
  description: 'Practical marble care guides for UAE homes: marble polishing cost in Dubai, removing yellow stains, marble vs granite, and how often to polish marble floors.',
  keywords: 'marble polishing guides dubai, marble care uae, marble polishing cost, yellow stain removal, marble maintenance',
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    title: 'Marble Care Guides — MarblePro UAE',
    description: 'Practical marble care guides for UAE homes: polishing cost, stain removal, marble vs granite, and maintenance.',
    url: `${SITE}/blog`,
    images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: 'MarblePro Marble Care Guides' }],
  },
};

export default function BlogHub() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: GUIDES.map((g, i) => ({
      '@type': 'ListItem', position: i + 1, url: `${SITE}/blog/${g.slug}`, name: g.h1,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Nav active="blog" />
      <main>
        <section className="svc-hero marble-bg" data-screen-label="blog-hero">
          <div className="marble-veins" />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow-pill"><span className="pulse" /> Guides &amp; advice</span>
            <h1>Marble Care Guides for <em>UAE Homes.</em></h1>
            <p className="lead">
              Straight answers to the questions UAE homeowners actually ask — what marble polishing
              costs in Dubai, how to remove yellow stains, marble vs granite, and how to keep your
              floors glossy in the desert climate.
            </p>
          </div>
        </section>

        <section className="sec" style={{ padding: '70px 36px' }} data-screen-label="blog-list">
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 22 }}>
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', background: 'var(--paper2)', border: '1px solid var(--line)', borderRadius: 16, padding: '26px 24px' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)' }}>{g.category} · {g.readMins} min read</span>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 380, fontSize: 22, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '12px 0 10px', color: 'var(--ink)' }}>{g.h1}</h2>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, opacity: 0.75, flexGrow: 1 }}>{g.excerpt}</p>
                <span style={{ marginTop: 16, fontFamily: 'var(--grot)', fontWeight: 600, fontSize: 13, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read guide
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <Fab />
    </>
  );
}
