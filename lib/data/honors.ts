export type Honor = {
	id: string;
	year: string;
	title: string;
	organization: string;
};

// Academic honors and conference funding, newest year first.
export const honors: readonly Honor[] = [
	{
		id: "neurips-2026-financial-assistance",
		year: "2026",
		title: "Financial Assistance",
		organization: "NeurIPS 2026",
	},
	{
		id: "ijcai-2026-travel-grant",
		year: "2026",
		title: "Travel Grant",
		organization: "IJCAI-ECAI 2026",
	},
	{
		id: "smc-2025-travel-grant",
		year: "2025",
		title: "Student and Young Professional Travel Grant",
		organization: "IEEE SMC 2025",
	},
	{
		id: "outstanding-masters-thesis",
		year: "2025",
		title: "Outstanding Master's Thesis Award",
		organization: "Hangzhou Normal University",
	},
	{
		id: "ijcnn-2024-travel-grant",
		year: "2024",
		title: "IEEE CIS Travel Grant",
		organization: "IEEE WCCI / IJCNN 2024",
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
		title: "2nd-class Scholarship for Postgraduate Studies",
		organization: "Hangzhou Normal University",
	},
	{
		id: "postgraduate-scholarship-2023",
		year: "2023",
		title: "3rd-class Scholarship for Postgraduate Studies",
		organization: "Hangzhou Normal University",
	},
	{
		id: "postgraduate-scholarship-2022",
		year: "2022",
		title: "1st-class Scholarship for Postgraduate Studies",
		organization: "Hangzhou Normal University",
	},
];
