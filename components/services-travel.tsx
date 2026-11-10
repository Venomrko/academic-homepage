'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { servicesAndTravel, type ServiceTravelEntry } from '@/lib/data/services';

type ListLayout = {
  fullHeight: number;
  collapsedHeight: number;
  visibleCount: number;
  hasOverflow: boolean;
};

export function ServicesTravel({
  publicationRegionRef,
  items = servicesAndTravel,
}: {
  publicationRegionRef: RefObject<HTMLDivElement | null>;
  items?: readonly ServiceTravelEntry[];
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [layout, setLayout] = useState<ListLayout | null>(null);
  const orderedItems = [...items].sort((a, b) => {
    // Confirmed reviewer acceptance dates and conference dates share the
    // timeline; year-only reviews follow dated records in the same year.
    const left = a.reviewAccepted?.date ?? a.period?.start ?? a.year;
    const right = b.reviewAccepted?.date ?? b.period?.start ?? b.year;
    return left === right ? 0 : left > right ? -1 : 1;
  });

  useEffect(() => {
    const content = contentRef.current;
    const list = listRef.current;
    const region = publicationRegionRef.current;
    if (!content || !list || !region) return;
    let frame = 0;
    let disposed = false;

    function measure() {
      if (!content || !list || !region) return;
      const contentRect = content.getBoundingClientRect();
      const listRect = list.getBoundingClientRect();
      const regionRect = region.getBoundingClientRect();
      const entries = Array.from(list.querySelectorAll<HTMLElement>('.services-travel-entry'),
        (entry) => entry.getBoundingClientRect().bottom - listRect.top);
      const fullHeight = Math.ceil(listRect.height);
      const sideBySide = contentRect.left >= regionRect.right - 1;
      const papers = region.querySelector<HTMLElement>('.publication-result-list');
      // Expanding the sidebar cannot increase the independently laid-out
      // paper area used to calculate its collapsed height.
      const paperBottom = regionRect.top + (papers?.offsetHeight ?? region.offsetHeight);
      const availableHeight = Math.max(0, paperBottom - listRect.top);
      const hasOverflow = sideBySide ? fullHeight > availableHeight + 1 : items.length > 6;
      const style = getComputedStyle(content);
      const controlsSpace = parseFloat(style.getPropertyValue('--services-controls-height'))
        + parseFloat(style.getPropertyValue('--services-controls-gap'));
      const limit = Math.max(0, availableHeight - controlsSpace);
      const visibleCount = !hasOverflow ? items.length : sideBySide
        ? entries.filter((bottom) => bottom <= limit + 1).length
        : Math.min(6, items.length);
      const collapsedHeight = hasOverflow ? Math.max(0, ...entries.slice(0, visibleCount)) : fullHeight;
      const next = { fullHeight, collapsedHeight, visibleCount, hasOverflow };
      setLayout((current) => current && current.visibleCount === next.visibleCount
        && current.hasOverflow === next.hasOverflow
        && Math.abs(current.fullHeight - next.fullHeight) < 0.5
        && Math.abs(current.collapsedHeight - next.collapsedHeight) < 0.5 ? current : next);
    }

    function scheduleMeasure() {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(region);
    observer.observe(content);
    observer.observe(list);
    scheduleMeasure();
    document.fonts.ready.then(scheduleMeasure);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [publicationRegionRef, items]);

  const hasOverflow = layout?.hasOverflow ?? false;
  const isExpanded = expanded && hasOverflow;
  const visibleCount = hasOverflow && !isExpanded ? layout!.visibleCount : items.length;
  const maxHeight = layout ? (isExpanded ? layout.fullHeight : layout.collapsedHeight) : undefined;

  return <aside className="publication-services-rail" aria-labelledby="services-travel-title">
    <div className="services-travel-content" ref={contentRef}>
      <h2 id="services-travel-title">Services &amp; Travel<span className="accent-period">.</span></h2>
      <p className="sr-only" role="status" aria-live="polite">Showing {visibleCount} of {items.length} service and travel entries.</p>
      <div className="services-travel-window" id="services-travel-list" style={{ maxHeight }}>
        <ul className="services-travel-list" ref={listRef}>
          {orderedItems.map((entry, index) => <li
            className="services-travel-entry"
            key={entry.id}
            aria-hidden={index >= visibleCount}
            inert={index >= visibleCount}
          >
            <div className="services-travel-entry-heading">
              <h3>{entry.title}{entry.showYearInTitle !== false && <> {entry.year}</>}</h3>
              {entry.upcoming && <span className="publication-badge publication-venue-badge services-travel-upcoming">Upcoming</span>}
            </div>
            <div className="services-travel-meta">
              <span className="services-travel-kind">{entry.kind === 'reviewer' ? 'Reviewer' : 'Attend'}</span>
              {entry.reviewAccepted && <>
                <span aria-hidden="true">·</span>
                <time dateTime={entry.reviewAccepted.date} title="Reviewer acceptance date">{entry.reviewAccepted.label}</time>
              </>}
              {entry.period && <>
                <span aria-hidden="true">·</span>
                <time dateTime={entry.period.start} title="Conference dates">{entry.period.label}</time>
              </>}
            </div>
            {entry.location && <p>{entry.location}</p>}
            {entry.description && <p>{entry.description}</p>}
          </li>)}
        </ul>
      </div>
      {hasOverflow && <button className="services-travel-toggle" type="button" aria-expanded={isExpanded} aria-controls="services-travel-list" onClick={() => setExpanded((current) => !current)}>
        {isExpanded ? <>See less <ArrowUp size={13} aria-hidden="true" /></> : <>See more <ArrowDown size={13} aria-hidden="true" /></>}
      </button>}
    </div>
  </aside>;
}
