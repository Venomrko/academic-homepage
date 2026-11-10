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
	updated: string;
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
		updated: "2026-11-10",
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
		updated: "2026-11-10",
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
		updated: "2026-11-10",
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
