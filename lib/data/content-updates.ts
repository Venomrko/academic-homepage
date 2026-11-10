// Dates refer to substantive content edits, not builds or conference dates.
// The initial dates match the content-alignment commit on 2026-11-10.
// Update the relevant entry when its page content changes.
export const contentUpdates = {
  about: '2026-11-10',
  news: '2026-11-10',
  honors: '2026-11-10',
  publications: '2026-11-10',
  services: '2026-11-10',
  projects: '2026-11-10',
  cv: '2026-11-10',
} as const;

/** All inputs are ISO dates; comparing them never depends on the build clock. */
export function latestContentDate(...dates: string[]) {
  return dates.reduce((latest, date) => date > latest ? date : latest);
}
