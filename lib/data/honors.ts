export type Honor = {
	id: string;
	year: string;
	title: string;
	organization: string;
};

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
