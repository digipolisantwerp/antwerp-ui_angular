import {WeekdayPipe} from './weekday.pipe';

let defaultWeekdays;
let customWeekdays;

describe('TitleCasePipe', () => {
  beforeAll((done) => {
    // declare variables in describe method to avoid inconsistent results
    defaultWeekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    customWeekdays = [
      'zondag',
      'maandag',
      'dinsdag',
      'woensdag',
      'donderdag',
      'vrijdag',
      'zaterdag',
    ];
    done();
  });

  it('Should transform weekday number (0 - 6) to default weekday strings', () => {
    const pipe = new WeekdayPipe();
    for (let i = 0; i < defaultWeekdays.length; i += 1) {
      expect(pipe.transform(i)).toBe(defaultWeekdays[i]);
    }
  });

  it('Should transform weekday number (0 - 6) to custom weekday strings', () => {
    const pipe = new WeekdayPipe(customWeekdays);

    for (let i = 0; i < customWeekdays.length; i += 1) {
      expect(pipe.transform(i)).toBe(customWeekdays[i]);
    }
  });

  it('Should fallback on default strings', () => {
    const pipe = new WeekdayPipe([]);

    for (let i = 0; i < defaultWeekdays.length; i += 1) {
      expect(pipe.transform(i)).toBe(defaultWeekdays[i]);
    }
  });
});
