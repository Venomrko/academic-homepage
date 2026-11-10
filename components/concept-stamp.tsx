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

function StampFuji() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Terracotta dawn sun halo above the summit */}
      <circle cx="50" cy="24" r="7.5" fill="var(--stamp-accent)" />
      <circle cx="50" cy="24" r="7.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
      <path d="M37 24 C37 17 43 12 50 12 C57 12 63 17 63 24" fill="none" stroke="var(--stamp-accent)" strokeWidth="1.5" strokeDasharray="2 3" />

      {/* Iconic Mount Fuji conical silhouette */}
      <path
        d="M22 75 C35 73 42 55 46 38 L54 38 C58 55 65 73 78 75"
        fill="none"
        strokeWidth="2.6"
      />

      {/* Hand-drawn snowcap crest */}
      <path
        d="M44 48 C46 51 48 46 50 50 C52 46 54 51 56 48"
        fill="none"
        strokeWidth="2"
      />

      {/* Surrounding cloud streamer */}
      <path
        d="M20 62 C28 58 38 60 42 58"
        fill="none"
        strokeWidth="1.8"
        opacity="0.6"
      />

      {/* Base water line reflection */}
      <line x1="26" y1="79" x2="74" y2="79" strokeWidth="2" />
      <line x1="34" y1="83" x2="66" y2="83" strokeWidth="1.5" opacity="0.6" />
    </g>
  );
}

function StampOkinawa() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Cresting ocean wave curling over */}
      <path
        d="M18 74 C28 74 36 68 44 58 C50 48 58 36 72 38 C79 40 80 46 75 50 C70 53 64 51 64 46"
        fill="none"
        strokeWidth="2.6"
      />

      {/* Sea spray droplets */}
      <circle cx="58" cy="34" r="2.8" fill="var(--stamp-accent)" />
      <circle cx="58" cy="34" r="2.8" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.4" />
      <circle cx="73" cy="30" r="2" fill="var(--stamp-ink)" />
      <circle cx="48" cy="40" r="2" fill="var(--stamp-ink)" />

      {/* Secondary under-wave sweep */}
      <path
        d="M22 66 C34 66 46 60 58 64 C68 68 76 74 82 74"
        fill="none"
        strokeWidth="2"
      />

      {/* Coastal horizon baseline */}
      <line x1="20" y1="79" x2="80" y2="79" strokeWidth="2" />
      <line x1="30" y1="83" x2="70" y2="83" strokeWidth="1.5" opacity="0.6" />
    </g>
  );
}

function StampVienna() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Alpine mountain peaks in background */}
      <path
        d="M18 70 L34 42 L48 58 L68 34 L82 70"
        fill="none"
        strokeWidth="1.8"
        opacity="0.55"
      />

      {/* Austrian alpine church spire / bell tower (Hallstatt motif) */}
      <path
        d="M36 74 L36 50 L42 30 L48 50 L48 74"
        fill="var(--stamp-carrier)"
        strokeWidth="2.5"
      />
      {/* Spire steeple cross finial */}
      <line x1="42" y1="24" x2="42" y2="30" strokeWidth="2" />
      <line x1="39" y1="26" x2="45" y2="26" strokeWidth="2" />

      {/* Terracotta tower clock disc */}
      <circle cx="42" cy="55" r="3.2" fill="var(--stamp-accent)" />
      <circle cx="42" cy="55" r="3.2" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.4" />

      {/* Alpine lake water surface ripples */}
      <line x1="22" y1="78" x2="78" y2="78" strokeWidth="2" />
      <line x1="32" y1="82" x2="68" y2="82" strokeWidth="1.5" opacity="0.6" />
    </g>
  );
}

function StampSeoul() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Mountain ridge backdrop (Bukhansan silhouette) */}
      <path
        d="M20 54 C32 46 44 48 52 44 C62 40 70 48 80 52"
        fill="none"
        strokeWidth="1.6"
        strokeDasharray="3 3"
        opacity="0.55"
      />

      {/* Evening terracotta sun disc above the palace */}
      <circle cx="50" cy="27" r="6.5" fill="var(--stamp-accent)" />
      <circle cx="50" cy="27" r="6.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.5" />

      {/* Traditional Korean Hanok / palace curved tiled eaves (giwa) */}
      <path
        d="M18 48 C28 50 38 43 50 43 C62 43 72 50 82 48"
        fill="none"
        strokeWidth="2.8"
      />
      <path
        d="M24 57 C32 59 40 54 50 54 C60 54 68 59 76 57"
        fill="none"
        strokeWidth="2.4"
      />

      {/* Pavilion support columns */}
      <line x1="34" y1="57" x2="34" y2="75" strokeWidth="2.2" />
      <line x1="50" y1="54" x2="50" y2="75" strokeWidth="2.2" />
      <line x1="66" y1="57" x2="66" y2="75" strokeWidth="2.2" />

      {/* Pavilion stone base */}
      <line x1="26" y1="75" x2="74" y2="75" strokeWidth="2.6" />
    </g>
  );
}

function StampEurope() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Grand European Gothic / arched portal (Arc de Triomphe / Bremen portal motif) */}
      <path
        d="M26 76 L26 46 C26 30 74 30 74 46 L74 76"
        fill="none"
        strokeWidth="2.6"
      />
      <path
        d="M36 76 L36 50 C36 40 64 40 64 50 L64 76"
        fill="none"
        strokeWidth="2.2"
      />

      {/* Keystone waypoint compass rosette / journey star */}
      <circle cx="50" cy="28" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="50" cy="28" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.5" />
      <line x1="50" y1="18" x2="50" y2="22" strokeWidth="1.8" />
      <line x1="50" y1="34" x2="50" y2="38" strokeWidth="1.8" />
      <line x1="40" y1="28" x2="44" y2="28" strokeWidth="1.8" />
      <line x1="56" y1="28" x2="60" y2="28" strokeWidth="1.8" />

      {/* Base plinth step */}
      <line x1="20" y1="76" x2="80" y2="76" strokeWidth="2.6" />
      <line x1="24" y1="80" x2="76" y2="80" strokeWidth="1.8" opacity="0.6" />
    </g>
  );
}

function StampJournal() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Little open notebook */}
      <path
        d="M26 36 L48 34 L48 72 L26 74 Z"
        fill="var(--stamp-carrier)"
        strokeWidth="2.4"
      />
      <path
        d="M52 34 L74 36 L74 74 L52 72 Z"
        fill="var(--stamp-carrier)"
        strokeWidth="2.4"
      />

      {/* Notebook spine line */}
      <line x1="50" y1="33" x2="50" y2="73" strokeWidth="2.6" />

      {/* Terracotta ribbon bookmark spilling out from bottom */}
      <path
        d="M50 48 C50 60 55 68 46 80 C52 79 56 73 54 64"
        fill="var(--stamp-accent)"
        strokeWidth="1.8"
      />

      {/* Botanical clover / pressed sprig on the right page */}
      <path
        d="M62 48 C58 44 64 40 67 45"
        fill="none"
        strokeWidth="1.8"
      />
      <line x1="64" y1="46" x2="60" y2="55" strokeWidth="1.6" />

      {/* Subtle diary ruling lines on left page */}
      <line x1="31" y1="44" x2="43" y2="43" strokeWidth="1.4" opacity="0.45" />
      <line x1="31" y1="52" x2="43" y2="51" strokeWidth="1.4" opacity="0.45" />
      <line x1="31" y1="60" x2="43" y2="59" strokeWidth="1.4" opacity="0.45" />
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
