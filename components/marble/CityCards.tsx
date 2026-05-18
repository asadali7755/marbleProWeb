'use client';
import Link from 'next/link';
import { EMIRATES, CITY_IMG, CITY_GRAD } from './constants';

export default function CityCards() {
  const sizes = ['hero-card-pos', 'tall', '', '', 'wide', '', ''];
  return (
    <div className="cities">
      {EMIRATES.map((e, i) => (
        <Link
          key={e.slug}
          href={`/locations#${e.slug}`}
          className={`city ${sizes[i] || ''}`}
          style={{ '--bg': `url("${CITY_IMG[e.slug]}")` } as React.CSSProperties}
        >
          <div style={{ position: 'absolute', inset: 0, zIndex: -3, background: CITY_GRAD[e.slug] }} />
          <div
            className="city-img"
            style={{
              position: 'absolute', inset: 0, zIndex: -2,
              backgroundImage: `url("${CITY_IMG[e.slug]}")`,
              backgroundSize: 'cover', backgroundPosition: 'center',
              opacity: 0.7, transition: 'transform .8s cubic-bezier(.2,.7,.3,1)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(11,11,11,0.05) 0%, rgba(11,11,11,0.75) 75%, rgba(11,11,11,0.92) 100%)' }} />
          <div className="arrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
          <div>
            <div className="meta">{i + 1 < 10 ? `0${i + 1}` : i + 1} — {e.ar}</div>
            <h3 className="name">
              {e.name.split(' ')[0]}
              {e.name.includes(' ') && <em> {e.name.split(' ').slice(1).join(' ')}</em>}
            </h3>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.65, marginTop: 6 }}>
              {e.tagline}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
