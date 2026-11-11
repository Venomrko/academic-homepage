'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Search, X } from 'lucide-react';
import { publications, type Publication } from '@/lib/data/publications';
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
  const [resultSequence, setResultSequence] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const animationTimerRef = useRef<number | null>(null);
  function matchesSearch(paper: Publication, value: string) {
    const searchTerms = value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (selectedYear !== null && paper.year !== selectedYear) return false;
    if (selectedVenue !== null && venueLabel(paper) !== selectedVenue) return false;
    if (searchTerms.length === 0) return true;
    const searchable = [paper.title, paper.authors, paper.year, paper.venue, paper.venueShort,
      paper.abstract, ...(paper.distinctions?.map(({ label }) => label) ?? [])].join(' ').toLowerCase();
    return searchTerms.every((term) => searchable.includes(term));
  }
  const matches = publications.filter((paper) => matchesSearch(paper, query));
  const activeFilters = [selectedYear, selectedVenue].filter((value) => value !== null);

  function animateResults() {
    if (animationTimerRef.current !== null) {
      window.clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }
    setResultSequence((sequence) => sequence + 1);
  }

  function scheduleResultsAnimation(hasMatches: boolean) {
    if (animationTimerRef.current !== null) {
      window.clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }
    if (!hasMatches) return;
    animationTimerRef.current = window.setTimeout(() => {
      animationTimerRef.current = null;
      setResultSequence((sequence) => sequence + 1);
    }, 500);
  }

  function hasPublicationSetChanged(nextMatches: readonly Publication[]) {
    if (nextMatches.length !== matches.length) return true;
    return nextMatches.some((paper, index) => paper.id !== matches[index]?.id);
  }

  useEffect(() => () => {
    if (animationTimerRef.current !== null) window.clearTimeout(animationTimerRef.current);
  }, []);

  function clearFilters() {
    setSelectedYear(null);
    setSelectedVenue(null);
    animateResults();
  }

  function resetSearchAndFilters() {
    setQuery('');
    setSelectedYear(null);
    setSelectedVenue(null);
    animateResults();
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
              onChange={(event) => {
                const nextValue = event.target.value;
                const nextMatches = publications.filter((paper) => matchesSearch(paper, nextValue));
                setQuery(nextValue);
                scheduleResultsAnimation(nextMatches.length > 0 && hasPublicationSetChanged(nextMatches));
              }}
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  setQuery('');
                  animateResults();
                }
              }}
              aria-controls="publication-results"
            />
            {query && <button type="button" aria-label="Clear publication search" onClick={() => {
              setQuery('');
              animateResults();
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
                  <button type="button" aria-pressed={selectedYear === null} aria-controls="publication-results" onClick={() => {
                    setSelectedYear(null);
                    animateResults();
                  }}>All years</button>
                  {years.map((year) => <button key={year} type="button" aria-pressed={selectedYear === year} aria-controls="publication-results" onClick={() => {
                    setSelectedYear((current) => current === year ? null : year);
                    animateResults();
                  }}>{year}</button>)}
                </> : <>
                  <button type="button" aria-pressed={selectedVenue === null} aria-controls="publication-results" onClick={() => {
                    setSelectedVenue(null);
                    animateResults();
                  }}>All venues</button>
                  {venues.map((venue) => <button key={venue} type="button" aria-pressed={selectedVenue === venue} aria-controls="publication-results" onClick={() => {
                    setSelectedVenue((current) => current === venue ? null : venue);
                    animateResults();
                  }}>{venue}</button>)}
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
          <div
            className="publication-result-list"
            data-result-sequence={resultSequence || undefined}
            data-result-parity={resultSequence ? resultSequence % 2 : undefined}
          >
            {matches.length > 0 ? <PublicationList entries={matches} animationSequence={resultSequence} /> : <div className="publication-empty">
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
