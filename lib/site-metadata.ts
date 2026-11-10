import type { Metadata } from 'next';
import { profile } from '@/lib/data/profile';

export const siteUrl = 'https://academic.solitudinis.cc';
export const siteTitle = "Ren's Homepage";
export const siteDescription = `${profile.name} is a research assistant at ${profile.institution} studying LLM reasoning, self-correction, efficient inference, and multi-agent intelligence.`;

type PageMetadataOptions = {
  path: string;
  title: string;
  description?: string;
  // null lets Next.js resolve the route's opengraph-image file and its versioned URL.
  imagePath?: string | null;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
};

/** Keep each page's canonical and social identity together. */
export function pageMetadata({
  path,
  title,
  description = siteDescription,
  imagePath = '/opengraph-image',
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const url = new URL(path, siteUrl).href;
  const fullTitle = path === '/' ? siteTitle : `${title} | ${profile.name}`;
  const image = imagePath ? {
    url: new URL(imagePath, siteUrl).href,
    width: 1200,
    height: 630,
    alt: fullTitle,
  } : undefined;

  return {
    title: path === '/' ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'en_US',
      url,
      siteName: `${profile.name} — Academic Homepage`,
      title: fullTitle,
      description,
      ...(image && { images: [image] }),
      ...(type === 'article' && {
        authors: [profile.name],
        ...(publishedTime && { publishedTime }),
        ...(modifiedTime && { modifiedTime }),
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(image && { images: [image.url] }),
    },
  };
}
