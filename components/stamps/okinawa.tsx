export function StampOkinawa() {
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
