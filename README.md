# Academic Homepage

The public source code for [academic.solitudinis.cc](https://academic.solitudinis.cc/), a personal academic homepage built with Next.js and Fumadocs.

The site brings together an about page, research interests, publications, projects, personal writing, a CV link, and selected academic service and travel records. It is designed as a content-focused personal site rather than a documentation template.

## Features

- Responsive layout for desktop, tablet, and mobile screens
- System-aware light and dark themes
- Fumadocs navigation, MDX content, metadata, and search primitives
- Publication explorer with year and venue filters
- Expandable abstracts and BibTeX citations
- News and updates with search and progressive disclosure
- Project and blog cards with dedicated detail pages
- Local Anthropic-inspired typography and custom visual elements
- Static generation for the main content pages
- Reduced-motion support and keyboard-accessible interactions

## Stack

- Next.js 16
- React 19
- TypeScript
- Fumadocs UI and Fumadocs MDX
- Tailwind CSS 4
- `next-themes`
- Paper Shaders

## Requirements

- Node.js 24.x
- npm

The repository includes an `.nvmrc` file for projects using nvm.

## Local development

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

To check the production build locally:

```bash
npm run types:check
npm run build
npm start
```

## Content and customization

Most site content is kept in a small number of predictable locations:

| Path | Purpose |
| --- | --- |
| `lib/site-data.ts` | Profile, research, news, honors, publications, projects, and services |
| `lib/site-metadata.ts` | Site metadata, canonical URL, and external profile links |
| `content/blog/*.mdx` | Blog and personal writing |
| `components/` | Reusable page sections and interactive components |
| `app/` | Routes, layouts, metadata, and global styles |
| `public/images/` | Publication and project artwork |
| `public/fonts/` | Local font files |

To adapt the site for another profile, start with `lib/site-data.ts`, `lib/site-metadata.ts`, and the MDX files in `content/blog/`. The page structure and visual system can then be adjusted in `components/` and `app/global.css`.

New blog entries can be added as `.mdx` files with frontmatter such as:

```md
---
title: A working note
description: A short description for cards and search results.
date: '2026-10-05'
category: Research
section: work
draft: true
---
```

Set `draft: false` or remove the field when an article is ready to publish.

## Deployment

The repository is suitable for deployment from GitHub to a Next.js-compatible host. The production site is deployed on Cloudflare and uses the `npm run build` command.

For a new deployment, configure the host to:

1. Install dependencies with `npm install`.
2. Build with `npm run build`.
3. Use the generated Next.js application according to the host's Next.js deployment workflow.

Set the canonical URL in `lib/site-metadata.ts` before deploying a fork.

## License

No open-source license has been applied to this repository yet. Until a license is added, the source remains available for reference but is not automatically licensed for redistribution or reuse.
