import {MonthPipe} from './month.pipe';

const defaultMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  // tslint:disable-line
const customMonths = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']; // tslint:disable-line

describe('TitleCasePipe', () => {
  it('Should transform month number (1 - 12) to default month strings', () => {
    const pipe = new MonthPipe();

    for (let i = 1; i <= defaultMonths.length; i += 1) {
      expect(pipe.transform(i)).toBe(defaultMonths[i - 1]);
    }
  });

  it('Should transform month number (1 - 12) to custom month strings', () => {
    const pipe = new MonthPipe(customMonths);

    for (let i = 1; i <= customMonths.length; i += 1) {
      expect(pipe.transform(i)).toBe(customMonths[i - 1]);
    }
  });

  it('Should fallback on default strings', () => {
    const pipe = new MonthPipe([]);

    for (let i = 1; i <= defaultMonths.length; i += 1) {
      expect(pipe.transform(i)).toBe(defaultMonths[i - 1]);
    }
  });
});
