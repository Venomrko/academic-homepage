import { notFound } from 'next/navigation';
import { blog } from '@/lib/source';
import { socialImage } from '@/lib/social-image';

export const alt = 'Research notes and personal essays by Ren Zhuang';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blog.getPages().map((page) => ({ slug: page.slugs[0] }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return socialImage({
    title: page.data.title,
    category: page.data.section === 'life' ? 'A space for life' : 'Research notes',
  });
}
