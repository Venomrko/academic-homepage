'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Search, X } from 'lucide-react';
import { publications, type Publication } from '@/lib/site-data';
import { PublicationList } from '@/components/publication-list';
import { ServicesTravel } from '@/components/services-travel';

type FilterMode = 'year' | 'venue';

function venueLabel(paper: Publication) {
  return paper.venueShort?.trim() || paper.venue.trim();
}

const years = [...new Set(publications.map((paper) => paper.year))].sort((a, b) => b - a);
const venues = [...new Set(publications.map(venueLabel).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'en'));

export function PublicationExplorer({ heading, children }: { heading: ReactNode; children?: ReactNode }) {
  const [mode, setMode] = useState<FilterMode>('year');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsListRef = useRef<HTMLDivElement>(null);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const matches = publications.filter((paper) => {
    if (selectedYear !== null && paper.year !== selectedYear) return false;
    if (selectedVenue !== null && venueLabel(paper) !== selectedVenue) return false;
    if (terms.length === 0) return true;
    const searchable = [paper.title, paper.authors, paper.year, paper.venue, paper.venueShort,
      paper.abstract, ...(paper.distinctions?.map(({ label }) => label) ?? [])].join(' ').toLowerCase();
    return terms.every((term) => searchable.includes(term));
  });
  const activeFilters = [selectedYear, selectedVenue].filter((value) => value !== null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Animate filter changes without remounting papers or resetting open panels.
    const animation = resultsListRef.current?.animate?.(
      [{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }],
      { duration: 240, easing: 'cubic-bezier(.22, 1, .36, 1)' },
    );
    return () => animation?.cancel();
  }, [selectedYear, selectedVenue]);

  function clearFilters() {
    setSelectedYear(null);
    setSelectedVenue(null);
  }

  function resetSearchAndFilters() {
    setQuery('');
    clearFilters();
  }

  return (
    <div className="publication-explorer">
      <div className="publication-main">
        <div className="publication-explorer-heading">
          {heading}
          <div className="news-search publication-search" role="search" aria-label="Publications">
            <Search size={17} strokeWidth={1.5} aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              aria-label="Search publications by title, author, year, venue, or keyword"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Escape') setQuery('');
              }}
              aria-controls="publication-results"
            />
            {query && <button type="button" aria-label="Clear publication search" onClick={() => {
              setQuery('');
              searchRef.current?.focus();
            }}><X size={15} aria-hidden="true" /></button>}
          </div>
        </div>

        <aside className="publication-filters" aria-label="Publication filters">
          <div className="publication-filters-content">
            <div className="publication-filter-mode" data-mode={mode} role="group" aria-label="Browse publication filters">
              <span className="publication-filter-indicator" aria-hidden="true" />
              <button type="button" aria-pressed={mode === 'year'} aria-controls="publication-filter-options" onClick={() => setMode('year')}>By year</button>
              <button type="button" aria-pressed={mode === 'venue'} aria-controls="publication-filter-options" onClick={() => setMode('venue')}>By venue</button>
            </div>
            <div className="publication-filter-panel" id="publication-filter-options" key={mode}>
              <p className="publication-filter-label">Filter by {mode}</p>
              <div className="publication-filter-options" role="group" aria-label={`Filter publications by ${mode}`}>
                {mode === 'year' ? <>
                  <button type="button" aria-pressed={selectedYear === null} aria-controls="publication-results" onClick={() => setSelectedYear(null)}>All years</button>
                  {years.map((year) => <button key={year} type="button" aria-pressed={selectedYear === year} aria-controls="publication-results" onClick={() => setSelectedYear((current) => current === year ? null : year)}>{year}</button>)}
                </> : <>
                  <button type="button" aria-pressed={selectedVenue === null} aria-controls="publication-results" onClick={() => setSelectedVenue(null)}>All venues</button>
                  {venues.map((venue) => <button key={venue} type="button" aria-pressed={selectedVenue === venue} aria-controls="publication-results" onClick={() => setSelectedVenue((current) => current === venue ? null : venue)}>{venue}</button>)}
                </>}
              </div>
            </div>
            {activeFilters.length > 0 && <div className="publication-filter-summary">
              <p aria-label="Active filters">{activeFilters.join(' · ')}</p>
              <button type="button" onClick={clearFilters}>Clear filters</button>
            </div>}
          </div>
        </aside>

        <div className="publication-results" id="publication-results" ref={resultsRef}>
          <p className="sr-only" role="status" aria-live="polite">{matches.length} {matches.length === 1 ? 'publication' : 'publications'} shown.</p>
          <div className="publication-result-list" ref={resultsListRef}>
            {matches.length > 0 ? <PublicationList entries={matches} /> : <div className="publication-empty">
              <p>No publications found.</p>
              <p>Try another keyword, year, or venue.</p>
              <button type="button" onClick={resetSearchAndFilters}>Reset search and filters</button>
            </div>}
          </div>
          {children}
        </div>
      </div>
      <ServicesTravel publicationRegionRef={resultsRef} />
    </div>
  );
}
