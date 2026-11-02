import Link from '@/components/marble/Link';
import { SERVICE_WORK, type ServiceWorkItem, type WorkTag } from '@/lib/galleryMedia';

const SITE = 'https://www.marblepro.ae';

function Tag({ tag }: { tag?: WorkTag }) {
  if (!tag) return null;
  return <span className={`gx-tag ${tag === 'After' ? 'gx-tag-after' : ''}`}>{tag}</span>;
}

function WorkSection({ work }: { work: ServiceWorkItem }) {
  const videoSchema = (work.videos ?? []).map(({ video }) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${video.caption} — MarblePro UAE`,
    description: work.body,
    thumbnailUrl: `${SITE}${video.poster}`,
    contentUrl: `${SITE}${video.mp4}`,
    uploadDate: video.uploadDate,
  }));

  return (
    <section className="sec" style={{ padding: '56px 36px', maxWidth: 'none' }} data-screen-label="service-work">
      {videoSchema.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      )}
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <span className="sec-eyebrow">— Our work</span>
        <h2 className="sec-title" style={{ marginTop: 12, fontSize: 'clamp(26px,4vw,40px)', maxWidth: '24ch' }}>{work.h2}</h2>
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.7, opacity: 0.85, maxWidth: '68ch' }}>{work.body}</p>

        <div className={`svc-work ${work.wide ? 'svc-work-wide' : ''}`}>
          {work.shots?.map((shot) => (
            <figure key={shot.src} className="gx-card">
              <div className="gx-shot">
                <img src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading="lazy" decoding="async" />
                <Tag tag={shot.tag} />
              </div>
              <figcaption className="gx-cap"><span className="gx-cap-title gx-cap-sm">{shot.caption}</span></figcaption>
            </figure>
          ))}
          {work.videos?.map(({ video, caption, tag }) => {
            const portrait = video.orientation === 'portrait';
            return (
              <figure key={video.mp4} className="gx-card">
                <div className="gx-shot">
                  <video controls muted playsInline preload="none" poster={video.poster} width={portrait ? 540 : 854} height={portrait ? 960 : 480} aria-label={video.caption}>
                    <source src={video.mp4} type="video/mp4" />
                  </video>
                  <Tag tag={tag} />
                </div>
                <figcaption className="gx-cap"><span className="gx-cap-title gx-cap-sm">{caption}</span></figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ServiceWork({ slug }: { slug: string }) {
  const items = SERVICE_WORK[slug];
  if (!items) return null;

  return (
    <>
      {items.map((work) => <WorkSection key={work.h2} work={work} />)}
      <div className="sec" style={{ padding: '0 36px 40px', maxWidth: 'none' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Link href="/gallery" style={{ fontSize: 15, fontWeight: 600, color: 'var(--gold-text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>See more of our work</Link>
        </div>
      </div>
    </>
  );
}
