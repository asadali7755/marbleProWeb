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
    ];
  },
};

export default nextConfig;
