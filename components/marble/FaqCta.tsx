'use client';
import Link from '@/components/marble/Link';
import { useState } from 'react';
import { useRequestCall } from './RequestCallModal';

const FAQS = [
  {
    q: 'How long does the marble floor polishing process take?',
    a: 'It depends on the area size and the level of damage. A standard villa living area typically takes 1 to 2 days. We ensure a completely dust-free process to keep your property clean and liveable throughout the work.',
  },
  {
    q: 'How often should I get my marble floors polished in Dubai?',
    a: 'For residential villas, we recommend professional marble floor polishing every 1–2 years. High-traffic commercial properties like hotels or offices may require maintenance every 6 months to maintain peak gloss.',
  },
  {
    q: 'Can you fix deep cracks or completely yellowed marble?',
    a: 'Yes. Our marble floor restoration services include specialised colour-matched epoxy crack filling and advanced yellow stain removal procedures to repair deeply neglected natural stone — restoring it to better than new.',
  },
  {
    q: 'Why choose MarblePro for marble polishing in Dubai?',
    a: 'MarblePro uses Italian diamond crystallization technology. Every job comes with a 1-month written guarantee and a fixed-price quote after a free inspection.',
  },
  {
    q: 'Do you offer emergency residential marble floor restoration services in Dubai?',
    a: 'Yes. Tell us it is urgent and we will give you the earliest visit time on our schedule. We reply within 30 minutes. We are available 24 hours, 7 days a week.',
  },
  {
    q: 'What is the price for terrazzo floor polishing in Dubai?',
    a: 'The price of terrazzo floor polishing in Dubai depends on the area size, current condition and finish required. We offer free on-site assessments with no-obligation fixed quotes. We price fairly with no hidden charges.',
  },
  {
    q: 'Do you offer premium marble countertop polishing and Corian repair?',
    a: 'Yes. We offer premium marble countertop polishing in Dubai, kitchen top polishing and sealing across the UAE, Corian polishing and scratch repair in Dubai, and quartz polishing and stain protection in Abu Dhabi — all with food-safe sealers.',
  },
  {
    q: 'Which emirates do you cover?',
    a: 'All 7 — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain and Fujairah. We handle marble, granite, terrazzo, quartz and Corian with the same crew and the same standards everywhere.',
  },
];

export function PageFaqCta() {
  const { open } = useRequestCall();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      {/* FAQ Schema — Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      {/* FAQ Section */}
      <section className="shared-faq" data-screen-label="faq-band">
        <div className="shared-faq-inner">
          <div className="shared-faq-head">
            <span className="sec-eyebrow">— Frequently asked</span>
            <h2 className="sec-title">Questions worth <em>asking.</em></h2>
            <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.6, opacity: 0.65, maxWidth: '30ch' }}>
              Can&apos;t find your answer? WhatsApp us — we reply within 30 minutes.
            </p>
          </div>
          <div className="shared-faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`shared-faq-item${openIdx === i ? ' open' : ''}`}>
                <button
                  className="shared-faq-q"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <span>{f.q}</span>
                  <span className="plus" />
                </button>
                <div className="shared-faq-a">
                  <div className="shared-faq-a-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shine-cta" data-screen-label="shine-cta">
        <div className="shine-cta-inner">
          <span className="sec-eyebrow" style={{ color: 'var(--paper)', opacity: 0.65 }}>— Free on-site inspection</span>
          <h3>Ready to bring back<br/><em>the mirror shine?</em></h3>
          <p>
            Contact MarblePro today for floor restoration in Dubai and the wider UAE.
            Fixed-price quote, dust-free work, 1-month written guarantee.
          </p>
          <div className="shine-cta-btns">
            <Link className="btn btn-primary" href="/contact">
              Get a Free Quote
              <span className="arr">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </Link>
            <button className="btn btn-secondary on-dark" onClick={open}>Request a Call</button>
          </div>
        </div>
      </section>
    </>
  );
}
