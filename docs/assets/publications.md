# Publication assets

Each paper has a directory in `public/images/publications/` matching its ID in
`lib/data/publications.ts`. `preview.webp` is the thumbnail, `poster.pdf` is the
author's conference poster, and `figure.webp`, when present, is the previous
full-figure preview. Earlier illustration assets are kept in `archive/`.

The thumbnails are crops of the author's supplied
`profile/materials/publications/Ren_Zhuang_Published_Papers.pdf` in the parent
Application workspace. Page numbers are one-based positions in that collection.
Coordinates are PDF points `[left, top, right, bottom]`.

| File | Paper | Page | Figure | Crop |
| --- | --- | --- | --- | --- |
| `lspo/preview.webp` | Lifted State Policy Optimization | 1 | 1 | `[104, 454, 508, 629]` |
| `geometric-reasoner/preview.webp` | The Geometric Reasoner | 45 | 2(c) | `[307, 65, 546, 215]` |
| `gogi-skip/preview.webp` | Adaptive GoGI-Skip | 73 | 2(a) | `[50, 48, 234, 169]` |
| `ratchet-effect/preview.webp` | The Ratchet Effect in Silico | 91 | 1 | `[312, 196, 558, 347]` |
| `factprompt/preview.webp` | Factored Internal Verification | 103 | 2 | `[136, 109, 475, 277]` |
| `twin-prompt/preview.webp` | Twin Prompt | 115 | 1, proposed-method panel | `[393, 47, 561, 132]` |
| `heuristic-cot/preview.webp` | Heuristic Chain of Thought | 122 | 1 | `[310, 225, 565, 399]` |

Rendered directly from the PDF, then encoded as WebP at quality 90. Each crop
retains the original content, colors, and aspect ratio of the selected figure
or complete panel. All previews fit inside a common 3:2 display frame.
