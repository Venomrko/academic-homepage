import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog/conference-questions-2024-2026',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/self-correction-and-cognitive-scaling',
        destination: '/blog/cognitive-reasoning-and-cumulative-intelligence',
        permanent: true,
      },
      {
        source: '/blog/structured-reasoning-in-base-language-models',
        destination: '/blog/structured-reasoning-and-factual-verification',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
