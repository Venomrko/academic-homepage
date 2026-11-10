export function StampEurope() {
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
