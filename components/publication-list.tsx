'use client';

import { Fragment, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { Check, Copy } from 'lucide-react';
import { profile } from '@/lib/data/profile';
import { publications, type Publication } from '@/lib/data/publications';

const externalActions = [
  { key: 'arxiv', label: 'ARXIV' },
  { key: 'pdf', label: 'PDF' },
  { key: 'code', label: 'CODE' },
  { key: 'website', label: 'WEBSITE' },
] as const;

function VenueName({ name }: { name: string }) {
  return <>{name.split(/(\d+(?:st|nd|rd|th))\b/g).map((part, index) => {
    const ordinal = /^(\d+)(st|nd|rd|th)$/.exec(part);
    return ordinal
      ? <span className="publication-ordinal" key={index}>{ordinal[1]}<sup>{ordinal[2]}</sup></span>
      : part;
  })}</>;
}

function PublicationEntry({
  paper,
  animationSequence,
  animationParity,
  streamIndex,
}: {
  paper: Publication;
  animationSequence?: number;
  animationParity?: number;
  streamIndex?: number;
}) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const [citationOpen, setCitationOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const abstract = paper.abstract?.trim();
  const citation = paper.bibtex?.trim();
  const venueShort = paper.venueShort?.trim();
  const distinctions = paper.distinctions?.filter(({ label }) => label.trim()) ?? [];
  const abstractId = `publication-${paper.id}-abstract`;
  const citationId = `publication-${paper.id}-citation`;
  const links = externalActions.flatMap(({ key, label }) => {
    const href = paper.links?.[key]?.trim();
    return href ? [{ key, label, href }] : [];
  });

  async function copyCitation() {
    if (!citation) return;
    try {
      await navigator.clipboard.writeText(citation);
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
  }

  return (
    <article
      className="publication-entry"
      id={`publication-${paper.id}`}
      data-result-sequence={animationSequence || undefined}
      data-result-parity={animationSequence ? animationParity : undefined}
      style={animationSequence && streamIndex !== undefined
        ? { '--publication-stream-index': streamIndex } as CSSProperties
        : undefined}
    >
      <div className={paper.image ? 'publication-entry-body with-image' : 'publication-entry-body'}>
        <div className="publication-copy">
          {(venueShort || distinctions.length > 0) && (
            <div className="publication-meta">
              {venueShort && <span className="publication-badge publication-venue-badge" title={paper.venue}>{venueShort}</span>}
              {distinctions.map(({ label, kind = 'highlight' }, index) => (
                <span key={`${label}-${index}`} className="publication-badge publication-distinction-badge" data-kind={kind}>{label.trim()}</span>
              ))}
            </div>
          )}
          <h3>{paper.title}</h3>
          <p className="publication-authors">{paper.authors.split(', ').map((author, index) => (
            <Fragment key={author}>
              {index > 0 && ', '}
              <span className="publication-author">
                {author === profile.name ? <strong>{author}</strong> : author}
                {paper.correspondingAuthors?.includes(author) && (
                  <sup className="publication-corresponding" title="Corresponding author" aria-label="Corresponding author">†</sup>
                )}
              </span>
            </Fragment>
          ))}</p>
          <p className="publication-venue"><VenueName name={paper.venue} /></p>
          {(abstract || citation || links.length > 0) && (
            <div className="publication-tools" role="group" aria-label={`Resources for ${paper.title}`}>
              {abstract && (
                <button
                  type="button"
                  className="publication-action"
                  id={`${abstractId}-trigger`}
                  aria-expanded={abstractOpen}
                  aria-controls={abstractId}
                  onClick={() => setAbstractOpen((open) => !open)}
                >ABS</button>
              )}
              {links.map(({ key, label, href }) => (
                <a key={key} className="publication-action" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              ))}
              {citation && (
                <button
                  type="button"
                  className="publication-action"
                  id={`${citationId}-trigger`}
                  aria-expanded={citationOpen}
                  aria-controls={citationId}
                  onClick={() => {
                    setCitationOpen((open) => !open);
                    setCopyState('idle');
                  }}
                >CITATION</button>
              )}
            </div>
          )}
        </div>
        {paper.image && (
          <figure className="publication-image">
            <Image
              src={paper.image.src}
              alt={paper.image.alt}
              width={paper.image.width}
              height={paper.image.height}
              sizes="(max-width: 767px) 260px, (max-width: 1200px) 240px, 260px"
            />
          </figure>
        )}
        {abstract && (
          <div
            className="publication-panel"
            id={abstractId}
            role="region"
            aria-labelledby={`${abstractId}-trigger`}
            aria-hidden={!abstractOpen}
            inert={!abstractOpen}
            data-open={abstractOpen}
          >
            <div className="publication-panel-inner">
              <p className="publication-abstract">{abstract}</p>
            </div>
          </div>
        )}
        {citation && (
          <div
            className="publication-panel"
            id={citationId}
            role="region"
            aria-labelledby={`${citationId}-trigger`}
            aria-hidden={!citationOpen}
            inert={!citationOpen}
            data-open={citationOpen}
          >
            <div className="publication-panel-inner">
              <div className="citation-box">
                <button type="button" onClick={copyCitation} className="citation-copy">
                  {copyState === 'copied' ? <Check size={14} /> : <Copy size={14} />}
                  {copyState === 'copied' ? 'Copied' : 'Copy'}
                </button>
                <pre>{citation}</pre>
                {copyState === 'copied' && <span className="sr-only" role="status">Citation copied to clipboard.</span>}
                {copyState === 'error' && <p role="status">Copy is unavailable. Select the citation text to copy it.</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function PublicationList({
  entries = publications,
  animationSequence = 0,
}: {
  entries?: readonly Publication[];
  animationSequence?: number;
}) {
  const years = [...new Set(entries.map((paper) => paper.year))].sort((a, b) => b - a);
  const entryOrder = new Map(entries.map((paper, index) => [paper.id, index]));
  const animationParity = animationSequence % 2;

  return (
    <div className="publication-years">
      {years.map((year) => {
        const yearEntries = entries.filter((paper) => paper.year === year);
        return (
          <section className="publication-year" key={year} aria-label={`Publications from ${year}`}>
            <div className="year-marker">{year}</div>
            <div className="publication-year-entries">
              {yearEntries.map((paper) => <PublicationEntry
                key={paper.id}
                paper={paper}
                animationSequence={animationSequence}
                animationParity={animationParity}
                streamIndex={entryOrder.get(paper.id)}
              />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
