export function ProjectVisualTwin() {
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

      {/* PHYSICAL REALITY: Sculpted Hand Gesture (Anthropic human craft) */}
      <g id="twin-hand">
        {/* Main continuous hand & finger silhouette with generous negative space */}
        <path
          d="M 85 260
             C 88 238 95 215 105 195
             C 112 178 118 162 128 145
             C 134 136 144 138 146 148
             C 146 160 142 178 146 195
             C 152 175 162 152 172 134
             C 178 124 190 126 192 136
             C 192 150 186 172 188 192
             C 194 172 204 145 214 122
             C 220 112 232 114 234 124
             C 234 140 226 168 226 190
             C 232 172 240 148 248 132
             C 254 124 266 126 266 136
             C 264 150 254 174 252 196
             C 256 182 264 162 272 150
             C 278 142 288 146 286 156
             C 280 178 268 206 250 232
             C 232 254 205 262 175 260
             Z"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Delicate anatomical knuckle & palm accents */}
        <line x1="174" y1="168" x2="184" y2="164" stroke="var(--project-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
        <line x1="204" y1="156" x2="216" y2="152" stroke="var(--project-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
        <line x1="236" y1="166" x2="246" y2="162" stroke="var(--project-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />
        <path d="M 145 212 C 175 224 205 220 228 208" fill="none" stroke="var(--project-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
      </g>

      {/* DIGITAL TWIN: Faceted Polyhedron Crystal (Digital Counterpart) */}
      <g id="twin-crystal">
        {/* Shaded Facets */}
        <polygon
          points="465,75 405,112 465,150"
          fill="var(--visual-secondary)"
          fillOpacity="0.32"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="465,75 525,112 465,150"
          fill="var(--visual-token)"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="405,112 405,188 465,225 465,150"
          fill="var(--visual-bg)"
          fillOpacity="0.55"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="525,112 525,188 465,225 465,150"
          fill="var(--visual-secondary)"
          fillOpacity="0.45"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Solid ink node dots at crystal vertices */}
        <circle cx="465" cy="75" r="4.2" fill="var(--project-ink)" />
        <circle cx="405" cy="112" r="4.2" fill="var(--project-ink)" />
        <circle cx="525" cy="112" r="4.2" fill="var(--project-ink)" />
        <circle cx="465" cy="150" r="4.2" fill="var(--project-ink)" />
        <circle cx="405" cy="188" r="4.2" fill="var(--project-ink)" />
        <circle cx="525" cy="188" r="4.2" fill="var(--project-ink)" />
        <circle cx="465" cy="225" r="4.2" fill="var(--project-ink)" />
      </g>

      {/* TELEMETRY & RESONANCE WAVE: Harmonizing Physical & Digital */}
      <g id="twin-wave">
        {/* Primary living sinusoidal wave ribbon */}
        <path
          d="M 282 160 C 315 110 345 205 375 156 C 405 105 435 200 465 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Secondary harmonic wave (dashed) */}
        <path
          d="M 282 160 C 315 195 345 105 375 156 C 405 205 435 105 465 150"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="1.8"
          strokeDasharray="4 6"
          opacity="0.6"
          strokeLinecap="round"
        />

        {/* Analog vibration measurement ticks */}
        <line x1="315" y1="102" x2="315" y2="114" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="345" y1="198" x2="345" y2="210" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="405" y1="98" x2="405" y2="110" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />
        <line x1="435" y1="194" x2="435" y2="206" stroke="var(--project-ink)" strokeWidth="2.2" strokeLinecap="round" />

        {/* Resonance Focal Node (Terracotta spot) */}
        <circle cx="375" cy="156" r="11" fill="var(--visual-accent)" />
        <circle cx="375" cy="156" r="11" fill="none" stroke="var(--project-ink)" strokeWidth="2.2" />

        {/* Concentric pulse rings */}
        <path
          d="M 358 140 C 368 132 382 132 392 140"
          fill="none"
          stroke="var(--project-ink)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M 358 172 C 368 180 382 180 392 172"
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
