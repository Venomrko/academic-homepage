import { test, expect, type Page, type TestInfo } from '@playwright/test';

test.beforeEach(async ({ page }, testInfo) => {
  await page.addInitScript((theme) => {
    if (theme === 'system') localStorage.removeItem('theme');
    else localStorage.setItem('theme', theme);
  }, String(testInfo.project.metadata.theme));
});

async function visit(page: Page, path: string) {
  const response = await page.goto(path);
  expect(response?.status(), path).toBe(200);
  await expect(page.locator('main#main-content')).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  if (path === '/') {
    await expect(page.locator('.updates-layout')).toHaveAttribute('data-adaptive-ready', 'true');
    await expect(page.locator('.updates-layout')).toHaveAttribute('data-fitting', 'false');
  }
}

async function checkLayoutAndCapture(page: Page, name: string, testInfo: TestInfo) {
  // Scroll through long pages so lazy images are checked as well.
  await page.evaluate(async () => {
    const height = document.documentElement.scrollHeight;
    for (let top = 0; top < height; top += window.innerHeight) {
      window.scrollTo(0, top);
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    }
  });
  await expect.poll(() => page.locator('main img').evaluateAll((images) =>
    images.every((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0),
  )).toBe(true);
  await page.evaluate(() => window.scrollTo(0, 0));

  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow, `${name}: horizontal overflow`).toBeLessThanOrEqual(1);
  await expect(page.locator('main h1')).toHaveCount(1);

  const duplicateIds = await page.evaluate(() => {
    const seen = new Set<string>();
    return [...document.querySelectorAll('[id]')].map((node) => node.id).filter((id) => {
      const duplicate = seen.has(id);
      seen.add(id);
      return duplicate;
    });
  });
  expect(duplicateIds, `${name}: duplicate IDs`).toEqual([]);
  // Small header stamps must not inherit the large illustration's blank space.
  for (const artwork of await page.locator('.resource-card-art-header').all()) {
    const wrapper = await artwork.boundingBox();
    const stamp = await artwork.locator('.concept-stamp').boundingBox();
    expect(wrapper?.height ?? 0).toBeLessThanOrEqual((stamp?.height ?? 0) + 1);
    expect(wrapper?.width ?? 0).toBeLessThanOrEqual((stamp?.width ?? 0) + 1);
  }
  const path = testInfo.outputPath(`${name}.png`);
  await page.screenshot({ path, fullPage: true, animations: 'disabled' });
  await testInfo.attach(name, { path, contentType: 'image/png' });
}

test('main pages fit each viewport and theme', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));

  for (const [path, name] of [
    ['/', 'about'],
    ['/publications', 'publications'],
    ['/projects', 'projects'],
    ['/blog', 'blog'],
    ['/blog/life', 'personal-essays'],
    ['/cv', 'cv'],
  ]) {
    await visit(page, path);
    const expectedDark = testInfo.project.metadata.theme !== 'light';
    await expect(page.locator('html')).toHaveClass(expectedDark ? /dark/ : /light/);
    await checkLayoutAndCapture(page, name, testInfo);
  }
  const sitemap = await page.request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const dates = [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((match) => match[1]);
  expect(dates.length).toBeGreaterThan(0);
  for (const date of dates) expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  expect(xml).not.toContain('solitudinis.cc/blog/a-space-for-working-notes');
  expect(errors).toEqual([]);
});

test('news and honors expand independently, and system theme follows the browser', async ({ page }, testInfo) => {
  await visit(page, '/');
  await expect(page).toHaveTitle("Ren's Homepage");
  const visibleRows = page.locator('#news-table tbody tr[data-visible="true"]');
  const initialRows = await visibleRows.count();
  const totalRows = await page.locator('#news-table tbody tr[data-visible]').count();
  const visibleHonors = page.locator('#honors-list .honor-entry[aria-hidden="false"]');
  const initialHonors = await visibleHonors.count();
  const totalHonors = await page.locator('#honors-list .honor-entry').count();
  const documentTop = (selector: string) => page.locator(selector).evaluate(
    (node) => node.getBoundingClientRect().top + window.scrollY,
  );
  const sideBySide = (page.viewportSize()?.width ?? 0) > 1000;
  const honorsButtonTop = await documentTop('.honors-more');
  if (sideBySide) {
    expect(Math.abs(await documentTop('.news-more') - honorsButtonTop)).toBeLessThanOrEqual(1);
    expect(initialRows).toBeLessThanOrEqual(10);
    expect(initialHonors).toBeLessThanOrEqual(6);
  } else {
    expect(initialRows).toBe(10);
    expect(initialHonors).toBe(6);
  }
  await page.locator('.news-more').click();
  await expect(page.locator('.news-less')).toBeVisible();
  expect(await visibleRows.count()).toBeGreaterThan(initialRows);
  await expect(visibleHonors).toHaveCount(initialHonors);
  if (sideBySide) {
    await expect.poll(async () =>
      Math.abs(await documentTop('.honors-more') - honorsButtonTop),
    ).toBeLessThanOrEqual(1);
  }
  await page.locator('.news-less').click();
  await expect(visibleRows).toHaveCount(initialRows);
  await expect(page.locator('.news-more')).toBeVisible();

  await expect.poll(() => page.locator('.news-section').evaluate((section) =>
    section.getAnimations({ subtree: true }).filter((animation) => animation.playState === 'running').length,
  )).toBe(0);
  const newsButtonTop = await documentTop('.news-more');
  await page.locator('.honors-more').click();
  await expect(page.locator('.honors-less')).toBeVisible();
  await expect(visibleHonors).toHaveCount(Math.min(initialHonors + 2, totalHonors));
  await expect(page.locator('.honors-more')).toContainText(`(${totalHonors - initialHonors - 2})`);
  await expect(visibleRows).toHaveCount(initialRows);
  if (sideBySide) {
    await expect.poll(async () =>
      Math.abs(await documentTop('.news-more') - newsButtonTop),
    ).toBeLessThanOrEqual(1);
  }
  await checkLayoutAndCapture(page, 'expanded-honors', testInfo);
  // Equal expansion steps align again without one button operating the other side.
  await page.locator('.news-more').click();
  if (sideBySide) {
    await expect.poll(async () =>
      Math.abs(await documentTop('.news-less') - await documentTop('.honors-less')),
    ).toBeLessThanOrEqual(1);
    await expect.poll(async () =>
      Math.abs(await documentTop('.news-less') - await documentTop('.honors-more')),
    ).toBeLessThanOrEqual(1);
  }
  await checkLayoutAndCapture(page, 'expanded-both', testInfo);
  const onceExpandedRows = await visibleRows.count();
  // A second small batch can finish the honors independently of the news.
  await page.locator('.honors-more').click();
  await expect(visibleHonors).toHaveCount(Math.min(initialHonors + 4, totalHonors));
  await expect(page.locator('.honors-more')).toHaveCount(0);
  expect(await visibleRows.count()).toBeGreaterThan(initialRows);
  await page.locator('.honors-less').click();
  await expect(visibleHonors).toHaveCount(Math.min(initialHonors + 2, totalHonors));
  await expect(visibleRows).toHaveCount(onceExpandedRows);
  await expect(page.locator('.honors-more')).toBeVisible();
  if (sideBySide) {
    await expect.poll(async () =>
      Math.abs(await documentTop('.news-less') - await documentTop('.honors-less')),
    ).toBeLessThanOrEqual(1);
  }
  // Once aligned, collapsing the news leaves the honors at their current stage.
  await page.locator('.news-less').click();
  await expect(visibleRows).toHaveCount(initialRows);
  await expect(visibleHonors).toHaveCount(Math.min(initialHonors + 2, totalHonors));
  // Collapse directly across multiple stages to the other panel's position.
  await page.locator('.honors-more').click();
  await expect(visibleHonors).toHaveCount(Math.min(initialHonors + 4, totalHonors));
  await page.locator('.honors-less').click();
  await expect(visibleHonors).toHaveCount(initialHonors);
  await expect(visibleRows).toHaveCount(initialRows);
  if (sideBySide) {
    await expect.poll(async () =>
      Math.abs(await documentTop('.news-more') - await documentTop('.honors-more')),
    ).toBeLessThanOrEqual(1);
  }
  await expect(page.locator('.honors-more')).toBeVisible();

  const honorsTopBeforeSearch = await documentTop('.honors-more');
  const search = page.getByRole('searchbox', { name: 'Search updates by date, category, or title' });
  await search.fill('no matching update');
  await expect(visibleRows).toHaveCount(0);
  await expect(visibleHonors).toHaveCount(initialHonors);
  if (sideBySide) {
    expect(Math.abs(await documentTop('.honors-more') - honorsTopBeforeSearch)).toBeLessThanOrEqual(1);
  }
  await search.press('Escape');
  await expect(visibleRows).toHaveCount(initialRows);
  await expect(page.locator('.news-more')).toContainText(`(${totalRows - initialRows})`);

  if (sideBySide) {
    const viewport = page.viewportSize()!;
    for (const width of [1200, 1050, viewport.width]) {
      await page.setViewportSize({ width, height: viewport.height });
      await page.evaluate(() => new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      ));
      await expect(page.locator('.updates-layout')).toHaveAttribute('data-fitting', 'false');
      await expect.poll(async () =>
        Math.abs(await documentTop('.news-more') - await documentTop('.honors-more')),
      ).toBeLessThanOrEqual(1);
      const clipped = await visibleHonors.locator('.honor-entry-inner').evaluateAll((entries) =>
        entries.filter((entry) => entry.scrollHeight > entry.clientHeight + 1).length,
      );
      expect(clipped).toBe(0);
      await page.locator('.news-more').click();
      await page.locator('.honors-more').click();
      await expect.poll(async () =>
        Math.abs(await documentTop('.news-less') - await documentTop('.honors-less')),
      ).toBeLessThanOrEqual(1);
      await page.locator('.news-less').click();
      await page.locator('.honors-less').click();
    }
    await expect(visibleRows).toHaveCount(initialRows);
    await expect(visibleHonors).toHaveCount(initialHonors);
  }

  if (testInfo.project.metadata.theme === 'system') {
    await page.emulateMedia({ colorScheme: 'light' });
    await expect(page.locator('html')).toHaveClass(/light/);
    await page.emulateMedia({ colorScheme: 'dark' });
    await expect(page.locator('html')).toHaveClass(/dark/);
  }
});

test('publication panels stay open during a matching search', async ({ page }, testInfo) => {
  await visit(page, '/publications');
  await expect(page.locator('#services-travel-title')).toHaveText('Service & Travel.');
  const locatedServices = page.locator('.services-travel-entry:has(.services-travel-details > p)');
  expect(await locatedServices.count()).toBeGreaterThan(0);
  const mismatchedMetadata = await locatedServices.evaluateAll((entries) =>
    entries.filter((entry) => {
      const locationColor = getComputedStyle(entry.querySelector('p')!).color;
      return [...entry.querySelectorAll('.services-travel-kind, .services-travel-meta time')]
        .some((node) => getComputedStyle(node).color !== locationColor);
    }).length,
  );
  expect(mismatchedMetadata).toBe(0);
  const mismatchedFonts = await page.locator('.services-travel-entry').evaluateAll((entries) =>
    entries.filter((entry) => [...entry.querySelectorAll('.services-travel-meta > *')]
      .some((node) => getComputedStyle(node).fontFamily
        !== getComputedStyle(entry.querySelector('h3')!).fontFamily)).length,
  );
  expect(mismatchedFonts).toBe(0);
  const locationGaps = await locatedServices.evaluateAll((entries) =>
    entries.map((entry) => entry.querySelector('p')!.getBoundingClientRect().top
      - entry.querySelector('.services-travel-meta')!.getBoundingClientRect().bottom),
  );
  for (const gap of locationGaps) expect(gap).toBeCloseTo(3, 1);
  const paper = page.locator('#publication-lspo');
  const abstract = paper.getByRole('button', { name: 'ABS', exact: true });
  const citation = paper.getByRole('button', { name: 'CITATION', exact: true });
  await abstract.click();
  await citation.click();
  await expect(paper.locator('.publication-panel[data-open="true"]')).toHaveCount(2);
  const visibleServices = page.locator('.services-travel-entry[aria-hidden="false"]');
  const initialServiceCount = await visibleServices.count();
  const publicationSearch = page.getByRole('searchbox', { name: 'Search publications by title, author, year, venue, or keyword' });
  await publicationSearch.fill('Lifted State');
  const visiblePublication = page.locator('.publication-entry[data-visible="true"]');
  await expect(visiblePublication).toHaveCount(1);
  await expect(visiblePublication).toHaveAttribute('data-last-visible', 'true');
  await expect.poll(() => visiblePublication.evaluate((node) => getComputedStyle(node).borderBottomWidth)).toBe('0px');
  await expect(visibleServices).toHaveCount(initialServiceCount);
  await expect(abstract).toHaveAttribute('aria-expanded', 'true');
  await expect(citation).toHaveAttribute('aria-expanded', 'true');
  // Expanded content spans the whole middle list, including its image column.
  const widths = await paper.evaluate((node) => ({
    entry: node.querySelector('.publication-entry-body')!.getBoundingClientRect().width,
    panel: node.querySelector('.publication-panel')!.getBoundingClientRect().width,
  }));
  expect(Math.abs(widths.entry - widths.panel)).toBeLessThanOrEqual(1);

  const services = page.locator('.services-travel-toggle');
  if (await services.isVisible()) {
    await services.click();
    await expect(services).toHaveText(/See less/);
    await expect(services).toHaveAttribute('aria-expanded', 'true');
    await services.click();
    await expect(services).toHaveText(/See more/);
  }
  await checkLayoutAndCapture(page, 'expanded-publication', testInfo);
});

test('project and article details keep their illustrations and readable layout', async ({ page }, testInfo) => {
  for (const [path, name, artwork] of [
    ['/projects/climate-change-dialogue-system', 'climate-detail', '.project-visual svg'],
    ['/projects/industrial-digital-twins', 'twin-detail', '.project-visual svg'],
    ['/projects/blockchain-digital-solutions', 'ledger-detail', '.project-visual svg'],
    ['/blog/efficient-inference-and-geometric-reasoning', 'research-article', '.concept-stamp svg'],
    ['/blog/ijcnn-2024-yokohama-first-journey', 'travel-article', '.concept-stamp svg'],
  ]) {
    await visit(page, path);
    await expect(page.locator(artwork)).toBeVisible();
    await expect(page.locator('.reading-outline-time')).toHaveText(/^\d+ min read$/);
    if ((page.viewportSize()?.width ?? 0) > 1023) {
      await expect(page.locator('.reading-outline-time')).toBeVisible();
    }
    const pageWidths = await page.locator('#main-content').evaluate((main) => ({
      main: main.getBoundingClientRect().width,
      site: document.querySelector('.site-footer')!.getBoundingClientRect().width,
      heading: main.querySelector('header')!.getBoundingClientRect().width,
    }));
    expect(Math.abs(pageWidths.main - pageWidths.site)).toBeLessThanOrEqual(1);
    expect(Math.abs(pageWidths.heading - pageWidths.main)).toBeLessThanOrEqual(1);
    if (path.startsWith('/blog/')) {
      const readingTime = await page.locator('.reading-outline-time').textContent();
      await expect(page.locator('.article-meta')).toContainText(readingTime!);
      const published = await page.locator('meta[property="article:published_time"]').getAttribute('content');
      const modified = await page.locator('meta[property="article:modified_time"]').getAttribute('content');
      expect(modified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(modified! >= published!).toBe(true);
    }
    await checkLayoutAndCapture(page, name, testInfo);
  }
});

test('article trees navigate sections and track reading progress', async ({ page }) => {
  for (const path of [
    '/blog/efficient-inference-and-geometric-reasoning',
    '/projects/climate-change-dialogue-system',
  ]) {
    await visit(page, path);
    const outline = page.getByRole('navigation', { name: 'On this page' });
    const progress = page.getByRole('progressbar', { name: 'Reading progress' });
    const toggle = page.getByRole('button', { name: 'Toggle article outline' });
    await expect(progress).toHaveAttribute('aria-valuenow', '0');

    const compact = (page.viewportSize()?.width ?? 0) <= 1023;
    if (compact) {
      await expect(outline).toBeHidden();
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await toggle.press('Escape');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(toggle).toBeFocused();
      await toggle.click();
    }
    await expect(outline).toBeVisible();
    // Every entry points to an actual heading, including nested project sections.
    const missingTargets = await outline.locator('a').evaluateAll((links) =>
      links.filter((link) => !document.getElementById(
        decodeURIComponent(link.getAttribute('href')!.slice(1)),
      )).map((link) => link.getAttribute('href')),
    );
    expect(missingTargets).toEqual([]);

    if (path.startsWith('/projects/')) {
      const contribution = outline.locator('a[href="#project-contributions"]');
      await contribution.click();
      if (compact) await toggle.click();
      await expect(contribution).toHaveAttribute('aria-expanded', 'true');
      const child = outline.locator('a[href="#project-contribution-2"]');
      await expect(child).toBeVisible();
      await child.click();
      await expect(page.locator('.reading-tree-link[aria-current="location"]')).toHaveAttribute('href', '#project-contribution-2');
      if (compact) await toggle.click();
    }

    const target = outline.locator(':scope > div > .reading-tree > li > a').last();
    const href = await target.getAttribute('href');
    await target.click();
    await expect(page.locator('.reading-tree-link[aria-current="location"]')).toHaveAttribute('href', href!);
    if (compact) {
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(outline).toBeHidden();
    }
    await expect.poll(() => progress.getAttribute('aria-valuenow')).not.toBe('0');

    await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
    await expect(progress).toHaveAttribute('aria-valuenow', '100');
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await expect(progress).toHaveAttribute('aria-valuenow', '0');
    await expect(page.locator('.reading-tree-link[aria-current="location"]')).toHaveCount(1);
  }
});
