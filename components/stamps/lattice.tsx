export function StampLattice() {
  return (
    <g stroke="var(--stamp-ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 26 C66 32 72 58 58 72 C44 86 28 70 34 50 C40 30 64 34 70 52" fill="none" />
      <circle cx="50" cy="26" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="58" cy="72" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="34" cy="50" r="3.2" fill="var(--stamp-ink)" />
      <circle cx="70" cy="52" r="4.5" fill="var(--stamp-accent)" />
      <circle cx="70" cy="52" r="4.5" fill="none" stroke="var(--stamp-ink)" strokeWidth="1.6" />
    </g>
  );
}
