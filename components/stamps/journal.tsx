export function StampJournal() {
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
