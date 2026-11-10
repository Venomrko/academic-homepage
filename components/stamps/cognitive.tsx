export function StampCognitive() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Continuous recursive Möbius / infinity loop */}
      <path
        d="M32 50 C32 36 44 32 52 42 C60 52 70 66 82 50 C90 38 78 28 66 32 C54 36 46 62 34 66 C22 70 18 56 32 50 Z"
        fill="none"
      />
      {/* Progression checkpoint nodes */}
      <circle cx="32" cy="50" r="3" fill="var(--stamp-ink)" />
      <circle cx="72" cy="54" r="3" fill="var(--stamp-ink)" />
      {/* Terracotta focal convergence spark */}
      <circle cx="52" cy="42" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="52" cy="42" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
      {/* Recursive feedback directional tick */}
      <path d="M68 31 L64 33 L67 36" fill="none" strokeWidth="1.8" />
    </g>
  );
}
