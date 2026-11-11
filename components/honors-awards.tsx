'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { Honor } from '@/lib/data/honors';

const pageSize = 6;

export function HonorsAwards({ items }: { items: readonly Honor[] }) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [streamFrom, setStreamFrom] = useState<number | null>(null);
  const [streamSequence, setStreamSequence] = useState(0);
  const ordered = [...items].sort((a, b) =>
    (Number.parseInt(b.year, 10) || 0) - (Number.parseInt(a.year, 10) || 0),
  );
  const remaining = ordered.length - Math.min(visibleCount, ordered.length);

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
    <aside className="honors-section" aria-labelledby="honors-title">
      <h2 id="honors-title">Honors &amp; Awards<span className="accent-period">.</span></h2>
      <p className="sr-only" role="status" aria-live="polite">Showing {Math.min(visibleCount, ordered.length)} of {ordered.length} honors.</p>
      <ul className="honors-list" id="honors-list">
        {ordered.map((honor, index) => {
          const isVisible = index < visibleCount;
          const isStreaming = isVisible && streamFrom !== null && index >= streamFrom;
          const streamStyle = isStreaming
            ? { '--stream-index': Math.min(index - streamFrom, pageSize - 1) } as CSSProperties
            : undefined;
          return (
          <li className="honor-entry" key={honor.id} aria-hidden={!isVisible} inert={!isVisible}>
            <div className="honor-entry-inner" data-stream-seq={isStreaming ? streamSequence : undefined} style={streamStyle}>
              <span className="honor-year">{honor.year}</span>
              <div className="honor-copy"><h3>{honor.title}</h3><p>{honor.organization}</p></div>
            </div>
          </li>
          );
        })}
      </ul>
      {ordered.length > pageSize && (
        <div className="honors-controls">
          {visibleCount > pageSize && (
            <button className="honors-less" type="button" aria-controls="honors-list" onClick={showLess}>
              See less <ArrowUp size={13} aria-hidden="true" />
            </button>
          )}
          {remaining > 0 && (
            <button className="honors-more" type="button" aria-controls="honors-list" onClick={showMore}>
              See more <span>({remaining})</span><ArrowDown size={13} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </aside>
  );
}
