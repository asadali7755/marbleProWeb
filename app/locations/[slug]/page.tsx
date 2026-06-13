import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/marble/Nav';
import Footer from '@/components/marble/Footer';
import Fab from '@/components/marble/Fab';
import { PageFaqCta } from '@/components/marble/FaqCta';
import { PHONE_DISPLAY, PHONE_TEL, CITY_IMG, CITY_GRAD, SERVICES } from '@/components/marble/constants';
import { LOCATIONS, getLocation } from '@/lib/locationsData';

const SITE = 'https://www.marblepro.ae';

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  const title = `${l.h1} | MarblePro`;
  const description = `${l.intro} Free on-site quote · ${PHONE_DISPLAY}.`.slice(0, 320);
  const url = `${SITE}/locations/${l.slug}`;
  return {
    title,
    description,
    keywords: `marble polishing ${l.name}, floor polishing ${l.name}, marble restoration ${l.name}, granite polishing ${l.name}, terrazzo polishing ${l.name}`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: '/raw/twittercard.jpg', width: 1200, height: 630, alt: `Marble Polishing ${l.name} — MarblePro` }],
    },
  };
}

export default async function LocationPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  const url = `${SITE}/locations/${l.slug}`;

  // Service schema (not a 2nd LocalBusiness) — avoids duplicate-business ambiguity
  // on the page; the canonical LocalBusiness lives in the root layout.
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Marble Polishing & Floor Restoration',
    name: l.h1,
    description: l.intro,
    url,
    image: `${SITE}/raw/twittercard.jpg`,
    areaServed: { '@type': 'City', name: l.name },
    provider: {
      '@type': 'LocalBusiness',
      name: 'MarblePro UAE',
      telephone: PHONE_TEL,
      url: SITE,
      priceRange: '$$',
      image: `${SITE}/raw/twittercard.jpg`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE}/locations` },
      { '@type': 'ListItem', position: 3, name: l.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Nav active="locations" />

      <main>
        <section className="loc-section" data-screen-label={`location-${l.slug}`} style={{ paddingTop: 0 }}>
          <div className="loc-banner" style={{ background: CITY_GRAD[l.slug], marginTop: 70 }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: -2, backgroundImage: `url("${CITY_IMG[l.slug]}")`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55 }} />
            <div className="loc-banner-inner">
              <div>
                <nav aria-label="Breadcrumb" style={{ fontSize: 13, opacity: 0.85, marginBottom: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <Link href="/" style={{ color: 'inherit' }}>Home</Link>
                  <span>/</span>
                  <Link href="/locations" style={{ color: 'inherit' }}>Locations</Link>
                  <span>/</span>
                  <span>{l.name}</span>
                </nav>
                <span className="meta">{l.eyebrow} · {l.ar}</span>
                <h1>{l.name} — <em>Marble Polishing</em> &amp; Floor Restoration Services.</h1>
                <p>{l.intro}</p>
              </div>
              <div className="loc-card-list">
                <h4>Services available in {l.name}</h4>
                <ul>
                  {SERVICES.slice(0, 8).map((sv, i) => (
                    <li key={sv.slug}>
                      <Link href={`/services/${sv.slug}`} style={{ color: 'inherit', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <span>{sv.name}</span>
                        <span>0{i + 1}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="loc-body">
            <div className="loc-body-grid">
              <div>
                <h2 style={{ fontFamily: 'var(--display)', fontWeight: 360, fontSize: 'clamp(26px,4vw,40px)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 18 }}>{l.h1}</h2>
                {l.body.map((p, i) => <p key={i}>{p}</p>)}
                <div className="areas">
                  {l.areas.map((a) => <span className="area" key={a}>{a}</span>)}
                </div>
              </div>
              <div className="stats">
                <h4>{l.name} service snapshot</h4>
                {l.stats.map((st) => (
                  <div className="row" key={st.l}>
                    <span className="l">{st.l}</span>
                    <span className="v">{st.v}</span>
                  </div>
                ))}
                <div className="cta">
                  <a href={`tel:${PHONE_TEL}`} className="primary">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
                    Call {PHONE_DISPLAY}
                  </a>
                  <Link className="alt" href="/contact" style={{ textAlign: 'center' }}>Get a Free Quote</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All services in this city — internal links */}
        <section className="sec" style={{ padding: '60px 36px', background: 'var(--paper2)' }} data-screen-label="city-services">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span className="sec-eyebrow">— Full service list</span>
            <h2 className="sec-title" style={{ marginTop: 12, fontSize: 'clamp(26px,4vw,40px)' }}>
              All stone services in <em>{l.name}.</em>
            </h2>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
              {SERVICES.map((sv) => (
                <Link key={sv.slug} href={`/services/${sv.slug}`} style={{ textDecoration: 'none', color: 'inherit', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 12, padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--grot)', fontWeight: 600, fontSize: 14 }}>{sv.name}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--gold)' }}>{sv.num}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other emirates — internal links */}
        <section className="sec" style={{ padding: '60px 36px' }} data-screen-label="other-emirates">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span className="sec-eyebrow">— Other emirates</span>
            <h2 className="sec-title" style={{ marginTop: 12, fontSize: 'clamp(26px,4vw,40px)' }}>We also cover <em>the whole UAE.</em></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              {LOCATIONS.filter((x) => x.slug !== l.slug).map((x) => (
                <Link key={x.slug} href={`/locations/${x.slug}`} className="area" style={{ textDecoration: 'none' }}>
                  Marble Polishing {x.name}
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
