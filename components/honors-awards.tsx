'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import type { Honor } from '@/lib/data/honors';
import { updatesPageSize, useUpdatesLayout } from '@/components/updates-layout';

const pageSize = updatesPageSize.honors;

export function HonorsAwards({ items }: { items: readonly Honor[] }) {
  const { honorsCount: initialCount, stageHeights } = useUpdatesLayout();
  const [expansionStep, setExpansionStep] = useState(0);
  const [streamFrom, setStreamFrom] = useState<number | null>(null);
  const [streamSequence, setStreamSequence] = useState(0);
  const ordered = [...items].sort((a, b) =>
    (Number.parseInt(b.year, 10) || 0) - (Number.parseInt(a.year, 10) || 0),
  );
  const visibleCount = initialCount + expansionStep * pageSize;
  const stageHeight = stageHeights[Math.min(expansionStep, stageHeights.length - 1)];
  const stageStyle = stageHeight
    ? { '--updates-stage-height': `${stageHeight}px` } as CSSProperties
    : undefined;
  const remaining = ordered.length - Math.min(visibleCount, ordered.length);

  function showMore() {
    setStreamFrom(visibleCount);
    setStreamSequence((sequence) => sequence + 1);
    setExpansionStep((step) => step + 1);
  }

  function showLess() {
    setStreamFrom(null);
    setExpansionStep(0);
  }

  return (
    <aside className="honors-section" aria-labelledby="honors-title" data-initial-count={initialCount} style={stageStyle}>
      <h2 id="honors-title">Honors &amp; Awards<span className="accent-period">.</span></h2>
      <p className="sr-only" role="status" aria-live="polite">Showing {Math.min(visibleCount, ordered.length)} of {ordered.length} honors.</p>
      <ul className="honors-list" id="honors-list">
        {ordered.map((honor, index) => {
          const isVisible = index < visibleCount;
          const isStreaming = isVisible && streamFrom !== null && index >= streamFrom;
          const streamStyle = isStreaming
            ? { '--stream-index': Math.min(index - streamFrom, pageSize - 1) } as CSSProperties
            : undefined;
          const includesYear = honor.organization.endsWith(` ${honor.year}`);
          const organization = includesYear
            ? honor.organization.slice(0, -honor.year.length - 1)
            : honor.organization;
          return (
          <li className="honor-entry" key={honor.id} aria-hidden={!isVisible} inert={!isVisible}>
            <div className="honor-entry-inner" data-stream-seq={isStreaming ? streamSequence : undefined} style={streamStyle}>
              <div className="honor-copy">
                <h3>{honor.title}</h3>
                <p>{organization}{includesYear ? ' ' : ' · '}<time dateTime={honor.year}>{honor.year}</time></p>
              </div>
            </div>
          </li>
          );
        })}
      </ul>
      {ordered.length > initialCount && (
        <div className="honors-controls">
          {expansionStep > 0 && (
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
