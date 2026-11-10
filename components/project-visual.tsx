type ProjectVisualVariant = 'climate' | 'twin' | 'ledger';

const captions: Record<ProjectVisualVariant, string> = {
  climate: 'DOMAIN KNOWLEDGE · DIALOGUE',
  twin: 'PHYSICAL SYSTEM · DIGITAL REPRESENTATION',
  ledger: 'CONNECTED SYSTEMS · SOFTWARE PRACTICE',
};

export function ProjectVisual({
  variant, showCaption = true,
}: {
  variant: ProjectVisualVariant;
  showCaption?: boolean;
}) {
  return <div className={`project-visual visual-${variant}`} aria-hidden="true">
    <svg viewBox="0 0 600 300" fill="none">
      {variant === 'climate' && <>
        <path d="M113 153C94 104 125 64 174 66C226 60 260 99 252 147C252 195 208 217 163 208C139 205 122 182 113 153Z" className="project-art-accent" />
        <path d="M116 120L143 107L150 82L176 92L169 118L190 134L180 158L157 157L157 185M207 77L203 102L230 115L248 109M210 167L232 160L239 178L222 194" className="project-art-line project-art-light-line" />
        <path d="M289 68L469 72Q486 73 485 91L481 167Q481 184 462 185L341 184L310 209L312 182L286 181Q269 180 271 161L273 86Q273 68 289 68Z" className="project-art-paper" />
        <path d="M300 107L445 110M300 128L421 129M301 149L381 150" className="project-art-line" />
        <path d="M214 168L280 164L287 236L218 239Z" className="project-art-paper" />
        <path d="M230 187L266 185M232 202L270 200M233 218L257 216" className="project-art-line" />
        <path d="M389 212C395 195 413 193 430 194C426 214 411 229 389 225M390 225L413 205" className="project-art-leaf" />
        <path d="M117 243C185 249 218 244 258 247M329 240C384 244 439 241 479 244" className="project-art-ground" />
      </>}
      {variant === 'twin' && <>
        <path d="M111 109L183 70L253 108L182 151Z" className="project-art-accent" />
        <path d="M111 109L182 151L182 232L111 191Z" className="project-art-paper" />
        <path d="M182 151L253 108L251 189L182 232Z" className="project-art-accent" />
        <path d="M145 91L216 130M147 130L218 88M147 130L147 211M216 130L216 211M111 150L182 192L252 150" className="project-art-line project-art-light-line" />
        <path d="M344 66L499 71Q511 72 510 87L505 212L332 208L335 80Q335 67 344 66Z" className="project-art-paper" />
        <path d="M333 208L316 231L520 235L505 212M394 222L439 223" className="project-art-line" />
        <path d="M366 121L416 94L465 123L416 151L366 121L366 173L416 201L465 175L465 123M416 151L416 201M366 173L416 145L465 175M416 94L416 145" className="project-art-line" />
        <path d="M271 148C290 142 307 143 322 148M308 138L322 148L309 157" className="project-art-line" />
        <path d="M92 249L266 250M324 251L520 252" className="project-art-ground" />
      </>}
      {variant === 'ledger' && <>
        <path d="M104 84L174 76L184 185L111 193Z" className="project-art-paper" />
        <path d="M120 105L129 112L141 94M124 135L132 142L144 124M144 108L160 106M147 138L163 136M126 166L165 162" className="project-art-line" />
        <path d="M230 74L307 78L301 154L226 150Z" className="project-art-accent" />
        <path d="M335 131L411 126L418 203L343 209Z" className="project-art-paper" />
        <path d="M447 72L518 78L512 151L441 146Z" className="project-art-accent" />
        <path d="M291 132L320 151Q329 158 335 151M402 150L431 128Q440 121 448 128" className="project-art-link" />
        <path d="M253 96L279 98L278 124L252 122ZM361 151L386 150L388 176L363 178ZM466 94L490 96L488 120L464 119Z" className="project-art-line" />
        <path d="M220 223C274 233 315 229 347 233M417 228L520 230" className="project-art-ground" />
      </>}
    </svg>
    {showCaption && <p className="project-art-caption">{captions[variant]}</p>}
  </div>;
}
