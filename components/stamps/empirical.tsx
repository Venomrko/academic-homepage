export function StampEmpirical() {
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
