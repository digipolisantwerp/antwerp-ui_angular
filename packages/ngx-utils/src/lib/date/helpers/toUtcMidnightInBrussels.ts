import { TZDate } from '@date-fns/tz';

const BRUSSELS_TIMEZONE = 'Europe/Brussels';

export default function toUtcMidnightInBrussels(year: number, month: number, day: number): string {
  const brusselsMidnight = new TZDate(year, month, day, 0, 0, 0, BRUSSELS_TIMEZONE);
  return brusselsMidnight.toISOString();
}
