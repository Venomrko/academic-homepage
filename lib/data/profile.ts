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
