import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
          hostname: "article-cdn.prod.gabit.com",
      },
      {
        protocol: "https",
      hostname: "**",
      },
    ],
  },
};

export default nextConfig;
