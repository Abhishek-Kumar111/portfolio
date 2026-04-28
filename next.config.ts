import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",   // ⭐ THIS WAS MISSING

  images: {
    unoptimized: true,
  },
};

export default nextConfig;