import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import { PageFaqCta } from '@/components/marble/FaqCta';
import { PHONE_DISPLAY, PHONE_TEL, EMIRATES } from '@/components/marble/constants';
import { SERVICE_DETAIL, SVC_DETAIL_IMGS, getServiceDetail, serviceImgAlt } from '@/lib/servicesData';

const SITE = 'https://www.marblepro.ae';

export function generateStaticParams() {
  return SERVICE_DETAIL.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceDetail(slug);
  if (!s) return {};
  const title = `${s.h2} | MarblePro UAE`;
  const description = `${s.intro} Free on-site quote · ${PHONE_DISPLAY}.`.slice(0, 320);
  const url = `${SITE}/services/${s.slug}`;
  const img = SVC_DETAIL_IMGS[s.slug] || '/raw/twittercard.jpg';
  return {
    title,
    description,
    keywords: s.kw.replace(/ · /g, ', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: img, width: 1200, height: 630, alt: `${s.name} — MarblePro Dubai UAE` }],
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const s = getServiceDetail(slug);
  if (!s) notFound();

  const url = `${SITE}/services/${s.slug}`;
  const img = SVC_DETAIL_IMGS[s.slug] || '/raw/twittercard.jpg';
  const related = SERVICE_DETAIL.filter((x) => x.slug !== s.slug).slice(0, 6);
  // Service name without "Dubai"/"UAE" so city chips read cleanly, e.g. "Marble Polishing Abu Dhabi"
  const svcLabel = s.name.replace(/\s*(Dubai|UAE)\s*/gi, ' ').replace(/\s+/g, ' ').trim();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: s.name,
    name: s.h2,
    description: s.intro,
    url,
    image: {
      '@type': 'ImageObject',
      url: img.startsWith('http') ? img : `${SITE}${img}`,
      caption: serviceImgAlt(s),
      representativeOfPage: true,
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'MarblePro UAE',
      telephone: PHONE_TEL,
      url: SITE,
      priceRange: '$$',
      areaServed: EMIRATES.map((e) => e.name),
    },
    areaServed: EMIRATES.map((e) => ({ '@type': 'City', name: e.name })),
    offers: { '@type': 'Offer', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      { '@type': 'ListItem', position: 3, name: s.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Nav active="services" />

      <main>
        {/* Hero */}
        <section className="svc-hero marble-bg" data-screen-label="service-hero">
          <div className="marble-veins" />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, opacity: 0.7, marginBottom: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Link href="/" style={{ color: 'inherit' }}>Home</Link>
              <span>/</span>
              <Link href="/services" style={{ color: 'inherit' }}>Services</Link>
              <span>/</span>
              <span style={{ color: 'var(--gold)' }}>{s.name}</span>
            </nav>
            <span className="eyebrow-pill"><span className="pulse" /> Available across all 7 UAE emirates</span>
            <h1>{s.h2}</h1>
            <p className="lead">{s.intro}</p>
            <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.82, marginTop: 14, maxWidth: '64ch' }}>
              MarblePro delivers {svcLabel.toLowerCase()} across{' '}
              <strong>Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain &amp; Fujairah</strong> — same certified
              crew, same diamond-grade process and written gloss guarantee in every emirate.
            </p>
            <div className="cta-row">
              <Link href="/#quote" className="btn btn-primary">
                Get a Free On-Site Quote
                <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>

        {/* Detail body — reuses the svc-detail layout from the hub */}
        <section className="svc-page" data-screen-label="service-detail" style={{ paddingTop: 60, paddingBottom: 40 }}>
          <article className="svc-detail">
            <div className="svc-top">
              <span className="svc-detail-num">— {s.num}</span>
              <span className="kw">{s.kw}</span>
              <h2>{s.h2}</h2>
              <p style={{ fontSize: 18, fontFamily: 'var(--display)', fontWeight: 380, letterSpacing: '-0.01em', lineHeight: 1.4 }}>{s.intro}</p>
            </div>
            <div className="preview">
              <img className="ph" src={img} alt={serviceImgAlt(s)} title={`${s.name} — MarblePro UAE`} width={1280} height={720} loading="lazy" decoding="async" />
              <div className="ovr" />
              <div className="lbl">
                <span className="sm">After · MarblePro finish</span>
                <strong>{s.name}</strong>
              </div>
            </div>
            <div className="svc-bot">
              {s.body.map((p, i) => <p key={i}>{p}</p>)}
              <ul className="feat">
                {s.feat.map((f, i) => (
                  <li key={i}>
                    <svg className="chk" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span><strong>{f.t}</strong>{f.d}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
                <Link href="/#quote" className="btn btn-primary">
                  Quote this service
                  <span className="arr"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">Call {PHONE_DISPLAY}</a>
              </div>
            </div>
          </article>
        </section>

        {/* Available across all 7 emirates — internal links to location pages */}
        <section className="sec" style={{ padding: '60px 36px', background: 'var(--paper2)' }} data-screen-label="service-areas">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span className="sec-eyebrow">— Coverage</span>
            <h2 className="sec-title" style={{ marginTop: 12, fontSize: 'clamp(26px,4vw,40px)' }}>
              {svcLabel} <em>across all 7 UAE emirates.</em>
            </h2>
            <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.6, opacity: 0.75, maxWidth: '60ch' }}>
              Pick your emirate to see local coverage, areas and response times — same crew and gloss standard everywhere.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              {EMIRATES.map((e) => (
                <Link key={e.slug} href={`/locations/${e.slug}`} className="area" style={{ textDecoration: 'none' }}>
                  {svcLabel} {e.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related services — internal links */}
        <section className="sec" style={{ padding: '60px 36px' }} data-screen-label="related-services">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span className="sec-eyebrow">— Explore more</span>
            <h2 className="sec-title" style={{ marginTop: 12, fontSize: 'clamp(26px,4vw,40px)' }}>Other <em>stone services.</em></h2>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/services/${r.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', background: 'var(--paper2)', borderRadius: 14, padding: '22px 24px', border: '1px solid var(--line)' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--gold)' }}>— {r.num}</span>
                  <div style={{ fontFamily: 'var(--grot)', fontWeight: 700, fontSize: 16, margin: '8px 0 6px', color: 'var(--ink)' }}>{r.name}</div>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, opacity: 0.72 }}>{r.intro.slice(0, 110)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageFaqCta />
      <Footer />
      <Fab />
    </>
  );
}
