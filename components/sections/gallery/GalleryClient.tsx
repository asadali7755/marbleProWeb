'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRequestCall } from '@/components/marble/RequestCallModal';
import { WA_LINK } from '@/components/marble/constants';
import { PageFaqCta } from '@/components/marble/FaqCta';
import {
  GALLERY_CATEGORIES,
  SHOWCASE_VIDEO,
  categoryCounts,
  type BeforeAfterPair,
  type CategoryId,
  type GalleryCategory,
  type GalleryPhoto,
  type GalleryVideo,
  type VideoPair,
} from '@/lib/galleryMedia';

const SITE = 'https://www.marblepro.ae';
const WA_HREF = `${WA_LINK}?text=${encodeURIComponent('Hi MarblePro, I saw your gallery and need a quote.')}`;

// How many items each block shows before its "Show all" button.
const FIRST = { beforeAfter: 4, videoPairs: 2, videos: 6, photos: 9 };

/* ───────────── shared bits ───────────── */

function ShowAll({ total, shown, onClick }: { total: number; shown: number; onClick: () => void }) {
  if (total <= shown) return null;
  return (
    <div className="gx-more">
      <button type="button" className="gx-more-btn" onClick={onClick}>Show all {total}</button>
    </div>
  );
}

function BlockHead({ label, meta }: { label: string; meta: string }) {
  return (
    <div className="gx-block-head">
      <span className="gx-block-label">{label}</span>
      <span className="gx-block-meta">{meta}</span>
    </div>
  );
}

// Muted previews that may play at the same time. Each clip is 1–5 MB, so
// letting every visible clip stream at once starved the photos on mobile.
const MAX_AUTOPLAY = 2;
const autoplaying = new Set<HTMLVideoElement>();

/** Slow or data-saver connections get tap-to-play only, no muted previews. */
function autoplayAllowed(): boolean {
  if (typeof navigator === 'undefined') return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (conn?.saveData) return false;
  return !(conn?.effectiveType && /(^|-)2g$|^3g$/.test(conn.effectiveType));
}

/**
 * Muted video that plays while on screen and pauses when scrolled away.
 * Nothing (not even the poster) is requested until the card is near the
 * viewport, and at most MAX_AUTOPLAY previews stream at once.
 */
function InViewVideo({ video, className, label }: { video: GalleryVideo; className?: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [withSound, setWithSound] = useState(false);

  // Phase 1: wait until the card is near the viewport before requesting anything.
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setNear(true); io.disconnect(); }
    }, { rootMargin: '400px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  // Phase 2 (source is in the DOM now): muted preview while mostly on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el || !near || !autoplayAllowed()) return;
    const io = new IntersectionObserver(([e]) => {
      if (el.controls) return;
      if (e.isIntersecting && autoplaying.size < MAX_AUTOPLAY) {
        autoplaying.add(el);
        el.play().catch(() => autoplaying.delete(el));
      } else if (!e.isIntersecting) {
        autoplaying.delete(el);
        el.pause();
      }
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); autoplaying.delete(el); };
  }, [near]);

  const playWithSound = () => {
    const el = ref.current;
    if (!el) return;
    setNear(true);
    autoplaying.delete(el);
    el.muted = false;
    el.controls = true;
    // The <source> may only just have been added; let React render it first.
    requestAnimationFrame(() => { el.load(); el.play().catch(() => {}); });
    setWithSound(true);
  };

  return (
    <div className={`gx-video ${className ?? ''}`}>
      <video ref={ref} muted playsInline loop preload="none" poster={near ? video.poster : undefined} aria-label={video.caption}>
        {near && <source src={video.mp4} type="video/mp4" />}
      </video>
      {label && <span className={`gx-tag ${label === 'After' ? 'gx-tag-after' : ''}`}>{label}</span>}
      {!withSound && (
        <button type="button" className="gx-play" onClick={playWithSound} aria-label={`Play ${video.caption} with sound`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        </button>
      )}
      <span className="gx-dur">{video.duration}</span>
    </div>
  );
}

/* ───────────── before / after ───────────── */

function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      move('touches' in e ? e.touches[0].clientX : e.clientX);
    };
    const stop = () => { dragging.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchend', stop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchend', stop);
    };
  }, []);

  return (
    <figure className="gx-card">
      <div
        className="gx-ba"
        ref={ref}
        style={{ '--pos': `${pos}%` } as React.CSSProperties}
        onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
        onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
      >
        <img className="gx-ba-img" src={pair.before} alt={`${pair.caption} — before polishing`} loading="lazy" decoding="async" draggable={false} />
        <img className="gx-ba-img gx-ba-after" src={pair.after} alt={`${pair.caption} — after MarblePro polishing`} loading="lazy" decoding="async" draggable={false} />
        <span className="gx-tag">Before</span>
        <span className="gx-tag gx-tag-after">After</span>
        <div className="gx-ba-line" aria-hidden="true">
          <span className="gx-ba-grip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 3 12 9 18" /><polyline points="15 6 21 12 15 18" /></svg>
          </span>
        </div>
        <input
          className="gx-ba-range"
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${pair.caption}`}
        />
      </div>
      <figcaption className="gx-cap">
        <span className="gx-cap-title">{pair.caption}</span>
        <span className="gx-cap-note">{pair.note}</span>
      </figcaption>
    </figure>
  );
}

function VideoPairCard({ pair }: { pair: VideoPair }) {
  return (
    <figure className="gx-card">
      <div className="gx-vpair">
        <InViewVideo video={pair.before} label="Before" />
        <InViewVideo video={pair.after} label="After" />
      </div>
      <figcaption className="gx-cap">
        <span className="gx-cap-title">{pair.caption}</span>
        <span className="gx-cap-note">Video · before &amp; after</span>
      </figcaption>
    </figure>
  );
}

/* ───────────── photos + lightbox ───────────── */

function Lightbox({ photos, index, onClose, onIndex }: { photos: GalleryPhoto[]; index: number; onClose: () => void; onIndex: (i: number) => void }) {
  const touchX = useRef<number | null>(null);
  const prev = useCallback(() => onIndex((index - 1 + photos.length) % photos.length), [index, photos.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % photos.length), [index, photos.length, onIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; };
  }, [onClose, prev, next]);

  const p = photos[index];
  return (
    <div
      className="gx-lb"
      role="dialog"
      aria-modal="true"
      aria-label={p.caption}
      onClick={onClose}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) { if (dx > 0) prev(); else next(); }
        touchX.current = null;
      }}
    >
      <button type="button" className="gx-lb-close" onClick={onClose} aria-label="Close">×</button>
      <button type="button" className="gx-lb-nav gx-lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous photo">‹</button>
      <figure className="gx-lb-fig" onClick={(e) => e.stopPropagation()}>
        <img src={p.src} alt={p.alt} />
        <figcaption>
          <span>{p.caption}</span>
          <span className="gx-lb-count">{index + 1} / {photos.length}</span>
        </figcaption>
      </figure>
      <button type="button" className="gx-lb-nav gx-lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next photo">›</button>
    </div>
  );
}

/* ───────────── a category section ───────────── */

function CategorySection({ c }: { c: GalleryCategory }) {
  const [all, setAll] = useState({ beforeAfter: false, videoPairs: false, videos: false, photos: false });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const show = <T,>(list: T[], key: keyof typeof FIRST) => (all[key] ? list : list.slice(0, FIRST[key]));
  const open = (key: keyof typeof FIRST) => setAll((s) => ({ ...s, [key]: true }));

  return (
    <section id={c.id} className="gx-section" data-screen-label={`gallery-${c.id}`}>
      <header className="gx-section-head">
        <h2>{c.title}</h2>
        <p>{c.intro}</p>
      </header>

      <BlockHead label="Before & after" meta={`${c.beforeAfter.length} pairs · drag to compare`} />
      <div className="gx-grid-2">
        {show(c.beforeAfter, 'beforeAfter').map((p) => <BeforeAfterSlider key={p.before} pair={p} />)}
      </div>
      <ShowAll total={c.beforeAfter.length} shown={FIRST.beforeAfter} onClick={() => open('beforeAfter')} />

      {c.videoPairs.length > 0 && (
        <>
          <div className="gx-grid-2 gx-gap-top">
            {show(c.videoPairs, 'videoPairs').map((p) => <VideoPairCard key={p.caption} pair={p} />)}
          </div>
          <ShowAll total={c.videoPairs.length} shown={FIRST.videoPairs} onClick={() => open('videoPairs')} />
        </>
      )}

      <BlockHead label="Videos" meta={`${c.videos.length} clips`} />
      <div className="gx-videos">
        {show(c.videos, 'videos').map((vid) => (
          <figure key={vid.mp4} className={`gx-card gx-vcard gx-${vid.orientation}`}>
            <InViewVideo video={vid} />
            <figcaption className="gx-cap"><span className="gx-cap-title gx-cap-sm">{vid.caption}</span></figcaption>
          </figure>
        ))}
      </div>
      <ShowAll total={c.videos.length} shown={FIRST.videos} onClick={() => open('videos')} />

      <BlockHead label="Photos" meta={`${c.photos.length} photos · tap to enlarge`} />
      <div className="gx-masonry">
        {show(c.photos, 'photos').map((p, i) => (
          <figure key={p.src} className="gx-card gx-photo">
            <button type="button" className="gx-photo-btn" onClick={() => setLightbox(i)} aria-label={`Open photo: ${p.caption}`}>
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
            </button>
            <figcaption className="gx-cap"><span className="gx-cap-title gx-cap-sm">{p.caption}</span></figcaption>
          </figure>
        ))}
      </div>
      <ShowAll total={c.photos.length} shown={FIRST.photos} onClick={() => open('photos')} />

      {lightbox !== null && (
        <Lightbox photos={c.photos} index={lightbox} onClose={() => setLightbox(null)} onIndex={setLightbox} />
      )}
    </section>
  );
}

/* ───────────── sticky tabs ───────────── */

function GalleryTabs() {
  const [active, setActive] = useState<CategoryId>('floors');
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id as CategoryId); }),
      { rootMargin: '-35% 0px -55% 0px' },
    );
    GALLERY_CATEGORIES.forEach((c) => { const el = document.getElementById(c.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="gx-tabs" aria-label="Gallery sections">
      <div className="gx-tabs-inner">
        {GALLERY_CATEGORIES.map((c) => (
          <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'active' : ''} aria-current={active === c.id ? 'true' : undefined}>
            {c.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ───────────── intro film ───────────── */

/**
 * The intro film. It is the largest thing on screen (the page's LCP), so it
 * starts as a high-priority <img>; the <video> is only mounted on tap.
 */
function ShowcaseFilm() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="gx-film">
      {playing ? (
        <video playsInline controls autoPlay preload="auto" poster={SHOWCASE_VIDEO.poster} aria-label={SHOWCASE_VIDEO.caption}>
          <source src={SHOWCASE_VIDEO.mp4} type="video/mp4" />
        </video>
      ) : (
        <img src={SHOWCASE_VIDEO.poster} alt="" fetchPriority="high" decoding="async" />
      )}
      {!playing && (
        <button type="button" className="gx-film-play" onClick={() => setPlaying(true)} aria-label="Play the MarblePro intro film">
          <span className="gx-film-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg></span>
          <span className="gx-film-text">Watch the intro film <span>{SHOWCASE_VIDEO.duration}</span></span>
        </button>
      )}
    </div>
  );
}

/* ───────────── page ───────────── */

function videoSchema() {
  const videos: GalleryVideo[] = GALLERY_CATEGORIES.flatMap((c) => [
    ...c.videos,
    ...c.videoPairs.flatMap((p) => [p.before, p.after]),
  ]).filter((vid) => !vid.pendingReview);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'MarblePro marble polishing videos',
    itemListElement: videos.map((vid, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VideoObject',
        name: `${vid.caption} — MarblePro UAE`,
        description: `${vid.caption}: marble and stone polishing by MarblePro UAE.`,
        thumbnailUrl: `${SITE}${vid.poster}`,
        contentUrl: `${SITE}${vid.mp4}`,
        uploadDate: '2026-10-25',
      },
    })),
  };
}

export default function GalleryClient() {
  const { open } = useRequestCall();
  return (
    <div className="gx">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema()) }} />

      <section className="gx-hero" data-screen-label="gallery-hero">
        <div className="gx-wrap">
          <span className="gx-eyebrow">Our work · Dubai &amp; UAE</span>
          <div className="gx-hero-top">
            <h1>Before &amp; after <em>marble polishing</em> — floors &amp; countertops.</h1>
            <div className="gx-hero-side">
              <p>Polishing, restoration and crystallisation for villas, apartments, hotels and restaurants — marble, granite, onyx, quartz and Corian.</p>
              <div className="gx-hero-ctas">
                <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
                <button type="button" className="btn gx-btn-ghost" onClick={open}>Get a quote</button>
              </div>
            </div>
          </div>
          <ShowcaseFilm />
          <div className="gx-cats">
            {GALLERY_CATEGORIES.map((c) => {
              const n = categoryCounts(c);
              return (
                <a key={c.id} href={`#${c.id}`} className="gx-cat">
                  <img src={c.cover} alt="" loading="lazy" decoding="async" />
                  <span className="gx-cat-shade" aria-hidden="true" />
                  <span className="gx-cat-text">
                    <span className="gx-cat-title">{c.title}</span>
                    <span className="gx-cat-meta">{n.photos} photos · {n.beforeAfter} before/after · {n.videos} videos</span>
                  </span>
                  <span className="gx-cat-arrow" aria-hidden="true">↓</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <GalleryTabs />

      <div className="gx-wrap">
        {GALLERY_CATEGORIES.map((c) => <CategorySection key={c.id} c={c} />)}
      </div>

      <section className="gx-cta" data-screen-label="gallery-cta">
        <div className="gx-wrap gx-cta-inner">
          <h2>Your floor or countertop <em>could be next.</em></h2>
          <div>
            <p>Send us a photo on WhatsApp and we&apos;ll tell you what&apos;s possible. Site visit AED 50, paid at the visit.</p>
            <div className="gx-hero-ctas">
              <a className="btn btn-wa" href={WA_HREF} target="_blank" rel="noopener noreferrer">WhatsApp a photo</a>
              <button type="button" className="btn gx-btn-ghost" onClick={open}>Request a call</button>
            </div>
          </div>
        </div>
      </section>

      <PageFaqCta />
    </div>
  );
}
