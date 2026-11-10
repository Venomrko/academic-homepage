# Research stories: editorial approach and evidence

Updated: 2026-11-10.

The author requested accessible, engaging research stories that can also be read
aloud, with the function of a film trailer for the papers. Each story has a
concrete opening, at most three core ideas, explanations before technical names,
and a question that invites further reading. The English follows the previously
supplied Economist style guide and uses American spelling.

These are editorial essays suitable for spoken presentation. No recording,
interview, audience reaction, or autobiographical research anecdote is invented.
The biography and search scenarios are explanatory examples; the meal example
comes from the Twin Prompt paper.

## Source and version

Scientific details were checked against the author's existing 128-page paper
collection, read only:

`../profile/materials/publications/Ren_Zhuang_Published_Papers.pdf`

Page numbers below refer to this collection, not individual paper pagination.
This keeps the stories aligned with the versions used by the Publications page.
No claims are imported from the separate, unpublished ICLR manuscript.
The climate-system explanation follows the project material already checked in
`docs/projects-content.md` and represented in `lib/site-data.ts`.

## How much thinking does an AI really need?

Core ideas: selective compression, useful exploration, learning from revisions.

| Paper | Evidence checked | Editorial boundary |
| --- | --- | --- |
| Adaptive GoGI-Skip | Pages 73–75 and 78: answer-gradient sensitivity and uncertainty determine compressed training traces, then supervised tuning teaches shorter generation. | The known answer and gradients are used during data preparation. The story does not describe an online procedure that needs the correct answer before responding, or claim identical accuracy on every task. |
| The Geometric Reasoner | Pages 43 and 45–50: frozen-model latent candidate search, short look-ahead, soft geometric penalties, bounded context and cache resets; evaluation across sampling budgets. | Numerical geometry and look-ahead are proxies. Memory reduction can lose text details; exploration has inference cost. |
| LSPO | Pages 3–9: text plus a continuous auxiliary coordinate, learned energy, local transition costs, selected-endpoint internalization and limitations. | The about-28% latency reduction is the reported Qwen3.5-27B comparison with reflection at nearly matched aggregate accuracy. Training cost and dependence on energy/validity alignment remain explicit. |

The story keeps the three methods distinct: GoGI-Skip learns from compressed
examples, TGR allocates inference-time search without weight updates, and LSPO
learns revision behavior and direct generation during training.

## How does a good answer become a lasting lesson?

Core ideas: clarify a problem, support reasoning with retrieved material, retain
checked improvements across learning rounds.

| Work | Evidence checked | Editorial boundary |
| --- | --- | --- |
| Twin Prompt | Pages 116–120, especially Figure 2 on collection page 117: one interaction contains problem reformulation, an initial solution and answer refinement. | The six-meal/two-pilot example is the paper's qualitative illustration. Its correct probability is one in five; broader claims rest on benchmark comparisons, not that example alone. A cognitive analogy is not evidence of identical human and model processes. |
| Climate-change dialogue system | Existing project record: domain-trained C²Embedding and C²Reranker supply material to a Twin Prompt-based answer process. | No new performance or retrieval-guarantee claim is added. The narrative distinguishes retrieval, interpretation and inference. |
| POLIS | Pages 92–96: heterogeneous models, strict peer verification, quality selection, cultural memory, parameter updates, adaptive difficulty and an external anchor. Table 2 on page 95 reports average accuracy 54.8% for the full method and 37.8% without the epistemic filter. | Those figures describe that component comparison. Shared errors, controlled task scope and the absence of an indefinite-improvement claim remain explicit. The story does not equate a small model group with a larger model at matched computation. |

## Why can a convincing answer still be wrong?

Core ideas: clear knowledge-oriented instructions, a check separated from the
initial draft, confidence-related signals with limits.

| Paper | Evidence checked | Editorial boundary |
| --- | --- | --- |
| Heuristic CoT / SPIRE | Pages 122–126: knowledge-oriented cue, explicit instruction format, one-epoch instruction tuning, passage question answering and translation, including the 41.7M-parameter BERT example. | Gains are attributed to instruction design plus tuning. Span extraction by a small BERT model is distinguished from unrestricted chatbot reasoning. |
| FactPrompt | Pages 100–104: draft generation, factual claims prompted by the original query alone, comparison and revision; evaluation across ten datasets. | Separately prompted claims still use internal knowledge. Missing claims are not proof of falsity; the biography's invented award is a hypothetical illustration. |
| R&T | Pages 100–102: nonlinear surprisal-based effort with a length term, motivated by uniform information density and evaluated against established quality measures. | Predictability and factual truth can come apart. The story does not present the score as a truth certificate or claim that it verifies an individual biography detail. |

## Publishing checks

- The three existing slugs, publication grouping and `latestConferenceDate`
  sorting metadata are preserved.
- The card introductions set up a question without abbreviations or a list of
  paper titles; they display in full on research cards.
- Each body uses three second-level sections and links to its underlying papers.
- Reading time is rounded up from English body word counts at 220 words per minute.
- Personal essays, Projects, publication data and source research files are
  outside this editorial change.
