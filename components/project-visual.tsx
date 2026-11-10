type ProjectVisualVariant = 'climate' | 'twin' | 'ledger';

const captions: Record<ProjectVisualVariant, string> = {
  climate: 'DOMAIN RAG · C²EMBEDDING · C²RERANKER · TWIN PROMPT',
  twin: 'CYBER-PHYSICAL SYSTEM · GEOMETRIC CONSTRAINTS · TELEMETRY',
  ledger: 'DISTRIBUTED STATE MACHINE · CONSENSUS LATTICE · AUDIT TRAIL',
};

function ProjectVisualClimate() {
  return (
    <>
      {/* Background blueprint coordinate grid */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.12">
        <line x1="40" y1="52" x2="560" y2="52" />
        <line x1="40" y1="102" x2="560" y2="102" />
        <line x1="40" y1="152" x2="560" y2="152" />
        <line x1="40" y1="202" x2="560" y2="202" />
        <line x1="40" y1="252" x2="560" y2="252" />
        <line x1="80" y1="42" x2="80" y2="262" />
        <line x1="180" y1="42" x2="180" y2="262" />
        <line x1="280" y1="42" x2="280" y2="262" />
        <line x1="380" y1="42" x2="380" y2="262" />
        <line x1="480" y1="42" x2="480" y2="262" />
      </g>

      {/* Header technical bar */}
      <text x="40" y="36" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="1.8" fontWeight="700" opacity="0.7">
        SYS.01 // DOMAIN RETRIEVAL &amp; REASONING
      </text>
      <text x="560" y="36" textAnchor="end" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" letterSpacing="1.2" opacity="0.5">
        C²EMBEDDING · C²RERANKER · TWIN PROMPT
      </text>

      {/* STAGE 1: Layered Ingestion Corpus */}
      <g id="climate-stage-1">
        {/* Back document wafer */}
        <rect x="52" y="76" width="94" height="136" rx="5" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.6" />
        <line x1="62" y1="92" x2="106" y2="92" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.4" />
        <line x1="62" y1="104" x2="132" y2="104" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.3" />
        <line x1="62" y1="114" x2="124" y2="114" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.3" />

        {/* Middle document wafer */}
        <rect x="66" y="86" width="98" height="138" rx="5" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.5" opacity="0.85" />
        <rect x="76" y="98" width="46" height="7" rx="2" fill="var(--visual-active)" opacity="0.7" stroke="var(--project-ink)" strokeWidth="0.8" />
        <line x1="76" y1="116" x2="148" y2="116" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.4" />
        <line x1="76" y1="126" x2="140" y2="126" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.4" />
        <line x1="76" y1="136" x2="152" y2="136" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.4" />

        {/* Front primary structured document card */}
        <rect x="80" y="98" width="102" height="140" rx="6" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* Header pill */}
        <rect x="90" y="110" width="38" height="8" rx="2.5" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1" />
        <circle cx="170" cy="114" r="3" fill="var(--project-ink)" opacity="0.6" />
        {/* Document content lines */}
        <line x1="90" y1="130" x2="170" y2="130" stroke="var(--project-ink)" strokeWidth="1.6" />
        <line x1="90" y1="142" x2="158" y2="142" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.85" />
        <line x1="90" y1="154" x2="166" y2="154" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.85" />
        <line x1="90" y1="166" x2="142" y2="166" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.85" />

        {/* Mini distribution bars at bottom of card */}
        <rect x="90" y="184" width="82" height="38" rx="3" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.2" />
        <line x1="98" y1="214" x2="98" y2="202" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="108" y1="214" x2="108" y2="194" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="118" y1="214" x2="118" y2="198" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="128" y1="214" x2="128" y2="190" stroke="var(--visual-active)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="138" y1="214" x2="138" y2="196" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="148" y1="214" x2="148" y2="206" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="158" y1="214" x2="158" y2="200" stroke="var(--project-ink)" strokeWidth="2.5" strokeLinecap="round" />

        <text x="131" y="254" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" opacity="0.8">
          CLIMATE CORPUS
        </text>
      </g>

      {/* STAGE 1 -> STAGE 2: Convergence Rays */}
      <g stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.6">
        <path d="M182 125 C205 130 220 140 234 148" strokeDasharray="3 3" />
        <path d="M182 168 C202 168 218 168 234 168" />
        <path d="M172 208 C200 200 218 185 234 178" strokeDasharray="3 3" />
        <polygon points="234,148 226,145 228,152" fill="var(--project-ink)" />
        <polygon points="234,168 226,165 226,171" fill="var(--project-ink)" />
        <polygon points="234,178 228,174 226,181" fill="var(--project-ink)" />
      </g>

      {/* STAGE 2: C² Cross-Encoder Filter & Lens */}
      <g id="climate-stage-2">
        {/* Calibrated Lens Field */}
        <path
          d="M238 68 Q274 150 238 232 L312 232 Q276 150 312 68 Z"
          fill="var(--visual-active)"
          fillOpacity="0.22"
          stroke="var(--project-ink)"
          strokeWidth="1.6"
        />
        {/* Optical/calibration hash marks */}
        <line x1="250" y1="95" x2="258" y2="95" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.5" />
        <line x1="253" y1="115" x2="263" y2="115" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.6" />
        <line x1="256" y1="135" x2="268" y2="135" stroke="var(--project-ink)" strokeWidth="1.6" opacity="0.7" />
        <line x1="258" y1="150" x2="272" y2="150" stroke="var(--project-ink)" strokeWidth="2" />
        <line x1="256" y1="165" x2="268" y2="165" stroke="var(--project-ink)" strokeWidth="1.6" opacity="0.7" />
        <line x1="253" y1="185" x2="263" y2="185" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.6" />
        <line x1="250" y1="205" x2="258" y2="205" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.5" />

        {/* 3 Ranked Candidate Passages passing through */}
        {/* Pass 1 - Top Ranked (Highlighted) */}
        <g transform="translate(254, 126)">
          <rect width="64" height="20" rx="3.5" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.6" />
          <circle cx="10" cy="10" r="2.5" fill="var(--project-ink)" />
          <line x1="18" y1="10" x2="54" y2="10" stroke="var(--project-ink)" strokeWidth="1.8" />
        </g>
        {/* Pass 2 */}
        <g transform="translate(254, 154)">
          <rect width="58" height="17" rx="3" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.3" />
          <circle cx="9" cy="8.5" r="2" fill="var(--project-ink)" opacity="0.6" />
          <line x1="16" y1="8.5" x2="48" y2="8.5" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.6" />
        </g>
        {/* Pass 3 */}
        <g transform="translate(254, 178)">
          <rect width="52" height="15" rx="3" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.1" opacity="0.7" />
          <line x1="12" y1="7.5" x2="42" y2="7.5" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.4" />
        </g>

        <text x="275" y="58" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" letterSpacing="1.2" fontWeight="700">
          C²RERANKER
        </text>
        <text x="275" y="254" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8" fontWeight="600" opacity="0.8">
          NDCG@10 · 91.1%
        </text>
      </g>

      {/* STAGE 2 -> STAGE 3: Ranked Focus Stream */}
      <g stroke="var(--project-ink)" strokeWidth="1.6">
        <line x1="318" y1="136" x2="368" y2="136" />
        <polygon points="368,136 360,132 360,140" fill="var(--project-ink)" />
        <line x1="312" y1="162" x2="352" y2="162" opacity="0.5" strokeDasharray="3 3" />
      </g>

      {/* STAGE 3: Twin Prompt Grounded Dialogue Window */}
      <g id="climate-stage-3">
        {/* Main Dialogue Card */}
        <rect x="374" y="68" width="186" height="162" rx="7" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* Card Header Bar */}
        <path d="M374 75 Q374 68 381 68 L553 68 Q560 68 560 75 L560 92 L374 92 Z" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.4" />
        {/* Window dots */}
        <circle cx="388" cy="80" r="2.2" fill="var(--project-ink)" opacity="0.6" />
        <circle cx="396" cy="80" r="2.2" fill="var(--project-ink)" opacity="0.6" />
        <circle cx="404" cy="80" r="2.2" fill="var(--project-ink)" opacity="0.6" />
        <text x="420" y="83" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8" fontWeight="600" opacity="0.7">
          TWIN PROMPT AGENT
        </text>

        {/* Phase 1: Query Reformulation / Initial Reason Bubble */}
        <g transform="translate(384, 100)">
          <rect width="166" height="26" rx="4" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.2" />
          <line x1="10" y1="10" x2="110" y2="10" stroke="var(--project-ink)" strokeWidth="1.4" />
          <line x1="10" y1="18" x2="140" y2="18" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* Dual-stage self-correction circular arrow */}
        <path
          d="M554 114 C568 114 568 142 554 142"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="1.4"
          strokeDasharray="2.5 2"
        />
        <polygon points="554,142 560,138 560,146" fill="var(--project-ink)" />

        {/* Phase 2: Grounded Factual Answer Bubble */}
        <g transform="translate(384, 134)">
          <rect width="166" height="52" rx="4" fill="var(--visual-active)" fillOpacity="0.25" stroke="var(--project-ink)" strokeWidth="1.4" />
          <line x1="10" y1="13" x2="150" y2="13" stroke="var(--project-ink)" strokeWidth="1.6" />
          <line x1="10" y1="24" x2="138" y2="24" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.8" />
          <line x1="10" y1="35" x2="120" y2="35" stroke="var(--project-ink)" strokeWidth="1.4" opacity="0.8" />

          {/* Citation Chips */}
          <g transform="translate(10, 42)">
            <rect width="38" height="11" rx="2" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="0.8" />
            <text x="19" y="8" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="6.5" fontWeight="700">
              [1] AR6
            </text>
          </g>
          <g transform="translate(54, 42)">
            <rect width="52" height="11" rx="2" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="0.8" />
            <text x="26" y="8" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="6.5" fontWeight="700">
              [2] POLICY
            </text>
          </g>
        </g>

        <text x="467" y="254" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" opacity="0.8">
          GROUNDED REASONING
        </text>
      </g>
    </>
  );
}

function ProjectVisualTwin() {
  return (
    <>
      {/* Background isometric grid */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.12">
        <line x1="40" y1="60" x2="560" y2="60" />
        <line x1="40" y1="120" x2="560" y2="120" />
        <line x1="40" y1="180" x2="560" y2="180" />
        <line x1="40" y1="240" x2="560" y2="240" />
        <line x1="100" y1="40" x2="100" y2="260" />
        <line x1="200" y1="40" x2="200" y2="260" />
        <line x1="300" y1="40" x2="300" y2="260" />
        <line x1="400" y1="40" x2="400" y2="260" />
        <line x1="500" y1="40" x2="500" y2="260" />
      </g>

      {/* Header technical bar */}
      <text x="40" y="36" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="1.8" fontWeight="700" opacity="0.7">
        SYS.02 // CYBER-PHYSICAL DIGITAL TWIN
      </text>
      <text x="560" y="36" textAnchor="end" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" letterSpacing="1.2" opacity="0.5">
        GEOMETRIC CONSTRAINTS · REAL-TIME TELEMETRY
      </text>

      {/* LEFT: Physical Industrial Chamber Component (Solid Isometric) */}
      <g id="twin-physical" transform="translate(50, 78)">
        {/* Isometric base casting body */}
        {/* Top Face */}
        <polygon points="80,20 145,55 80,90 15,55" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* Left Face */}
        <polygon points="15,55 80,90 80,150 15,115" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* Right Face */}
        <polygon points="80,90 145,55 145,115 80,150" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.8" />

        {/* Precision Internal Core Cutaway on Top Face */}
        <ellipse cx="80" cy="55" rx="36" ry="19" fill="var(--visual-active)" fillOpacity="0.4" stroke="var(--project-ink)" strokeWidth="1.4" />
        <ellipse cx="80" cy="55" rx="18" ry="9.5" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.4" />
        <line x1="80" y1="45" x2="80" y2="65" stroke="var(--project-ink)" strokeWidth="1.5" />
        <line x1="62" y1="55" x2="98" y2="55" stroke="var(--project-ink)" strokeWidth="1.5" />

        {/* Sensor Probe 1 with telemetry ping circles */}
        <circle cx="35" cy="78" r="3.5" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.4" />
        <circle cx="35" cy="78" r="8" fill="none" stroke="var(--project-ink)" strokeWidth="0.9" strokeDasharray="2 2" opacity="0.7" />
        <line x1="35" y1="78" x2="10" y2="60" stroke="var(--project-ink)" strokeWidth="1" />
        <text x="8" y="56" textAnchor="end" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="7" fontWeight="700">T_01</text>

        {/* Sensor Probe 2 */}
        <circle cx="120" cy="78" r="3.5" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.4" />
        <circle cx="120" cy="78" r="8" fill="none" stroke="var(--project-ink)" strokeWidth="0.9" strokeDasharray="2 2" opacity="0.7" />
        <line x1="120" y1="78" x2="146" y2="64" stroke="var(--project-ink)" strokeWidth="1" />
        <text x="150" y="66" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="7" fontWeight="700">P_02</text>

        <text x="80" y="174" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" opacity="0.8">
          PHYSICAL ASSET [CIC]
        </text>
      </g>

      {/* CENTER: Spatial Laser Calibration & Sync Datum Plane */}
      <g id="twin-calibration">
        {/* Semi-transparent vertical datum plane slicing the scene */}
        <polygon
          points="270,68 325,92 325,232 270,208"
          fill="var(--visual-active)"
          fillOpacity="0.22"
          stroke="var(--project-ink)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        {/* Calibration center crosshairs */}
        <line x1="280" y1="150" x2="315" y2="150" stroke="var(--project-ink)" strokeWidth="1.4" />
        <line x1="297" y1="130" x2="297" y2="170" stroke="var(--project-ink)" strokeWidth="1.4" />
        <circle cx="297" cy="150" r="5" fill="none" stroke="var(--project-ink)" strokeWidth="1.2" />

        {/* Coordinate projection rays from physical to digital */}
        <line x1="195" y1="135" x2="270" y2="135" stroke="var(--project-ink)" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
        <line x1="195" y1="170" x2="270" y2="170" stroke="var(--project-ink)" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
        <line x1="325" y1="135" x2="400" y2="135" stroke="var(--project-ink)" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
        <line x1="325" y1="170" x2="400" y2="170" stroke="var(--project-ink)" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />

        <text x="297.5" y="254" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8" fontWeight="600" opacity="0.8">
          GEOMETRIC SYNC · 60Hz
        </text>
      </g>

      {/* RIGHT: Digital Twin Mesh & Live Telemetry HUD */}
      <g id="twin-digital" transform="translate(370, 75)">
        {/* Isometric Wireframe / Polygonal Mesh */}
        {/* Top Wireframe facets */}
        <polygon points="65,25 125,58 65,90 5,58" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.6" />
        <line x1="65" y1="25" x2="65" y2="90" stroke="var(--project-ink)" strokeWidth="1" opacity="0.5" />
        <line x1="5" y1="58" x2="125" y2="58" stroke="var(--project-ink)" strokeWidth="1" opacity="0.5" />

        {/* Triangular polygon mesh lines on front-left */}
        <polygon points="5,58 65,90 65,145 5,113" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.6" />
        <line x1="5" y1="58" x2="65" y2="145" stroke="var(--project-ink)" strokeWidth="1" opacity="0.4" />
        <line x1="5" y1="113" x2="65" y2="90" stroke="var(--project-ink)" strokeWidth="1" opacity="0.4" />

        {/* Triangular polygon mesh lines on front-right */}
        <polygon points="65,90 125,58 125,113 65,145" fill="var(--visual-active)" fillOpacity="0.15" stroke="var(--project-ink)" strokeWidth="1.6" />
        <line x1="65" y1="90" x2="125" y2="113" stroke="var(--project-ink)" strokeWidth="1" opacity="0.4" />
        <line x1="65" y1="145" x2="125" y2="58" stroke="var(--project-ink)" strokeWidth="1" opacity="0.4" />

        {/* Vertex Coordinate Nodes */}
        <circle cx="65" cy="25" r="2.5" fill="var(--project-ink)" />
        <circle cx="125" cy="58" r="2.5" fill="var(--project-ink)" />
        <circle cx="65" cy="90" r="3" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1" />
        <circle cx="5" cy="58" r="2.5" fill="var(--project-ink)" />
        <circle cx="65" cy="145" r="2.5" fill="var(--project-ink)" />
        <circle cx="5" cy="113" r="2.5" fill="var(--project-ink)" />
        <circle cx="125" cy="113" r="2.5" fill="var(--project-ink)" />

        {/* Floating Telemetry HUD Card on the right */}
        <g transform="translate(90, 8)">
          <rect width="95" height="65" rx="5" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.5" />
          <rect width="95" height="15" rx="5" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.2" />
          <text x="8" y="11" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="6.5" fontWeight="700">
            FFT VIBRATION
          </text>
          {/* Status pill */}
          <rect x="62" y="3" width="28" height="9" rx="2" fill="var(--visual-active)" />
          <text x="76" y="9.5" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="5.5" fontWeight="700">
            NOMINAL
          </text>
          {/* Real-time waveform */}
          <path
            d="M8 42 Q18 24 28 42 T48 42 T68 30 T78 50 T88 42"
            fill="none"
            stroke="var(--project-ink)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line x1="8" y1="58" x2="88" y2="58" stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.3" />
        </g>

        <text x="65" y="179" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="600" opacity="0.8">
          DIGITAL TWIN MESH
        </text>
      </g>
    </>
  );
}

function ProjectVisualLedger() {
  return (
    <>
      {/* Background matrix dot grid */}
      <g stroke="var(--project-ink)" strokeWidth="0.8" opacity="0.12">
        <line x1="40" y1="52" x2="560" y2="52" />
        <line x1="40" y1="102" x2="560" y2="102" />
        <line x1="40" y1="152" x2="560" y2="152" />
        <line x1="40" y1="202" x2="560" y2="202" />
        <line x1="40" y1="252" x2="560" y2="252" />
        <line x1="100" y1="40" x2="100" y2="260" />
        <line x1="200" y1="40" x2="200" y2="260" />
        <line x1="300" y1="40" x2="300" y2="260" />
        <line x1="400" y1="40" x2="400" y2="260" />
        <line x1="500" y1="40" x2="500" y2="260" />
      </g>

      {/* Header technical bar */}
      <text x="40" y="36" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="9" letterSpacing="1.8" fontWeight="700" opacity="0.7">
        SYS.03 // DISTRIBUTED STATE MACHINE &amp; CONSENSUS
      </text>
      <text x="560" y="36" textAnchor="end" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" letterSpacing="1.2" opacity="0.5">
        STATE LATTICE · CRYPTOGRAPHIC AUDIT TRAIL
      </text>

      {/* OVERARCHING CONSENSUS VALIDATION QUORUM */}
      <g id="ledger-consensus">
        {/* Consensus arc encompassing blocks */}
        <path
          d="M105 110 C210 48 390 48 495 110"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="1.4"
          strokeDasharray="3 3"
          opacity="0.5"
        />
        {/* 3 Consensus Validators Quorum */}
        <g transform="translate(300, 56)">
          <polygon points="0,-16 15,10 -15,10" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.4" />
          <circle cx="0" cy="0" r="3" fill="var(--project-ink)" />
          <line x1="-15" y1="10" x2="15" y2="10" stroke="var(--project-ink)" strokeWidth="1.4" />
        </g>
        <circle cx="240" cy="74" r="5" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.4" />
        <circle cx="360" cy="74" r="5" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.4" />
        <line x1="245" y1="74" x2="285" y2="62" stroke="var(--project-ink)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <line x1="355" y1="74" x2="315" y2="62" stroke="var(--project-ink)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

        <rect x="245" y="86" width="110" height="15" rx="3" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.2" />
        <text x="300" y="97" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="7" fontWeight="700">
          BYZANTINE QUORUM VALIDATED
        </text>
      </g>

      {/* THREE INTERLOCKING ISOMETRIC LEDGER BLOCKS */}

      {/* BLOCK 1: Block n-1 (Historical State) */}
      <g id="ledger-block-1" transform="translate(60, 110)">
        {/* Top face */}
        <polygon points="45,15 90,38 45,60 0,38" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.6" />
        {/* Left face */}
        <polygon points="0,38 45,60 45,105 0,83" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.6" />
        {/* Right face */}
        <polygon points="45,60 90,38 90,83 45,105" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.6" />

        {/* Miniature Merkle Tree on Left Face */}
        <circle cx="22" cy="62" r="2.2" fill="var(--project-ink)" />
        <circle cx="12" cy="76" r="1.8" fill="var(--project-ink)" />
        <circle cx="32" cy="76" r="1.8" fill="var(--project-ink)" />
        <line x1="22" y1="62" x2="12" y2="76" stroke="var(--project-ink)" strokeWidth="0.9" />
        <line x1="22" y1="62" x2="32" y2="76" stroke="var(--project-ink)" strokeWidth="0.9" />

        {/* State Tag */}
        <text x="45" y="125" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8" fontWeight="600" opacity="0.75">
          BLOCK [N-1]
        </text>
      </g>

      {/* Cryptographic Link 1 -> 2 */}
      <g stroke="var(--project-ink)" strokeWidth="1.6">
        <line x1="154" y1="168" x2="228" y2="168" strokeDasharray="3 2" />
        <circle cx="191" cy="168" r="4.5" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.3" />
        <polygon points="228,168 220,164 220,172" fill="var(--project-ink)" />
      </g>

      {/* BLOCK 2: Block n (Active Verified State - Hero Element) */}
      <g id="ledger-block-2" transform="translate(235, 102)">
        {/* Top face (Highlighted Active) */}
        <polygon points="65,18 130,50 65,82 0,50" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* Grid lines on active top face */}
        <line x1="32" y1="34" x2="98" y2="66" stroke="var(--project-ink)" strokeWidth="0.9" opacity="0.4" />
        <line x1="32" y1="66" x2="98" y2="34" stroke="var(--project-ink)" strokeWidth="0.9" opacity="0.4" />

        {/* Left face */}
        <polygon points="0,50 65,82 65,138 0,106" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* State Root Data Rows on Left Face */}
        <line x1="12" y1="72" x2="52" y2="72" stroke="var(--project-ink)" strokeWidth="1.4" />
        <line x1="12" y1="84" x2="44" y2="84" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.7" />
        <line x1="12" y1="96" x2="56" y2="96" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.7" />

        {/* Right face */}
        <polygon points="65,82 130,50 130,106 65,138" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.8" />
        {/* Verified seal glyph on right face */}
        <circle cx="98" cy="94" r="12" fill="var(--visual-active)" fillOpacity="0.4" stroke="var(--project-ink)" strokeWidth="1.2" />
        <polyline points="92,94 96,98 104,90" fill="none" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

        {/* State Tag */}
        <text x="65" y="158" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8.5" fontWeight="700">
          STATE ROOT [N]
        </text>
      </g>

      {/* Cryptographic Link 2 -> 3 */}
      <g stroke="var(--project-ink)" strokeWidth="1.6">
        <line x1="370" y1="168" x2="444" y2="168" strokeDasharray="3 2" />
        <circle cx="407" cy="168" r="4.5" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.3" />
        <polygon points="444,168 436,164 436,172" fill="var(--project-ink)" />
      </g>

      {/* BLOCK 3: Block n+1 (Committed State) */}
      <g id="ledger-block-3" transform="translate(450, 110)">
        {/* Top face */}
        <polygon points="45,15 90,38 45,60 0,38" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.6" />
        {/* Left face */}
        <polygon points="0,38 45,60 45,105 0,83" fill="var(--visual-bg)" stroke="var(--project-ink)" strokeWidth="1.6" />
        {/* Right face */}
        <polygon points="45,60 90,38 90,83 45,105" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.6" />

        <line x1="55" y1="56" x2="80" y2="56" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.6" />
        <line x1="55" y1="68" x2="74" y2="68" stroke="var(--project-ink)" strokeWidth="1.2" opacity="0.6" />

        {/* State Tag */}
        <text x="45" y="125" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="8" fontWeight="600" opacity="0.75">
          BLOCK [N+1]
        </text>
      </g>

      {/* BOTTOM ENTERPRISE INTEGRATION BUS & AUDIT RAIL */}
      <g id="ledger-bus" stroke="var(--project-ink)" strokeWidth="1.4">
        {/* Vertical drops from each block to the bus */}
        <line x1="105" y1="215" x2="105" y2="238" strokeDasharray="2 2" opacity="0.5" />
        <line x1="300" y1="240" x2="300" y2="242" opacity="0.5" />
        <line x1="495" y1="215" x2="495" y2="238" strokeDasharray="2 2" opacity="0.5" />

        {/* The horizontal enterprise integration rail */}
        <line x1="60" y1="240" x2="540" y2="240" />
        <circle cx="60" cy="240" r="3" fill="var(--project-ink)" />
        <circle cx="540" cy="240" r="3" fill="var(--project-ink)" />

        {/* 3 Integration Tags on the bus */}
        <g transform="translate(105, 240)">
          <rect x="-38" y="6" width="76" height="14" rx="3" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.1" />
          <text x="0" y="16.5" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="7" fontWeight="600">
            AUDIT TRAIL
          </text>
        </g>
        <g transform="translate(300, 240)">
          <rect x="-48" y="6" width="96" height="14" rx="3" fill="var(--visual-active)" stroke="var(--project-ink)" strokeWidth="1.2" />
          <text x="0" y="16.5" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="7" fontWeight="700">
            TSINGHUA YDRIT REPO
          </text>
        </g>
        <g transform="translate(495, 240)">
          <rect x="-42" y="6" width="84" height="14" rx="3" fill="var(--visual-token)" stroke="var(--project-ink)" strokeWidth="1.1" />
          <text x="0" y="16.5" textAnchor="middle" fill="var(--project-ink)" fontFamily="var(--font-sans)" fontSize="7" fontWeight="600">
            ENTERPRISE API
          </text>
        </g>
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
