import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "driftlss.com" }],
        destination: "https://www.driftlss.com/:path*",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/services/therapy-seo",
        permanent: true,
      },
      {
        source: "/services/geo-aeo",
        destination: "/services/ai-visibility",
        permanent: true,
      },
      {
        source: "/services/chatbot",
        destination: "/services/ai-intake-assistant",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
