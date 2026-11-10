import { PageHeading } from '@/components/section-heading';
import { ResourceCard } from '@/components/resource-card';
import { LifeJournalIllustration } from '@/components/life-journal-illustration';
import { ConceptStamp } from '@/components/concept-stamp';
import { BlogEmptyState } from '@/components/blog-empty-state';
import { blog } from '@/lib/source';
import { formatDate } from '@/lib/format';
import { profile } from '@/lib/site-data';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata({
  path: '/blog',
  title: 'Blog',
  description: `Research notes and personal essays by ${profile.name}.`,
});

export default function BlogPage() {
  const workPosts = blog.getPages()
    .filter((post) => post.data.section === 'work')
    .sort((a, b) =>
      (b.data.latestConferenceDate ?? b.data.date).localeCompare(a.data.latestConferenceDate ?? a.data.date)
      || b.data.date.localeCompare(a.data.date)
      || a.data.title.localeCompare(b.data.title));

  return <main id="main-content" className="site-container inner-page">
    <PageHeading title="Blog" />

    <div className="resource-grid">
      <ResourceCard
        href="/blog/life"
        kind="journal"
        title="A space for life"
        titleSuffix={<span className="accent-period">.</span>}
        featured
        artworkSide="right"
        artwork={<LifeJournalIllustration />}
        artworkClassName="life-journal-art"
        className="life-journal"
      />
      {workPosts.map((post) => <ResourceCard
        key={post.url}
        className="research-story"
        href={post.url}
        title={post.data.title}
        lang={post.data.lang}
        description={post.data.description}
        metadata={<time dateTime={post.data.date}>{formatDate(post.data.date)}</time>}
        footer={<span className="resource-card-reading-time">{post.data.readingTime} read</span>}
        artwork={<ConceptStamp slug={post.slugs[0]} size="md" />}
        artworkLayout="header"
        artworkClassName="concept-stamp-art"
      />)}
      {workPosts.length === 0 && <BlogEmptyState section="work" />}
    </div>
  </main>;
}
