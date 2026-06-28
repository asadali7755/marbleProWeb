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

        <section data-screen-label="blog-list">
          <div className="blog-grid">
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`} className="blog-card">
                <span className="blog-card-cat">{g.category} · {g.readMins} min read</span>
                <h2>{g.h1}</h2>
                <p>{g.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-card-read">
                    Read guide
                    <span className="arr">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </span>
                  <span className="blog-card-time">{g.date}</span>
                </div>
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
