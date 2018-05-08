import parseDate from "./parseDate";

export default (dates = [], comparator) => {
    if (!(comparator in new Date())) {
        return false;
    }

    return dates
        .map(date => parseDate(date) ? date[comparator]() : -1)
        .reduce((acc, curr, i) => {
            if (i === 0) {
                acc = curr;
                return acc;
            }

            if (acc >= 0 && curr >= 0 && acc === curr) {
                return acc;
            }

            return -1;
        }) >= 0;
};
