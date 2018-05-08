import parseDate from "./parseDate";
import getMonthLength from "./getMonthLength";
import getWeekday from "./getWeekday";

export default (date, startOfWeek = 0) => {
    if (!parseDate(date)) {
        return -1;
    }

    const providedDate = new Date(date);
    const monthLength = getMonthLength(providedDate);
    providedDate.setDate(monthLength);

    return getWeekday(providedDate, startOfWeek);
};
