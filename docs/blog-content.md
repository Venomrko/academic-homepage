# Blog content and publishing

Updated: 2026-11-10.

The Blog belongs to Ren Zhuang and includes personal essays as well as research
and work notes. Its public identity uses the shared profile, keeping the author's
name consistent with About, Publications, and Projects.

## Content status

The three original MDX files are prototype examples, not the author's published
writing. They remain on disk with `draft: true` so their Markdown, tables, and
code examples can be reused. Their original dates are demonstration metadata.

The shared Fumadocs source excludes drafts before supplying the Blog lists,
article routes, static route parameters, or search API. A draft cannot be
opened by entering its old article URL. This applies in development and
production.

The author subsequently commissioned retrospective writing based on their
conference and travel history. Eight English-language first drafts are
visible in the local preview: five travel essays in `life`, and three independent
research articles in `work`. These use `draft: false` so they can be read and reviewed
locally; no website was deployed or changed externally.

The travel articles draw on the author's direct confirmation and selected
itineraries, invitation letters, and paper records under the Warehouse/Paper
directory. They do not import the old personal website. Evidence, itinerary
version differences, and limits are recorded in `docs/blog-travel-sources.md`.

## Writing and organization

The writing reference is the author's supplied
`D:/BaiduNetdiskDownload/IELTS/Economist_Style_Guide_12.pdf`. The supplied PDF has
20 pages; the guidance used comes from its introduction (PDF pages 6–9) and
abbreviations entry (pages 11–12).

The essays open with concrete facts, favor plain words and active sentences,
explain unfamiliar abbreviations, and keep each paragraph on one thought.
Technical terms are followed by an explanation of what the method does.
First-person travel reflections use restrained language, with itinerary plans
distinguished from confirmed experiences. Spelling stays consistent with the
English used elsewhere on the site.

The research posts are accessible stories that can also serve as spoken scripts.
They invite readers into the papers through a concrete problem, at most three
core ideas, and enough method and evaluation detail to explain why the work
matters. Technical names follow an explanation. Illustrative scenarios are
distinguished from paper examples, and results retain their evaluation scope.
The full-paper evidence and editorial decisions are recorded in
`docs/blog-research-sources.md`.

The author specifies three publication groups, each with its own Blog card and
article page:

1. **How much thinking does an AI really need?** — ICML, IJCAI and NeurIPS,
   covering TGR, Adaptive GoGI-Skip and LSPO.
2. **How does a good answer become a lasting lesson?** — SMC and CogSci,
   covering Twin Prompt and POLIS, with the related master's thesis system.
3. **Why can a convincing answer still be wrong?** — IJCNN and ICONIP,
   covering Heuristic CoT/SPIRE and FactPrompt.

Together they cover all seven publications and the climate-change dialogue
system. Each article has three second-level sections, about 950–980 English words,
a five-minute reading time, and links to its papers and related research stories.
Their slugs are `structured-reasoning-and-factual-verification`,
`cognitive-reasoning-and-cumulative-intelligence`, and
`efficient-inference-and-geometric-reasoning`. They are sorted by
`latestConferenceDate` descending, using the opening date of each group's latest
conference. Card footers show reading time and the link arrow.

The earlier combined article has been replaced. Its
`/blog/conference-questions-2024-2026` URL redirects to `/blog`, where the three
independent cards can be opened. The earlier individual slugs redirect to the
corresponding renamed articles. The SMC essay links directly to the cognitive
reasoning article.

The Okinawa essay incorporates the author's subsequently supplied 13-page
`巡礼冲绳.pdf`, including the route around Naha, Onna, Motobu, the south and
the coast. Reading times are rounded up from English body word counts at
220 words per minute.

## Presentation

- `/blog` keeps the three-column desktop grid and the two-column personal-essay
  entrance, with its existing original illustration on the right.
- Each published `section: work` note appears as its own article card, ordered
  by `latestConferenceDate` descending, falling back to its writing date.
  Ties use writing date descending, then title. The card header displays the
  writing date independently of conference chronology.
- `/blog/life` contains only published `section: life` essays.
- Travel essays can set `journeyDate` independently of `date`. The personal-essay
  index sorts and labels them by journey time; the article header explicitly
  labels its composition date as Written.
- Each section shows a compact empty state until an article is published.
- There is no introductory paragraph below the Blog heading. Titles,
  descriptions, and previews of individual essays are not inserted into the
  personal-essay entrance.
- Research cards display their short introductions in full, overriding the
  shared three-line description limit with the `research-story` class.
- Card styling, site-wide fonts, light/dark themes, and responsive breakpoints
  remain shared with the rest of the website.
- Article headings, descriptions, and bodies accept `lang`. All eight essays set
  `lang: en`, with English titles, descriptions, categories and section headings.

## Add an article

1. Copy `content/templates/life-post.mdx.example` or
   `content/templates/work-post.mdx.example` into `content/blog/`.
2. Rename it to an English, hyphen-separated slug ending in `.mdx`, for example
   `my-first-note.mdx`. The slug becomes `/blog/my-first-note`; `life.mdx` is
   reserved for the personal-essay index route.
3. Replace the title, description, date, category, reading time, and body. Use
   the actual publication date in `YYYY-MM-DD` form.
4. Keep `draft: true` while writing. Change it to `draft: false` to make the
   article available in its section, at its article URL, and in search.

`section: life` puts an essay inside the personal-essay collection.
`section: work` puts a note on the main Blog page; it is also the default if
`section` is omitted. Category labels are free text, such as Life, Reading,
Travel, Research, or Tools, in either English or Chinese.

For a retrospective travel essay, keep `date` as its actual composition date
and add `journeyDate` for the journey. It accepts the same precision as
`formatDate`, such as `2024-06` when only the month is relevant. The five
travel essays composed on 2026-11-10 use their respective journey months
instead of backdating the new articles.

For a research article covering one or more conferences, set
`latestConferenceDate` to the opening date of the latest represented conference,
in `YYYY-MM-DD` form. Updating its composition date leaves conference ordering
intact. The three current research cards use NeurIPS on `2026-12-06`, CogSci on
`2026-07-22`, and ICONIP on `2025-11-20`; date sources are recorded in
`docs/blog-travel-sources.md`.

The `draft` field defaults to `false` for compatibility with the original
single-file publishing workflow. Both templates explicitly set it to `true`
to keep unfinished articles unpublished.

Run the local development server while writing; saving updates the preview.
A production deployment needs a new build to publish file changes.
