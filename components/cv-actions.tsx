import { Download } from 'lucide-react';

export function CVActions({ cvUrl = '/cv.pdf', updated }: { cvUrl?: string; updated: string }) {
  return (
    <div className="cv-action-row">
      <div className="cv-action-buttons">
        <a
          href={cvUrl || '/cv.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary cv-btn"
          download="Ren_Zhuang_CV.pdf"
        >
          <Download size={14} aria-hidden="true" />
          <span>Download PDF</span>
        </a>
      </div>
      <span className="cv-badge">Updated: {updated}</span>
    </div>
  );
}
