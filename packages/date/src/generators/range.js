import parseDate from "../helpers/parseDate";
import datesAreEqual from "../helpers/datesAreEqual";
import getFirstWeekdayOfMonth from "../helpers/getFirstWeekdayOfMonth";
import getMonthLength from "../helpers/getMonthLength";

export default (date, range, options = {}) => {
    if (!parseDate(date) || !range || (range && !range.length)) {
        return [];
    }

    /**
     * Helper method to parse dates to integer values
     * if the provided value is a date, verify it matches in month and year with the target date and return the date value
     */
    const parseRangeDate = (targetDate, rangeDate) => {
        if (rangeDate instanceof Date && datesAreEqual([targetDate, rangeDate], ['Y', 'M'])) {
            return rangeDate.getDate();
        }

        return null;
    };

    /**
     * Helper method to calculate the days matching the provided weekdays
     */
    const parseWeekdays = (targetDate, weekdays, { startOfWeek = 0 }) => {
        const offset = getFirstWeekdayOfMonth(date, startOfWeek);
        const monthLength = getMonthLength(date);
        const dateRange = [];

        // weekdays are 0 based, dates are 1 based, so we check 0 based against the weekdays and add 1 based to the range
        for (let i = 0; i < monthLength; i += 1) {
            if (weekdays.indexOf((i + offset) % 7) >= 0) { // get weekday in 0 - 6 range, add month offset
                dateRange.push(i + 1); // compensate for 0 based index
            }
        }

        return dateRange;
    };

    let dateRange = [];
    const weekdays = [];

    range.forEach(value => {
        if (value instanceof Date) {
            const dateValue = parseRangeDate(date, value);

            return dateValue ? dateRange.push(dateValue) : false;
        }

        if (!isNaN(parseInt(value, 10))) {
            weekdays.push(value);
        }
    });

    // if there are weekdays, add the corresponding month days to the daterange
    if (weekdays.length) {
        dateRange = dateRange.concat(parseWeekdays(date, weekdays, options));
    }

    // return a unique, sorted array of integers
    return dateRange.reduce((acc, curr) => {
        return acc.indexOf(curr) >= 0 ? acc : acc.concat(curr);
    }, []).sort((val1, val2) => val1 - val2);
};
