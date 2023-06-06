export default (value = "") => {
	const strValue = String(value);

	if (strValue.length >= 2) {
		return strValue;
	}

	if (strValue.length === 0) {
		return "00";
	}

	return `0${strValue}`;
};
