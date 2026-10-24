import { NextRequest, NextResponse } from 'next/server';

/**
 * WORDPRESS LEGACY URL HANDLER
 *
 * This site was previously a WordPress site on the same domain.
 * Old WP pages may still be in Google's index. We return HTTP 410 Gone
 * (not 404) for all known WordPress URL patterns so Googlebot understands
 * the content has been permanently removed and drops those URLs faster.
 *
 * 410 Gone = "this content existed but was permanently removed"
 * This is faster for de-indexing than a generic 404.
 */

// Path-based WordPress URL patterns
const WP_PATH_PATTERNS: RegExp[] = [
  // WP admin & system
  /^\/wp-admin(\/|$)/i,
  /^\/wp-login\.php/i,
  /^\/wp-cron\.php/i,
  /^\/wp-signup\.php/i,
  /^\/wp-activate\.php/i,
  /^\/wp-trackback\.php/i,
  /^\/xmlrpc\.php/i,
  /^\/wp-includes\//i,
  /^\/wp-content\//i,
  /^\/wp-json\//i,
  // WP feeds
  /^\/feed\/?$/i,
  /^\/feed\/(rss|atom|rdf|rss2)(\/|$)/i,
  /^\/comments\/feed\/?$/i,
  /^\/.*\/feed\/?$/i,
  // WP taxonomy & author archives
  /^\/category\//i,
  /^\/tag\//i,
  /^\/author\//i,
  // WP date archives  /2022/04/ or /2022/04/post-slug/
  /^\/(19|20)\d{2}\/\d{2}(\/|$)/,
  // WP paginated archives  /page/2/
  /^\/page\/\d+\/?$/i,
  // WP embed URLs
  /^\/embed\//i,
  // Common WP plugin/theme paths
  /^\/wp-sitemap\.xml/i,
  /^\/wp-sitemap-/i,
];

// WordPress query-string parameters used in old URLs
// e.g. /?p=123  /?page_id=45  /?cat=3
const WP_QUERY_PARAMS = [
  'p',
  'page_id',
  'cat',
  'tag',
  'author',
  'paged',
  'attachment_id',
  's',           // WP search
  'preview',     // WP preview
  'preview_id',
  'preview_nonce',
];

const GONE_HTML =
  '<!DOCTYPE html><html><head><title>410 Gone</title></head>' +
  '<body><h1>410 Gone</h1>' +
  '<p>This page no longer exists on this website.</p>' +
  '<p><a href="/">Visit our homepage</a></p>' +
  '</body></html>';

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Block WordPress path-based URLs
  if (WP_PATH_PATTERNS.some((re) => re.test(pathname))) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  // Block WordPress query-string based URLs
  if (WP_QUERY_PARAMS.some((param) => searchParams.has(param))) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static assets
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|css|js|woff2?|ttf|otf)).*)',
  ],
};
