import type { Metadata } from 'next';
import Link from 'next/link';

// noindex so this page is never accidentally indexed by Google
export const metadata: Metadata = {
  title: 'Page Not Found — MarblePro UAE',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'grid',
        placeItems: 'center',
        padding: '80px 24px',
        fontFamily: 'var(--grot, system-ui, sans-serif)',
        background: 'var(--paper, #f6f1e8)',
        color: 'var(--ink, #1a1208)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 500 }}>
        {/* Big ghost number */}
        <p
          style={{
            fontSize: 'clamp(80px, 20vw, 140px)',
            fontFamily: 'var(--display, Georgia, serif)',
            fontWeight: 400,
            lineHeight: 1,
            margin: 0,
            opacity: 0.07,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          404
        </p>

        <h1
          style={{
            fontSize: 'clamp(22px, 5vw, 32px)',
            fontFamily: 'var(--display, Georgia, serif)',
            fontWeight: 500,
            margin: '-0.5em 0 0.5em',
            letterSpacing: '-0.02em',
          }}
        >
          Page not found
        </h1>

        <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.65, margin: '0 0 36px' }}>
          This page doesn&apos;t exist on our website. If you followed an old link
          from our previous site, that content has been permanently removed.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              background: 'var(--ink, #1a1208)',
              color: 'var(--paper, #f6f1e8)',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'var(--grot, system-ui)',
            }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '11px 28px',
              border: '1.5px solid var(--ink, #1a1208)',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'var(--grot, system-ui)',
            }}
          >
            Contact Us
          </Link>
        </div>

        <p
          style={{
            marginTop: 48,
            fontSize: 13,
            opacity: 0.5,
            fontFamily: 'var(--mono, monospace)',
            letterSpacing: '0.04em',
          }}
        >
          marblepro.ae · Marble Polishing Dubai & UAE
        </p>
      </div>
    </main>
  );
}
