import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "driftlss.com" }],
        destination: "https://www.driftlss.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
