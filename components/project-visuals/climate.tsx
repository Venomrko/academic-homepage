export function ProjectVisualClimate() {
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
