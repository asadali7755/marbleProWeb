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
        <article className="blog-article">
          <nav aria-label="Breadcrumb" className="blog-breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/blog">Guides</Link><span>/</span>
            <span style={{ color: 'var(--gold)' }}>{g.category}</span>
          </nav>

          <span className="blog-article-cat">{g.category} · {g.readMins} min read</span>
          <h1>{g.h1}</h1>
          <p className="blog-intro">{g.intro}</p>

          {g.sections.map((s, i) => (
            <section key={i} className="blog-section">
              <h2>{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </section>
          ))}

          <div className="blog-cta-box">
            <h3>Want an exact price for your floor?</h3>
            <p>Free on-site inspection, fixed-price quote and a written gloss guarantee — across all 7 UAE emirates.</p>
            <div className="blog-cta-btns">
              <Link href="/contact" className="btn btn-primary">Get a Free Quote
                <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">Call {PHONE_DISPLAY}</a>
            </div>
          </div>

          {g.faqs.length > 0 && (
            <section className="blog-faqs">
              <h2>Frequently asked</h2>
              {g.faqs.map((f, i) => (
                <div key={i} className="blog-faq">
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </section>
          )}

          <section className="blog-related">
            <h2>Related</h2>
            <div className="blog-related-tags">
              {g.related.map((r) => (
                <Link key={r.href} href={r.href} className="area">{r.label}</Link>
              ))}
            </div>
          </section>
        </article>

        <section className="blog-more" data-screen-label="more-guides">
          <div className="blog-more-inner">
            <span className="sec-eyebrow">— More guides</span>
            <div className="blog-more-grid">
              {more.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} className="blog-more-card">
                  <span className="cat">{m.category}</span>
                  <div className="title">{m.h1}</div>
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
