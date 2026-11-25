export const cvData = {
	updated: "November 2026",
	objective:
		"Seeking a Ph.D. environment that nurtures independent exploration, rigorous feedback, sustained intellectual exchange, and open-ended inquiry.",
	researchInterests:
		"Large Language Model Reasoning, Reinforcement Learning, Test-Time Inference, Autonomous Agents, Cognitive Modeling, Interpretability and Alignment",
	education: [
		{
			period: "Sep 2022 – Jan 2025",
			degree: "M.Eng. in Software Engineering, with a focus on Natural Language Processing",
			institution: "Hangzhou Normal University",
			location: "Hangzhou, China",
			score: "Average score: 86.64/100",
			coursework:
				"Key coursework: Deep Learning, Advanced Computer Graphics, Advanced Data Structures and Algorithms, Computer Networks, Database Systems",
		},
		{
			period: "Sep 2016 – Jul 2020",
			degree: "B.Eng. in Mechatronic Engineering, spanning Control & Mechanical Systems",
			institution: "Shaoxing University",
			location: "Shaoxing, China",
			score: "Average score: 72.75/100. After shifting to AI, academic engagement was strengthened.",
			coursework:
				"Relevant coursework: Calculus, Linear Algebra, Probability and Statistics, Programming in C, Microcomputer Project Laboratory, Feedback Control",
		},
	],
	researchExperience: [
		{
			period: "Jan 2025 – Present",
			title: "Efficient Inference and Geometric Reasoning",
			role: "Research Assistant, Hangzhou Normal University",
			location: "Fuzhou, China (Remote)",
			bullets: [
				"Developed LSPO (NeurIPS 2026), a lifted-state policy optimization framework that assigns credit to local self-correction transitions and internalizes revision without an inference-time loop, improving direct pass@1 on Qwen3.5-27B from 65.9% to 71.8% across six benchmarks, within 0.1 points of two-pass reflection at lower latency.",
				"Initiated and led TGR (ICML 2026), a manifold-informed latent foresight search framework for long-context reasoning, improving pass@k AUC by up to 13 percentage points with only 1.1–1.3× overhead.",
				"Designed and implemented Adaptive GoGI-Skip (IJCAI 2026 Oral) to reduce redundant chain-of-thought steps, cutting CoT token volume by >45% and accelerating inference up to 2.0× while keeping accuracy close to the baseline.",
			],
		},
		{
			period: "Sep 2023 – Jan 2025",
			title: "Self-Correction and Cognitive Scaling in LLM Reasoning",
			role: "Hangzhou Normal University · Zhejiang Wuxin Technology Co., Ltd.",
			location: "Hangzhou, China",
			bullets: [
				"Led the master's thesis project on an LLM-powered climate-change dialogue system, training C²Embedding and C²Reranker from pretrained base models and developing the system with domain RAG and Twin Prompt.",
				"Proposed Twin Prompt (IEEE SMC 2025 Oral), a cognitively inspired prompting method that paraphrases both queries and answers. In the thesis evaluation across nine LLMs, Twin Prompt improved response matching by 19.4% over zero-shot CoT.",
				"Conducted independent research on FactPrompt (ICONIP 2025), a factored internal verification method for LLM factuality, improving factual accuracy by 4.3 percentage points on average and up to 8.37 points across 10 datasets.",
				"Built POLIS (CogSci 2026), a multi-agent learning system that adapts task difficulty and stores peer-verified solutions in shared memory for periodic LoRA updates. Models with 1–4B parameters gained 8.8–18.9 percentage points over their baselines.",
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
				"Participated in applied blockchain and digital solution projects, contributing to requirements analysis, system testing, and technical documentation. Supported digital solution development for enterprise-facing scenarios, helping align stakeholder requirements with software implementations.",
		},
	],
	skills: [
		{
			category: "Languages",
			content:
				"Mandarin (native), English (IELTS Academic 7.0 overall; professional working proficiency)",
		},
		{
			category: "Programming Languages",
			content: "Python, C/C++, Rust",
		},
		{
			category: "Engineering",
			content:
				"PyTorch, CUDA, Transformers, LlamaIndex, prompt engineering, SFT, RL training, multi-GPU/node deployment, agent workflows",
		},
		{
			category: "Systems and Tools",
			content: "Linux, Docker, Bash, Git, LaTeX",
		},
	],
};
