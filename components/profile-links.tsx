import { GraduationCap, Library, Mail } from 'lucide-react';
import { resolveLinkItems } from 'fumadocs-ui/layouts/shared';
import { profile } from '@/lib/site-data';

function OrcidIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="6.8" cy="7.1" r="1.1" />
    <path d="M5.9 9.3h1.8v8.1H5.9zM10 6.3h3.8a5.55 5.55 0 0 1 0 11.1H10V6.3zm1.8 1.6v7.9h2a3.95 3.95 0 0 0 0-7.9h-2z" />
  </svg>;
}

export function ProfileLinks() {
  const github = resolveLinkItems({ githubUrl: profile.github })[0];

  return <div className="profile-links" aria-label="Contact and academic profiles">
    <a href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" /><span>Email</span></a>
    <a href={profile.github} target="_blank" rel="noreferrer"><span className="profile-link-icon" aria-hidden="true">{github?.type === 'icon' && github.icon}</span><span>GitHub</span></a>
    <a href={profile.googleScholar} target="_blank" rel="noreferrer" aria-label="Google Scholar"><GraduationCap size={17} aria-hidden="true" /><span>Scholar</span></a>
    {profile.orcid && <a href={profile.orcid} target="_blank" rel="noreferrer"><OrcidIcon /><span>ORCID</span></a>}
    {profile.dblp && <a href={profile.dblp} target="_blank" rel="noreferrer"><Library size={16} aria-hidden="true" /><span>dblp</span></a>}
  </div>;
}
