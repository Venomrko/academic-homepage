export type Publication = {
	id: string;
	title: string;
	authors: string;
	correspondingAuthors?: readonly string[];
	year: number;
	venue: string;
	venueShort?: string;
	distinctions?: { label: string; kind?: "oral" | "award" | "highlight" }[];
	abstract?: string;
	bibtex?: string;
	links?: Partial<Record<"arxiv" | "pdf" | "code" | "website", string>>;
	image?: { src: string; alt: string; width: number; height: number };
};

// Conference years, order, and Oral distinctions follow the shared CV.
// Full author names, abstracts, and figures are checked against the paper originals.
// NeurIPS/ICML proceedings are not yet public; their citations use the available arXiv records.
export const publications: Publication[] = [
	{
		id: "lspo",
		title: "Lifted State Policy Optimization: Internalizing Self-Correction through Transition Geometry",
		authors: "Ren Zhuang, Ben Wang, Shuifa Sun",
		correspondingAuthors: ["Ben Wang", "Shuifa Sun"],
		year: 2026,
		venue: "The 40th Annual Conference on Neural Information Processing Systems",
		venueShort: "NeurIPS",
		links: {
			arxiv: "https://arxiv.org/abs/2610.20350",
			pdf: "https://arxiv.org/pdf/2610.20350",
			code: "https://github.com/Venomrko/lspo",
		},
		image: {
			src: "/images/publications/lspo-preview.webp",
			alt: "LSPO Figure 1 comparing benchmark performance and showing rollout-to-direct alignment and energy versus correctness.",
			width: 1001,
			height: 434,
		},
		abstract:
			"Preference optimization ranks final answers and trajectory RL maximizes aggregate returns, yet neither credits the local change that turns a flawed reasoning state into a better one. We introduce Lifted State Policy Optimization (LSPO), which establishes this finite, cost-adjusted transition as the primary unit of learning. Each textual answer is augmented with a learned continuous coordinate, forming a lifted state that an energy function evaluates and orders. A shaped reward drives energy descent net of edit and step costs, and an internalization loss absorbs selected low-energy answers into the direct generator. On Qwen3.5-27B, the resulting single-pass policy reaches 71.8% aggregate accuracy across mathematics, science, code, and logic benchmarks, matching test-time reflection at 71.9% with 28% lower latency and 25.8% fewer tokens. The pattern holds across dense and mixture-of-experts backbones, and matched controls confirm that transition credit and the lifted coordinate each contribute, as does answer internalization. Our code is available at https://github.com/Venomrko/lspo.",
		bibtex: `@misc{zhuang2026lspo,
  title = {Lifted State Policy Optimization: Internalizing Self-Correction through Transition Geometry},
  author = {Zhuang, Ren and Wang, Ben and Sun, Shuifa},
  year = {2026},
  eprint = {2610.20350},
  archivePrefix = {arXiv},
  note = {Accepted at NeurIPS 2026},
  url = {https://arxiv.org/abs/2610.20350}
}`,
	},
	{
		id: "geometric-reasoner",
		title: "The Geometric Reasoner: Manifold-Informed Latent Foresight Search for Long-Context Reasoning",
		authors: "Ren Zhuang, Ben Wang, Shuifa Sun",
		correspondingAuthors: ["Ben Wang", "Shuifa Sun"],
		year: 2026,
		venue: "The 43rd International Conference on Machine Learning",
		venueShort: "ICML",
		links: {
			arxiv: "https://arxiv.org/abs/2601.18832",
			pdf: "https://arxiv.org/pdf/2601.18832",
		},
		image: {
			src: "/images/publications/geometric-reasoner-preview.webp",
			alt: "The Geometric Reasoner Figure 2(c), showing the proposed manifold-informed latent foresight search.",
			width: 1001,
			height: 629,
		},
		abstract:
			"Scaling test-time compute enhances long chain-of-thought (CoT) reasoning, yet existing approaches face a fundamental trade-off between computational cost and coverage quality: either incurring high training expense or yielding redundant trajectories. We introduce The Geometric Reasoner (TGR), a training-free framework that performs manifold-informed latent foresight search under strict memory bounds. At each chunk boundary, TGR scores candidate latent anchors via a lightweight look-ahead estimate combined with soft geometric regularizers that encourage smooth trajectories and diverse exploration. Chunk-wise KV cache resets keep memory linear in chunk length. On challenging math and code benchmarks, TGR improves robust trajectory coverage, measured by the area under the Pass@k curve (AUC), by up to 13 points on Qwen3-8B, with negligible overhead of about 1.1–1.3 times.",
		bibtex: `@misc{zhuang2026geometric,
  title = {The Geometric Reasoner: Manifold-Informed Latent Foresight Search for Long-Context Reasoning},
  author = {Zhuang, Ren and Wang, Ben and Sun, Shuifa},
  year = {2026},
  eprint = {2601.18832},
  archivePrefix = {arXiv},
  note = {Accepted at ICML 2026},
  url = {https://arxiv.org/abs/2601.18832}
}`,
	},
	{
		id: "gogi-skip",
		title: "Adaptive GoGI-Skip: Coupling Goal-Gradient Importance with Dynamic Uncertainty for Efficient Reasoning",
		authors: "Ren Zhuang",
		correspondingAuthors: ["Ren Zhuang"],
		year: 2026,
		venue: "The 35th International Joint Conference on Artificial Intelligence",
		venueShort: "IJCAI",
		distinctions: [{ label: "Oral", kind: "oral" }],
		links: {
			arxiv: "https://arxiv.org/abs/2505.08392",
			pdf: "https://arxiv.org/pdf/2505.08392",
			website: "https://doi.org/10.24963/ijcai.2026/457",
		},
		image: {
			src: "/images/publications/gogi-skip-preview.webp",
			alt: "Adaptive GoGI-Skip Figure 2(a), showing the goal-gradient importance calculation.",
			width: 1001,
			height: 659,
		},
		abstract:
			"Chain-of-Thought (CoT) prompting trades inference speed for reasoning accuracy. Existing compressors force a compromise as static gradient techniques treat tokens independently, severing sequential logic, while uncertainty-based pruning ignores the final answer. We introduce Adaptive GoGI-Skip, a framework that resolves this tension by non-linearly coupling Goal-Gradient Importance (GoGI) with Adaptive Dynamic Skipping (ADS). GoGI quantifies each token's functional contribution to answer correctness via gradient sensitivity. ADS leverages runtime entropy to dynamically modulate the GoGI threshold, preserving low-gradient tokens essential for structural coherence at high-uncertainty junctions. Trained on 7,472 MATH traces, our policy transfers zero-shot to AIME, GPQA, and GSM8K, reducing token volume by >45% and accelerating inference up to 2.0× without accuracy loss. These results suggest that thinking-optimal compression demands synergy between teleological goals and epistemic uncertainty.",
		bibtex: `@inproceedings{zhuang2026gogiskip,
  title = {Adaptive GoGI-Skip: Coupling Goal-Gradient Importance with Dynamic Uncertainty for Efficient Reasoning},
  author = {Zhuang, Ren},
  booktitle = {Proceedings of the Thirty-Fifth International Joint Conference on Artificial Intelligence},
  year = {2026},
  pages = {4106--4114},
  doi = {10.24963/ijcai.2026/457},
  url = {https://doi.org/10.24963/ijcai.2026/457}
}`,
	},
	{
		id: "ratchet-effect",
		title: "The Ratchet Effect in Silico: How Interaction Drives Cumulative Intelligence in Large Language Models",
		authors: "Ren Zhuang",
		correspondingAuthors: ["Ren Zhuang"],
		year: 2026,
		venue: "The 48th Annual Meeting of the Cognitive Science Society",
		venueShort: "CogSci",
		links: {
			arxiv: "https://arxiv.org/abs/2507.21166",
			pdf: "https://arxiv.org/pdf/2507.21166",
			website: "https://escholarship.org/uc/item/57b407jm",
		},
		image: {
			src: "/images/publications/ratchet-effect.webp",
			alt: "POLIS Figure 1 showing cumulative gains across evolutionary steps in interacting language model populations.",
			width: 1001,
			height: 615,
		},
		abstract:
			"Human intelligence scales through cumulative cultural evolution (CCE), a ratchet process in which innovations are retained against entropic drift. Large language model training, by contrast, still depends primarily on static corpora and parameter growth, leaving little room for endogenous accumulation through interaction. We present POLIS (Population Orchestrated Learning and Inference Society), a framework in which heterogeneous agents generate solutions, verify one another's outputs, retain validated artifacts in shared cultural memory, and internalize them through parameter updates. On mathematical reasoning benchmarks, populations of 1–4B-parameter models achieved average gains of 8.8–18.9 points over base models and narrowed the gap to 70B+ monoliths. Mechanistic ablations identify peer verification as the main ratchet operator and show that internalization sustains accumulation across rounds, providing computational evidence that epistemic vigilance organizes durable knowledge growth. These results position structured social interaction as a scaling lever orthogonal to parameter count.",
		bibtex: `@inproceedings{zhuang2026ratchet,
  title = {The Ratchet Effect in Silico: How Interaction Drives Cumulative Intelligence in Large Language Models},
  author = {Zhuang, Ren},
  booktitle = {Proceedings of the 48th Annual Meeting of the Cognitive Science Society},
  year = {2026},
  url = {https://escholarship.org/uc/item/57b407jm}
}`,
	},
	{
		id: "factprompt",
		title: "Factored Internal Verification Enhances Large Language Model Factuality",
		authors: "Ren Zhuang, Ben Wang, Shuifa Sun, Ke Lu",
		correspondingAuthors: ["Ben Wang"],
		year: 2025,
		venue: "The 32nd International Conference on Neural Information Processing",
		venueShort: "ICONIP",
		links: {
			website: "https://doi.org/10.1007/978-981-95-4088-4_18",
		},
		image: {
			src: "/images/publications/factprompt.webp",
			alt: "FactPrompt Figure 2 separating initial response generation, independent fact generation, and refinement.",
			width: 1001,
			height: 497,
		},
		abstract:
			"Large Language Model (LLM) factual hallucination critically limits their reliability. To address this, we introduce FactPrompt, a framework inspired by cognitive refinement processes, integrating guided Chain-of-Thought (CoT) with a novel factored self-correction mechanism. FactPrompt first generates an initial response. Crucially, it then deliberately decouples verification: it independently generates internal factual claims relevant to the query using a distinct prompt, separate from the initial reasoning path. This structural separation allows the LLM to evaluate the initial response against these independently sourced claims, minimizing bias propagation from potentially flawed initial reasoning—a key distinction from standard CoT or simpler self-critique loops. Concurrently, we propose and validate R&T, an information-theoretic metric quantifying deviations from uniform information density (UID) that signal potential unreliability. R&T strongly correlates with established accuracy metrics, supporting its use for automated, ground-truth-free reliability assessment. Extensive evaluation across ten datasets shows FactPrompt yields substantial accuracy improvements over strong baselines (average 4.3%, up to 8.37%), notably in long-form generation and open-ended QA. FactPrompt demonstrates that structured, decoupled internal verification is a promising route towards more reliable and trustworthy LLMs.",
		bibtex: `@incollection{zhuang2025factprompt,
  title = {Factored Internal Verification Enhances Large Language Model Factuality},
  author = {Zhuang, Ren and Wang, Ben and Sun, Shuifa and Lu, Ke},
  booktitle = {Neural Information Processing},
  publisher = {Springer Nature Singapore},
  year = {2025},
  pages = {258--272},
  doi = {10.1007/978-981-95-4088-4_18},
  url = {https://doi.org/10.1007/978-981-95-4088-4_18}
}`,
	},
	{
		id: "twin-prompt",
		title: "Twin Prompt: An End-to-End Framework Inspired by Human Cognition for Navigating Language Model Reasoning",
		authors: "Ren Zhuang, Ben Wang, Shuifa Sun",
		correspondingAuthors: ["Ben Wang"],
		year: 2025,
		venue: "IEEE International Conference on Systems, Man, and Cybernetics",
		venueShort: "SMC",
		distinctions: [{ label: "Oral", kind: "oral" }],
		links: {
			website: "https://doi.org/10.1109/SMC58881.2025.11343657",
		},
		image: {
			src: "/images/publications/twin-prompt-preview.webp",
			alt: "Twin Prompt's panel from Figure 1, illustrating problem reformulation and answer refinement.",
			width: 1001,
			height: 507,
		},
		abstract:
			"Large language models (LLMs) provide essential capabilities for smart systems, yet navigating complex reasoning frontiers reliably remains challenging, hindering deployment in dynamic environments. Existing prompting methods often lack robustness or demand costly multi-step interaction. We introduce Twin Prompt, a novel automated framework inspired by human cognition, operationalizing structured problem reformulation and answer refinement within a single, end-to-end interaction requiring no manual examples. This cognitively grounded structure guides the LLM's internal reasoning, enhancing analysis and leveraging latent self-correction capabilities to improve accuracy and reliability. Evaluations on challenging mathematical and general reasoning benchmarks (GSM8K, MATH, MMLU, BBH) demonstrate Twin Prompt significantly boosts performance over standard baselines across diverse LLMs. These findings highlight the potential of structured, single-pass prompting to advance LLM reasoning, enabling more capable and dependable AI components for navigating a dynamic world.",
		bibtex: `@inproceedings{zhuang2025twinprompt,
  title = {Twin Prompt: An End-to-End Framework Inspired by Human Cognition for Navigating Language Model Reasoning},
  author = {Zhuang, Ren and Wang, Ben and Sun, Shuifa},
  booktitle = {2025 IEEE International Conference on Systems, Man, and Cybernetics (SMC)},
  publisher = {IEEE},
  year = {2025},
  pages = {4892--4899},
  doi = {10.1109/SMC58881.2025.11343657},
  url = {https://doi.org/10.1109/SMC58881.2025.11343657}
}`,
	},
	{
		id: "heuristic-cot",
		title: "Unlocking Chain of Thought in Base Language Models by Heuristic Instruction",
		authors: "Ren Zhuang, Ben Wang, Shuifa Sun, Yanlong Wang, Zhipeng Ding, Wenbo Liu",
		correspondingAuthors: ["Ben Wang", "Shuifa Sun"],
		year: 2024,
		venue: "The International Joint Conference on Neural Networks",
		venueShort: "IJCNN",
		links: {
			website: "https://doi.org/10.1109/IJCNN60899.2024.10650937",
		},
		image: {
			src: "/images/publications/heuristic-cot.webp",
			alt: "Heuristic CoT Figure 1 comparing input-output instructions, chain-of-thought instructions, and knowledge-guided reasoning.",
			width: 1001,
			height: 683,
		},
		abstract:
			"Chain of thought (CoT) prompting drives complex reasoning in large language models (LLMs), but remains scarcely explored for smaller Base Language Models (BLMs). We pioneer the Heuristic Chain of Thought (HCoT) approach for BLMs simply via “Let's use knowledge” prompts. Further, we bridge the lack of guidance in HCoT by innovating SPIRE, a template providing specificity, purpose, information, role & capacity and expression to efficiently apply knowledge. Experiments show that combining HCoT with the SPIRE format significantly improves BLMs performance on question answering and translation tasks after minimal tuning. For example, on SQuADv1.1, our method increases the character F1 by 4.12% over zero-shot CoT using a 41.7M parameter BERT model.",
		bibtex: `@inproceedings{zhuang2024heuristic,
  title = {Unlocking Chain of Thought in Base Language Models by Heuristic Instruction},
  author = {Zhuang, Ren and Wang, Ben and Sun, Shuifa and Wang, Yanlong and Ding, Zhipeng and Liu, Wenbo},
  booktitle = {2024 International Joint Conference on Neural Networks (IJCNN)},
  publisher = {IEEE},
  year = {2024},
  pages = {1--7},
  doi = {10.1109/IJCNN60899.2024.10650937},
  url = {https://doi.org/10.1109/IJCNN60899.2024.10650937}
}`,
	},
];
