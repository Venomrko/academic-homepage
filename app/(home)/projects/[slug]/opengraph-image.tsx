import { notFound } from 'next/navigation';
import { projects } from '@/lib/site-data';
import { socialImage } from '@/lib/social-image';

export const alt = 'Selected projects by Ren Zhuang';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return socialImage({ title: project.title, category: 'Projects' });
}
