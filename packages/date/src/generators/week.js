export default (start, options = {}, padding = []) => {
    const offset = options.hasOwnProperty('offset') ? options.offset : 0;
    const dayOffset = options.hasOwnProperty('dayOffset') ? options.dayOffset : 0;
    const addPadding = options.hasOwnProperty('padding') && options.padding;
    const fromStart = options.hasOwnProperty('fromStart') && options.fromStart;
    start = start ? start : dayOffset > 0 ? 0 : 1; // start from 1 if no start was provided (or is 0) and the dayOffset was not set (or is 0)

    const outOfRange = val => {
        if (!addPadding) {
            return false;
        }

        return fromStart ? val < start + offset : val > start + (6 - offset); // remaining week length
    };

    const weekLength = addPadding ? 7 : 7 - offset;
    const week = [];

    for (let i = start; i < start + weekLength; i += 1) {
        if (outOfRange(i)) {
            if (addPadding) {
                const paddingIndex = fromStart ? i - start : i - start - (7 - offset);

                week.push({
                    date: padding.length ? padding[paddingIndex] : null,
                    padding: true
                });
            }

            continue;
        }

        week.push({
            date: (fromStart && addPadding ? i - offset : i) + dayOffset
        });
    }

    return week;
};
