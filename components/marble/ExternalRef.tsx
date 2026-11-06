import { EXTERNAL_REFS } from '@/lib/externalRefs';

/** "Further reading" line with one trusted outside source. `plain` drops the section wrapper (blog posts). */
export default function ExternalRef({ path, plain }: { path: string; plain?: boolean }) {
  const ref = EXTERNAL_REFS[path];
  if (!ref) return null;

  const line = (
    <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.8, maxWidth: '68ch', margin: plain ? '24px 0 0' : 0 }}>
      Further reading:{' '}
      <a href={ref.url} target="_blank" rel="noopener" style={{ color: 'var(--gold-text)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>{ref.label}</a>
      {' '}on Wikipedia.
    </p>
  );
  if (plain) return line;

  return (
    <section className="sec" style={{ padding: '0 36px 40px', maxWidth: 'none' }} data-screen-label="further-reading">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>{line}</div>
    </section>
  );
}
