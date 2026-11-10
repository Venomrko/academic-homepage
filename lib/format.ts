export function formatDate(value: string, month: 'short' | 'long' = 'short') {
  if (/^\d{4}$/.test(value)) return value;

  const monthOnly = /^\d{4}-\d{2}$/.test(value);
  const date = monthOnly ? `${value}-01` : value;
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month,
    ...(monthOnly ? {} : { day: 'numeric' as const }),
    timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
