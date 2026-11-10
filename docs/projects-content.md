# Projects content sources

Updated: 2026-11-10.

The Projects page contains three documented research-system and applied-software
projects. It replaces the previous Language in context, Model observatory, and
Human–AI dialogues demonstrations. Project details describe recorded roles and
contributions rather than hypothetical research plans.

## Sources

Paths are relative to the parent Application workspace:

- `profile/materials/cv/cv.tex`, Research Experience and Projects sections:
  institutions, roles, periods, project scope, C²Embedding, C²Reranker, Twin
  Prompt, and the master's thesis award.
- `interview/master/interview-content-master.md`, Master's Thesis and Applied
  Projects: the domain dialogue system and the three applied project areas.
- `interview/deck/script.md`, slide 11: climate change and carbon neutrality,
  retrieval/reranking, problem reformulation, answer refinement, system
  integration, application-level evaluation, and the thesis award.
- `lib/site-data.ts`, publication `twin-prompt`: the existing paper title and
  SMC 2025 record used by the Related research link.
- `interview/assets/papers/masters-thesis-dialogue-system.pdf`, the 91-page
  master's thesis submitted in 2024: the expanded climate-system case study.
  References below distinguish PDF page numbers from the printed thesis pages.
- `D:/OneDrive/Warehouse/Le/毕业论文/大规模语言模型驱动的双碳邻域问答系统.pptx`,
  slide 39: the five component illustrations and their original order.

## Project records

| Project | Recorded period | Institution | Contribution |
| --- | --- | --- | --- |
| Climate change dialogue system | Sep 2023 – Jan 2025 research period | Hangzhou Normal University; Zhejiang Wuxin Technology Co., Ltd. | Led the master's thesis project, trained domain retrieval/reranking models from pretrained models, integrated Twin Prompt and the user-facing dialogue system |
| Digital twin application | Jul 2024 – Sep 2024 | China Industrial Cybersecurity Center (CIC) | Assisted with software prototypes and translating industrial-control requirements into interactive demonstrations |
| Blockchain & digital solutions | Sep 2022 – Jan 2024 | Yangtze Delta Region Institute of Tsinghua University | Contributed to requirements analysis, system testing, technical documentation, and stakeholder alignment |

The climate project's period comes from the CV research-experience entry
containing the thesis work. Its detail page explicitly labels this as
**Research period**; it is not a separately confirmed project start/end date.
The other two periods are given directly under Projects in the CV.

The 2025 Outstanding Master's Thesis Award is associated with the climate
dialogue system in the interview account. On 2026-11-10, the author also
confirmed that the project supported the 2024 Outstanding Graduate Student in
Professional Practice honor. Both recognitions reference the shared honors
records, keeping their titles, years, and institution consistent with About.
The related Twin Prompt link targets
the matching publication entry through a stable article anchor.

Descriptions do not infer implementation stacks, code availability, deployment
scale, industrial clients, or blockchain platforms. Climate-project metrics are
transcribed from the thesis and are scoped to its experiments. Source
code and live-demo buttons are omitted because no confirmed public destinations
were supplied for these projects. Application targets, referee correspondence,
grades, and phone numbers are not included.

## Presentation and illustrations

The index retains three equal-width desktop cards, two columns on tablet,
and one on mobile. Every card has a date, complete short description, original
illustration, and topic labels. Detail pages show the project period,
role, institution, location, overview, and individual contributions. Recognition
and related publications appear only where supported.

`components/project-visual.tsx` contains three original SVG illustrations:

- Climate: a globe, source material, a dialogue bubble, and a leaf.
- Digital twin: a physical model connected to a digital representation.
- Digital solutions: linked blocks and a requirements/checklist document.

These are conceptual illustrations, not screenshots, architecture claims,
or scientific results. Shared CSS variables provide light/dark colors.
The assets are server-rendered vector markup, require no image download or
client-side theme swap, and have no random identifiers or time-dependent output.
Decorative SVGs are hidden from assistive technology; all substantive project
information remains in the text. Caption text uses responsive HTML typography.

## Climate thesis expansion

The climate detail page uses the same container and content boundaries as the
Projects index. The previous 760px body cap has been removed from all three
project details. Contributions and supporting items form responsive grids within
that full-width body.

The retrieval-results table is centered and capped at 960px rather than
stretching across the full page. On narrower screens it fits the available
width and retains its horizontal scrolling region. Parameter counts occupy a
separate Parameters column immediately after Model. Column headers match the
body font size at each breakpoint.

The expanded climate content is grounded in the following thesis passages:

| Content | PDF pages | Printed thesis pages |
| --- | --- | --- |
| Problem reformulation, response generation, answer revision | 38–40 | 23–25 |
| Prompting data and evaluation across nine LLMs; 1,240 QA pairs | 40–45 | 25–30 |
| Markdown conversion, semantic chunking, four questions per passage | 53–54 | 38–39 |
| 4,280 training and 1,425 test question–context pairs | 54 | 39 |
| Bi-encoder, cosine/in-batch/angular objectives, pretrained BERT backbone | 55–56 | 40–41 |
| C²Embedding: 335M parameters, Hit@5 64.4%, MRR@5 49.7% | 58, Table 4-2 | 43 |
| Three semantically similar negative contexts, cross-encoder, triplet loss | 60–62 | 45–47 |
| C²Reranker: 33M parameters, Accuracy@1 71.5%, NDCG@10 91.1% | 63, Table 4-5 | 48 |
| Retrieval ablation: NDCG@10 64.6 / 84.2 / 91.1 for BM25 / embedding / combined | 65, Figure 4-10 | 50 |
| System workflow, ingestion, provider adapters, DuckDuckGo search | 68–71 | 53–56 |
| Passage citations, ratings, and written feedback | 72–73 | 57–58 |
| Single Sendai Framework response comparison | 73–74 | 58–59 |

The 6.9 **percentage-point** difference is 91.1 minus 84.2, not a relative
percentage improvement. Retrieval, prompting, and the end-to-end example are
described separately: the system example is not presented as a large benchmark
or a user/deployment study. Feedback collection is described as input for later
review and improvement, not as evidence of deployed automatic retraining.

The system workflow image is the original Figure 5-1, extracted from PDF page 68
without the page header, personal identifiers, signatures, or surrounding text.
It appears inside the case study in place of the decorative climate hero.
See `public/images/projects/SOURCES.md` for its extraction and delivery details.

### Figure-rich layout

The overall case-study body keeps the full Projects container width. All eight
figures are organized into two compact groups, each with four images:

- Method figures: bi-encoder, cross-encoder, Twin Prompt, and system workflow
  (Figures 4-5, 4-7, 3-1, and 5-1), after the method descriptions.
- Evaluation figures: embedding results, reranking results, retrieval ablation,
  and the cited answer example (Figures 4-6, 4-8, 4-10, and 5-9), after the results
  table and findings.

Desktop groups have four columns and are inset 24px from each side of the
text area. Between 1000px and 1279px, three columns are used; narrower tablets
use two, and phones at 640px or below use one. Image panels are 220px tall on
desktop, with `object-fit: contain` to preserve the full original. Phone images
follow their natural proportions with a 240px height cap. Figure groups remain
slightly narrower than the text at every breakpoint.

The prompting-evaluation description was moved into the dedicated Twin Prompt
section without repeating the same setup in the findings. Figures are cropped from the thesis rather than
reconstructed or generated, and use WebP and responsive lazy loading. They
render inline with captions, without image links or enlargement controls.
All eight image sources and crop boundaries are
recorded in the image-source file.

### Component illustrations from the defense slides

System capabilities now presents the same five components as slide 39 of the
master's defense: data ingestion, base-language-model adaptation, online search,
source citations, and feedback collection. The previous combined references and
feedback item is split into two; its existing descriptions remain scoped to
citations and feedback collection rather than automated retraining.

The five illustrations are presentation artwork rather than software recordings
or scientific diagrams. Four source assets are static SVGs; online search is an
181-frame GIF lasting 15.08 seconds. The first three vector assets remain SVG;
the large point-cloud illustration is encoded as a transparent WebP. Empty
transparent canvas space is trimmed without changing the artwork.

The GIF is delivered as a silent H.264 MP4 with all 181 frames, a WebP poster,
and the same full animation duration within one frame. This reduces the animation
from 1,862,746 bytes to 408,259 bytes. Video loading and playback begin only when
the component enters the viewport. Leaving the viewport or switching to another
browser tab pauses it. An explicit play/pause control is available, and reduced
motion starts with the static poster until the user chooses to play.

The component grid uses five desktop columns, two below 1000px, and one at
640px or below. Its edges are inset to match the paper-figure groups, and its
150px illustration panels remain compact. Decorative images have empty alt
text; the adjacent headings and descriptions convey each component's function.
The source presentation was read only and its SHA-256 hash remained unchanged.
