import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: false,
  poweredByHeader: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      // non-www → www (canonical domain)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'marblepro.ae' }],
        destination: 'https://www.marblepro.ae/:path*',
        permanent: true,
      },
      // /about was indexed by Google at some point (GSC still reports it
      // under Page indexing -> Not found) but no /app/about route has ever
      // existed in this repo's git history -- send it home instead of
      // leaving it a dead 404.
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      // The daily AI blog agent kept generating multiple near-duplicate
      // articles per topic (same keyword, different suffix -- some suffixes
      // were nonsense like "-facebook"/"-airport"/"-email" from noisy
      // keyword suggestions). Consolidated to one canonical article per
      // topic in lib/generated-blog-posts.json; these redirects preserve
      // any existing indexing/backlinks on the removed URLs.
      // -> /blog/marble-floor-restoration-dubai
      { source: '/blog/marble-floor-restoration-dubai-business-bay', destination: '/blog/marble-floor-restoration-dubai', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-facebook', destination: '/blog/marble-floor-restoration-dubai', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-hills', destination: '/blog/marble-floor-restoration-dubai', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-expert', destination: '/blog/marble-floor-restoration-dubai', permanent: true },
      // -> /blog/corian-countertop-polishing-dubai
      { source: '/blog/corian-countertop-polishing-dubai-cost', destination: '/blog/corian-countertop-polishing-dubai', permanent: true },
      { source: '/blog/corian-polishing-dubai-airport', destination: '/blog/corian-countertop-polishing-dubai', permanent: true },
      { source: '/blog/corian-countertop-polishing-dubai-price', destination: '/blog/corian-countertop-polishing-dubai', permanent: true },
      // -> /blog/quartz-polishing-dubai
      { source: '/blog/quartz-polishing-dubai-cost', destination: '/blog/quartz-polishing-dubai', permanent: true },
      { source: '/blog/quartz-polishing-dubai-price-list', destination: '/blog/quartz-polishing-dubai', permanent: true },
      { source: '/blog/quartz-polishing-dubai-restoration', destination: '/blog/quartz-polishing-dubai', permanent: true },
      // -> /blog/granite-polishing-dubai
      { source: '/blog/granite-polishing-dubai-diamond', destination: '/blog/granite-polishing-dubai', permanent: true },
      { source: '/blog/granite-polishing-dubai-price', destination: '/blog/granite-polishing-dubai', permanent: true },
      { source: '/blog/granite-polishing-dubai-restore', destination: '/blog/granite-polishing-dubai', permanent: true },
      // -> /blog/terrazzo-polishing-dubai
      { source: '/blog/terrazzo-polishing-dubai-city', destination: '/blog/terrazzo-polishing-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-best-price', destination: '/blog/terrazzo-polishing-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-cost', destination: '/blog/terrazzo-polishing-dubai', permanent: true },
      // -> /blog/marble-polishing-dubai
      { source: '/blog/marble-polishing-price-dubai', destination: '/blog/marble-polishing-dubai', permanent: true },
      { source: '/blog/marble-polishing-dubai-cost', destination: '/blog/marble-polishing-dubai', permanent: true },
      { source: '/blog/marble-polishing-company-dubai', destination: '/blog/marble-polishing-dubai', permanent: true },
      { source: '/blog/marble-floor-polishing-dubai', destination: '/blog/marble-polishing-dubai', permanent: true },
      // -> /blog/emperador-marble-polishing-dubai
      { source: '/blog/emperador-marble-polishing-dubai-uae', destination: '/blog/emperador-marble-polishing-dubai', permanent: true },
      { source: '/blog/emperador-marble-polishing-dubai-business', destination: '/blog/emperador-marble-polishing-dubai', permanent: true },
      // -> /blog/calacatta-marble-polishing-dubai
      { source: '/blog/calacatta-marble-polishing-dubai-hotel', destination: '/blog/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-islands', destination: '/blog/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-shine', destination: '/blog/calacatta-marble-polishing-dubai', permanent: true },
      // -> /blog/onyx-marble-polishing-dubai
      { source: '/blog/onyx-marble-polishing-dubai-costs', destination: '/blog/onyx-marble-polishing-dubai', permanent: true },
      // -> /blog/travertine-polishing-dubai
      { source: '/blog/travertine-polishing-dubai-price', destination: '/blog/travertine-polishing-dubai', permanent: true },
      { source: '/blog/travertine-polishing-dubai-area', destination: '/blog/travertine-polishing-dubai', permanent: true },
      // -> /blog/kitchen-top-polishing-dubai
      { source: '/blog/kitchen-top-polishing-dubai-cost', destination: '/blog/kitchen-top-polishing-dubai', permanent: true },
      { source: '/blog/kitchen-top-polishing-dubai-price', destination: '/blog/kitchen-top-polishing-dubai', permanent: true },
      // -> /blog/marble-crystallization-sealing-dubai
      { source: '/blog/marble-crystallization-sealing-dubai-email', destination: '/blog/marble-crystallization-sealing-dubai', permanent: true },
      // -> /blog/yellow-stain-removing-marble-dubai
      { source: '/blog/yellow-stain-removing-marble-dubai-cost', destination: '/blog/yellow-stain-removing-marble-dubai', permanent: true },
    ];
  },
};

export default nextConfig;
