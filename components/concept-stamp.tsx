import { StampCognitive } from './stamps/cognitive';
import { StampInference } from './stamps/inference';
import { StampVerification } from './stamps/verification';
import { StampSurprise } from './stamps/surprise';
import { StampEmpirical } from './stamps/empirical';
import { StampLattice } from './stamps/lattice';
import { StampFuji } from './stamps/fuji';
import { StampOkinawa } from './stamps/okinawa';
import { StampVienna } from './stamps/vienna';
import { StampSeoul } from './stamps/seoul';
import { StampEurope } from './stamps/europe';
import { StampJournal } from './stamps/journal';

import type { SVGProps } from 'react';

export type ConceptStampVariant =
  | 'cognitive'
  | 'inference'
  | 'verification'
  | 'surprise'
  | 'empirical'
  | 'lattice'
  | 'fuji'
  | 'okinawa'
  | 'vienna'
  | 'seoul'
  | 'europe'
  | 'journal';

export function getStampVariantForSlug(slug?: string): ConceptStampVariant {
  if (!slug) return 'lattice';
  // Travel & life essays
  if (slug.includes('yokohama') || slug.includes('fuji')) return 'fuji';
  if (slug.includes('okinawa')) return 'okinawa';
  if (slug.includes('vienna') || slug.includes('hallstatt')) return 'vienna';
  if (slug.includes('seoul')) return 'seoul';
  if (slug.includes('bremen') || slug.includes('paris') || slug.includes('berlin')) return 'europe';
  if (slug.includes('working-notes') || slug.includes('small-things')) return 'journal';

  // Academic research notes
  if (slug.includes('cognitive') || slug.includes('cumulative')) return 'cognitive';
  if (slug.includes('inference') || slug.includes('geometric')) return 'inference';
  if (slug.includes('structured') || slug.includes('factual') || slug.includes('verification')) return 'verification';
  if (slug.includes('surprise') || slug.includes('prediction')) return 'surprise';
  if (slug.includes('experiment') || slug.includes('reproducible')) return 'empirical';
  return 'lattice';
}

export function ConceptStamp({
  slug,
  variant,
  className = '',
  size = 'md',
  ...props
}: {
  slug?: string;
  variant?: ConceptStampVariant;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
} & SVGProps<SVGSVGElement>) {
  const resolvedVariant = variant ?? getStampVariantForSlug(slug);

  return (
    <div
      className={`concept-stamp stamp-${resolvedVariant} stamp-size-${size} ${className}`.trim()}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" {...props}>
        {/* Full-bleed opaque stamp canvas */}
        <rect width="100" height="100" rx="14" fill="var(--stamp-bg)" />

        {/* Delicate notebook / archival grid */}
        <g stroke="var(--stamp-ink)" strokeWidth="0.8" opacity="0.14" strokeDasharray="2 4">
          <line x1="15" y1="25" x2="85" y2="25" />
          <line x1="15" y1="50" x2="85" y2="50" />
          <line x1="15" y1="75" x2="85" y2="75" />
          <line x1="25" y1="15" x2="25" y2="85" />
          <line x1="50" y1="15" x2="50" y2="85" />
          <line x1="75" y1="15" x2="75" y2="85" />
        </g>

        {/* Irregular Ivory Carrier Stamp (Anthropic cut-paper seal) */}
        <path
          d="M16 22 C32 14 68 15 84 22 C92 38 91 62 84 78 C68 86 32 85 16 78 C9 62 8 38 16 22 Z"
          fill="var(--stamp-carrier)"
          stroke="var(--stamp-ink)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />

        {/* Motif Rendering */}
        {resolvedVariant === 'cognitive' && <StampCognitive />}
        {resolvedVariant === 'inference' && <StampInference />}
        {resolvedVariant === 'verification' && <StampVerification />}
        {resolvedVariant === 'surprise' && <StampSurprise />}
        {resolvedVariant === 'empirical' && <StampEmpirical />}
        {resolvedVariant === 'lattice' && <StampLattice />}
        {resolvedVariant === 'fuji' && <StampFuji />}
        {resolvedVariant === 'okinawa' && <StampOkinawa />}
        {resolvedVariant === 'vienna' && <StampVienna />}
        {resolvedVariant === 'seoul' && <StampSeoul />}
        {resolvedVariant === 'europe' && <StampEurope />}
        {resolvedVariant === 'journal' && <StampJournal />}
      </svg>
    </div>
  );
}
