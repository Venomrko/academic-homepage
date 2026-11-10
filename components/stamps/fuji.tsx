export function StampFuji() {
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
