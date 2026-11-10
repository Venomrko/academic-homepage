import { MapPin } from 'lucide-react';
import { honors } from '@/lib/data/honors';
import { profile } from '@/lib/data/profile';
import { SolarArtwork } from '@/components/solar-artwork';
import { ResearchShowcase } from '@/components/research-showcase';
import { NewsUpdates } from '@/components/news-updates';
import { HonorsAwards } from '@/components/honors-awards';
import { ProfileLinks } from '@/components/profile-links';
import { pageMetadata, siteTitle } from '@/lib/site-metadata';

export const metadata = pageMetadata({ path: '/', title: siteTitle });

export default function AboutPage() {
  return <main id="main-content" className="about-page">
    <section className="solar-hero" aria-label="Introduction">
      <SolarArtwork />
      <div className="solar-content landing-width">
      <div className="solar-copy">
        <h1>{profile.name}<span className="accent-period">.</span></h1>
        <div className="solar-bio">
          <p>{profile.introduction}</p>
          <blockquote className="solar-seeking"><p>{profile.phdStatement}</p></blockquote>
        </div>
        <ProfileLinks />
        <p className="solar-affiliation"><MapPin size={13} aria-hidden="true" />{profile.institution} · {profile.location}</p>
      </div>
      <figure className="solar-caption">
        <blockquote><p><em>Can Machines Think?</em></p></blockquote>
        <figcaption className="solar-caption-source">
          <span>Alan Turing · 1950</span>
          <cite>Computing Machinery and Intelligence</cite>
        </figcaption>
      </figure>
      </div>
    </section>

    <ResearchShowcase />

    <div className="landing-width updates-layout">
      <NewsUpdates />
      <HonorsAwards items={honors} />
    </div>
  </main>;
}
