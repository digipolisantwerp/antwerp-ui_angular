import {PluralizeLabelPipe} from './pluralize-label.pipe';

describe('The pluralize pipe', () => {
  let pluralizePipe;

  beforeEach(() => {
    pluralizePipe = new PluralizeLabelPipe();
  });

  it('returns the label if no label was provided', () => {
    expect(pluralizePipe.transform()).toBeUndefined();
    const label = undefined;
    expect(pluralizePipe.transform(label, 2)).toBeUndefined();
  });

  it('returns the label if it is a string', () => {
    expect(pluralizePipe.transform('test')).toEqual('test');
  });

  it('returns the singular label if the count is 1', () => {
    const label = {
      singular: 'i am but one',
      plural: 'we are many',
    };

    expect(pluralizePipe.transform(label, 1)).toEqual('i am but one');
  });

  it('returns the plural label if the count is not 1', () => {
    const label = {
      singular: 'i am but one',
      plural: 'we are many',
    };

    expect(pluralizePipe.transform(label)).toEqual('we are many');
    expect(pluralizePipe.transform(label, 0)).toEqual('we are many');
    expect(pluralizePipe.transform(label, 5)).toEqual('we are many');
  });
});
