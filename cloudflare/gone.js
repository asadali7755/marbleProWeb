// 410 Gone for old WordPress URLs (this domain used to be a WordPress site).
// Shared by the Pages Functions under functions/; replaces the Next.js proxy,
// which a static export cannot run. 410 drops the URLs from Google faster
// than a 404.

const GONE_HTML =
  '<!DOCTYPE html><html><head><title>410 Gone</title></head>' +
  '<body><h1>410 Gone</h1>' +
  '<p>This page no longer exists on this website.</p>' +
  '<p><a href="/">Visit our homepage</a></p>' +
  '</body></html>';

export const gone = () =>
  new Response(GONE_HTML, {
    status: 410,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });
