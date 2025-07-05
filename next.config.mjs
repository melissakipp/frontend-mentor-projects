/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx';
import { createRequire } from 'module';

// Create require function for CommonJS modules
const require = createRequire(import.meta.url);
// Use require for contentlayer
const { withContentlayer } = require('next-contentlayer');

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

// Export with both withContentlayer and withMDX applied
export default withContentlayer(withMDX(nextConfig));