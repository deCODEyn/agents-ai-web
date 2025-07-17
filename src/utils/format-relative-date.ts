const formatter = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

export function formatTimeToNow(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = date.getTime() - now.getTime();

  return formatter.format(
    Math.round(diff / (1000 * 60 * 60 * 24) / 365),
    'year'
  );
}

const format = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function formatDatePtBr(dataString: string) {
  return format.format(Date.parse(dataString));
}
