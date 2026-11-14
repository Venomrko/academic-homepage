import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type ResourceCardProps = {
  href: string;
  title: string;
  titleSuffix?: ReactNode;
  description?: string;
  lang?: string;
  label?: string;
  metadata?: ReactNode;
  footer?: ReactNode;
  featured?: boolean;
  artwork?: ReactNode;
  artworkLayout?: 'side' | 'inline' | 'header';
  artworkSide?: 'left' | 'right';
  artworkClassName?: string;
  className?: string;
};

export function ResourceCard({
  href, title, titleSuffix, description, lang, label, metadata, footer,
  featured = false, artwork, artworkLayout = 'side', artworkSide = 'right', artworkClassName = '', className = '',
}: ResourceCardProps) {
  const titleId = `resource-${encodeURIComponent(href)}`;
  const hasArtwork = artwork != null || Boolean(artworkClassName);
  const isHeaderArtwork = hasArtwork && artworkLayout === 'header';
  const sideArtwork = hasArtwork && artworkLayout === 'side';
  const art = hasArtwork ? (
    <div
      className={`resource-card-art${artworkLayout === 'inline' ? ' resource-card-art-inline' : ''}${isHeaderArtwork ? ' resource-card-art-header' : ''} ${artworkClassName}`.trim()}
      aria-hidden="true"
    >
      {artwork}
    </div>
  ) : null;

  return (
    <Link href={href} className={`resource-card${featured ? ' resource-card-featured' : ''} ${className}`.trim()} aria-labelledby={titleId}>
      {(label || metadata) && <div className="resource-card-header">
        {label && <span className="resource-card-label">{label}</span>}
        {metadata && <span className="resource-card-metadata">{metadata}</span>}
      </div>}
      <div className={`resource-card-body${sideArtwork ? ` has-artwork artwork-${artworkSide}` : ''}`}>
        {sideArtwork && artworkSide === 'left' && art}
        <div className="resource-card-copy">
          {isHeaderArtwork ? (
            <div className="resource-card-head-row">
              <h2 id={titleId} lang={lang}>{title}{titleSuffix}</h2>
              {art}
            </div>
          ) : (
            <h2 id={titleId} lang={lang}>{title}{titleSuffix}</h2>
          )}
          {description && <p className="resource-card-description" lang={lang}>{description}</p>}
          {artworkLayout === 'inline' && art}
          <div className="resource-card-footer">
            {footer && <div className="resource-card-footer-meta">{footer}</div>}
            <ArrowUpRight className="resource-card-arrow" size={17} strokeWidth={1.5} aria-hidden="true" />
          </div>
        </div>
        {sideArtwork && artworkSide === 'right' && art}
      </div>
    </Link>
  );
}
