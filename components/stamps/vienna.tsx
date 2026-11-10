export function StampVienna() {
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
