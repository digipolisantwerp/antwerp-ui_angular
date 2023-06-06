import parseDate from "./parseDate";

export default (date, range) => {
	if (!parseDate(date)) {
		return false;
	}

	if (!range || !Array.isArray(range)) {
		return true;
	}

	return range.indexOf(date.getDate()) < 0;
};
