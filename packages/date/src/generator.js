import month from "./generators/month";
import padding from "./generators/padding";
import range from "./generators/range";
import week from "./generators/week";

class DateGenerator {}

DateGenerator.generateMonth = month;
DateGenerator.generatePadding = padding;
DateGenerator.generateRange = range;
DateGenerator.generateWeek = week;

export default DateGenerator;
