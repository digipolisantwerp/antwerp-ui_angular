import parseDate from "./parseDate";

export default (date) => {
    if (!parseDate(date)) {
        return -1;
    }

    const monthStart = new Date(date);
    const monthEnd = new Date(date);
    monthStart.setDate(1);
    monthEnd.setMonth(monthStart.getMonth() + 1, 1);
    return Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24));
};
