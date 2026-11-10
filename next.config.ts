import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Hostinger shared hosting caps how many processes a build may start, so
  // keep the build to one worker.
  experimental: { cpus: 1 },
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
      // More old WordPress pages GSC still lists as 404 (Oct 2026).
      { source: '/our-team', destination: '/', permanent: true },
      { source: '/blog/page/:n', destination: '/blog', permanent: true },
      { source: '/remove-stains-from-marble-dubai', destination: '/blog/how-to-remove-yellow-stains-from-marble', permanent: true },
      // The 15 bot articles moved to question-style URLs (7 Nov 2026), so their
      // URLs no longer repeat the keywords the service pages target.
      { source: '/blog/marble-floor-restoration-dubai', destination: '/blog/marble-restoration-in-business-bay-towers', permanent: true },
      { source: '/blog/onyx-marble-polishing-dubai', destination: '/blog/onyx-care-guide', permanent: true },
      { source: '/blog/corian-countertop-polishing-dubai', destination: '/blog/can-corian-be-repaired', permanent: true },
      { source: '/blog/quartz-polishing-dubai', destination: '/blog/can-quartz-be-polished', permanent: true },
      { source: '/blog/granite-polishing-dubai', destination: '/blog/does-granite-need-polishing', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai', destination: '/blog/old-terrazzo-floors-restore-or-replace', permanent: true },
      { source: '/blog/marble-polishing-dubai', destination: '/blog/before-you-book-marble-polishing', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai', destination: '/blog/how-to-care-for-calacatta-marble', permanent: true },
      { source: '/blog/travertine-polishing-dubai', destination: '/blog/travertine-floors-filled-or-unfilled', permanent: true },
      { source: '/blog/marble-crystallization-sealing-dubai', destination: '/blog/crystallization-or-sealing', permanent: true },
      { source: '/blog/kitchen-top-polishing-dubai', destination: '/blog/which-kitchen-tops-can-be-polished', permanent: true },
      { source: '/blog/yellow-stain-removing-marble-dubai', destination: '/blog/why-white-marble-turns-yellow', permanent: true },
      { source: '/blog/marble-countertop-polishing-dubai', destination: '/blog/etch-marks-on-marble-countertops', permanent: true },
      { source: '/blog/emperador-marble-polishing-dubai', destination: '/blog/emperador-marble-care', permanent: true },
      { source: '/blog/crema-marfil-marble-polishing-dubai', destination: '/blog/crema-marfil-dull-or-patchy', permanent: true },
      // Near-duplicate bot articles removed in October 2026. Price and cost
      // URLs go to the cost guide, the rest to the matching service page.
      // The blog agent reads these sources as retired slugs and never reuses them.
      { source: '/blog/granite-polishing-dubai-facility', destination: '/services/granite-polishing', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-business-bay', destination: '/services/marble-floor-restoration', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-facebook', destination: '/services/marble-floor-restoration', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-hills', destination: '/services/marble-floor-restoration', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-expert', destination: '/services/marble-floor-restoration', permanent: true },
      { source: '/blog/marble-floor-restoration-dubai-reviews', destination: '/services/marble-floor-restoration', permanent: true },
      { source: '/blog/corian-countertop-polishing-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/corian-polishing-dubai-airport', destination: '/services/corian-countertop-polishing', permanent: true },
      { source: '/blog/corian-countertop-polishing-dubai-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/corian-countertop-polishing-dubai-abu-dhabi', destination: '/services/corian-countertop-polishing', permanent: true },
      { source: '/blog/corian-countertop-polishing-dubai-industrial-city', destination: '/services/corian-countertop-polishing', permanent: true },
      { source: '/blog/quartz-polishing-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/quartz-polishing-dubai-price-list', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/quartz-polishing-dubai-restoration', destination: '/services/quartz-polishing', permanent: true },
      { source: '/blog/quartz-polishing-dubai-hills', destination: '/services/quartz-polishing', permanent: true },
      { source: '/blog/granite-polishing-dubai-diamond', destination: '/services/granite-polishing', permanent: true },
      { source: '/blog/granite-polishing-dubai-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/granite-polishing-dubai-restore', destination: '/services/granite-polishing', permanent: true },
      { source: '/blog/granite-polishing-dubai-floor', destination: '/services/granite-polishing', permanent: true },
      { source: '/blog/granite-polishing-dubai-price-list', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-city', destination: '/services/terrazzo-polishing-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-best-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-brand', destination: '/services/terrazzo-polishing-dubai', permanent: true },
      { source: '/blog/terrazzo-polishing-dubai-industrial', destination: '/services/terrazzo-polishing-dubai', permanent: true },
      { source: '/blog/marble-polishing-price-dubai', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/marble-polishing-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/marble-polishing-company-dubai', destination: '/locations/dubai', permanent: true },
      { source: '/blog/marble-floor-polishing-dubai', destination: '/services/marble-polishing-dubai', permanent: true },
      { source: '/blog/quality-marble-polishing-dubai', destination: '/services/marble-polishing-dubai', permanent: true },
      { source: '/blog/emperador-marble-polishing-dubai-uae', destination: '/services/emperador-marble-polishing-dubai', permanent: true },
      { source: '/blog/emperador-marble-polishing-dubai-business', destination: '/services/emperador-marble-polishing-dubai', permanent: true },
      { source: '/blog/emperador-marble-polishing-dubai-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/emperador-marble-polishing-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-hotel', destination: '/services/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-islands', destination: '/services/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-shine', destination: '/services/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-abu-dhabi', destination: '/services/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/calacatta-marble-polishing-dubai-hills', destination: '/services/calacatta-marble-polishing-dubai', permanent: true },
      { source: '/blog/onyx-marble-polishing-dubai-costs', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/onyx-marble-polishing-dubai-golden', destination: '/services/onyx-marble-polishing-dubai', permanent: true },
      { source: '/blog/travertine-polishing-dubai-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/travertine-polishing-dubai-area', destination: '/services/travertine-polishing-dubai', permanent: true },
      { source: '/blog/travertine-polishing-dubai-floor', destination: '/services/travertine-polishing-dubai', permanent: true },
      { source: '/blog/travertine-polishing-dubai-contact', destination: '/services/travertine-polishing-dubai', permanent: true },
      { source: '/blog/kitchen-top-polishing-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/kitchen-top-polishing-dubai-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/kitchen-top-polishing-dubai-hills', destination: '/services/kitchen-top-polishing', permanent: true },
      { source: '/blog/kitchen-top-polishing-dubai-industrial-city', destination: '/services/kitchen-top-polishing', permanent: true },
      { source: '/blog/marble-crystallization-sealing-dubai-email', destination: '/services/crystallization-sealing', permanent: true },
      { source: '/blog/marble-crystallization-sealing-dubai-business-bay', destination: '/services/crystallization-sealing', permanent: true },
      { source: '/blog/yellow-stain-removing-marble-dubai-cost', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/crema-marfil-polishing-business-bay', destination: '/services/crema-marfil-polishing-dubai', permanent: true },
      { source: '/blog/crema-marfil-polishing-dubai-green-stain', destination: '/services/crema-marfil-polishing-dubai', permanent: true },
      { source: '/blog/marble-countertop-polishing-dubai-price', destination: '/blog/marble-polishing-cost-dubai', permanent: true },
      { source: '/blog/marble-countertop-polishing-dubai-contact', destination: '/services/marble-countertop-polishing', permanent: true },
    ];
  },
};

export default nextConfig;
