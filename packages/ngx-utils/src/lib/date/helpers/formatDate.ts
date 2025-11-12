import { TZDate } from '@date-fns/tz';
import { DEFAULT_FORMATTING_OPTIONS } from '../formatting.const';
import parseDate from './parseDate';
import addLeadingZero from './addLeadingZero';
import getWeekday from './getWeekday';

const BRUSSELS_TIMEZONE = 'Europe/Brussels';

export default (dateString, format = '', options: any = {}) => {
  const date = parseDate(dateString);

  if (!date) {
    return null;
  }

  const brusselsDate = new TZDate(date, BRUSSELS_TIMEZONE);

  const formattingOptions: any = { ...DEFAULT_FORMATTING_OPTIONS, ...options };
  const formats = {
    YY: (tzDate: TZDate) => addLeadingZero(String(tzDate.getFullYear()).substr(2)),
    YYYY: (tzDate: TZDate) => addLeadingZero(String(tzDate.getFullYear())),
    MM: (tzDate: TZDate) => addLeadingZero(String(tzDate.getMonth() + 1)),
    MMMM: (tzDate: TZDate) => addLeadingZero(formattingOptions.monthLabels[tzDate.getMonth()]),
    DD: (tzDate: TZDate) => addLeadingZero(String(tzDate.getDate())),
    DDDD: (tzDate: TZDate) => addLeadingZero(formattingOptions.weekdayLabels[getWeekday(date, options.startOfWeek)]),
    hh: (tzDate: TZDate) => addLeadingZero(String(tzDate.getHours())),
    mm: (tzDate: TZDate) => addLeadingZero(String(tzDate.getMinutes())),
    ss: (tzDate: TZDate) => addLeadingZero(String(tzDate.getSeconds())),
    ms: (tzDate: TZDate) => addLeadingZero(String(tzDate.getMilliseconds())),
  };

  return format.split(/[^YMDhms]/).reduce((acc, curr) => {
    return formats.hasOwnProperty(curr) ? acc.replace(curr, formats[curr](brusselsDate)) : acc;
  }, format);
};
