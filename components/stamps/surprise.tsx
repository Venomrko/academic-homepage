export function StampSurprise() {
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
