'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { TOCItemType } from 'fumadocs-core/toc';
import { ChevronDown } from 'lucide-react';

type ReadingNode = TOCItemType & { children: ReadingNode[] };

function buildTree(items: readonly TOCItemType[]) {
  const roots: ReadingNode[] = [];
  const parents: ReadingNode[] = [];
  for (const item of items) {
    const node: ReadingNode = { ...item, children: [] };
    while (parents.length && parents.at(-1)!.depth >= item.depth) parents.pop();
    const parent = parents.at(-1);
    if (parent) parent.children.push(node);
    else roots.push(node);
    parents.push(node);
  }
  return roots;
}

function containsSection(node: ReadingNode, url: string | null): boolean {
  return node.url === url || node.children.some((child) => containsSection(child, url));
}

export function ArticleReader({
  items,
  readingTime,
  children,
}: {
  items: readonly TOCItemType[];
  readingTime?: string;
  children: ReactNode;
}) {
  const layoutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigationId = useId();
  const tree = useMemo(() => buildTree(items), [items]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reading, setReading] = useState<{ active: string | null; progress: number }>({
    active: items.at(0)?.url ?? null,
    progress: 0,
  });

  useEffect(() => {
    const layout = layoutRef.current;
    const content = contentRef.current;
    if (!layout || !content) return;
    const headings = items.flatMap((item) => {
      const heading = document.getElementById(decodeURIComponent(item.url.slice(1)));
      return heading && content.contains(heading) ? [{ heading, url: item.url }] : [];
    });
    let frame = 0;
    let disposed = false;

    function update() {
      frame = 0;
      if (!layout || !content) return;
      const offset = Number.parseFloat(
        getComputedStyle(layout).getPropertyValue('--reading-scroll-offset'),
      ) || 112;
      const bounds = content.getBoundingClientRect();
      const available = window.innerHeight - offset;
      const distance = Math.max(bounds.height - available, 1);
      const progress = Math.round(Math.min(1, Math.max(0, (offset - bounds.top) / distance)) * 100);
      // Fragment navigation can leave the heading's top margin below the target.
      const activationLine = offset + 24;
      let current = headings.at(0);
      for (const item of headings) {
        if (item.heading.getBoundingClientRect().top <= activationLine) current = item;
        else break;
      }
      if (progress === 100 && headings.length) current = headings.at(-1);
      // Cards can share a row. Keep the clicked heading active when their tops tie.
      const linked = headings.find((item) => item.url === window.location.hash);
      if (linked && current) {
        const linkedTop = linked.heading.getBoundingClientRect().top;
        if (linkedTop <= activationLine && Math.abs(linkedTop - current.heading.getBoundingClientRect().top) < 2) {
          current = linked;
        }
      }
      const active = current?.url ?? null;
      setReading((previous) => previous.active === active && previous.progress === progress
        ? previous
        : { active, progress });
    }

    function schedule() {
      if (!disposed && !frame) frame = requestAnimationFrame(update);
    }

    const observer = new ResizeObserver(schedule);
    observer.observe(content);
    observer.observe(layout);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('hashchange', schedule);
    document.fonts.ready.then(schedule);
    schedule();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
    };
  }, [items]);

  function renderTree(nodes: ReadingNode[]) {
    return <ol className="reading-tree">
      {nodes.map((node) => {
        const expanded = containsSection(node, reading.active);
        const branchId = `${navigationId}-${node.url.slice(1)}`;
        return <li key={node.url}>
          <a
            href={node.url}
            className="reading-tree-link"
            aria-current={reading.active === node.url ? 'location' : undefined}
            aria-expanded={node.children.length ? expanded : undefined}
            aria-controls={node.children.length ? branchId : undefined}
            data-in-path={expanded}
            onClick={() => setMobileOpen(false)}
          >
            <span className="reading-tree-branch" aria-hidden="true">└</span>
            <span>{node.title}</span>
          </a>
          {node.children.length > 0 && <div
            className="reading-tree-children"
            id={branchId}
            data-expanded={expanded}
            inert={!expanded}
          >
            <div>{renderTree(node.children)}</div>
          </div>}
        </li>;
      })}
    </ol>;
  }

  const current = items.find((item) => item.url === reading.active);
  const filled = Math.round(reading.progress / 100 * 24);

  return <div className="reading-layout" ref={layoutRef} data-has-outline={items.length > 0}>
    {items.length > 0 && <aside
      className="reading-outline"
      aria-label="Article navigation"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && mobileOpen) {
          setMobileOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>('.reading-outline-toggle')?.focus();
        }
      }}
    >
      <div className="reading-outline-label">TREE</div>
      <button
        className="reading-outline-toggle"
        type="button"
        aria-label="Toggle article outline"
        aria-expanded={mobileOpen}
        aria-controls={navigationId}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span>TREE</span>
        <span className="reading-outline-current">{current?.title}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      <nav
        className="reading-outline-nav"
        id={navigationId}
        aria-label="On this page"
        data-open={mobileOpen}
      >
        <div>{renderTree(tree)}</div>
      </nav>
      <div
        className="reading-progress"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={reading.progress}
      >
        <span className="reading-progress-blocks" aria-hidden="true">
          <span className="reading-progress-filled">{'▓'.repeat(filled)}</span>
          <span>{'░'.repeat(24 - filled)}</span>
        </span>
        <span className="reading-progress-percent" aria-hidden="true">
          {String(reading.progress).padStart(2, '0')}%
        </span>
      </div>
      {readingTime && <p className="reading-outline-time">{readingTime} read</p>}
    </aside>}
    <div className="reading-content" ref={contentRef}>{children}</div>
  </div>;
}
