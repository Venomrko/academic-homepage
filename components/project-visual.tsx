import { ProjectVisualClimate } from './project-visuals/climate';
import { ProjectVisualTwin } from './project-visuals/twin';
import { ProjectVisualLedger } from './project-visuals/ledger';

type ProjectVisualVariant = 'climate' | 'twin' | 'ledger';

const captions: Record<ProjectVisualVariant, string> = {
  climate: 'DOMAIN RAG · BOTANICAL KNOWLEDGE · DIALOGUE REASONING',
  twin: 'CYBER-PHYSICAL SYSTEM · HARMONIC TELEMETRY · DIGITAL TWIN',
  ledger: 'VERIFIABLE LEDGER · IMMUTABLE CONSENSUS · AUDIT TRAIL',
};

/**
 * Anthropic Editorial Hand-Drawn Visuals
 * Reference: https://azivor.github.io/reference/#anthropic
 * Style grammar:
 * - Opaque verified palette fields (cactus #BCD1CA, heather #CBCADB, oat #E3DACC, clay #D97757)
 * - Organic, irregular ivory carrier shape (#FAF9F5)
 * - Expressive, naive hand-drawn ink gestures (#141413) with rounded caps/joins
 * - Symbolic conceptual clarity without textual clutter or collisions
 */

export function ProjectVisual({
  variant,
  showCaption = true,
}: {
  variant: ProjectVisualVariant;
  showCaption?: boolean;
}) {
  return (
    <div className={`project-visual visual-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 600 300" fill="none">
        {variant === 'climate' && <ProjectVisualClimate />}
        {variant === 'twin' && <ProjectVisualTwin />}
        {variant === 'ledger' && <ProjectVisualLedger />}
      </svg>
      {showCaption && <p className="project-art-caption">{captions[variant]}</p>}
    </div>
  );
}
