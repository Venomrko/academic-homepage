// About, publications, and projects follow the current CV and supporting materials.
// Original blog examples remain unpublished; new essays follow the author's records.
export const profile = {
	name: "Ren Zhuang",
	initials: "RZ",
	role: "Research Assistant",
	institution: "Hangzhou Normal University",
	location: "Fuzhou, China (remote)",
	email: "venomrko97@gmail.com",
	github: "https://github.com/Venomrko",
	googleScholar: "https://scholar.google.com/citations?user=qKvPO-QAAAAJ",
	orcid: "https://orcid.org/0000-0002-4050-3687",
	dblp: "https://dblp.org/pid/385/4470.html",
	cvUrl: "https://img.solitudinis.cc/CV.pdf",
	introduction:
		"I am a research assistant at Hangzhou Normal University, working with Prof. Ben Wang and Prof. Shuifa Sun. My research focuses on reasoning in large language models, especially self-correction, efficient inference, and intelligence that develops through interaction. I received my M.Eng. in Software Engineering from Hangzhou Normal University and my B.Eng. in Mechatronic Engineering from Shaoxing University.",
	phdStatement:
		"Seeking a Ph.D. position (Fall 2027) in an environment that nurtures independent exploration, rigorous feedback, sustained intellectual exchange, and open-ended inquiry.",
	about:
		"I study how language models reason, correct their own mistakes, and build knowledge through interaction.",
	biography:
		"My background spans mechatronic engineering, software engineering, and natural language processing. My research connects structured prompting and verification with efficient inference, geometric search, and reinforcement learning.",
	currentFocus:
		"Reliable and efficient language model reasoning, transition-level self-correction, and cumulative intelligence in multi-agent systems.",
};

export const researchAreas = [
	{
		number: "01",
		title: "Reasoning & self-correction",
		description:
			"Helping language models verify and revise their answers, from structured prompting to reinforcement learning that credits useful self-correction.",
	},
	{
		number: "02",
		title: "Efficient inference",
		description:
			"Using test-time computation where it matters: reducing redundant reasoning steps and exploring diverse solutions through geometry-aware latent search.",
	},
	{
		number: "03",
		title: "Multi-agent intelligence",
		description:
			"Studying how interaction, peer verification, and shared memory help populations of language models accumulate knowledge and improve together.",
	},
	{
		number: "04",
		title: "Cognition & interpretability",
		description:
			"Drawing on cognitive models to understand reasoning and knowledge use, with an interest in interpretable, reliable, and aligned intelligent systems.",
	},
] as const;

export type NewsUpdate = {
	// Use only the known precision: YYYY, YYYY-MM, or YYYY-MM-DD.
	date: string;
	type: string;
	text: string;
	url?: string;
};

// Conference notices use "Accepted"; "Published" marks a journal publication
// or a preprint-first release such as an arXiv version.
export const news: readonly NewsUpdate[] = [
	{
		date: "2026-09-24",
		type: "Accepted",
		text: "LSPO has been accepted to NeurIPS 2026.",
		url: "https://arxiv.org/abs/2610.20350",
	},
	{
		date: "2026-10-14",
		type: "Published",
		text: "LSPO is now available as an arXiv preprint.",
		url: "https://arxiv.org/abs/2610.20350",
	},
	{
		date: "2026-04-30",
		type: "Accepted",
		text: "TGR has been accepted to ICML 2026.",
		url: "https://arxiv.org/abs/2601.18832",
	},
	{
		date: "2026-01-25",
		type: "Published",
		text: "The Geometric Reasoner is now available as an arXiv preprint.",
		url: "https://arxiv.org/abs/2601.18832",
	},
	{
		date: "2026-04-29",
		type: "Accepted",
		text: "Adaptive GoGI-Skip has been accepted to IJCAI 2026 as an Oral paper.",
		url: "https://doi.org/10.24963/ijcai.2026/457",
	},
	{
		date: "2025-05-13",
		type: "Published",
		text: "Adaptive GoGI-Skip is now available as an arXiv preprint.",
		url: "https://arxiv.org/abs/2505.08392",
	},
	{
		date: "2025-07-25",
		type: "Accepted",
		text: "FactPrompt has been accepted to ICONIP 2025.",
		url: "https://doi.org/10.1007/978-981-95-4088-4_18",
	},
	{
		date: "2025-07-25",
		type: "Published",
		text: "POLIS is now available as an arXiv preprint.",
		url: "https://arxiv.org/abs/2507.21166",
	},
	{
		date: "2025-07-18",
		type: "Accepted",
		text: "Twin Prompt has been accepted to IEEE SMC 2025 as an Oral paper.",
		url: "https://doi.org/10.1109/smc58881.2025.11343657",
	},
	{
		date: "2025-01",
		type: "Education",
		text: "Completed my M.Eng. in Software Engineering at Hangzhou Normal University.",
	},
	{
		date: "2024-03-15",
		type: "Accepted",
		text: "My first paper on heuristic chain-of-thought was accepted to IJCNN 2024.",
		url: "https://doi.org/10.1109/IJCNN60899.2024.10650937",
	},
];

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

export type Honor = {
	id: string;
	year: string;
	title: string;
	organization: string;
};

export type ServiceTravelEntry = {
	id: string;
	kind: "reviewer" | "travel";
	year: string;
	title: string;
	showYearInTitle?: boolean;
	description?: string;
	location?: string;
	reviewAccepted?: { date: string; label: string };
	period?: { start: string; end: string; label: string };
	upcoming?: boolean;
};

// Conference service and attendance confirmed by the author; reviewer dates
// and the removal of ICML reviewing were corrected on 2026-11-10.
// Journal review years follow the supplied public ORCID activity screenshot;
// the author supplied their reviewer acceptance dates on 2026-11-10.
export const servicesAndTravel: readonly ServiceTravelEntry[] = [
	{
		id: "neurips-review-2026",
		kind: "reviewer",
		year: "2026",
		title: "NeurIPS",
		reviewAccepted: { date: "2026-05-29", label: "May 29, 2026" },
	},
	{
		id: "eswa-review-2026",
		kind: "reviewer",
		year: "2026",
		title: "Expert Systems with Applications",
		showYearInTitle: false,
		reviewAccepted: { date: "2026-07-01", label: "Jul 1, 2026" },
	},
	{
		id: "smc-review-2025",
		kind: "reviewer",
		year: "2025",
		title: "SMC",
		reviewAccepted: { date: "2025-05-16", label: "May 16, 2025" },
	},
	{
		id: "kbs-review-2025",
		kind: "reviewer",
		year: "2025",
		title: "Knowledge-Based Systems",
		showYearInTitle: false,
		reviewAccepted: { date: "2025-07-23", label: "Jul 23, 2025" },
	},
	{
		id: "neurips-travel-2026",
		kind: "travel",
		year: "2026",
		title: "NeurIPS",
		location: "Sydney, Australia",
		period: { start: "2026-12-06", end: "2026-12-12", label: "Dec 6–12, 2026" },
		upcoming: true,
	},
	{
		id: "ijcai-travel-2026",
		kind: "travel",
		year: "2026",
		title: "IJCAI",
		location: "Bremen, Germany",
		period: { start: "2026-08-15", end: "2026-08-21", label: "Aug 15–21, 2026" },
	},
	{
		id: "icml-travel-2026",
		kind: "travel",
		year: "2026",
		title: "ICML",
		location: "Seoul, South Korea",
		period: { start: "2026-07-06", end: "2026-07-11", label: "Jul 6–11, 2026" },
	},
	{
		id: "iconip-travel-2025",
		kind: "travel",
		year: "2025",
		title: "ICONIP",
		location: "Okinawa, Japan",
		period: { start: "2025-11-20", end: "2025-11-24", label: "Nov 20–24, 2025" },
	},
	{
		id: "smc-travel-2025",
		kind: "travel",
		year: "2025",
		title: "SMC",
		location: "Vienna, Austria",
		period: { start: "2025-10-05", end: "2025-10-08", label: "Oct 5–8, 2025" },
	},
	{
		id: "ijcnn-travel-2024",
		kind: "travel",
		year: "2024",
		title: "IJCNN",
		location: "Yokohama, Japan",
		period: { start: "2024-06-30", end: "2024-07-05", label: "Jun 30 – Jul 5, 2024" },
	},
];

// Honors listed in the current CV, newest year first.
export const honors: readonly Honor[] = [
	{
		id: "outstanding-masters-thesis",
		year: "2025",
		title: "Outstanding Master's Thesis Award",
		organization: "Hangzhou Normal University",
	},
	{
		id: "outstanding-professional-practice",
		year: "2024",
		title: "Outstanding Graduate Student in Professional Practice",
		organization: "Hangzhou Normal University",
	},
	{
		id: "postgraduate-scholarship-2024",
		year: "2024",
		title: "Second-class Postgraduate Scholarship",
		organization: "Hangzhou Normal University",
	},
	{
		id: "postgraduate-scholarship-2023",
		year: "2023",
		title: "Third-class Postgraduate Scholarship",
		organization: "Hangzhou Normal University",
	},
	{
		id: "postgraduate-scholarship-2022",
		year: "2022",
		title: "First-class Postgraduate Scholarship",
		organization: "Hangzhou Normal University",
	},
];

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

export type ProjectIllustration = {
	src: string;
	width: number;
	height: number;
	video?: string;
};

type ProjectTextItem = {
	title: string;
	description: string;
	illustration?: ProjectIllustration;
};

export type ProjectFigure = {
	src: string;
	width: number;
	height: number;
	alt: string;
	caption: string;
};

type ProjectSection = {
	id: string;
	title: string;
	paragraphs?: readonly string[];
	items?: readonly ProjectTextItem[];
	figures?: readonly ProjectFigure[];
};

export type Project = {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	overview: string;
	years: string;
	period: string;
	periodLabel?: string;
	role: string;
	institution: string;
	location: string;
	tags: readonly string[];
	visual: "climate" | "twin" | "ledger";
	contributions: readonly ProjectTextItem[];
	sections?: readonly ProjectSection[];
	evaluation?: {
		introduction: string;
		results: readonly {
			model: string;
			parameters: string;
			comparison: string;
			metrics: readonly { label: string; value: string }[];
		}[];
		figures?: readonly ProjectFigure[];
		findings: readonly (ProjectTextItem & { figure?: ProjectFigure })[];
		note: string;
	};
	thesis?: { title: string; reference: string };
	recognitionIds?: readonly string[];
	relatedPublications?: readonly string[];
};

export const projects: readonly Project[] = [
	{
		slug: "climate-change-dialogue-system",
		title: "Climate change dialogue system",
		subtitle: "Domain retrieval and self-corrective reasoning.",
		description:
			"A domain dialogue system combining C²Embedding, C²Reranker, and Twin Prompt for climate change and carbon neutrality.",
		overview:
			"My master's thesis explored how a dialogue system could make knowledge about climate change, carbon peaking, and carbon neutrality easier to access. Questions in this domain connect scientific evidence with energy, economics, and changing policy. A useful response therefore needs relevant, current sources as well as reasoning that makes those sources understandable. I combined domain-adapted retrieval, reranking, and Twin Prompt in a user-facing system that returns answers with supporting references.",
		years: "2023–2025",
		period: "Sep 2023 – Jan 2025",
		periodLabel: "Research period",
		role: "Master's thesis project lead",
		institution: "Hangzhou Normal University · Zhejiang Wuxin Technology Co., Ltd.",
		location: "Hangzhou, China",
		tags: ["Domain RAG", "Language models"],
		visual: "climate",
		contributions: [
			{
				title: "Domain retrieval",
				description:
					"Built the domain data pipeline and trained C²Embedding and C²Reranker from pretrained models. The first retrieves candidate passages efficiently; the second examines query–passage interactions to put the most relevant evidence first.",
			},
			{
				title: "Self-corrective reasoning",
				description:
					"Developed and evaluated Twin Prompt to guide the model through query reformulation, an initial answer, and answer revision with concrete examples. This connects interpreting the question with reviewing the response before presenting it to the user.",
			},
			{
				title: "System integration",
				description:
					"Integrated retrieval and prompting with document ingestion, configurable language-model adapters, online search, source citations, and feedback collection. Evaluated the retrieval components, prompting method, and an end-to-end dialogue example.",
			},
		],
		sections: [
			{
				id: "knowledge-base",
				title: "Building the knowledge base",
				paragraphs: [
					"The retrieval corpus was built from IPCC assessment-report material. Documents were converted to Markdown and split at semantic boundaries so that each passage retained a coherent piece of evidence. GPT-4o mini generated four questions per passage, providing different ways to ask about the same content.",
				],
				items: [
					{
						title: "Retrieval data",
						description:
							"Constructed 4,280 question–context pairs for training and a separate test set of 1,425 pairs drawn from scientific literature, policy documents, and news. For reranking, each positive context was paired with three semantically similar negative contexts.",
					},
					{
						title: "Domain-adapted models",
						description:
							"C²Embedding uses a BERT-based bi-encoder with a joint cosine, in-batch, and angular training objective. C²Reranker uses a cross-encoder trained with mined negative examples and triplet loss to distinguish relevant passages from close alternatives.",
					},
				],
				figures: [
					{
						src: "/images/projects/climate-embedding-architecture.webp",
						width: 1496,
						height: 1256,
						alt: "C²Embedding bi-encoder architecture. Query and context are encoded separately, aggregated into vectors, and compared for semantic similarity.",
						caption: "Figure 4-5 · C²Embedding bi-encoder architecture.",
					},
					{
						src: "/images/projects/climate-reranker-architecture.webp",
						width: 1172,
						height: 1448,
						alt: "C²Reranker cross-encoder architecture. Query and context tokens are encoded jointly before aggregation, dimensionality reduction, and similarity scoring.",
						caption: "Figure 4-7 · C²Reranker cross-encoder architecture.",
					},
				],
			},
			{
				id: "twin-prompt",
				title: "Reasoning with Twin Prompt",
				paragraphs: [
					"Twin Prompt first asks the model to understand and reformulate the question, then reason out an initial response. A second stage revises that response and adds concrete examples before producing the final answer. The two stages connect interpreting the question with reviewing the model's own response.",
					"The thesis evaluated this method across nine language models on 1,240 climate-domain question–answer pairs. Comparisons included zero-shot, zero-shot chain-of-thought, and analogical prompting, with response matching and an unreliability measure among the evaluation criteria.",
				],
				figures: [
					{
						src: "/images/projects/climate-twin-prompt.webp",
						width: 1328,
						height: 752,
						alt: "Twin Prompt two-stage inference. An input passes through query reformulation and an initial response, followed by answer revision to produce the final response.",
						caption: "Figure 3-1 · Twin Prompt inference workflow.",
					},
				],
			},
			{
				id: "system-workflow",
				title: "From a question to a grounded answer",
				paragraphs: [
					"A user question enters a pipeline that combines local domain knowledge with online search. C²Embedding retrieves candidate passages, C²Reranker refines their order, and the highest-ranked evidence becomes context for the language model. Twin Prompt guides question reformulation and answer refinement; the response then includes references that let the user inspect its sources.",
				],
				figures: [{
					src: "/images/projects/climate-dialogue-workflow.webp",
					width: 1684,
					height: 976,
					alt: "Thesis system workflow: local documents and online search feed a passage collection; C²Embedding retrieves candidates, C²Reranker orders the evidence, and a language model uses Twin Prompt to generate a cited response. User feedback is collected separately.",
					caption:
						"Figure 5-1 · Retrieval, reranking, reasoning, and cited responses.",
				}],
			},
			{
				id: "system-capabilities",
				title: "System capabilities",
				items: [
					{
						title: "Flexible data ingestion",
						description:
							"A common loading interface accepts documents, webpages, structured files, database sources, images, and audio. This brings different knowledge sources into the retrieval workflow without requiring a separate user-facing process for each format.",
						illustration: {
							src: "/images/projects/climate-component-ingestion.svg",
							width: 831,
							height: 818,
						},
					},
					{
						title: "Configurable language models",
						description:
							"YAML-based adapters support providers including OpenAI, Google, Anthropic, Hugging Face, and Mistral AI. Model and generation settings can be changed independently of the document-loading and retrieval components.",
						illustration: {
							src: "/images/projects/climate-component-models.svg",
							width: 1920,
							height: 634,
						},
					},
					{
						title: "Online information retrieval",
						description:
							"DuckDuckGo search supplements the local knowledge base with web results for questions that depend on recent information. The retrieved material is incorporated into the context used for answer generation.",
						illustration: {
							src: "/images/projects/climate-component-search-poster.webp",
							width: 640,
							height: 410,
							video: "/images/projects/climate-component-search.mp4",
						},
					},
					{
						title: "Source citations",
						description:
							"Answers cite the passages they draw on, allowing users to inspect the evidence behind a response and trace it back to its original sources.",
						illustration: {
							src: "/images/projects/climate-component-citations.svg",
							width: 1920,
							height: 497,
						},
					},
					{
						title: "Feedback collection",
						description:
							"Users can provide positive or negative ratings and written comments, collecting evidence for reviewing responses and informing later data and system improvements.",
						illustration: {
							src: "/images/projects/climate-component-feedback.webp",
							width: 768,
							height: 304,
						},
					},
				],
			},
		],
		evaluation: {
			introduction:
				"The retrieval results below are reported on the thesis's climate-domain test set of 1,425 question–context pairs. C²Embedding was compared with 13 embedding baselines and C²Reranker with nine reranking baselines.",
			results: [
				{
					model: "C²Embedding",
					parameters: "335M",
					comparison: "13 embedding baselines",
					metrics: [
						{ label: "Hit@5", value: "64.4%" },
						{ label: "MRR@5", value: "49.7%" },
					],
				},
				{
					model: "C²Reranker",
					parameters: "33M",
					comparison: "9 reranking baselines",
					metrics: [
						{ label: "Accuracy@1", value: "71.5%" },
						{ label: "NDCG@10", value: "91.1%" },
					],
				},
			],
			figures: [
				{
					src: "/images/projects/climate-embedding-results.webp",
					width: 1664,
					height: 1208,
					alt: "Embedding-model comparison on the thesis climate-domain test set. Star markers compare Hit@5 and MRR@5; C²Embedding reports 64.4% and 49.7%, respectively.",
					caption: "Figure 4-6 · Embedding performance across the compared models.",
				},
				{
					src: "/images/projects/climate-reranker-results.webp",
					width: 1664,
					height: 1208,
					alt: "Reranking-model comparison on the thesis test set. C²Reranker reports Accuracy@1 of 71.5% and NDCG@10 of 91.1%; circle size represents model parameter count.",
					caption: "Figure 4-8 · Reranking performance across the compared models.",
				},
			],
			findings: [
				{
					title: "Retrieval ablation",
					description:
						"NDCG@10 was 64.6% for BM25, 84.2% for C²Embedding alone, and 91.1% for C²Embedding with C²Reranker. Adding the reranker improved the embedding-only pipeline by 6.9 percentage points.",
					figure: {
						src: "/images/projects/climate-retrieval-ablation.webp",
						width: 1416,
						height: 820,
						alt: "Retrieval ablation showing NDCG@10 of 64.6% for BM25, 75.8% for BM25 with C²Reranker, 84.2% for C²Embedding, and 91.1% for the combined C²Embedding and C²Reranker pipeline.",
						caption: "Figure 4-10 · Contribution of embedding and reranking.",
					},
				},
				{
					title: "End-to-end example",
					description:
						"The thesis compared the system with Climate Answers and Chat Climate on a question about countries reporting early-warning-system status under the Sendai Framework. The integrated system retrieved the relevant information and returned a source-cited answer where the two comparison systems did not.",
					figure: {
						src: "/images/projects/climate-answer-example.webp",
						width: 1668,
						height: 668,
						alt: "Original thesis dialogue screenshot. The system answers a question about Sendai Framework early-warning reporting and includes three source references beneath its response.",
						caption: "Figure 5-9 · An example response with source references.",
					},
				},
			],
			note:
				"These results describe the thesis experiments and their reported datasets. The end-to-end comparison is an illustrative case study, rather than a large-scale user study or deployment evaluation.",
		},
		thesis: {
			title:
				"Large Language Model Powered Dialogue System for Advancing Carbon Peaking and Carbon Neutrality",
			reference:
				"Master's thesis, Hangzhou Normal University, 2024. Methods and results are drawn from Chapters 3–5, including Tables 4-2 and 4-5 and Figure 4-10.",
		},
		recognitionIds: [
			"outstanding-masters-thesis",
			"outstanding-professional-practice",
		],
		relatedPublications: ["twin-prompt"],
	},
	{
		slug: "industrial-digital-twins",
		title: "Digital twin application",
		subtitle: "From industrial requirements to interactive prototypes.",
		description:
			"Digital-twin software prototypes that translated industrial-control requirements into interactive demonstrations.",
		overview:
			"At the China Industrial Cybersecurity Center, I assisted with digital-twin software prototypes for industrial-control scenarios. The work supported translating domain requirements into interactive demonstrations.",
		years: "2024",
		period: "Jul 2024 – Sep 2024",
		role: "Software prototyping contributor",
		institution: "China Industrial Cybersecurity Center (CIC)",
		location: "Wuhan, China",
		tags: ["Digital twins", "Prototyping"],
		visual: "twin",
		contributions: [
			{
				title: "Software prototyping",
				description:
					"Assisted in creating digital-twin software prototypes for industrial-control scenarios.",
			},
			{
				title: "Interactive demonstrations",
				description:
					"Helped translate domain requirements into interactive demonstrations of the intended software behavior.",
			},
		],
	},
	{
		slug: "blockchain-digital-solutions",
		title: "Blockchain & digital solutions",
		subtitle: "Connecting enterprise needs with software implementation.",
		description:
			"Applied blockchain and enterprise software work spanning requirements analysis, system testing, and technical documentation.",
		overview:
			"At the Yangtze Delta Region Institute of Tsinghua University, I participated in applied blockchain and digital solution projects for enterprise-facing scenarios. My work helped align stakeholder requirements with software implementations.",
		years: "2022–2024",
		period: "Sep 2022 – Jan 2024",
		role: "Development contributor",
		institution: "Yangtze Delta Region Institute of Tsinghua University",
		location: "Hangzhou, China",
		tags: ["Requirements", "System testing"],
		visual: "ledger",
		contributions: [
			{
				title: "Requirements analysis",
				description:
					"Contributed to requirements analysis for applied blockchain and digital solution projects.",
			},
			{
				title: "Testing and documentation",
				description:
					"Supported system testing and technical documentation for enterprise-facing software.",
			},
			{
				title: "Stakeholder alignment",
				description:
					"Helped connect stakeholder requirements with software implementations during digital solution development.",
			},
		],
	},
];

export const cvData = {
	updated: "November 2026",
	education: [
		{
			period: "Sep 2022 – Jan 2025",
			degree: "M.Eng. in Software Engineering, focus on Natural Language Processing",
			institution: "Hangzhou Normal University",
			location: "Hangzhou, China",
			score: "Average score: 86.64/100",
			coursework:
				"Deep Learning, Advanced Computer Graphics, Advanced Data Structures and Algorithms, Computer Networks, Database Systems",
		},
		{
			period: "Sep 2016 – Jul 2020",
			degree: "B.Eng. in Mechatronic Engineering (Control & Mechanical Systems)",
			institution: "Shaoxing University",
			location: "Shaoxing, China",
			score: "Average score: 72.75/100",
			coursework:
				"Calculus, Linear Algebra, Probability and Statistics, Programming in C, Feedback Control",
		},
	],
	researchExperience: [
		{
			period: "Jan 2025 – Present",
			title: "Efficient Inference and Geometric Reasoning",
			role: "Research Assistant, Hangzhou Normal University",
			location: "Fuzhou, China (Remote)",
			bullets: [
				"Developed LSPO (NeurIPS 2026), a lifted-state policy optimization framework that assigns credit to local self-correction transitions and internalizes revision without an inference-time loop, improving direct pass@1 on Qwen3.5-27B from 65.9% to 71.8% across six benchmarks, matching test-time reflection at lower latency.",
				"Initiated and led TGR (ICML 2026), a manifold-informed latent foresight search framework for long-context reasoning, improving pass@k AUC by up to 13 points with only 1.1–1.3× overhead.",
				"Designed and implemented Adaptive GoGI-Skip (IJCAI 2026 Oral) to reduce redundant chain-of-thought steps, cutting token volume by >45% and accelerating inference up to 2.0× without accuracy loss.",
			],
		},
		{
			period: "Sep 2023 – Jan 2025",
			title: "Self-Correction and Cognitive Scaling in LLM Reasoning",
			role: "Hangzhou Normal University · Zhejiang Wuxin Technology Co., Ltd.",
			location: "Hangzhou, China",
			bullets: [
				"Led the master's thesis project on an LLM-powered climate-change dialogue system, combining C²Embedding, C²Reranker, and domain RAG. Its domain-specific Twin Prompt evaluation covered 1,240 question–answer pairs and nine LLMs, reporting a 19.4% average improvement in response matching over zero-shot CoT.",
				"Proposed Twin Prompt (IEEE SMC 2025 Oral), a cognitively inspired framework for problem reformulation and answer refinement. The conference paper evaluated four LLMs on GSM8K, MATH, MMLU, and BBH.",
				"Conducted independent research on FactPrompt (ICONIP 2025), a factored internal verification method for LLM factuality, improving factual accuracy by 4.3 percentage points on average and up to 8.37 points across 10 datasets.",
				"Introduced POLIS (CogSci 2026), a multi-agent ratchet framework for cognitive scaling, yielding gains of 8.8–18.9 percentage points for 1–4B parameter model populations.",
			],
		},
		{
			period: "Nov 2022 – May 2023",
			title: "Structured Reasoning in Base Language Models",
			role: "Zhejiang-Cyprus Joint Laboratory of Smart City and Mobile Health",
			location: "Hangzhou, China",
			bullets: [
				"Formulated Heuristic CoT and SPIRE (IJCNN 2024) for structured reasoning in base language models, achieving +4.12% F1 over zero-shot CoT on SQuAD v1.1 and +17.47% F1 for ALBERT-base in ablation.",
			],
		},
	],
	projects: [
		{
			period: "Jul 2024 – Sep 2024",
			title: "Digital Twin Application",
			organization: "China Industrial Cybersecurity Center (CIC)",
			location: "Wuhan, China",
			description:
				"Assisted in creating digital-twin software prototypes for industrial-control scenarios, supporting the translation of domain requirements into interactive demonstrations.",
		},
		{
			period: "Sep 2022 – Jan 2024",
			title: "Blockchain and Digital Solution Development",
			organization: "Yangtze Delta Region Institute of Tsinghua University",
			location: "Hangzhou, China",
			description:
				"Participated in applied blockchain and digital solution projects, contributing to requirements analysis, system testing, and technical documentation for enterprise-facing scenarios.",
		},
	],
	skills: [
		{
			category: "Languages",
			content:
				"Mandarin (Native), English (IELTS Academic 7.0 overall; professional working proficiency)",
		},
		{
			category: "Programming",
			content: "Python, C/C++, Rust",
		},
		{
			category: "Engineering",
			content:
				"PyTorch, CUDA, Transformers, LlamaIndex, prompt engineering, SFT, RL training, multi-GPU/node deployment, agent workflows",
		},
		{
			category: "Systems & Tools",
			content: "Linux, Docker, Bash, Git, LaTeX",
		},
	],
};
