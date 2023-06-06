import { DEFAULT_FORMATTING_OPTIONS } from '../formatting.const';
import parseDate from './parseDate';
import addLeadingZero from './addLeadingZero';
import getWeekday from './getWeekday';

export default (dateString, format = '', options: any = {}) => {
  const date = parseDate(dateString);

  if (!date) {
    return null;
  }

  const formattingOptions: any = { ...DEFAULT_FORMATTING_OPTIONS, ...options };
  const formats = {
    YY: (d) => addLeadingZero(String(d.getFullYear()).substr(2)),
    YYYY: (d) => addLeadingZero(d.getFullYear()),
    MM: (d) => addLeadingZero(d.getMonth() + 1),
    MMMM: (d) => addLeadingZero(formattingOptions.monthLabels[d.getMonth()]),
    DD: (d) => addLeadingZero(d.getDate()),
    DDDD: (d) => addLeadingZero(formattingOptions.weekdayLabels[getWeekday(d, options.startOfWeek)]),
    hh: (d) => addLeadingZero(d.getHours()),
    mm: (d) => addLeadingZero(d.getMinutes()),
    ss: (d) => addLeadingZero(d.getSeconds()),
    ms: (d) => addLeadingZero(d.getMilliseconds()),
  };

  return format.split(/[^YMDhms]/).reduce((acc, curr) => {
    return formats.hasOwnProperty(curr) ? acc.replace(curr, formats[curr](date)) : acc;
  }, format);
};
