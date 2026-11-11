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

test('news expands and collapses, and system theme follows the browser', async ({ page }, testInfo) => {
  await visit(page, '/');
  await expect(page).toHaveTitle("Ren's Homepage");
  const visibleRows = page.locator('#news-table tbody tr[data-visible="true"]');
  const initialRows = await visibleRows.count();
  await page.locator('.news-more').click();
  await expect(page.locator('.news-less')).toBeVisible();
  expect(await visibleRows.count()).toBeGreaterThan(initialRows);
  await page.locator('.news-less').click();
  await expect(visibleRows).toHaveCount(initialRows);
  await expect(page.locator('.news-more')).toBeVisible();

  if (testInfo.project.metadata.theme === 'system') {
    await page.emulateMedia({ colorScheme: 'light' });
    await expect(page.locator('html')).toHaveClass(/light/);
    await page.emulateMedia({ colorScheme: 'dark' });
    await expect(page.locator('html')).toHaveClass(/dark/);
  }
});

test('publication panels stay open during a matching search', async ({ page }, testInfo) => {
  await visit(page, '/publications');
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
  await expect(page.locator('.publication-entry[data-visible="true"]')).toHaveCount(1);
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
    if (path.startsWith('/blog/')) {
      const published = await page.locator('meta[property="article:published_time"]').getAttribute('content');
      const modified = await page.locator('meta[property="article:modified_time"]').getAttribute('content');
      expect(modified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(modified! >= published!).toBe(true);
    }
    await checkLayoutAndCapture(page, name, testInfo);
  }
});
