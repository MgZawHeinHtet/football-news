import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ichef.bbci.co.uk"],
    remotePatterns: [
      {
        protocol: "https",
        hostname : "**"
      },
    ],
  },
};

export default nextConfig;
