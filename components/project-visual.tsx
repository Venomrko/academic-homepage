type ProjectVisualVariant = 'climate' | 'twin' | 'ledger';

const captions: Record<ProjectVisualVariant, string> = {
  climate: 'DOMAIN RAG · BOTANICAL KNOWLEDGE · DIALOGUE REASONING',
  twin: 'CYBER-PHYSICAL SYSTEM · HARMONIC TELEMETRY · DIGITAL TWIN',
  ledger: 'VERIFIABLE LEDGER · IMMUTABLE CONSENSUS · AUDIT TRAIL',
};

/**
 * Anthropic Editorial Vector Illustrations (Refined & Instantly Recognizable)
 * Inspired by Anthropic Newsroom & azivor.github.io/reference/#anthropic:
 * - Clear, unmistakable iconic subjects (Ginkgo leaf, vernier caliper & faceted crystal, bound ledgers & wax seal)
 * - Harmonious balance between precise scientific drafting and tactile hand-drawn warmth
 * - Opaque verified palette (cactus #BCD1CA, heather #CBCADB, oat #E3DACC, clay #D97757, olive #788C5D, sky #6A9BCC)
 * - Asymmetrical organic ivory paper carrier (#FAF9F5)
 * - Zero text clutter: completely immune to zoom-induced text overlap
 */

function ProjectVisualClimate() {
  return (
    <>
      {/* Background full-bleed field: Anthropic cactus */}
      <rect width="600" height="300" fill="var(--visual-bg)" />

      {/* Tactile analog graph paper / notebook grid */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 6">
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

      {/* Organic Ivory Carrier Silhouette (Anthropic cut-paper carrier) */}
      <path
        d="M86 54 C175 40 335 44 478 50 C528 53 546 96 540 152 C534 212 514 248 466 256 C376 268 205 264 120 252 C72 246 62 198 66 148 C70 98 76 56 86 54 Z"
        fill="var(--visual-token)"
        stroke="var(--project-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.96"
      />

      {/* Atmospheric drift / breeze streamlines */}
      <g stroke="var(--project-ink)" strokeWidth="1.6" strokeDasharray="4 6" opacity="0.32" strokeLinecap="round" fill="none">
        <path d="M72 108 C145 94 210 124 305 112 C365 106 430 116 475 104" />
        <path d="M96 172 C175 158 240 188 345 174 C415 164 475 180 528 168" />
      </g>

      {/* LEFT SUBJECT: Distinctive, Beautiful Ginkgo Biloba Leaf (银杏标本 - 气候与长青生态隐喻) */}
      <g id="climate-ginkgo">
        {/* Ginkgo stem / petiole */}
        <path
          d="M172 240 C178 200 188 175 196 160"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Ginkgo leaf blade (Iconic fan shape with central cleft / notch) */}
        <path
          d="M196 160 
             C165 145 124 135 112 104 
             C104 82 124 64 154 60 
             C178 58 190 74 196 84 
             C202 74 214 58 238 60 
             C268 64 288 82 280 104 
             C268 135 227 145 196 160 Z"
          fill="var(--visual-secondary)"
          fillOpacity="0.38"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Fluted fan veins radiating from leaf base */}
        <g stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.55" strokeLinecap="round" fill="none">
          <path d="M196 160 C182 142 165 115 148 88" />
          <path d="M196 160 C174 140 148 122 130 102" />
          <path d="M196 160 C188 135 178 108 170 78" />
          <path d="M196 160 C194 135 192 105 194 86" />
          <path d="M196 160 C198 135 200 105 198 86" />
          <path d="M196 160 C204 135 214 108 222 78" />
          <path d="M196 160 C210 142 227 115 244 88" />
          <path d="M196 160 C218 140 244 122 262 102" />
        </g>

        {/* Tactile ink stem node */}
        <circle cx="196" cy="160" r="3.5" fill="var(--project-ink)" />
      </g>

      {/* RIGHT SUBJECT: Optical Drafting Lens & Dialogue Aperture (严谨对话与检索光学透镜) */}
      <g id="climate-lens">
        {/* Tactile brass handle with turned finial */}
        <path
          d="M448 195 L505 245"
          stroke="var(--project-ink)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="510" cy="250" r="5.5" fill="var(--visual-accent)" stroke="var(--project-ink)" strokeWidth="2.2" />

        {/* Outer Calibrated Dial Ring (64px radius) */}
        <circle
          cx="396"
          cy="146"
          r="64"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
        />

        {/* Optical dial graduation ticks (12 around perimeter) */}
        <g stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65">
          <line x1="396" y1="76" x2="396" y2="84" />
          <line x1="396" y1="208" x2="396" y2="216" />
          <line x1="326" y1="146" x2="334" y2="146" />
          <line x1="458" y1="146" x2="466" y2="146" />
          <line x1="346" y1="96" x2="352" y2="102" />
          <line x1="446" y1="96" x2="440" y2="102" />
          <line x1="346" y1="196" x2="352" y2="190" />
          <line x1="446" y1="196" x2="440" y2="190" />
        </g>

        {/* Inner Glazed Lens (48px radius) */}
        <circle
          cx="396"
          cy="146"
          r="48"
          fill="var(--visual-token)"
          fillOpacity="0.85"
          stroke="var(--project-ink)"
          strokeWidth="2"
        />

        {/* Concentric acoustic dialogue ripple arcs */}
        <path
          d="M382 124 C402 114 426 124 436 146"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M390 138 C402 132 418 138 424 152"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.65"
        />

        {/* Anthropic Signature Terracotta Accent Sun (#D97757) */}
        <circle cx="376" cy="154" r="14" fill="var(--visual-accent)" stroke="var(--project-ink)" strokeWidth="2.2" />
        <circle cx="376" cy="154" r="4.5" fill="var(--visual-token)" />

        {/* Delicate sunbeam marks */}
        <g stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round">
          <line x1="376" y1="130" x2="376" y2="124" />
          <line x1="398" y1="154" x2="404" y2="154" />
          <line x1="376" y1="178" x2="376" y2="184" />
          <line x1="354" y1="154" x2="348" y2="154" />
        </g>
      </g>
    </>
  );
}

function ProjectVisualTwin() {
  return (
    <>
      {/* Background full-bleed field: Anthropic heather */}
      <rect width="600" height="300" fill="var(--visual-bg)" />

      {/* Tactile analog ledger / coordinate grid */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 6">
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

      {/* Organic Ivory Carrier Silhouette (Anthropic pebble / carrier shape) */}
      <path
        d="M84 56 C185 42 345 44 482 52 C532 55 550 102 544 156 C536 216 514 250 466 258 C378 270 205 266 118 256 C68 250 58 198 62 148 C66 98 72 60 84 56 Z"
        fill="var(--visual-token)"
        stroke="var(--project-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.96"
      />

      {/* LEFT SUBJECT: Precision Vernier Caliper / Drafting Instrument (物理实体精密测量仪) */}
      <g id="twin-caliper">
        {/* Caliper Top Compass Hinge & Concentric Pivot Disc */}
        <circle cx="185" cy="74" r="16" fill="var(--visual-secondary)" fillOpacity="0.4" stroke="var(--project-ink)" strokeWidth="3" />
        <circle cx="185" cy="74" r="7" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="2.4" />
        <circle cx="185" cy="74" r="2.5" fill="var(--project-ink)" />

        {/* Left Curved Caliper Arm */}
        <path
          d="M174 84 C152 110 134 148 138 190"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        {/* Left Precision Probe Stylus Tip */}
        <line x1="138" y1="190" x2="148" y2="198" stroke="var(--project-ink)" strokeWidth="3.2" strokeLinecap="round" />

        {/* Right Curved Caliper Arm */}
        <path
          d="M196 84 C218 110 236 148 232 190"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        {/* Right Precision Probe Stylus Tip */}
        <line x1="232" y1="190" x2="222" y2="198" stroke="var(--project-ink)" strokeWidth="3.2" strokeLinecap="round" />

        {/* Horizontal Caliper Dial Arc with Measurement Graduations */}
        <path
          d="M148 135 C170 144 200 144 222 135"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <g stroke="var(--project-ink)" strokeWidth="1.6" opacity="0.7">
          <line x1="162" y1="135" x2="162" y2="143" />
          <line x1="173" y1="138" x2="173" y2="146" />
          <line x1="185" y1="139" x2="185" y2="148" />
          <line x1="197" y1="138" x2="197" y2="146" />
          <line x1="208" y1="135" x2="208" y2="143" />
        </g>

        {/* Central Helical Vibration Spring / Sensor Core */}
        <path
          d="M185 96 C176 104 194 112 185 120 C176 128 194 136 185 144 C176 152 194 160 185 168 C176 176 194 184 185 192"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="185" cy="198" r="4" fill="var(--project-ink)" />
      </g>

      {/* RIGHT SUBJECT: Pristine Geometric Faceted Crystal / Mesh (数字孪生几何多面体) */}
      <g id="twin-crystal">
        {/* Facet 1: Top-Left (Shaded slate wash) */}
        <polygon
          points="415,70 348,112 415,152"
          fill="var(--visual-secondary)"
          fillOpacity="0.4"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Facet 2: Top-Right (Ivory reflection) */}
        <polygon
          points="415,70 482,112 415,152"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Facet 3: Bottom-Left (Deep tone) */}
        <polygon
          points="348,112 348,188 415,228 415,152"
          fill="var(--visual-bg)"
          fillOpacity="0.75"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Facet 4: Bottom-Right (Translucent tone) */}
        <polygon
          points="482,112 482,188 415,228 415,152"
          fill="var(--visual-secondary)"
          fillOpacity="0.5"
          stroke="var(--project-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Clean vertex coordinate nodes */}
        <circle cx="415" cy="70" r="4.5" fill="var(--project-ink)" />
        <circle cx="348" cy="112" r="4.5" fill="var(--project-ink)" />
        <circle cx="482" cy="112" r="4.5" fill="var(--project-ink)" />
        <circle cx="415" cy="152" r="4.5" fill="var(--project-ink)" />
        <circle cx="348" cy="188" r="4.5" fill="var(--project-ink)" />
        <circle cx="482" cy="188" r="4.5" fill="var(--project-ink)" />
        <circle cx="415" cy="228" r="4.5" fill="var(--project-ink)" />
      </g>

      {/* CONNECTING TELEMETRY: Living Oscilloscope Vibration Waveform (传感器谐波振动遥测) */}
      <g id="twin-wave">
        {/* Primary Continuous Sinusoidal Wave Ribbon */}
        <path
          d="M100 236 
             C125 210 145 262 170 236 
             C195 210 215 262 240 236 
             C265 210 285 262 310 236 
             C335 210 355 262 380 236 
             C405 210 425 262 450 236 
             C475 210 495 262 520 236"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Secondary Harmonic Wave (dashed) */}
        <path
          d="M100 236 
             C125 262 145 210 170 236 
             C195 262 215 210 240 236 
             C265 262 285 210 310 236 
             C335 262 355 210 380 236 
             C405 262 425 210 450 236 
             C475 262 495 210 520 236"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="1.8"
          strokeDasharray="4 6"
          opacity="0.55"
          strokeLinecap="round"
        />

        {/* Analog Dirac Delta / Sampling ticks at waveform crests */}
        <g stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round">
          <line x1="170" y1="228" x2="170" y2="244" />
          <line x1="240" y1="228" x2="240" y2="244" />
          <line x1="310" y1="228" x2="310" y2="244" />
          <line x1="380" y1="228" x2="380" y2="244" />
          <line x1="450" y1="228" x2="450" y2="244" />
        </g>

        {/* Central Synchronization Node: Anthropic Terracotta Spot (#D97757) */}
        <circle cx="310" cy="148" r="13" fill="var(--visual-accent)" stroke="var(--project-ink)" strokeWidth="2.4" />
        <circle cx="310" cy="148" r="4.5" fill="var(--visual-token)" />

        {/* Concentric Telemetry Pulse Rings */}
        <path
          d="M292 134 C304 126 316 126 328 134"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M292 162 C304 170 316 170 328 162"
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
      {/* Background full-bleed field: Anthropic oat */}
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

      {/* Organic Ivory Carrier Silhouette (Anthropic archival tablet / carrier) */}
      <path
        d="M78 54 C184 40 354 44 486 52 C536 56 554 100 548 155 C540 214 518 252 468 260 C378 272 205 266 116 256 C66 250 56 198 61 148 C65 96 71 58 78 54 Z"
        fill="var(--visual-token)"
        stroke="var(--project-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.96"
      />

      {/* TRIO OF ARCHIVAL BOUND LEDGERS / VOLUMES (三卷分布式账本卷宗 - 典雅等轴透视) */}
      <g id="ledger-volumes">
        {/* VOLUME 1: Left Bound Ledger (Volume N-1) */}
        <g id="ledger-left">
          {/* Top Page Edges */}
          <polygon
            points="115,124 165,96 215,124 165,152"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Spine / Left Edge */}
          <polygon
            points="115,124 165,152 165,212 115,184"
            fill="var(--visual-bg)"
            fillOpacity="0.5"
            stroke="var(--project-ink)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Front Cover Face */}
          <polygon
            points="165,152 215,124 215,184 165,212"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Embossed Archival Ledger Rules on Front Cover */}
          <line x1="176" y1="162" x2="204" y2="146" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
          <line x1="176" y1="174" x2="204" y2="158" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
          <line x1="176" y1="186" x2="204" y2="170" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
          {/* Ribbon Bookmark Hanging Down */}
          <path d="M140 170 L140 215 L146 208 L152 215 L152 178" fill="var(--visual-secondary)" opacity="0.6" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinejoin="round" />
        </g>

        {/* VOLUME 3: Right Bound Ledger (Volume N+1) */}
        <g id="ledger-right">
          {/* Top Page Edges */}
          <polygon
            points="385,124 435,96 485,124 435,152"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Spine / Left Edge */}
          <polygon
            points="385,124 435,152 435,212 385,184"
            fill="var(--visual-bg)"
            fillOpacity="0.5"
            stroke="var(--project-ink)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Front Cover Face */}
          <polygon
            points="435,152 485,124 485,184 435,212"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Clean Merkle Tree Branching Diagram on Right Cover */}
          <line x1="460" y1="192" x2="460" y2="170" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="460" y1="170" x2="448" y2="156" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <line x1="460" y1="170" x2="472" y2="156" stroke="var(--project-ink)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
          <circle cx="448" cy="156" r="3" fill="var(--project-ink)" />
          <circle cx="472" cy="156" r="3" fill="var(--project-ink)" />
          {/* Ribbon Bookmark Hanging Down */}
          <path d="M410 170 L410 215 L416 208 L422 215 L422 178" fill="var(--visual-secondary)" opacity="0.6" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinejoin="round" />
        </g>

        {/* VOLUME 2: Center Primary Ledger (Volume N - Elevated, Consensus-Validated) */}
        <g id="ledger-center">
          {/* Top Page Edges */}
          <polygon
            points="245,96 300,68 355,96 300,124"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Spine / Left Edge */}
          <polygon
            points="245,96 300,124 300,198 245,170"
            fill="var(--visual-secondary)"
            fillOpacity="0.35"
            stroke="var(--project-ink)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Front Cover Face */}
          <polygon
            points="300,124 355,96 355,170 300,198"
            fill="var(--visual-token)"
            stroke="var(--project-ink)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* CONTINUOUS UNBROKEN CRYPTOGRAPHIC CHAIN KNOT (连贯不可篡改分布式信任纽带) */}
      <g id="ledger-chain">
        {/* Bold continuous chain ribbon */}
        <path
          d="M86 174 C126 154 146 164 196 150 C236 138 256 116 300 120 C346 124 366 148 406 142 C446 136 476 162 516 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Secondary intertwined tactile security thread */}
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

      {/* CONSENSUS WAX SEAL STAMP (火漆印章 - 拜占庭共识验真印鉴) */}
      <g id="ledger-seal">
        {/* Scalloped floral rosette seal ring */}
        <path
          d="M300 132 C316 132 328 144 328 160 C328 176 316 188 300 188 C284 188 272 176 272 160 C272 144 284 132 300 132 Z"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner solid terracotta clay wax stamp disc */}
        <circle cx="300" cy="160" r="16" fill="var(--visual-accent)" />
        <circle cx="300" cy="160" r="16" fill="none" stroke="var(--project-ink)" strokeWidth="2.4" />

        {/* Crisp Consensus Verification Checkmark Glyph */}
        <path
          d="M292 160 L298 166 L310 153"
          fill="none"
          stroke="#FAF9F5"
          strokeWidth="3.2"
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
