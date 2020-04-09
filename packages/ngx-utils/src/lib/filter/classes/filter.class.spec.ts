import {Filter} from './filter.class';

describe('The Filter Class', () => {
  it('should parse data', () => {
    const f1 = new Filter();
    f1.parse = (d) => {
      return d;
    };

    spyOn(f1, 'parse');
    f1.parseData([]);
    expect(f1.parse).toHaveBeenCalledWith([], undefined);
  });
});
