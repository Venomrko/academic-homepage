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

function ProjectVisualClimate() {
  return (
    <>
      {/* Background full-bleed field */}
      <rect width="600" height="300" fill="var(--visual-bg)" />

      {/* Tactile analog graph paper / notebook grid */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.14" strokeDasharray="3 6">
        <line x1="30" y1="55" x2="570" y2="55" />
        <line x1="30" y1="110" x2="570" y2="110" />
        <line x1="30" y1="165" x2="570" y2="165" />
        <line x1="30" y1="220" x2="570" y2="220" />
        <line x1="30" y1="265" x2="570" y2="265" />
        <line x1="90" y1="30" x2="90" y2="275" />
        <line x1="190" y1="30" x2="190" y2="275" />
        <line x1="290" y1="30" x2="290" y2="275" />
        <line x1="390" y1="30" x2="390" y2="275" />
        <line x1="490" y1="30" x2="490" y2="275" />
      </g>

      {/* Irregular Ivory Carrier Silhouette (Anthropic hand-cut paper silhouette) */}
      <path
        d="M86 54 C168 38 318 42 472 50 C526 53 546 96 540 152 C534 212 514 248 466 256 C382 268 214 262 124 252 C74 246 62 198 66 148 C70 98 76 56 86 54 Z"
        fill="var(--visual-token)"
        stroke="var(--project-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Atmospheric drift / breeze lines (flowing through the background) */}
      <g stroke="var(--project-ink)" strokeWidth="1.8" strokeDasharray="4 6" opacity="0.32" strokeLinecap="round">
        <path d="M72 105 C145 92 210 120 305 110 C365 104 430 114 475 102" fill="none" />
        <path d="M96 168 C175 155 240 184 345 172 C415 162 475 178 528 165" fill="none" />
      </g>

      {/* Botanical Sprig & Leaves (Nature & Climate Knowledge Corpus) */}
      <g id="climate-botanical">
        {/* Main curved living stem */}
        <path
          d="M168 244 C175 198 200 156 242 120 C268 98 298 84 328 78"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Lower Left Leaf */}
        <path
          d="M192 190 C158 182 144 158 154 136 C176 140 190 162 192 190 Z"
          fill="var(--visual-secondary)"
          fillOpacity="0.45"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M166 156 C176 166 186 176 192 190" fill="none" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />

        {/* Middle Right Leaf */}
        <path
          d="M220 152 C255 142 270 116 258 94 C238 98 224 120 220 152 Z"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M234 132 C244 120 252 108 258 94" fill="none" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />

        {/* Upper Left Sprout */}
        <path
          d="M260 112 C238 92 234 68 250 54 C264 68 268 90 260 112 Z"
          fill="var(--visual-secondary)"
          fillOpacity="0.35"
          stroke="var(--project-ink)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Apex Leaf */}
        <path
          d="M300 88 C332 76 352 60 358 40 C338 42 314 58 300 88 Z"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Tactile ink node dots along stem */}
        <circle cx="192" cy="190" r="3.5" fill="var(--project-ink)" />
        <circle cx="220" cy="152" r="3.5" fill="var(--project-ink)" />
        <circle cx="260" cy="112" r="3.5" fill="var(--project-ink)" />
      </g>

      {/* Observation Lens & Dialogue Aperture (Intertwined Dialogue & Reasoning) */}
      <g id="climate-aperture">
        {/* Gestural circular frame */}
        <path
          d="M346 160 C340 215 390 248 445 238 C492 228 512 180 502 132 C490 84 438 64 386 80 C348 92 342 125 346 160 Z"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Tactile magnifying handle extending downward */}
        <path
          d="M472 214 C496 238 518 256 532 262"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="4.2"
          strokeLinecap="round"
        />

        {/* Hand-drawn acoustic dialogue ripple arcs */}
        <path
          d="M410 116 C435 106 465 116 475 140"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M420 134 C438 126 456 134 462 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Terracotta Sun / Discovery Spark (Anthropic signature clay spot) */}
        <circle cx="382" cy="148" r="16" fill="var(--visual-accent)" />
        <circle cx="382" cy="148" r="16" fill="none" stroke="var(--project-ink)" strokeWidth="2.2" />

        {/* Radiating gestural sunbeams */}
        <line x1="382" y1="120" x2="382" y2="112" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="408" y1="148" x2="416" y2="148" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="382" y1="176" x2="382" y2="184" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="356" y1="148" x2="348" y2="148" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </>
  );
}

function ProjectVisualTwin() {
  return (
    <>
      {/* Background full-bleed field */}
      <rect width="600" height="300" fill="var(--visual-bg)" />

      {/* Tactile analog ledger ruling */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.14" strokeDasharray="3 6">
        <line x1="30" y1="55" x2="570" y2="55" />
        <line x1="30" y1="110" x2="570" y2="110" />
        <line x1="30" y1="165" x2="570" y2="165" />
        <line x1="30" y1="220" x2="570" y2="220" />
        <line x1="30" y1="265" x2="570" y2="265" />
        <line x1="100" y1="30" x2="100" y2="275" />
        <line x1="200" y1="30" x2="200" y2="275" />
        <line x1="300" y1="30" x2="300" y2="275" />
        <line x1="400" y1="30" x2="400" y2="275" />
        <line x1="500" y1="30" x2="500" y2="275" />
      </g>

      {/* Irregular Ivory Carrier Silhouette (Anthropic pebble / carrier shape) */}
      <path
        d="M82 58 C176 42 342 46 482 54 C534 58 554 104 548 158 C540 216 516 252 468 260 C380 272 210 266 120 256 C70 250 60 198 64 148 C68 98 74 60 82 58 Z"
        fill="var(--visual-token)"
        stroke="var(--project-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* PHYSICAL REALITY: Naive Hand-Drawn Hand (Human craft & physical asset) */}
      <g id="twin-hand">
        {/* Forearm & base palm */}
        <path
          d="M102 232 C126 228 154 224 176 212"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        {/* Palm curve */}
        <path
          d="M148 222 C178 228 214 216 234 194"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        {/* Thumb */}
        <path
          d="M166 178 C174 152 188 142 200 148 C208 154 204 175 192 192"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Index Finger */}
        <path
          d="M192 192 C218 186 242 170 250 148 C254 136 245 128 236 132 C225 136 215 156 202 170"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Middle Finger */}
        <path
          d="M202 170 C224 154 246 134 255 118 C260 108 250 102 240 108 C228 116 216 138 198 158"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ring Finger */}
        <path
          d="M198 158 C216 142 234 122 242 106 C246 96 238 92 230 96 C218 104 206 126 190 148"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Hand wrist fold mark */}
        <path d="M128 218 C136 226 146 228 152 232" fill="none" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>

      {/* DIGITAL TWIN: Faceted Polyhedron Crystal (Digital Counterpart) */}
      <g id="twin-crystal">
        {/* Shaded Facets */}
        <polygon
          points="410,75 345,112 410,150"
          fill="var(--visual-secondary)"
          fillOpacity="0.32"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="410,75 475,112 410,150"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="345,112 345,188 410,225 410,150"
          fill="var(--visual-bg)"
          fillOpacity="0.55"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="475,112 475,188 410,225 410,150"
          fill="var(--visual-secondary)"
          fillOpacity="0.45"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Solid ink node dots at crystal vertices */}
        <circle cx="410" cy="75" r="4.2" fill="var(--project-ink)" />
        <circle cx="345" cy="112" r="4.2" fill="var(--project-ink)" />
        <circle cx="475" cy="112" r="4.2" fill="var(--project-ink)" />
        <circle cx="410" cy="150" r="4.2" fill="var(--project-ink)" />
        <circle cx="345" cy="188" r="4.2" fill="var(--project-ink)" />
        <circle cx="475" cy="188" r="4.2" fill="var(--project-ink)" />
        <circle cx="410" cy="225" r="4.2" fill="var(--project-ink)" />
      </g>

      {/* TELEMETRY & RESONANCE WAVE: Harmonizing Physical & Digital */}
      <g id="twin-wave">
        {/* Primary living sinusoidal wave ribbon */}
        <path
          d="M208 174 C238 122 268 218 298 160 C328 102 358 198 408 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />

        {/* Secondary harmonic wave (dashed) */}
        <path
          d="M208 174 C238 200 268 102 298 160 C328 218 358 102 408 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2"
          strokeDasharray="4 6"
          opacity="0.6"
          strokeLinecap="round"
        />

        {/* Analog vibration measurement ticks */}
        <line x1="238" y1="114" x2="238" y2="128" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="268" y1="212" x2="268" y2="226" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="328" y1="94" x2="328" y2="108" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="358" y1="192" x2="358" y2="206" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />

        {/* Resonance Focal Node (Terracotta spot) */}
        <circle cx="298" cy="160" r="11" fill="var(--visual-accent)" />
        <circle cx="298" cy="160" r="11" fill="none" stroke="var(--project-ink)" strokeWidth="2.2" />

        {/* Concentric pulse rings */}
        <path
          d="M280 144 C290 136 306 136 316 144"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M280 176 C290 184 306 184 316 176"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
      </g>
    </>
  );
}

function ProjectVisualLedger() {
  return (
    <>
      {/* Background full-bleed field */}
      <rect width="600" height="300" fill="var(--visual-bg)" />

      {/* Tactile archival ledger horizontal lines */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.14">
        <line x1="30" y1="48" x2="570" y2="48" />
        <line x1="30" y1="88" x2="570" y2="88" />
        <line x1="30" y1="128" x2="570" y2="128" />
        <line x1="30" y1="168" x2="570" y2="168" />
        <line x1="30" y1="208" x2="570" y2="208" />
        <line x1="30" y1="248" x2="570" y2="248" />
      </g>

      {/* Irregular Ivory Carrier Silhouette (Anthropic archival tablet / carrier) */}
      <path
        d="M76 55 C182 40 352 44 486 52 C536 56 555 100 549 155 C541 214 519 252 469 260 C379 272 206 266 116 256 C66 250 56 198 61 148 C65 96 71 58 76 55 Z"
        fill="var(--visual-token)"
        stroke="var(--project-ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* TRIO OF OVERLAPPING HAND-DRAWN LEDGER BLOCKS */}
      <g id="ledger-blocks">
        {/* BLOCK 1: Left Block (Block N-1) */}
        <g id="block-left">
          {/* Top Face */}
          <polygon
            points="115,124 165,96 215,124 165,152"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Face */}
          <polygon
            points="115,124 165,152 165,212 115,184"
            fill="var(--visual-bg)"
            fillOpacity="0.45"
            stroke="var(--project-ink)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Face */}
          <polygon
            points="165,152 215,124 215,184 165,212"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hand-drawn ledger tally marks on front face */}
          <line x1="176" y1="162" x2="204" y2="146" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          <line x1="176" y1="174" x2="204" y2="158" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          <line x1="176" y1="186" x2="204" y2="170" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </g>

        {/* BLOCK 3: Right Block (Block N+1) */}
        <g id="block-right">
          {/* Top Face */}
          <polygon
            points="385,124 435,96 485,124 435,152"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Face */}
          <polygon
            points="385,124 435,152 435,212 385,184"
            fill="var(--visual-bg)"
            fillOpacity="0.45"
            stroke="var(--project-ink)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Face */}
          <polygon
            points="435,152 485,124 485,184 435,212"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hand-drawn Merkle tree glyph on right face */}
          <line x1="452" y1="190" x2="452" y2="168" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="452" y1="168" x2="444" y2="156" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="452" y1="168" x2="462" y2="156" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <circle cx="444" cy="156" r="2.8" fill="var(--project-ink)" />
          <circle cx="462" cy="156" r="2.8" fill="var(--project-ink)" />
        </g>

        {/* BLOCK 2: Center Primary Block (Block N - Elevated & Validated) */}
        <g id="block-center">
          {/* Top Face */}
          <polygon
            points="245,96 300,68 355,96 300,124"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left Face */}
          <polygon
            points="245,96 300,124 300,196 245,168"
            fill="var(--visual-secondary)"
            fillOpacity="0.32"
            stroke="var(--project-ink)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right Face */}
          <polygon
            points="300,124 355,96 355,168 300,196"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* CONTINUOUS UNBROKEN CHAIN RIBBON (Immutable distributed linkage) */}
      <g id="ledger-chain">
        <path
          d="M86 174 C126 154 146 164 196 150 C236 138 256 116 300 120 C346 124 366 148 406 142 C446 136 476 162 516 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Secondary intertwined tactile thread */}
        <path
          d="M86 182 C126 162 146 172 196 158 C236 146 256 124 300 128 C346 132 366 156 406 150 C446 144 476 170 516 158"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2"
          strokeDasharray="4 6"
          opacity="0.65"
          strokeLinecap="round"
        />
      </g>

      {/* CONSENSUS WAX SEAL STAMP (Anthropic terracotta signature mark) */}
      <g id="ledger-seal">
        {/* Scalloped / hand-drawn rosette seal ring */}
        <path
          d="M300 134 C314 134 325 144 325 158 C325 172 314 182 300 182 C286 182 275 172 275 158 C275 144 286 134 300 134 Z"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner solid terracotta clay wax stamp disc */}
        <circle cx="300" cy="158" r="14" fill="var(--visual-accent)" />
        <circle cx="300" cy="158" r="14" fill="none" stroke="var(--project-ink)" strokeWidth="2.2" />

        {/* Verification Checkmark / Byzantine Consensus Glyph */}
        <path
          d="M293 158 L298 163 L308 152"
          fill="none"
          stroke="#FAF9F5"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  );
}

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
