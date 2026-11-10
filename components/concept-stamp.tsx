import type { SVGProps } from 'react';

export type ConceptStampVariant =
  | 'cognitive'
  | 'inference'
  | 'verification'
  | 'surprise'
  | 'empirical'
  | 'lattice';

export function getStampVariantForSlug(slug?: string): ConceptStampVariant {
  if (!slug) return 'lattice';
  if (slug.includes('cognitive') || slug.includes('cumulative')) return 'cognitive';
  if (slug.includes('inference') || slug.includes('geometric')) return 'inference';
  if (slug.includes('structured') || slug.includes('factual') || slug.includes('verification')) return 'verification';
  if (slug.includes('surprise') || slug.includes('prediction')) return 'surprise';
  if (slug.includes('experiment') || slug.includes('reproducible')) return 'empirical';
  return 'lattice';
}

function StampCognitive() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Continuous recursive Möbius / infinity loop */}
      <path
        d="M32 50 C32 36 44 32 52 42 C60 52 70 66 82 50 C90 38 78 28 66 32 C54 36 46 62 34 66 C22 70 18 56 32 50 Z"
        fill="none"
      />
      {/* Progression checkpoint nodes */}
      <circle cx="32" cy="50" r="3" fill="var(--stamp-ink)" />
      <circle cx="72" cy="54" r="3" fill="var(--stamp-ink)" />
      {/* Terracotta focal convergence spark */}
      <circle cx="52" cy="42" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="52" cy="42" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
      {/* Recursive feedback directional tick */}
      <path d="M68 31 L64 33 L67 36" fill="none" strokeWidth="1.8" />
    </g>
  );
}

function StampInference() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Root node at bottom */}
      <circle cx="50" cy="80" r="3" fill="var(--stamp-ink)" />
      {/* Expanding search branches */}
      <path d="M50 80 L30 56" />
      <path d="M50 80 L50 54" />
      <path d="M50 80 L70 56" />
      {/* Branch nodes */}
      <circle cx="30" cy="56" r="2.8" fill="var(--stamp-ink)" />
      <circle cx="50" cy="54" r="2.8" fill="var(--stamp-ink)" />
      <circle cx="70" cy="56" r="2.8" fill="var(--stamp-ink)" />
      {/* Constriction lens / aperture curve */}
      <path d="M24 44 C50 36 50 36 76 44" fill="none" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.6" />
      {/* Single optimal trajectory line ascending to solution apex */}
      <path d="M50 54 L50 24" strokeWidth="3" />
      {/* Terracotta solution apex */}
      <circle cx="50" cy="24" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="50" cy="24" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
    </g>
  );
}

function StampVerification() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Triangulated graph lattice */}
      <polygon points="50,22 24,74 76,74" fill="none" strokeWidth="2.4" />
      {/* Triangulation vertices */}
      <circle cx="50" cy="22" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="24" cy="74" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="76" cy="74" r="3.2" fill="var(--stamp-ink)" />
      {/* Center verification wax seal with terracotta fill */}
      <circle cx="50" cy="56" r="13" fill="var(--stamp-accent)" />
      <circle cx="50" cy="56" r="13" fill="none" stroke="var(--stamp-ink)" strokeWidth="2" />
      {/* Crisp pure-white consensus checkmark inside seal */}
      <path d="M44 56 L48 60 L57 51" fill="none" stroke="#FAF9F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

function StampSurprise() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Probability baseline axis */}
      <line x1="18" y1="74" x2="82" y2="74" strokeWidth="1.5" opacity="0.4" />
      {/* Smooth Gaussian bell wave */}
      <path
        d="M20 74 C34 74 38 48 50 48 C56 48 62 74 80 74"
        fill="none"
        strokeWidth="2.4"
      />
      {/* Sudden surprise divergence spike */}
      <path d="M50 48 L46 36 L54 30 L50 18" fill="none" strokeWidth="2.8" />
      {/* Terracotta surprise spark at the peak */}
      <circle cx="50" cy="18" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="50" cy="18" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
      {/* Divergence spark ticks */}
      <line x1="42" y1="16" x2="38" y2="14" strokeWidth="1.6" />
      <line x1="58" y1="16" x2="62" y2="14" strokeWidth="1.6" />
      <line x1="50" y1="11" x2="50" y2="8" strokeWidth="1.6" />
    </g>
  );
}

function StampEmpirical() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Ground baseline & fulcrum */}
      <line x1="22" y1="78" x2="78" y2="78" strokeWidth="1.5" opacity="0.4" />
      <polygon points="50,62 44,78 56,78" fill="var(--stamp-ink)" opacity="0.8" />
      {/* Calibrated balance beam */}
      <line x1="24" y1="62" x2="76" y2="62" strokeWidth="2.6" />
      <circle cx="50" cy="62" r="3" fill="var(--stamp-ink)" />
      {/* Left pan: empirical specimen cube */}
      <line x1="32" y1="62" x2="32" y2="48" strokeWidth="1.5" opacity="0.6" strokeDasharray="2 2" />
      <rect x="24" y="34" width="16" height="16" rx="2.5" fill="var(--stamp-carrier)" stroke="var(--stamp-ink)" strokeWidth="2.2" />
      {/* Right pan: terracotta calibration counterweight */}
      <line x1="68" y1="62" x2="68" y2="48" strokeWidth="1.5" opacity="0.6" strokeDasharray="2 2" />
      <circle cx="68" cy="42" r="8" fill="var(--stamp-accent)" />
      <circle cx="68" cy="42" r="8" fill="none" stroke="var(--stamp-ink)" strokeWidth="2" />
    </g>
  );
}

function StampLattice() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 26 C66 32 72 58 58 72 C44 86 28 70 34 50 C40 30 64 34 70 52" fill="none" />
      <circle cx="50" cy="26" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="58" cy="72" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="34" cy="50" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="70" cy="52" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="70" cy="52" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
    </g>
  );
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
      </svg>
    </div>
  );
}
