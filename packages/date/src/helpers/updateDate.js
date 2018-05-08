import parseDate from "./parseDate";
import getMonthLength from "./getMonthLength";

export default (date, day) => {
    if (!parseDate(date) || isNaN(parseInt(day, 10))) {
        return date;
    }

    const targetDate = new Date(date);

    const targetMonthLength = getMonthLength(targetDate);

    if (day > targetMonthLength) {
        targetDate.setDate(targetMonthLength);
    } else {
        targetDate.setDate(day);
    }

    return targetDate;
};
