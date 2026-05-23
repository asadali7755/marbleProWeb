import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block WP admin/internal paths — but NOT old content slugs.
        // Old content paths should return 410 (handled by middleware) so
        // Googlebot can read the 410 and remove them from the index.
        // Blocking them here would prevent Google from seeing the 410.
        disallow: [
          '/wp-admin/',
          '/wp-login.php',
          '/wp-cron.php',
          '/wp-signup.php',
          '/wp-activate.php',
          '/wp-trackback.php',
          '/xmlrpc.php',
          '/wp-includes/',
          '/wp-content/',
          '/wp-json/',
          '/api/',        // Next.js API routes — not web pages
          '/?s=',         // Search result pages (WP search)
        ],
      },
    ],
    sitemap: 'https://www.marblepro.ae/sitemap.xml',
    host: 'https://www.marblepro.ae',
  };
}
