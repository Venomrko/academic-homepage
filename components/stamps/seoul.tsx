export function StampSeoul() {
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
