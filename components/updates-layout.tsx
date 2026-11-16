'use client';

import { createContext, useContext, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type SummaryLayout = {
  newsCount: number;
  honorsCount: number;
  stageHeights: number[];
  ready: boolean;
};

type UpdatesPanel = 'news' | 'honors';
type ExpansionAction = 'more' | 'less' | 'reset';
type SummaryContextValue = SummaryLayout & {
  steps: Record<UpdatesPanel, number>;
  changeExpansion: (panel: UpdatesPanel, action: ExpansionAction) => void;
};

export const updatesPageSize = { news: 10, honors: 2 } as const;

// Initial previews and subsequent expansion batches have different limits.
const defaults: SummaryLayout = {
  newsCount: 10,
  honorsCount: 6,
  stageHeights: [],
  ready: false,
};
const SummaryContext = createContext<SummaryContextValue | null>(null);

export function useUpdatesLayout() {
  const context = useContext(SummaryContext);
  if (!context) throw new Error('Updates panels must be rendered within UpdatesLayout.');
  return context;
}

function outerHeight(element: HTMLElement) {
  const style = getComputedStyle(element);
  return element.getBoundingClientRect().height
    + (Number.parseFloat(style.marginTop) || 0)
    + (Number.parseFloat(style.marginBottom) || 0);
}

function fittingCount(heights: number[], budget: number) {
  const firstOverflow = heights.findIndex((height) => height > budget + 0.5);
  return firstOverflow < 0 ? heights.length : Math.max(1, firstOverflow);
}

export function UpdatesLayout({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const currentLayout = useRef(defaults);
  const [layout, setLayout] = useState(defaults);
  const [fitting, setFitting] = useState(true);
  const [steps, setSteps] = useState({ news: 0, honors: 0 });

  function changeExpansion(panel: UpdatesPanel, action: ExpansionAction) {
    setSteps((previous) => {
      const other = panel === 'news' ? 'honors' : 'news';
      // Collapse to the other panel's current stage when it is above this one.
      // Otherwise return to the initial preview without moving the other panel.
      const nextStep = action === 'more'
        ? previous[panel] + 1
        : action === 'less' && previous[other] < previous[panel]
          ? previous[other]
          : 0;
      return { ...previous, [panel]: nextStep };
    });
  }

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const desktop = window.matchMedia('(min-width: 1001px)');
    let frame = 0;
    let disposed = false;
    let observedWidth = root.getBoundingClientRect().width;

    function apply(next: SummaryLayout) {
      const previous = currentLayout.current;
      if (previous.newsCount === next.newsCount && previous.honorsCount === next.honorsCount
        && previous.ready === next.ready && previous.stageHeights.length === next.stageHeights.length
        && previous.stageHeights.every((height, index) => height === next.stageHeights[index])) return;
      currentLayout.current = next;
      setFitting(true);
      setLayout(next);
    }

    function measure() {
      if (disposed || !root) return;
      const newsHeading = root.querySelector<HTMLElement>('.news-heading');
      const table = root.querySelector<HTMLTableElement>('.news-table');
      const honorsHeading = root.querySelector<HTMLElement>('.honors-section > h2');
      const rows = [...root.querySelectorAll<HTMLTableRowElement>('.news-table tbody tr[data-visible]')];
      const honors = [...root.querySelectorAll<HTMLElement>('.honor-entry')];
      if (!desktop.matches || !newsHeading || !table?.tHead || !honorsHeading
        || rows.length === 0 || honors.length === 0) {
        apply({ ...defaults, ready: true });
        return;
      }

      const style = getComputedStyle(root);
      const pixels = (property: string) => Number.parseFloat(style.getPropertyValue(property)) || 0;
      const buttonHeight = pixels('--updates-button-height');
      const rowPadding = pixels('--updates-news-row-padding');
      const honorGap = pixels('--updates-honor-gap');
      let newsHeight = outerHeight(newsHeading) + table.tHead.getBoundingClientRect().height
        + pixels('--news-controls-gap') + buttonHeight;
      const newsHeights = rows.map((row) => {
        const textHeight = Math.max(...[...row.querySelectorAll<HTMLElement>('.news-cell-content')]
          .map((cell) => cell.scrollHeight));
        newsHeight += textHeight + rowPadding * 2 + 1;
        return newsHeight;
      });
      let honorsHeight = outerHeight(honorsHeading) + pixels('--honors-controls-gap') + buttonHeight;
      const honorHeights = honors.map((entry, index) => {
        if (index > 0) honorsHeight += honorGap * 2 + 1;
        honorsHeight += entry.querySelector<HTMLElement>('.honor-copy')!.getBoundingClientRect().height;
        return honorsHeight;
      });

      // Fit complete entries within the shorter of the two maximum-size previews.
      const newsPreview = newsHeights.slice(0, defaults.newsCount);
      const honorsPreview = honorHeights.slice(0, defaults.honorsCount);
      const budget = Math.min(newsPreview.at(-1)!, honorsPreview.at(-1)!);
      const newsCount = fittingCount(newsPreview, budget);
      const honorsCount = fittingCount(honorsPreview, budget);
      const lastStep = Math.max(
        Math.ceil((rows.length - newsCount) / updatesPageSize.news),
        Math.ceil((honors.length - honorsCount) / updatesPageSize.honors),
      );
      // Each side chooses its own step. Equal steps share a button position,
      // calculated from complete entries rather than the other side's current state.
      const stageHeights = Array.from({ length: lastStep + 1 }, (_, step) => {
        const newsLimit = Math.min(newsCount + step * updatesPageSize.news, rows.length);
        const honorsLimit = Math.min(honorsCount + step * updatesPageSize.honors, honors.length);
        return Math.ceil(Math.max(newsHeights[newsLimit - 1], honorHeights[honorsLimit - 1])) + 2;
      });
      apply({
        newsCount,
        honorsCount,
        stageHeights,
        ready: true,
      });
    }

    function schedule() {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      if (Math.abs(width - observedWidth) < 0.5) return;
      observedWidth = width;
      schedule();
    });
    observer.observe(root);
    desktop.addEventListener('change', schedule);
    document.fonts.addEventListener('loadingdone', schedule);
    void document.fonts.ready.then(schedule);
    measure();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      desktop.removeEventListener('change', schedule);
      document.fonts.removeEventListener('loadingdone', schedule);
    };
  }, [children]);

  useLayoutEffect(() => {
    if (!layout.ready) return;
    // Commit automatic fitting without replaying the user-triggered entry animations.
    rootRef.current?.getBoundingClientRect();
    const frame = requestAnimationFrame(() => setFitting(false));
    return () => cancelAnimationFrame(frame);
  }, [layout]);

  return <SummaryContext.Provider value={{ ...layout, steps, changeExpansion }}>
    <div
      ref={rootRef}
      className="landing-width updates-layout"
      data-adaptive-ready={layout.ready}
      data-fitting={fitting}
    >
      {children}
    </div>
  </SummaryContext.Provider>;
}
