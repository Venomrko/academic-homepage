export function StampVerification() {
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
