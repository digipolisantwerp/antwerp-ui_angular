import { DEFAULT_FORMATTING_OPTIONS } from "../formatting.const";
import parseDate from "./parseDate";
import addLeadingZero from "./addLeadingZero";
import getWeekday from "./getWeekday";

export default (dateString, format = '', options = {}) => {
    const date = parseDate(dateString);

    if (!date) {
        return null;
    }

    const formattingOptions = {...DEFAULT_FORMATTING_OPTIONS, ...options};
    const formats = {
        YY: date => addLeadingZero(String(date.getFullYear()).substr(2), formattingOptions.leadingZero),
        YYYY: date => addLeadingZero(date.getFullYear(), formattingOptions.leadingZero),
        MM: date => addLeadingZero(date.getMonth() + 1, formattingOptions.leadingZero),
        MMMM: date => addLeadingZero(formattingOptions.monthLabels[date.getMonth()], formattingOptions.leadingZero),
        DD: date => addLeadingZero(date.getDate(), formattingOptions.leadingZero),
        DDDD: date => addLeadingZero(formattingOptions.weekdayLabels[getWeekday(date, options.startOfWeek)], formattingOptions.leadingZero),
        hh: date => addLeadingZero(date.getHours(), formattingOptions.leadingZero),
        mm: date => addLeadingZero(date.getMinutes(), formattingOptions.leadingZero),
        ss: date => addLeadingZero(date.getSeconds(), formattingOptions.leadingZero),
        ms: date => addLeadingZero(date.getMilliseconds(), formattingOptions.leadingZero)
    };

    return format
        .split(/[^YMDhms]/)
        .reduce((acc, curr) => {
            return formats.hasOwnProperty(curr) ? acc.replace(curr, formats[curr](date)) : acc;
        }, format);
};
