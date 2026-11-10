export function ProjectVisualLedger() {
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
