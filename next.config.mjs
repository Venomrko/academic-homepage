import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const assetRedirects = [
  ...[
    ['neurips26', 'lspo'],
    ['icml26', 'geometric-reasoner'],
    ['ijcai26', 'gogi-skip'],
    ['cogsci26', 'ratchet-effect'],
    ['iconip25', 'factprompt'],
    ['smc25', 'twin-prompt'],
    ['ijcnn24', 'heuristic-cot'],
  ].map(([event, paper]) => [
    `/images/publications/poster/${event}.pdf`,
    `/images/publications/${paper}/poster.pdf`,
  ]),
  [
    '/images/publications/:paper(lspo|geometric-reasoner|gogi-skip|twin-prompt)-preview.webp',
    '/images/publications/:paper/preview.webp',
  ],
  [
    '/images/publications/:paper(lspo|geometric-reasoner|gogi-skip|twin-prompt).webp',
    '/images/publications/:paper/figure.webp',
  ],
  [
    '/images/publications/:paper(ratchet-effect|factprompt|heuristic-cot).webp',
    '/images/publications/:paper/preview.webp',
  ],
  [
    '/images/publications/:name(context-prediction|human-ai-disagreement|model-expectations).svg',
    '/images/publications/archive/:name.svg',
  ],
  [
    '/images/projects/climate-component-:file(ingestion\\.svg|models\\.svg|search\\.mp4|search-poster\\.webp|citations\\.svg|feedback\\.webp)',
    '/images/projects/climate-change-dialogue-system/components/:file',
  ],
  [
    '/images/projects/climate-:figure(answer-example|dialogue-workflow|embedding-architecture|embedding-results|reranker-architecture|reranker-results|retrieval-ablation|twin-prompt).webp',
    '/images/projects/climate-change-dialogue-system/figures/:figure.webp',
  ],
  [
    '/images/travel/:journey(icml-2026-seoul|iconip-2025-okinawa|ijcai-2026-bremen-europe|ijcnn-2024-yokohama-first-journey|smc-2025-vienna-europe)-:theme(light|dark).webp',
    '/images/blog/:journey/maps/:theme.webp',
  ],
].map(([source, destination]) => ({ source, destination, permanent: true }));

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      ...assetRedirects,
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
