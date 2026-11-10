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
