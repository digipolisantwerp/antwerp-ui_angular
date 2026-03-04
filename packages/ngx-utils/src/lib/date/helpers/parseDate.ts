import { parse, parseJSON } from 'date-fns';
import { TZDate } from '@date-fns/tz';

const BRUSSELS_TIMEZONE = 'Europe/Brussels';

export default (d, format = null) => {
  if (d === undefined || d === null || !!d === false || d instanceof Array) {
    return null;
  }

  if (d instanceof Date) {
    return isNaN(d.valueOf()) ? null : d;
  }

  if (typeof d === 'string' && d.match(/^\d{4}-\d{2}-\d{2}T/)) {
    try {
      const utcDate = parseJSON(d);
      if (isNaN(utcDate.getTime())) {
        return null;
      }

      const brusselsDate = new TZDate(utcDate, BRUSSELS_TIMEZONE);
      const year = brusselsDate.getFullYear();
      const month = brusselsDate.getMonth();
      const day = brusselsDate.getDate();

      const dateInBrussels = new TZDate(year, month, day, 0, 0, 0, BRUSSELS_TIMEZONE);

      return new Date(dateInBrussels.getTime());
    } catch (e) {
      return null;
    }
  }

  // If the format contains a year with less than 4 digits,
  // we should not parse it as a date, because it can lead to unexpected results.
  if (format && /(^|[^y])y{1,3}([^y]|$)/.test(format) && !/y{4,}/.test(format)) {
    return d;
  }

  const date = format ? parse(d, format, new Date()) : new Date(Date.parse(d));

  if (isNaN(date.getTime())) {
    return null;
  }

  if (format) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dateInBrussels = new TZDate(year, month, day, 0, 0, 0, BRUSSELS_TIMEZONE);
    return new Date(dateInBrussels.getTime());
  }

  return parseJSON(date.toISOString());
};
