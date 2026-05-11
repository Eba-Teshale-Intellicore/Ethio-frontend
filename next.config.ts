import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ethio-heroes.onrender.com",
      },
    ],
  },
};

export default nextConfig;