import parseDate from "./parseDate";

export default (date, startOfWeek = 0) => {
    if (!parseDate(date)) {
        return -1;
    }

    const weekday = (date.getDay() - startOfWeek) % 7;

    return weekday < 0 ? weekday + 7 : weekday;
};
