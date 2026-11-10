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
