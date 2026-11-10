import type { MetadataRoute } from 'next';
import { blog } from '@/lib/source';
import { projects } from '@/lib/data/projects';
import { contentUpdates, latestContentDate } from '@/lib/data/content-updates';
import { siteUrl as baseUrl } from '@/lib/site-metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blog.getPages();
  const postDates = posts.map((post) => post.data.updated ?? post.data.date);
  const lifeDates = posts.filter((post) => post.data.section === 'life')
    .map((post) => post.data.updated ?? post.data.date);
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: latestContentDate(contentUpdates.about, contentUpdates.news, contentUpdates.honors),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: latestContentDate(contentUpdates.publications, contentUpdates.services),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: latestContentDate(contentUpdates.projects, ...projects.map((project) => project.updated)),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      ...(postDates.length > 0 && { lastModified: latestContentDate(...postDates) }),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/life`,
      ...(lifeDates.length > 0 && { lastModified: latestContentDate(...lifeDates) }),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: latestContentDate(contentUpdates.cv, contentUpdates.about, contentUpdates.publications, contentUpdates.honors),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: p.updated,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}${post.url}`,
    lastModified: post.data.updated ?? post.data.date,
    changeFrequency: 'monthly',
    priority: post.data.section === 'work' ? 0.8 : 0.6,
  }));

  return [...routes, ...projectRoutes, ...blogRoutes];
}
