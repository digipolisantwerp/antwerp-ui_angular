import parseDate from "../helpers/parseDate";
import updateMonth from "../helpers/updateMonth";
import getMonthLength from "../helpers/getMonthLength";

export default (date, count = 0, fromStart) => {
    const padding = [];

    if (!parseDate(date)) {
        return padding;
    }

    const targetMonth = updateMonth(date, fromStart ? date.getMonth() - 1 : date.getMonth() + 1);
    const monthLength = getMonthLength(targetMonth);

    for (let i = 0; i < count; i += 1) {
        padding.push(fromStart ? monthLength - (count - i - 1) : padding.length + 1); // compensate for 0 index

        if (!fromStart && i >= monthLength) {
            break;
        }
    }

    return padding;
};
