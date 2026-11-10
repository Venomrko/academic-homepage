'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type ComponentProps, type CSSProperties } from 'react';
import { Star } from 'lucide-react';
import { profile } from '@/lib/data/profile';

const celebrationDuration = 3600;
const sparkles = [
  [8, 18, 18, 0], [22, 9, 24, .08], [38, 27, 14, .18], [62, 12, 22, .12],
  [82, 22, 18, .3], [93, 42, 26, .06], [12, 52, 22, .22], [29, 67, 16, .14],
  [48, 45, 20, .34], [72, 57, 24, .2], [87, 78, 16, .1], [7, 85, 18, .28],
  [42, 88, 24, .16], [61, 76, 16, .26], [54, 7, 14, .24], [94, 9, 18, .04],
] as const;

export function SiteBrand({ className, href = '/', ...linkProps }: ComponentProps<'a'>) {
  const pathname = usePathname();
  const sequence = useRef(0);
  const [burst, setBurst] = useState<{ id: number; pathname: string } | null>(null);
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
      onClick={() => setBurst({ id: ++sequence.current, pathname })}
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
          {sparkles.map(([x, y, size, delay], index) => <Star
            key={index}
            className="star-celebration-sparkle"
            fill="currentColor"
            strokeWidth={1}
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, animationDelay: `${delay}s` }}
          />)}
        </div>
      </div>,
      document.body,
    )}
  </div>;
}
