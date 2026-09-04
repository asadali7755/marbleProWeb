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
    ];
  },
};

export default nextConfig;
