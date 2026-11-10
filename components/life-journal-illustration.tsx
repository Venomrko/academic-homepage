export function LifeJournalIllustration() {
  return (
    <svg
      className="life-journal-illustration"
      viewBox="0 0 420 280"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Background full-bleed field (Anthropic oat) */}
      <rect width="420" height="280" fill="var(--journal-bg)" />

      {/* Tactile notebook graph / diary grid */}
      <g stroke="var(--journal-ink)" strokeWidth="0.8" opacity="0.12" strokeDasharray="3 6">
        <line x1="25" y1="50" x2="395" y2="50" />
        <line x1="25" y1="100" x2="395" y2="100" />
        <line x1="25" y1="150" x2="395" y2="150" />
        <line x1="25" y1="200" x2="395" y2="200" />
        <line x1="25" y1="245" x2="395" y2="245" />
        <line x1="70" y1="25" x2="70" y2="255" />
        <line x1="140" y1="25" x2="140" y2="255" />
        <line x1="210" y1="25" x2="210" y2="255" />
        <line x1="280" y1="25" x2="280" y2="255" />
        <line x1="350" y1="25" x2="350" y2="255" />
      </g>

      {/* Irregular Ivory Carrier Silhouette (Anthropic hand-cut paper seal) */}
      <path
        d="M42 45 C125 32 295 36 378 45 C404 49 410 88 406 140 C402 195 394 232 365 240 C290 252 130 250 56 238 C24 232 18 188 22 140 C25 90 32 48 42 45 Z"
        fill="var(--journal-paper)"
        stroke="var(--journal-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Morning Sun / Window Light Arch (Background ambiance) */}
      <g id="journal-sun">
        <path
          d="M132 80 C132 55 152 42 175 42 C198 42 218 55 218 80"
          fill="none"
          stroke="var(--journal-clay)"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.65"
        />
        <circle cx="175" cy="48" r="9" fill="var(--journal-clay)" stroke="var(--journal-ink)" strokeWidth="1.8" />
        <line x1="175" y1="32" x2="175" y2="25" stroke="var(--journal-clay)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
        <line x1="195" y1="38" x2="201" y2="33" stroke="var(--journal-clay)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
        <line x1="155" y1="38" x2="149" y2="33" stroke="var(--journal-clay)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      </g>

      {/* Ground Horizon Table Line */}
      <path
        d="M32 240 C110 244 240 242 388 240"
        stroke="var(--journal-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* TILTED OPEN TRAVEL JOURNAL / SKETCHBOOK */}
      <g id="journal-book" transform="rotate(-5 150 170)">
        {/* Hardcover Outer Binding */}
        <rect
          x="44"
          y="126"
          width="186"
          height="102"
          rx="6"
          fill="var(--journal-pot)"
          stroke="var(--journal-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left Page (Diary rules & polaroid sketch) */}
        <path
          d="M50 131 L134 131 L134 221 L50 221 Z"
          fill="var(--journal-paper)"
          stroke="var(--journal-ink)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Diary rules on left page */}
        <line x1="58" y1="145" x2="95" y2="145" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        <line x1="58" y1="157" x2="124" y2="157" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        <line x1="58" y1="169" x2="120" y2="169" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        <line x1="58" y1="181" x2="126" y2="181" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        <line x1="58" y1="193" x2="110" y2="193" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        <line x1="58" y1="205" x2="98" y2="205" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />

        {/* Right Page (Field sketch & observations) */}
        <path
          d="M138 131 L222 131 L222 221 L138 221 Z"
          fill="var(--journal-paper)"
          stroke="var(--journal-ink)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Hand-drawn travel polaroid / mount frame on right page */}
        <rect
          x="152"
          y="142"
          width="56"
          height="42"
          rx="3"
          fill="var(--journal-bg)"
          stroke="var(--journal-ink)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Mountain contour sketch inside frame */}
        <path
          d="M158 174 L170 156 L182 170 L194 152 L202 174"
          fill="none"
          stroke="var(--journal-ink)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="196" cy="158" r="2.5" fill="var(--journal-clay)" />
        {/* Caption lines below frame */}
        <line x1="152" y1="195" x2="216" y2="195" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        <line x1="152" y1="207" x2="198" y2="207" stroke="var(--journal-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />

        {/* Center Spine Stitching */}
        <line x1="136" y1="129" x2="136" y2="223" stroke="var(--journal-ink)" strokeWidth="2.6" strokeLinecap="round" />
        <line x1="134" y1="145" x2="138" y2="145" stroke="var(--journal-ink)" strokeWidth="2" strokeLinecap="round" />
        <line x1="134" y1="175" x2="138" y2="175" stroke="var(--journal-ink)" strokeWidth="2" strokeLinecap="round" />
        <line x1="134" y1="205" x2="138" y2="205" stroke="var(--journal-ink)" strokeWidth="2" strokeLinecap="round" />

        {/* Terracotta Bookmark Ribbon (spilling gracefully from the spine) */}
        <path
          d="M136 222 C138 245 146 256 156 264 L164 256 L170 266 C158 252 148 240 144 222 Z"
          fill="var(--journal-clay)"
          stroke="var(--journal-ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </g>

      {/* FOUNTAIN PEN / PENCIL (Resting beside the journal) */}
      <g id="journal-pen" transform="rotate(-30 82 225)">
        <rect
          x="75"
          y="170"
          width="8"
          height="52"
          rx="2"
          fill="var(--journal-pot)"
          stroke="var(--journal-ink)"
          strokeWidth="2"
        />
        {/* Pen nib */}
        <polygon points="75,170 79,158 83,170" fill="var(--journal-ink)" stroke="var(--journal-ink)" strokeWidth="1.5" />
      </g>

      {/* ARTISANAL CERAMIC MUG & STEAM */}
      <g id="journal-cup">
        {/* Sturdy Loop Handle */}
        <path
          d="M280 156 C304 152 304 195 280 198"
          fill="none"
          stroke="var(--journal-ink)"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ceramic Mug Body */}
        <path
          d="M234 148 L282 148 L278 210 C276 220 240 220 238 210 Z"
          fill="var(--journal-clay)"
          stroke="var(--journal-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Upper Mug Glaze Rim */}
        <ellipse
          cx="258"
          cy="148"
          rx="24"
          ry="6"
          fill="var(--journal-paper)"
          stroke="var(--journal-ink)"
          strokeWidth="2.8"
        />

        {/* Cozy hand-drawn curling steam wisps */}
        <path
          d="M252 134 C244 116 260 105 250 86"
          fill="none"
          stroke="var(--journal-ink)"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M268 128 C260 114 274 100 265 80"
          fill="none"
          stroke="var(--journal-ink)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.65"
        />
      </g>

      {/* POTTED BOTANICAL HOUSEPLANT (Right) */}
      <g id="journal-plant">
        {/* Terracotta Planter Pot */}
        <path
          d="M312 176 L368 176 L360 226 C350 232 330 232 320 226 Z"
          fill="var(--journal-pot)"
          stroke="var(--journal-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pot Rim Line */}
        <line x1="308" y1="176" x2="372" y2="176" stroke="var(--journal-ink)" strokeWidth="3" strokeLinecap="round" />

        {/* Living Botanical Stem */}
        <path
          d="M340 176 C338 138 348 102 342 64"
          fill="none"
          stroke="var(--journal-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Leaf 1 (Left broad Monstera/Ficus leaf) */}
        <path
          d="M336 142 C304 138 288 112 304 94 C324 100 334 122 336 142 Z"
          fill="var(--journal-leaf)"
          fillOpacity="0.88"
          stroke="var(--journal-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M304 94 C318 110 326 124 336 142" fill="none" stroke="var(--journal-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

        {/* Leaf 2 (Right broad leaf) */}
        <path
          d="M344 116 C376 112 392 88 376 68 C356 76 346 96 344 116 Z"
          fill="var(--journal-leaf)"
          fillOpacity="0.88"
          stroke="var(--journal-ink)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M376 68 C364 84 354 100 344 116" fill="none" stroke="var(--journal-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

        {/* Leaf 3 (Top sprout) */}
        <path
          d="M342 74 C328 54 334 36 348 40 C356 48 352 64 342 74 Z"
          fill="var(--journal-leaf)"
          fillOpacity="0.75"
          stroke="var(--journal-ink)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Little potting detail tick */}
        <circle cx="340" cy="176" r="3" fill="var(--journal-ink)" />
      </g>
    </svg>
  );
}
