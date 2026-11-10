# Publications content sources

Updated: 2026-11-09.

The Publications page contains seven first-author papers. Conference years,
ordering, and distinctions follow `profile/materials/cv/cv.tex` and
`profile/materials/publications/publications.tex` in the parent Application
workspace. It keeps the existing year/venue filters, search, animated abstracts
and citations, and resource button styling.

## Paper originals

`profile/materials/publications/Ren_Zhuang_Published_Papers.pdf` is a 128-page
collection with one top-level bookmark for each paper:

| Entry | Conference year | Collection pages | Resource |
| --- | --- | --- | --- |
| LSPO | NeurIPS 2026 | 1–42 | https://arxiv.org/abs/2610.20350 |
| The Geometric Reasoner | ICML 2026 | 43–71 | https://arxiv.org/abs/2601.18832 |
| Adaptive GoGI-Skip | IJCAI 2026, Oral | 72–90 | https://doi.org/10.24963/ijcai.2026/457 |
| The Ratchet Effect in Silico | CogSci 2026 | 91–98 | https://escholarship.org/uc/item/57b407jm |
| Factored Internal Verification | ICONIP 2025 | 99–113 | https://doi.org/10.1007/978-981-95-4088-4_18 |
| Twin Prompt | SMC 2025, Oral | 114–121 | https://doi.org/10.1109/SMC58881.2025.11343657 |
| Heuristic CoT | IJCNN 2024 | 122–128 | https://doi.org/10.1109/IJCNN60899.2024.10650937 |

Full author names follow the papers' first pages, checked against the
publisher's Crossref records where available. In particular, the FactPrompt
coauthor is **Ke Lu**; the final three Heuristic CoT coauthors are **Yanlong Wang,
Zhipeng Ding, and Wenbo Liu**. The shared CV uses initials for these names.
Ren Zhuang is highlighted in each displayed author list.

The displayed author list adds a superscript `*` for correspondence. The paper
originals identify Ben Wang and Shuifa Sun for LSPO, TGR, and Heuristic CoT; Ben
Wang alone for FactPrompt and Twin Prompt. GoGI-Skip and POLIS each have Ren
Zhuang as their sole author and contact. These two entries therefore mark the
sole author. The markers are presentation metadata and do not change BibTeX.

## Displayed conference names

Full conference names and editions were checked against their official sites
on 2026-11-09:

| Venue | Displayed name | Official source |
| --- | --- | --- |
| NeurIPS 2026 | The 40th Annual Conference on Neural Information Processing Systems | https://neurips.cc/Conferences/2026 |
| ICML 2026 | The 43rd International Conference on Machine Learning | https://icml.cc/Conferences/2026 |
| IJCAI 2026 | The 35th International Joint Conference on Artificial Intelligence | https://2026.ijcai.org/ |
| CogSci 2026 | The 48th Annual Meeting of the Cognitive Science Society | https://cognitivesciencesociety.org/cogsci-2026/ |
| ICONIP 2025 | The 32nd International Conference on Neural Information Processing | https://iconip2025.apnns.org/ |
| SMC 2025 | IEEE International Conference on Systems, Man, and Cybernetics | https://www.ieeesmc2025.org/ |
| IJCNN 2024 | The International Joint Conference on Neural Networks | https://2024.ieeewcci.org/ |

The site keeps the plain-text ordinal in `venue` for searching and tooltips;
the publication list renders only its suffix as a semantic superscript.
SMC and IJCNN use the unnumbered names supplied by their official sites.
Calendar years appear in the year marker rather than being repeated at the
end of each full conference name. BibTeX metadata is maintained separately
and is unaffected by this display formatting.

## Abstracts, citations, and links

- The first four abstracts match the arXiv Atom records checked on 2026-11-09.
  This also restores a sentence absent from the extracted/rendered local LSPO
  abstract. Plain-text normalization replaces TeX markup in quantities such as
  `>45%`, `2.0×`, and numeric ranges.
- The other three abstracts follow the local paper originals. PDF line breaks,
  discretionary hyphens, and missing extraction ligatures are normalized;
  scientific claims and numerical results are retained.
- The user confirmed that the other five papers are formally public, while
  NeurIPS and ICML proceedings are not yet public. Those two entries show their
  accepted conferences and provide arXiv/PDF resources and arXiv-based BibTeX;
  formal proceedings identifiers are not invented.
- Published-paper citations use the confirmed proceedings/book title, author
  names, year, DOI where supplied, and publisher page ranges from Crossref.
  ICONIP remains grouped under its 2025 conference year; Crossref also records
  its first online publication in 2025.
- Only IJCAI and SMC carry an Oral distinction. The demonstration Outstanding
  Paper distinction is removed. Existing venue and distinction colors remain.
- Four entries have the arXiv and PDF links supplied in the publication materials.
  LSPO's code URL is printed in its abstract. The five published papers have
  their DOI or eScholarship page as WEBSITE. Unconfirmed code, websites, and
  direct PDF destinations are omitted rather than pointing to platform homepages.

## Illustrations and service records

All seven thumbnails are actual figures cropped from the local paper collection,
converted to WebP, and served through Next.js Image with explicit dimensions.
No scientific data or diagrams are redrawn. The source page, figure number, and
crop coordinates are recorded in `public/images/publications/SOURCES.md`.

Previews share a 3:2 frame, 260px wide on desktop/mobile and 240px on tablet.
Original image proportions are retained with `object-fit: contain`. LSPO now
uses its first results figure; TGR, GoGI-Skip, and Twin Prompt use complete
method panels from their original figures, making the selected content legible
at thumbnail size. These new previews have distinct asset filenames so an old
cached image cannot mask the change.

## Reviewer and Travel

The author corrected the conference-reviewing records on 2026-11-10: NeurIPS
2026 and SMC 2025 remain; the author did not review for ICML 2026. Reviewer
acceptance dates are May 29, 2026 for NeurIPS and May 16, 2025 for SMC. These
are personal service dates rather than paper acceptance or conference dates.
The supplied ORCID screenshot adds
one Expert Systems with Applications review in 2026 and one Knowledge-Based
Systems review in 2025. The screenshot is provenance; ORCID is not displayed
as a source label in the sidebar.

The two journal headings omit their years, and the review-count descriptions
are not displayed. Their known years remain internal sorting metadata.
The author supplied their reviewer acceptance dates on 2026-11-10: July 1,
2026 for Expert Systems with Applications and July 23, 2025 for Knowledge-Based
Systems. These dates appear alongside Reviewer and determine chronological order.

The author separately confirmed attendance at IJCNN, SMC, ICONIP, ICML, and
IJCAI, and upcoming attendance at NeurIPS. The six travel entries include
dates and locations:

| Conference | Conference dates | Location | Primary source checked 2026-11-09 |
| --- | --- | --- | --- |
| NeurIPS 2026 | December 6–12, 2026 | Sydney, Australia | https://neurips.cc/Conferences/2026 |
| IJCAI 2026 | August 15–21, 2026 | Bremen, Germany | https://2026.ijcai.org/ |
| ICML 2026 | July 6–11, 2026 | Seoul, South Korea | https://icml.cc/Conferences/2026 |
| ICONIP 2025 | November 20–24, 2025 | Okinawa, Japan | https://iconip2025.apnns.org/ |
| SMC 2025 | October 5–8, 2025 | Vienna, Austria | https://www.ieeesmc2025.org/ |
| IJCNN 2024 / WCCI | June 30 – July 5, 2024 | Yokohama, Japan | https://2024.ieeewcci.org/ |

The dates are the official event periods, not personal arrival/departure dates
or dates on which the reviews were performed. NeurIPS is marked Upcoming and
uses the Sydney main meeting, consistent with the author's existing Sydney
conference planning folder; its Atlanta and Paris satellite meetings have
different dates. No journal reviewer location is inferred from publisher offices.

All ten entries share one chronological list, ordered from newest to oldest.
Travel records use their event dates; all four reviews use their confirmed
reviewer acceptance dates. No unconfirmed review dates are invented. Conference
headings include the venue and year; journal headings show only the journal
name. Each heading is followed by its Reviewer or Attend label, the relevant
confirmed date, and the location where supplied. Review counts are not displayed.
Publication distinctions such as Oral use a #D97757 background to emphasize
research recognition. Upcoming uses a muted rose #D95778 background beside the
NeurIPS 2026 heading, retaining the publication venue badge's white text,
typography, and dimensions. Conference and journal venue badges use #827DBD.

The whole list participates in sidebar height measurement and expansion.
On tablet/mobile the default maximum is six entries. Hidden entries retain
layout dimensions for measurement while being visually hidden, inert, and
excluded from the accessibility tree.
