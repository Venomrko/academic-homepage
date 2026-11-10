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
| `lib/data/` | Profile, research, news, honors, publications, projects, CV, and services |
| `lib/site-metadata.ts` | Site title, canonical URL, and social metadata |
| `content/blog/*.mdx` | Blog and personal writing |
| `components/` | Reusable page sections and interactive components |
| `app/` | Routes, layouts, metadata, and global styles |
| `public/images/` | Publication and project artwork |
| `public/fonts/` | Local font files |
| `components/project-visuals/`, `components/stamps/` | Individual SVG illustrations and blog motifs |
| `tests/browser/` | Viewport, theme, layout, and interaction regression checks |

To adapt the site for another profile, start with `lib/data/profile.ts`,
the other files in `lib/data/`, `lib/site-metadata.ts`, and the MDX files in
`content/blog/`. The page structure and visual system can then be adjusted in
`components/` and `app/global.css`. `lib/site-data.ts` retains compatibility
exports; components import only the data module they need.

New blog entries can be added as `.mdx` files with frontmatter such as:

```md
---
title: A working note
description: A short description for cards and search results.
date: '2026-10-05'
category: Research
section: work
readingTime: 4 min
draft: true
---
```

Set `draft: false` or remove the field when an article is ready to publish.
For later substantive revisions, add `updated: 'YYYY-MM-DD'` while retaining
the original `date`. The sitemap and article metadata use this revision date.
Project records have their own `updated` field. Other page-content dates are
maintained in `lib/data/content-updates.ts`; these are not deployment dates.

## Validation

GitHub Actions checks types, builds the production site, and runs the browser
regression suite on every push and pull request. The suite covers 390px, 768px,
and 1440px viewports in light, dark, and system themes, with full-page screenshots
attached to its HTML report. See [docs/testing.md](docs/testing.md) for local
commands and review instructions.

## Deployment

The production site runs on Cloudflare Workers through the OpenNext adapter.
`wrangler.jsonc` and `open-next.config.ts` define the Worker, static assets,
image binding, and R2 incremental cache. Adapter and Wrangler versions are
locked with the project dependencies.

Configure Cloudflare Workers Builds with:

| Setting | Production (`main`) | Branch previews |
| --- | --- | --- |
| Build command | `npm run build:cloudflare` | `npm run build:cloudflare` |
| Deploy command | `npx opennextjs-cloudflare deploy` | `npx wrangler preview` |

The `previews` block supplies Preview-specific bindings. Preview deployments
use `academic-homepage-preview-cache`; production uses
`academic-homepage-opennext-cache`. Create both R2 buckets before deploying.
Production's self-reference service binding is deliberately absent from
Previews, so preview requests do not call the production Worker.

For an authenticated local deployment, use `npm run deploy:cloudflare`.
`npm run preview:cloudflare` publishes the current branch as a remote Cloudflare
Preview; it does not start a local development server. Continue to use
`npm run dev` for local development.

Before deploying a fork, update the Worker name, self-reference binding, and
bucket names in `wrangler.jsonc`, and the canonical URL in
`lib/site-metadata.ts`. Other Next.js-compatible hosts can still use
`npm run build` and their normal Next.js deployment workflow.

## License

No open-source license has been applied to this repository yet. Until a license is added, the source remains available for reference but is not automatically licensed for redistribution or reuse.
