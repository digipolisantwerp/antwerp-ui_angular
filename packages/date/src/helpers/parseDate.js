export default (...args) => {
    const dateValue = Date.parse.apply(null, args);

    return isNaN(dateValue) ? null : new Date(dateValue);
};
