import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/KoreUg-Website",  
  output: "export",
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
      ignoreDuringBuilds: true,
  },
  typescript: {
      ignoreBuildErrors: true,
  },
};

export default nextConfig;
