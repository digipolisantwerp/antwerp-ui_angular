import addLeadingZero from './helpers/addLeadingZero';
import closestDateForRange from './helpers/closestDateForRange';
import dateOutOfRange from './helpers/dateOutOfRange';
import datesAreEqual from './helpers/datesAreEqual';
import dateValuesAreEqual from './helpers/dateValuesAreEqual';
import formatDate from './helpers/formatDate';
import getFirstWeekdayOfMonth from './helpers/getFirstWeekdayOfMonth';
import getLastWeekdayOfMonth from './helpers/getLastWeekdayOfMonth';
import getMonthLength from './helpers/getMonthLength';
import getWeekday from './helpers/getWeekday';
import parseDate from './helpers/parseDate';
import toUtcMidnightInBrussels from './helpers/toUtcMidnightInBrussels';
import updateDate from './helpers/updateDate';
import updateMonth from './helpers/updateMonth';

class DateHelper {
  static addLeadingZero: any;
  static closestDateForRange: any;
  static dateOutOfRange: any;
  static datesAreEqual: any;
  static dateValuesAreEqual: any;
  static formatDate: any;
  static getFirstWeekdayOfMonth: any;
  static getLastWeekdayOfMonth: any;
  static getMonthLength: any;
  static getWeekday: any;
  static parseDate: any;
  static toUtcMidnightInBrussels: any;
  static updateDate: any;
  static updateMonth: any;
}

DateHelper.addLeadingZero = addLeadingZero;
DateHelper.closestDateForRange = closestDateForRange;
DateHelper.dateOutOfRange = dateOutOfRange;
DateHelper.datesAreEqual = datesAreEqual;
DateHelper.dateValuesAreEqual = dateValuesAreEqual;
DateHelper.formatDate = formatDate;
DateHelper.getFirstWeekdayOfMonth = getFirstWeekdayOfMonth;
DateHelper.getLastWeekdayOfMonth = getLastWeekdayOfMonth;
DateHelper.getMonthLength = getMonthLength;
DateHelper.getWeekday = getWeekday;
DateHelper.parseDate = parseDate;
DateHelper.toUtcMidnightInBrussels = toUtcMidnightInBrussels;
DateHelper.updateDate = updateDate;
DateHelper.updateMonth = updateMonth;

export default DateHelper;
