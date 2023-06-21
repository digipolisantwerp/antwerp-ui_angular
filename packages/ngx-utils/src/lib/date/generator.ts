import month from './generators/month';
import padding from './generators/padding';
import range from './generators/range';
import week from './generators/week';

class DateGenerator {
  static generateMonth: (date: any, options?: any) => any[][];
  static generatePadding: (date: any, count: number, fromStart: any) => any[];
  static generateRange: (date: any, range: any, options?: {}) => any;
  static generateWeek: (start: any, options?: any, padding?: any[]) => any[];
}

DateGenerator.generateMonth = month;
DateGenerator.generatePadding = padding;
DateGenerator.generateRange = range;
DateGenerator.generateWeek = week;

export default DateGenerator;
