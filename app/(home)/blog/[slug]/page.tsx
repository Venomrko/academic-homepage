import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { ConceptStamp } from '@/components/concept-stamp';
import { blog } from '@/lib/source';
import { profile } from '@/lib/site-data';
import { formatDate } from '@/lib/format';
import { getMDXComponents } from '@/components/mdx';
import { pageMetadata } from '@/lib/site-metadata';

export function generateStaticParams() { return blog.getPages().map((page) => ({ slug: page.slugs[0] })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page) notFound();
  return pageMetadata({
    path: page.url,
    title: page.data.title,
    description: page.data.description,
    type: 'article',
    publishedTime: page.data.date,
    imagePath: null,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = blog.getPage([slug]);
  if (!page) notFound();
  const MDX = page.data.body;
  const listUrl = page.data.section === 'life' ? '/blog/life' : '/blog';
  return <main id="main-content" className="site-container inner-page article-page">
    <Link href={listUrl} className="back-link">
      <ArrowLeft size={15} aria-hidden="true" /> {page.data.section === 'life' ? 'Personal essays' : 'All notes'}
    </Link>
    <header className="article-heading">
      <div className="article-heading-wrapper">
        <div className="article-heading-main">
          <div className="eyebrow" lang={page.data.lang}>{page.data.category}</div>
          <h1 lang={page.data.lang}>{page.data.title}</h1>
          <p className="article-description" lang={page.data.lang}>{page.data.description}</p>
        </div>
        <div className="article-heading-stamp" aria-hidden="true">
          <ConceptStamp slug={slug} size="lg" />
        </div>
      </div>
      <div className="article-meta">
        <span className="author-avatar">{profile.initials}</span>
        <span>{profile.name}</span>
        <span className="meta-dot">·</span>
        <time dateTime={page.data.date} title="Date written">
          {page.data.journeyDate && 'Written '}{formatDate(page.data.date, 'long')}
        </time>
        <span className="meta-dot">·</span>
        <span>{page.data.readingTime} read</span>
      </div>
    </header>
    <article className="prose article-body" lang={page.data.lang}>
      <InlineTOC items={page.data.toc} />
      <MDX components={getMDXComponents()} />
    </article>
    <div className="article-end">
      <span className="brand-orb" />
      <p>Keep asking good questions.</p>
      <Link href={listUrl} className="text-link">
        <ArrowLeft size={15} aria-hidden="true" /> {page.data.section === 'life' ? 'Back to personal essays' : 'Back to the notes'}
      </Link>
    </div>
  </main>;
}
