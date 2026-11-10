import { PageHeading } from '@/components/section-heading';
import { PublicationExplorer } from '@/components/publication-explorer';
import { profile } from '@/lib/data/profile';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata({
  path: '/publications',
  title: 'Publications',
  description: `Publications by ${profile.name} on LLM reasoning, self-correction, efficient inference, and multi-agent intelligence.`,
});

export default function PublicationsPage() {
  return <main id="main-content" className="site-container inner-page publications-page">
    <PublicationExplorer heading={<PageHeading title="Publications" />} />
  </main>;
}
