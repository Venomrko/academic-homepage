'use client';

import Link from 'next/link';
import { useState, type CSSProperties } from 'react';
import { ArrowDown, ArrowUp, Search, X } from 'lucide-react';
import { news } from '@/lib/data/news';
import { formatDate } from '@/lib/format';

const pageSize = 10;
function sortDateValue(value: string) {
  if (/^\d{4}$/.test(value)) return `${value}-12-31`;
  if (/^\d{4}-\d{2}$/.test(value)) return `${value}-28`;
  return value;
}

const updates = [...news].sort((a, b) => sortDateValue(b.date).localeCompare(sortDateValue(a.date)));

export function NewsUpdates() {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [streamFrom, setStreamFrom] = useState<number | null>(null);
  const [streamSequence, setStreamSequence] = useState(0);
  const [filterSequence, setFilterSequence] = useState(0);
  const search = query.trim().toLocaleLowerCase();
  const matchRank = new Map<number, number>();
  const matches = updates.filter((item, index) => {
    const isMatch = `${item.date} ${formatDate(item.date)} ${item.type} ${item.text}`
      .toLocaleLowerCase()
      .includes(search);
    if (isMatch) matchRank.set(index, matchRank.size);
    return isMatch;
  });
  const canShowLess = visibleCount > pageSize;
  const canShowMore = visibleCount < matches.length;

  function changeQuery(value: string) {
    setQuery(value);
    setVisibleCount(pageSize);
    setStreamFrom(null);
    setFilterSequence((sequence) => sequence + 1);
  }

  function showMore() {
    setStreamFrom(visibleCount);
    setStreamSequence((sequence) => sequence + 1);
    setVisibleCount((count) => count + pageSize);
  }

  function showLess() {
    setStreamFrom(null);
    setVisibleCount(pageSize);
  }

  return (
    <section className="news-section" aria-labelledby="news-title">
      <div className="news-heading">
        <h2 id="news-title">News & Updates<span className="accent-period">.</span></h2>
        <div className="news-search" role="search" aria-label="News & Updates">
          <Search size={17} strokeWidth={1.5} aria-hidden="true" />
          <input
            type="search"
            aria-label="Search updates by date, category, or title"
            placeholder="Search"
            value={query}
            onChange={(event) => changeQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') changeQuery('');
            }}
            aria-controls="news-table"
          />
          {query && <button type="button" aria-label="Clear search" onClick={() => changeQuery('')}><X size={15} aria-hidden="true" /></button>}
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {search ? `${matches.length} matching updates.` : `${updates.length} updates.`} Showing {Math.min(visibleCount, matches.length)}.
      </p>
      <div className="news-content">
      <table className="news-table" id="news-table">
        <caption className="sr-only">Recent news and updates</caption>
        <colgroup><col className="news-date-column" /><col className="news-category-column" /><col /></colgroup>
        <thead><tr><th scope="col">Date</th><th scope="col">Category</th><th scope="col">Title</th></tr></thead>
        <tbody>
          {updates.map((item, index) => {
            const matchingIndex = matchRank.get(index) ?? -1;
            const isMatch = matchingIndex >= 0;
            const isVisible = isMatch && matchingIndex < visibleCount;
            const isStreaming = isVisible && streamFrom !== null && matchingIndex >= streamFrom;
            const streamStyle = isStreaming
              ? { '--stream-index': Math.min(matchingIndex - streamFrom, pageSize - 1) } as CSSProperties
              : undefined;
            const isFiltering = isVisible && !isStreaming && filterSequence > 0;
            return (
            <tr
              key={`${item.date}:${item.text}`}
              aria-hidden={!isVisible}
              inert={!isVisible}
              data-visible={isVisible}
            >
              <td className="news-date">
                <div className="news-cell-inner" data-stream-seq={isStreaming ? streamSequence : undefined} data-filter-seq={isFiltering ? filterSequence : undefined} style={streamStyle}>
                  <div className="news-cell-content"><time dateTime={item.date}>{formatDate(item.date)}</time></div>
                </div>
              </td>
              <td className="news-category">
                <div className="news-cell-inner" data-stream-seq={isStreaming ? streamSequence : undefined} data-filter-seq={isFiltering ? filterSequence : undefined} style={streamStyle}>
                  <div className="news-cell-content">{item.type}</div>
                </div>
              </td>
              <td className="news-title">
                <div className="news-cell-inner" data-stream-seq={isStreaming ? streamSequence : undefined} data-filter-seq={isFiltering ? filterSequence : undefined} style={streamStyle}>
                  <div className="news-cell-content">
                    {item.url ? <Link href={item.url} target={item.url.startsWith('https://') ? '_blank' : undefined} rel={item.url.startsWith('https://') ? 'noopener noreferrer' : undefined}>{item.text}</Link> : <span>{item.text}</span>}
                  </div>
                </div>
              </td>
            </tr>
            );
          })}
          {matches.length === 0 && <tr><td colSpan={3} className="news-empty">No updates found. Try another date, category, or keyword.</td></tr>}
        </tbody>
      </table>
      {(canShowLess || canShowMore) && (
        <div className="news-pagination">
        {canShowLess && (
          <button className="news-less" type="button" aria-controls="news-table" onClick={showLess}>
            See less <ArrowUp size={15} strokeWidth={1.5} aria-hidden="true" />
          </button>
        )}
        {canShowMore && (
          <button className="news-more" type="button" aria-controls="news-table" onClick={showMore}>
            See more <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
          </button>
        )}
        </div>
      )}
      </div>
    </section>
  );
}
