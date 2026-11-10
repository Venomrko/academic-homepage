import { PageHeading } from '@/components/section-heading';
import { ProjectVisual } from '@/components/project-visual';
import { ResourceCard } from '@/components/resource-card';
import { profile, projects } from '@/lib/site-data';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata({
  path: '/projects',
  title: 'Projects',
  description: `Selected projects by ${profile.name} in language systems, domain retrieval, and applied software.`,
});

export default function ProjectsPage() {
  return <main id="main-content" className="site-container inner-page">
    <PageHeading title="Projects" description="Selected work in language systems and applied software." />
    <div className="resource-grid projects-grid">
      {projects.map((project) => <ResourceCard
        key={project.slug}
        className="project-card"
        href={`/projects/${project.slug}`}
        kind="project"
        title={project.title}
        description={project.description}
        metadata={project.years}
        artwork={<ProjectVisual variant={project.visual} showCaption={false} />}
        artworkLayout="inline"
        footer={<span className="resource-card-topics">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>}
      />)}
    </div>
  </main>;
}
