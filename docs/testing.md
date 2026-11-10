# Browser regression checks

The suite runs against a **production build** at `127.0.0.1:3100`; the development
server on port 3001 can stay open.

```bash
npm ci
npx playwright install chromium
npm run types:check
npm run build
npm run test:e2e
npm run test:report
```

The nine configurations cover widths of 390, 768, and 1440 pixels in light,
dark, and system themes. System-theme tests also change the browser's color
preference while the page is open.

Checks cover the main pages, project and article details, image loading,
horizontal overflow, duplicate IDs, News expansion/collapse, publication panels
remaining open during search, and the Services & Travel collapse control.

Full-page screenshots are attached to the HTML report for every route and
configuration. Reduced-motion mode keeps those screenshots repeatable.
Review screenshots when changing typography, SVGs, cards, or breakpoints;
these are review artifacts, not cross-platform pixel-match baselines.

To run a smaller selection:

```bash
npm run test:e2e -- --project=phone-dark
npm run test:e2e -- --project=desktop-light --grep "publication"
```

GitHub Actions performs the same type check and browser suite on pushes and
pull requests. It uses `npm run build:cloudflare` for the production build,
which also packages the OpenNext Worker and assets. Run that command locally
when changing `wrangler.jsonc`, `open-next.config.ts`, or deployment dependencies.
`npx wrangler deploy --dry-run` validates the resulting Worker bundle without
publishing it.

Download `browser-regression-report` from
the run's artifacts to inspect screenshots or failure traces. Reports are
retained for 14 days; generated local reports stay outside Git.
