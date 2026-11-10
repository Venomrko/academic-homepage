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
