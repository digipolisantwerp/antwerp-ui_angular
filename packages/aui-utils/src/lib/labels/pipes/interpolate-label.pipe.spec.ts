import {InterpolateLabelPipe} from './interpolate-label.pipe';

describe('The interpolate pipe', () => {
  let interpolatePipe;

  beforeEach(() => {
    interpolatePipe = new InterpolateLabelPipe();
  });

  it('returns the label if no label was provided', () => {
    expect(interpolatePipe.transform()).toBeUndefined();
    const label = undefined;
    expect(interpolatePipe.transform(label, {})).toBeUndefined();
  });

  it('returns the label if no replaceData was defined', () => {
    expect(interpolatePipe.transform('test')).toEqual('test');
  });

  it('replaces matching props in the label with the values provided in the replaceData', () => {
    expect(interpolatePipe.transform(
      'test %{some} %{value}',
      {some: 'all', value: 'the things'}
    )).toEqual('test all the things');
  });
});
