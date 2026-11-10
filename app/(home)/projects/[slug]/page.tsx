import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { honors } from '@/lib/data/honors';
import { projects } from '@/lib/data/projects';
import { publications } from '@/lib/data/publications';
import { ProjectVisual } from '@/components/project-visual';
import { ProjectStudyFigure } from '@/components/project-study-figure';
import { ProjectComponentArt } from '@/components/project-component-art';
import { pageMetadata } from '@/lib/site-metadata';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return pageMetadata({
    path: `/projects/${project.slug}`,
    title: project.title,
    description: project.description,
    imagePath: null,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const relatedPapers = publications.filter((paper) => project.relatedPublications?.includes(paper.id));
  const projectHonors = honors.filter((honor) => project.recognitionIds?.includes(honor.id));
  const methodFigures = project.sections?.flatMap((section) => section.figures ?? []) ?? [];
  const lastFigureSectionId = project.sections?.filter((section) => section.figures?.length).at(-1)?.id;
  const evaluationFigures = project.evaluation ? [
    ...(project.evaluation.figures ?? []),
    ...project.evaluation.findings.flatMap((finding) => finding.figure ? [finding.figure] : []),
  ] : [];

  return <main id="main-content" className="site-container inner-page project-detail">
    <Link href="/projects" className="back-link"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link>
    <header className="project-detail-heading">
      <h1>{project.title}<span className="accent-period">.</span></h1>
      <p>{project.subtitle}</p>
      <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <dl className="project-facts">
        <div><dt>{project.periodLabel ?? 'Period'}</dt><dd>{project.period}</dd></div>
        <div><dt>Role</dt><dd>{project.role}</dd></div>
        <div><dt>Institution</dt><dd>{project.institution}</dd></div>
        <div><dt>Location</dt><dd>{project.location}</dd></div>
      </dl>
    </header>
    <ProjectVisual variant={project.visual} />
    <div className="project-detail-body">
      <section aria-labelledby="project-overview">
        <h2 id="project-overview">Overview</h2>
        <p>{project.overview}</p>
      </section>
      <section aria-labelledby="project-contributions">
        <h2 id="project-contributions">My contribution</h2>
        <ul className="project-contributions">
          {project.contributions.map((contribution) => <li key={contribution.title}>
            <h3>{contribution.title}</h3>
            <p>{contribution.description}</p>
          </li>)}
        </ul>
      </section>
      {project.sections?.map((section) => <section key={section.id} aria-labelledby={`project-${section.id}`}>
        <div className="project-section-copy">
          <h2 id={`project-${section.id}`}>{section.title}</h2>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul className={`project-detail-items${section.items.some((item) => item.illustration) ? ' project-component-grid' : ''}`}>
            {section.items.map((item) => <li key={item.title}>
              {item.illustration && <ProjectComponentArt illustration={item.illustration} label={item.title} />}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>)}
          </ul>}
        </div>
        {section.id === lastFigureSectionId && methodFigures.length > 0 && <div className="project-figure-grid" role="group" aria-label="Method figures">
          {methodFigures.map((figure) => <ProjectStudyFigure key={figure.src} figure={figure} />)}
        </div>}
      </section>)}
      {project.evaluation && <section aria-labelledby="project-evaluation">
        <h2 id="project-evaluation">Evaluation & findings</h2>
        <p>{project.evaluation.introduction}</p>
        <div className="project-results-wrap" role="region" aria-label="Retrieval evaluation results" tabIndex={0}>
          <table className="project-results">
            <caption>Retrieval results reported in the master's thesis</caption>
            <thead><tr><th scope="col">Model</th><th scope="col">Parameters</th><th scope="col">Comparison</th><th scope="col">Results</th></tr></thead>
            <tbody>
              {project.evaluation.results.map((result) => <tr key={result.model}>
                <th scope="row">{result.model}</th>
                <td className="project-result-parameters">{result.parameters}</td>
                <td>{result.comparison}</td>
                <td><dl className="project-result-metrics">
                  {result.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
                </dl></td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <ul className="project-detail-items project-findings">
          {project.evaluation.findings.map((finding) => <li key={finding.title}>
            <div>
              <h3>{finding.title}</h3>
              <p>{finding.description}</p>
            </div>
          </li>)}
        </ul>
        {evaluationFigures.length > 0 && <div className="project-figure-grid" role="group" aria-label="Evaluation figures">
          {evaluationFigures.map((figure) => <ProjectStudyFigure key={figure.src} figure={figure} />)}
        </div>}
        <p className="project-evaluation-note">{project.evaluation.note}</p>
      </section>}
      {projectHonors.length > 0 && <aside className="project-recognition" aria-label="Project recognition">
        {projectHonors.map((honor) => <div key={honor.id}>
          <p>{honor.title}</p>
          <span>{honor.organization} · {honor.year}</span>
        </div>)}
      </aside>}
      {relatedPapers.length > 0 && <section aria-labelledby="project-related-research">
        <h2 id="project-related-research">Related research</h2>
        {relatedPapers.map((paper) => <Link key={paper.id} href={`/publications#publication-${paper.id}`} className="project-related-paper">
          <span>{paper.title}<small>{paper.venueShort} {paper.year}</small></span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>)}
      </section>}
      {project.thesis && <section className="project-thesis-source" aria-labelledby="project-thesis-source">
        <h2 id="project-thesis-source">From the master's thesis</h2>
        <p>{project.thesis.title}</p>
        <p>{project.thesis.reference}</p>
      </section>}
    </div>
  </main>;
}
