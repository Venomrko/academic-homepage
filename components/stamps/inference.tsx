export function StampInference() {
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
