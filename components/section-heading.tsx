import type { ReactNode } from 'react';

export function SectionHeading({ number, label, title, children }: { number?: string; label: string; title: string; children?: ReactNode }) {
  return <div className="section-heading"><div><div className="eyebrow">{number && <span className="section-number">{number} / </span>}{label}</div><h2>{title}</h2></div>{children && <div className="section-heading-aside">{children}</div>}</div>;
}

export function PageHeading({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return <header className="page-heading"><h1>{title}<span className="accent-period">.</span></h1>{description && <p>{description}</p>}{children}</header>;
}
