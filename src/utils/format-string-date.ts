const format = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function formatDatePtBr(dataString: string): string {
  return format.format(Date.parse(dataString));
}
