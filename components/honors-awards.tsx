'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { Honor } from '@/lib/site-data';

const pageSize = 6;

export function HonorsAwards({ items }: { items: readonly Honor[] }) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const ordered = [...items].sort((a, b) =>
    (Number.parseInt(b.year, 10) || 0) - (Number.parseInt(a.year, 10) || 0),
  );
  const visible = ordered.slice(0, visibleCount);
  const remaining = ordered.length - visible.length;

  return (
    <aside className="honors-section" aria-labelledby="honors-title">
      <h2 id="honors-title">Honors &amp; Awards<span className="accent-period">.</span></h2>
      <p className="sr-only" role="status" aria-live="polite">Showing {visible.length} of {ordered.length} honors.</p>
      <ul className="honors-list" id="honors-list">
        {visible.map((honor) => (
          <li className="honor-entry" key={honor.id}>
            <span className="honor-year">{honor.year}</span>
            <div className="honor-copy"><h3>{honor.title}</h3><p>{honor.organization}</p></div>
          </li>
        ))}
      </ul>
      {ordered.length > pageSize && (
        <div className="honors-controls">
          {visibleCount > pageSize && (
            <button className="honors-less" type="button" aria-controls="honors-list" onClick={() => setVisibleCount(pageSize)}>
              Show less <ArrowUp size={13} aria-hidden="true" />
            </button>
          )}
          {remaining > 0 && (
            <button className="honors-more" type="button" aria-controls="honors-list" onClick={() => setVisibleCount((count) => count + pageSize)}>
              See more <span>({remaining})</span><ArrowDown size={13} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </aside>
  );
}
