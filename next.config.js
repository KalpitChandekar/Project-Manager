/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the static export configuration
  // output: 'export', // Remove this line
  
  // Enable Server Actions
  experimental: {
    serverActions: {},
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
