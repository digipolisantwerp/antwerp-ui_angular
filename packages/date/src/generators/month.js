import parseDate from "../helpers/parseDate";
import getMonthLength from "../helpers/getMonthLength";
import getFirstWeekdayOfMonth from "../helpers/getFirstWeekdayOfMonth";
import getLastWeekdayOfMonth from "../helpers/getLastWeekdayOfMonth";

import generateWeek from "./week";
import generatePadding from "./padding";

export default (date, options = {}) => {
    if (!parseDate(date)) {
        return [];
    }

    let startOfWeek = options.startOfWeek || 0;
    const monthLength = getMonthLength(date);
    const startOfMonth = getFirstWeekdayOfMonth(date, startOfWeek);
    const endOfMonth = getLastWeekdayOfMonth(date, startOfWeek);

    const offsetStart = startOfMonth;
    const offsetEnd = monthLength - endOfMonth;

    const firstWeek = generateWeek(0, {
        offset: offsetStart,
        dayOffset: startOfWeek,
        fromStart: true,
        padding: options.padding
    }, options.generatePadding ? generatePadding(date, offsetStart, true) : []);

    const lastWeek = generateWeek(offsetEnd, {
        offset: 6 - endOfMonth,
        padding: options.padding
    }, options.generatePadding ? generatePadding(date, offsetEnd) : []);

    const wholeWeeks = Math.floor((lastWeek[0].date - firstWeek[firstWeek.length - 1].date) / 7);

    const weeks = [firstWeek];

    for (let i = 0; i < wholeWeeks; i += 1) {
        const currDate = weeks[i][weeks[i].length - 1].date + 1;

        weeks.push(generateWeek(currDate));
    }

    weeks.push(lastWeek);

    return weeks;
};
