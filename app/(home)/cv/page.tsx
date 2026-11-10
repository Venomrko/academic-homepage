import { Fragment } from 'react';
import { GraduationCap, Library, Mail, MapPin } from 'lucide-react';
import { PageHeading } from '@/components/section-heading';
import { CVActions } from '@/components/cv-actions';
import { cvData, honors, profile, publications } from '@/lib/site-data';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata({
  path: '/cv',
  title: 'Curriculum Vitae',
  description: `Academic curriculum vitae of ${profile.name}. Education, research experience, publications, honors, and skills.`,
});

function OrcidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="13" height="13">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6.8" cy="7.1" r="1.1" />
      <path d="M5.9 9.3h1.8v8.1H5.9zM10 6.3h3.8a5.55 5.55 0 0 1 0 11.1H10V6.3zm1.8 1.6v7.9h2a3.95 3.95 0 0 0 0-7.9h-2z" />
    </svg>
  );
}

export default function CVPage() {
  return (
    <main id="main-content" className="site-container inner-page cv-page">
      <div className="cv-page-top">
        <PageHeading title="Curriculum Vitae" />
        <CVActions cvUrl={profile.cvUrl} updated={cvData.updated} />
      </div>

      <article className="cv-document" aria-label="Curriculum Vitae Document">
        <header className="cv-profile">
          <h2>{profile.name}</h2>
          <p>{profile.role} · {profile.institution}</p>
          <div className="cv-contact-row">
            <span><MapPin size={13} aria-hidden="true" />{profile.location}</span>
            <a href={`mailto:${profile.email}`}><Mail size={13} aria-hidden="true" />{profile.email}</a>
            <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer"><GraduationCap size={13} aria-hidden="true" />Google Scholar</a>
            {profile.orcid && <a href={profile.orcid} target="_blank" rel="noopener noreferrer"><OrcidIcon />ORCID</a>}
            {profile.dblp && <a href={profile.dblp} target="_blank" rel="noopener noreferrer"><Library size={13} aria-hidden="true" />dblp</a>}
          </div>
          <div className="cv-objective">
            <p>{profile.phdStatement}</p>
          </div>
        </header>

        <section className="cv-section" aria-labelledby="cv-education">
          <h3 id="cv-education">Education</h3>
          {cvData.education.map((item) => (
            <div className="cv-entry" key={item.institution}>
              <span className="cv-period">{item.period}</span>
              <div>
                <h4>{item.institution}</h4>
                <span>{item.location}</span>
                <p>
                  <strong>{item.degree}</strong>
                  <br />
                  {item.score}
                  {item.coursework && (
                    <>
                      <br />
                      Coursework: {item.coursework}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-research">
          <h3 id="cv-research">Research Experience</h3>
          {cvData.researchExperience.map((item) => (
            <div className="cv-entry" key={item.title}>
              <span className="cv-period">{item.period}</span>
              <div>
                <h4>{item.title}</h4>
                <span>{item.role} · {item.location}</span>
                <ul className="cv-bullet-list">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-publications">
          <h3 id="cv-publications">Publications</h3>
          <p className="cv-note">Authors marked with † indicate corresponding author.</p>
          {publications.map((paper, idx) => (
            <div className="cv-pub-entry" key={paper.id}>
              <h4>
                [{idx + 1}] {paper.title}
              </h4>
              <p className="cv-pub-authors">
                {paper.authors.split(', ').map((author, index) => (
                  <Fragment key={author}>
                    {index > 0 && ', '}
                    {author === profile.name ? <strong>{author}</strong> : author}
                    {paper.correspondingAuthors?.includes(author) && (
                      <sup className="publication-corresponding" title="Corresponding author">†</sup>
                    )}
                  </Fragment>
                ))}
              </p>
              <p className="cv-pub-venue">
                In <em>{paper.venue}</em> ({paper.year}).{paper.distinctions?.some((d) => d.kind === 'oral' || d.label.toLowerCase() === 'oral') ? ' Oral.' : ''}
              </p>
              <div className="cv-pub-links">
                {paper.links?.arxiv && (
                  <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">[arXiv]</a>
                )}
                {paper.links?.pdf && (
                  <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">[PDF]</a>
                )}
                {paper.links?.website && (
                  <a href={paper.links.website} target="_blank" rel="noopener noreferrer">[DOI / Web]</a>
                )}
                {paper.links?.code && (
                  <a href={paper.links.code} target="_blank" rel="noopener noreferrer">[Code]</a>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-projects">
          <h3 id="cv-projects">Projects</h3>
          {cvData.projects.map((item) => (
            <div className="cv-entry" key={item.title}>
              <span className="cv-period">{item.period}</span>
              <div>
                <h4>{item.title}</h4>
                <span>{item.organization} · {item.location}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-honors">
          <h3 id="cv-honors">Honors &amp; Awards</h3>
          {honors.map((honor) => (
            <div className="cv-entry" key={honor.id}>
              <span className="cv-period">{honor.year}</span>
              <div>
                <h4>{honor.title}</h4>
                <span>{honor.organization}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section" aria-labelledby="cv-skills">
          <h3 id="cv-skills">Skills &amp; Proficiencies</h3>
          {cvData.skills.map((skill) => (
            <div className="cv-skill" key={skill.category}>
              <h4>{skill.category}</h4>
              <p>{skill.content}</p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
