export function formatTimeToNowOld(dateString: string): string {
  const formatter = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

  const diffInMs = new Date(dateString).getTime() - Date.now();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  let format: number;
  let unit: Intl.RelativeTimeFormatUnit;

  if (Math.abs(diffInMs) < minute) {
    format = Math.round(diffInMs / 1000);
    unit = 'second';
  } else if (Math.abs(diffInMs) < hour) {
    format = Math.round(diffInMs / minute);
    unit = 'minute';
  } else if (Math.abs(diffInMs) < day) {
    format = Math.round(diffInMs / hour);
    unit = 'hour';
  } else if (Math.abs(diffInMs) < week) {
    format = Math.round(diffInMs / day);
    unit = 'day';
  } else if (Math.abs(diffInMs) < month) {
    format = Math.round(diffInMs / week);
    unit = 'week';
  } else if (Math.abs(diffInMs) < year) {
    format = Math.round(diffInMs / month);
    unit = 'month';
  } else {
    format = Math.round(diffInMs / year);
    unit = 'year';
  }

  return formatter.format(format, unit);
}
