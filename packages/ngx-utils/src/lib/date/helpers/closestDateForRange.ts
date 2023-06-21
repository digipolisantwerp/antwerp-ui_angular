import parseDate from "./parseDate";
import getMonthLength from "./getMonthLength";

export default (date, range) => {
	if (!parseDate(date)) {
		return null;
	}

	if (!range || !Array.isArray(range)) {
		return new Date(date);
	}

	// get a list of allowed dates based on the provided date & range
	const monthLength = getMonthLength(date);
	const dates = Array.from(Array(monthLength), (val, index) => index + 1).filter(val => range.indexOf(val) < 0);
	const startDate = date.getDate();

	// find the date closest to the provided date in the allowed dates
	const closestDay = dates.reduce((prev, curr) => {
		return (Math.abs(curr - startDate) < Math.abs(prev - startDate) ? curr : prev);
	}, -1);

	const closestDate = new Date(date);
	closestDate.setDate(closestDay);

	return closestDate;
};
