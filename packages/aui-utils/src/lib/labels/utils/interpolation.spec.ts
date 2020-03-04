import {interpolate} from './interpolation';

describe('The interpolate pipe', () => {
  it('returns the original label if no replaceData was provided', () => {
    const label = 'test';
    expect(interpolate(label)).toBe(label);
  });

  it('replaces the keys of the replaceData in the provided label with their corresponding values', () => {
    const label = 'testing if this %{value} gets replaced';
    const replaceData = {
      value: 'value',
    };

    expect(interpolate(label, replaceData)).toEqual('testing if this value gets replaced');
  });

  it('replaces multiple values', () => {
    const label = '%{one}, %{two}, %{three}';
    const replaceData = {
      one: 1,
      two: 2,
      three: 3,
    };

    expect(interpolate(label, replaceData)).toEqual('1, 2, 3');
  });

  it('escapes special characters', () => {
    const label = '%{*} special';
    const replaceData = {
      '*': 'very',
    };

    expect(interpolate(label, replaceData)).toEqual('very special');
  });
});
