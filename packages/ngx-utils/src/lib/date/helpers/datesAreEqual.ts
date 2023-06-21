import dateValuesAreEqual from './dateValuesAreEqual';

export default (dates = [], specifier: string | string[] = 'value') => {
  if (!dates.length) {
    return false;
  }

  const compareMethods = {
    Y: 'getFullYear',
    M: 'getMonth',
    D: 'getDate',
    h: 'getHours',
    m: 'getMinutes',
    s: 'getSeconds',
    ms: 'getMilliseconds',
    value: 'valueOf',
  };

  const compareDates = (d, s) => {
    const verifiedSpecifier = compareMethods.hasOwnProperty(s) ? compareMethods[s] : compareMethods.value;

    return dateValuesAreEqual(d, verifiedSpecifier);
  };

  if (Array.isArray(specifier)) {
    for (let i = 0; i < specifier.length; i += 1) {
      if (!compareDates(dates, specifier[i])) {
        return false;
      }
    }

    return true;
  }

  return compareDates(dates, specifier);
};
