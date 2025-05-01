/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  basePath: '/KoreUg-Website',  
  output: 'export',
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

module.exports = nextConfig;
