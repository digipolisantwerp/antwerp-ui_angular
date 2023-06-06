import parseDate from "./parseDate";
import getWeekday from "./getWeekday";

export default (date, startOfWeek = 0) => {
	if (!parseDate(date)) {
		return -1;
	}

	const providedDate = new Date(date);
	providedDate.setDate(1);

	return getWeekday(providedDate, startOfWeek);
};
