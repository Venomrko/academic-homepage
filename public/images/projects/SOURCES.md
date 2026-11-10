# Project image sources

## climate-dialogue-workflow.webp

- Source: `interview/assets/papers/masters-thesis-dialogue-system.pdf` in the
  parent Application workspace.
- Figure: Figure 5-1, system workflow; PDF page 68 / printed thesis page 53.
- Author: Ren Zhuang, master's thesis, Hangzhou Normal University, 2024.
- Extraction: PyMuPDF crop `(87, 472, 508, 716)` in PDF points, rendered at 4×.
- Encoding: opaque WebP, quality 92; 1684 × 976 pixels; about 63 KB.
- The original figure and Chinese labels are preserved. No diagram content was
  generated or reconstructed. The crop excludes headers, personal identifiers,
  signatures, and the original caption; an English HTML caption gives the source.
- Delivery: inline `next/image` with intrinsic dimensions, responsive `sizes`,
  and default lazy loading. No image link or enlargement control is provided.
- The white figure background is preserved in both themes so its labels and
  scientific content remain unchanged.

## Additional thesis figures

All seven additional figures use the same thesis and author as the system
workflow above. Coordinates are PDF points, and page numbers are PDF pages.
Each crop is rendered at 4× and encoded as opaque WebP at quality 94.
The original figure content and labels are retained.

| Asset | Figure | PDF / printed page | Crop | Dimensions |
| --- | --- | --- | --- | --- |
| `climate-twin-prompt.webp` | 3-1, Twin Prompt inference | 39 / 24 | `(132, 360, 464, 548)` | 1328 × 752 |
| `climate-embedding-architecture.webp` | 4-5, bi-encoder | 55 / 40 | `(110, 236, 484, 550)` | 1496 × 1256 |
| `climate-reranker-architecture.webp` | 4-7, cross-encoder | 61 / 46 | `(151, 70, 444, 432)` | 1172 × 1448 |
| `climate-embedding-results.webp` | 4-6, embedding comparison | 57 / 42 | `(90, 350, 506, 652)` | 1664 × 1208 |
| `climate-reranker-results.webp` | 4-8, reranking comparison | 63 / 48 | `(90, 77, 506, 379)` | 1664 × 1208 |
| `climate-retrieval-ablation.webp` | 4-10, retrieval ablation | 65 / 50 | `(119, 266, 473, 471)` | 1416 × 820 |
| `climate-answer-example.webp` | 5-9, source-cited response | 74 / 59 | `(89, 558, 506, 725)` | 1668 × 668 |

The case study uses eight original figures in two groups of four: methods and
evaluation. Desktop groups have four columns and are 48px narrower than the
text area; medium desktops use three columns, tablets two, and phones one.
Desktop image panels are 220px tall, with `object-fit: contain` to preserve the
entire image. On phones, the image height follows its aspect ratio with a 240px
upper bound.
Every figure retains descriptive alt text and a figure-number caption. Figures
render inline without image links or enlargement controls. Assets remain
lazy-loaded through `next/image`.

## Component illustrations from the master's defense

Source presentation: `大规模语言模型驱动的双碳邻域问答系统.pptx`, slide 39,
the five-component overview. These are the artwork used in the presentation,
rather than newly generated figures or recordings of system operation.

| Web asset | Embedded source | Component | Delivery dimensions |
| --- | --- | --- | --- |
| `climate-component-ingestion.svg` | `ppt/media/image51.svg` | Data ingestion | 831 × 818 |
| `climate-component-models.svg` | `ppt/media/image52.svg` | Language-model adaptation | 1920 × 634 |
| `climate-component-search.mp4` | `ppt/media/image53.gif` | Online search | 640 × 410 |
| `climate-component-citations.svg` | `ppt/media/image54.svg` | Source citations | 1920 × 497 |
| `climate-component-feedback.webp` | `ppt/media/image55.svg` | Feedback collection | 768 × 304 |

The original colors and artwork are retained. Transparent blank margins in the
wide SVG canvases are removed by adjusting the view box: model adaptation uses
`0 446 1920 634`, citations `0 583 1920 497`, and feedback `113 408 1695 672`.
The feedback artwork is converted to transparent WebP at quality 90 to avoid
shipping a 1.6 MB SVG. The other three SVGs remain vector images.

The source GIF has 181 frames and a total duration of 15.08 seconds. The silent,
looping H.264 MP4 preserves all frames and lasts 15.083 seconds; it is encoded
with CRF 20, `yuv420p`, and fast-start metadata. Its 408,259 bytes replace the
1,862,746-byte GIF. `climate-component-search-poster.webp` is its first frame.
The video loads on entering the viewport, pauses outside it or in a hidden tab,
and offers a play/pause control. Reduced motion shows the poster by default.
The video contains no audio. Static images remain lazy-loaded.
