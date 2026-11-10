import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageHeading } from '@/components/section-heading';
import { ResourceCard } from '@/components/resource-card';
import { BlogEmptyState } from '@/components/blog-empty-state';
import { blog } from '@/lib/source';
import { formatDate } from '@/lib/format';
import { profile } from '@/lib/site-data';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata({
  path: '/blog/life',
  title: 'A space for life',
  description: `Personal essays, reading, and everyday observations by ${profile.name}.`,
});

export default function PersonalEssaysPage() {
  const posts = [...blog.getPages()]
    .filter((post) => post.data.section === 'life')
    .sort((a, b) => (b.data.journeyDate ?? b.data.date).localeCompare(a.data.journeyDate ?? a.data.date));

  return <main id="main-content" className="site-container inner-page">
    <Link href="/blog" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> Blog</Link>
    <PageHeading title="A space for life" />
    <div className="resource-grid">
      {posts.map((post) => <ResourceCard
        key={post.url}
        href={post.url}
        title={post.data.title}
        lang={post.data.lang}
        description={post.data.description}
        metadata={<time dateTime={post.data.journeyDate ?? post.data.date} title={post.data.journeyDate ? 'Journey date' : 'Publication date'}>{formatDate(post.data.journeyDate ?? post.data.date)}</time>}
        footer={<><span>{post.data.category}</span><span className="resource-card-reading-time">{post.data.readingTime} read</span></>}
      />)}
      {posts.length === 0 && <BlogEmptyState section="life" />}
    </div>
  </main>;
}
