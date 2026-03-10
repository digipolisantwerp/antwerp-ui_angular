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

  if (typeof d === 'string' && /^(\d{1,2})\/(\d{1,2})\/(\d{1,3})$/.test(d)) {
    return d;
  }

  if (format && /(^|[^a-z])y{1,3}([^a-z]|$)/.test(format) && !/y{4,}/.test(format)) {
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
