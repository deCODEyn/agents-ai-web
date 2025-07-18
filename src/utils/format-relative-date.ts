import type { timeUnitsType } from './types/time-unit';

const formatter = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const timeUnits: timeUnitsType = [
  { ts: 10 * SECOND, unit: 'second', divisor: SECOND, now: 'agora mesmo' },
  { ts: MINUTE, unit: 'second', divisor: SECOND },
  { ts: HOUR, unit: 'minute', divisor: MINUTE },
  { ts: DAY, unit: 'hour', divisor: HOUR },
  { ts: WEEK, unit: 'day', divisor: DAY },
  { ts: MONTH, unit: 'week', divisor: WEEK },
  { ts: YEAR, unit: 'month', divisor: MONTH },
  { ts: Number.POSITIVE_INFINITY, unit: 'year', divisor: YEAR },
];

export function formatTimeToNow(dateString: string) {
  const diffInMs = Math.abs(new Date(dateString).getTime() - Date.now());

  let formatValue = Math.round(diffInMs / YEAR);
  let unit: Intl.RelativeTimeFormatUnit = 'year';

  for (const unitDef of timeUnits) {
    if (diffInMs < unitDef.ts) {
      if (unitDef.now) {
        return unitDef.now;
      }
      formatValue = Math.round(diffInMs / unitDef.divisor);
      unit = unitDef.unit;
      break;
    }
  }

  return formatter.format(formatValue, unit);
}
