'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowDown, Search, X } from 'lucide-react';
import { news } from '@/lib/site-data';
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
  const search = query.trim().toLocaleLowerCase();
  const matches = updates.filter((item) =>
    `${item.date} ${formatDate(item.date)} ${item.type} ${item.text}`.toLocaleLowerCase().includes(search),
  );
  const visible = matches.slice(0, visibleCount);

  function changeQuery(value: string) {
    setQuery(value);
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
        {search ? `${matches.length} matching updates.` : `${updates.length} updates.`} Showing {visible.length}.
      </p>
      <div className="news-content">
      <table className="news-table" id="news-table">
        <caption className="sr-only">Recent news and updates</caption>
        <colgroup><col className="news-date-column" /><col className="news-category-column" /><col /></colgroup>
        <thead><tr><th scope="col">Date</th><th scope="col">Category</th><th scope="col">Title</th></tr></thead>
        <tbody>
          {visible.map((item) => (
            <tr key={`${item.date}:${item.text}`}>
              <td className="news-date"><time dateTime={item.date}>{formatDate(item.date)}</time></td>
              <td className="news-category">{item.type}</td>
              <td className="news-title">
                {item.url ? <Link href={item.url} target={item.url.startsWith('https://') ? '_blank' : undefined} rel={item.url.startsWith('https://') ? 'noopener noreferrer' : undefined}>{item.text}</Link> : <span>{item.text}</span>}
              </td>
            </tr>
          ))}
          {matches.length === 0 && <tr><td colSpan={3} className="news-empty">No updates found. Try another date, category, or keyword.</td></tr>}
        </tbody>
      </table>
      {visible.length < matches.length && (
        <div className="news-pagination">
        <button className="news-more" type="button" aria-controls="news-table" onClick={() => setVisibleCount((count) => count + pageSize)}>
          See more <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
        </button>
        </div>
      )}
      </div>
    </section>
  );
}
