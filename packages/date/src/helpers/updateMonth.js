import parseDate from "./parseDate";
import updateDate from "./updateDate";

export default (date, month) => {
    if (!parseDate(date) || isNaN(parseInt(month, 10))) {
        return date;
    }

    const targetDate = new Date(date);
    let day = targetDate.getDate();
    let year = targetDate.getFullYear();

    if (month > 11) {
        year += 1;
        month -= 12;
    } else if (month < 0) {
        year -= 1;
        month += 12;
    }

    targetDate.setDate(1);
    targetDate.setMonth(month);
    targetDate.setFullYear(year);

    return updateDate(targetDate, day);
};
