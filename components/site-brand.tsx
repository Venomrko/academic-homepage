'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type ComponentProps, type CSSProperties } from 'react';
import { Star } from 'lucide-react';
import { profile } from '@/lib/data/profile';

const celebrationDuration = 3600;
const sparkleTemplates = [
  [18, 0], [24, .08], [14, .18], [22, .12],
  [18, .3], [26, .06], [22, .22], [16, .14],
  [20, .34], [24, .2], [16, .1], [18, .28],
  [24, .16], [16, .26], [14, .24], [18, .04],
] as const;
const sparklePalette = ['#FF5522', 'var(--accent-fill)', '#a795d8', '#88b58c'] as const;

function createSparkles() {
  const colors = sparkleTemplates.map((_, index) => sparklePalette[index % sparklePalette.length]);
  for (let index = colors.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [colors[index], colors[swapIndex]] = [colors[swapIndex], colors[index]];
  }

  const width = window.innerWidth;
  const height = window.innerHeight;

  return sparkleTemplates.map(([size, delay], index) => {
    const left = 8;
    const top = 72;
    const horizontalRange = Math.max(0, width - size - left * 2);
    const verticalRange = Math.max(0, height - size - top - 8);
    let x = Math.random();
    let y = Math.random();

    // Let a few stars reach the edges; the rest can gather freely across the screen.
    if (index < 4) {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0) x *= .12;
      else if (edge === 1) x = 1 - x * .12;
      else if (edge === 2) y *= .12;
      else y = 1 - y * .12;
    }

    return {
      x: (left + x * horizontalRange) / width * 100,
      y: (top + y * verticalRange) / height * 100,
      size,
      delay,
      color: colors[index],
    };
  });
}

export function SiteBrand({ className, href = '/', ...linkProps }: ComponentProps<'a'>) {
  const pathname = usePathname();
  const sequence = useRef(0);
  const [burst, setBurst] = useState<{ id: number; pathname: string; sparkles: ReturnType<typeof createSparkles> } | null>(null);
  const celebrating = burst !== null && burst.pathname === pathname;

  useEffect(() => {
    if (!burst) return;
    if (burst.pathname !== pathname) {
      setBurst(null);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pulse = reducedMotion.matches ? undefined : document.querySelector('.page-transition')?.animate([
      { transform: 'translateY(0)', offset: 0 },
      { transform: 'translateY(-3px)', offset: .18 },
      { transform: 'translateY(0)', offset: .35 },
      { transform: 'translateY(-2px)', offset: .5 },
      { transform: 'translateY(0)', offset: .7 },
      { transform: 'translateY(0)', offset: 1 },
    ], { duration: 1400, iterations: 2, easing: 'ease-in-out' });

    const timer = window.setTimeout(() => setBurst(null), celebrationDuration);
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setBurst(null);
    };
    const motionChanged = (event: MediaQueryListEvent) => {
      if (event.matches) pulse?.cancel();
    };
    window.addEventListener('keydown', dismiss);
    reducedMotion.addEventListener('change', motionChanged);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', dismiss);
      reducedMotion.removeEventListener('change', motionChanged);
      pulse?.cancel();
    };
  }, [burst, pathname]);

  return <div className={`site-brand${className ? ` ${className}` : ''}`}>
    <button
      type="button"
      className="brand-star-trigger"
      aria-label="Make the page sparkle"
      data-celebrating={celebrating ? 'true' : undefined}
      onClick={() => setBurst({ id: ++sequence.current, pathname, sparkles: createSparkles() })}
    >
      <Star key={burst?.id ?? 0} className="brand-star" size={20} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
    </button>
    <Link {...linkProps} href={href} className="brand-home-link">
      {profile.name}<span className="brand-period">.</span>
    </Link>
    {celebrating && createPortal(
      <div
        key={burst.id}
        className="star-celebration"
        aria-hidden="true"
        style={{ '--celebration-duration': `${celebrationDuration}ms` } as CSSProperties}
      >
        <div className="star-celebration-wash" aria-hidden="true" />
        <div className="star-celebration-sparkles" aria-hidden="true">
          {burst.sparkles.map(({ x, y, size, delay, color }, index) => <Star
            key={index}
            className="star-celebration-sparkle"
            fill="currentColor"
            strokeWidth={1}
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, color, animationDelay: `${delay}s` }}
          />)}
        </div>
      </div>,
      document.body,
    )}
  </div>;
}
