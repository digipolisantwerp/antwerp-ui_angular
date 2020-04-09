import {cold, hot} from 'jasmine-marbles';
import {lookForIllegalNodes, select} from './helpers';

describe('Helpers Test', () => {
  describe('Selector Helper', () => {
    it('should run the selector on valid properties', () => {
      const source$ = hot('--a', {a: {person: {name: 'John Doe'}}});
      const result$ = source$.pipe(select(state => state.person.name));
      expect(result$).toBeObservable(cold('--a', {a: 'John Doe'}));
    });
    it('should only emit selector property changes on distinc change', () => {
      const obj = {name: 'John Doe'};
      const source$ = hot('--a---b|', {a: obj, b: obj}); // Emit the same object twice
      const result$ = source$.pipe(select(state => state));
      expect(result$).toBeObservable(cold('--a----|', {a: obj}));
    });
    it('should not crash reading non existing props', () => {
      const source$ = hot('--a', {a: {}});
      const result$ = source$.pipe(select(obj => obj.not.exisiting.at.all));
      expect(result$).toBeObservable(cold('--a', {a: undefined}));
    });
  });

  describe('Looking for Illegal Nodes', () => {
    const elementRef = {} as any;
    beforeEach(() => {
      elementRef.nativeElement = {
        children: [
          document.createElement('p'),
          document.createElement('div'),
        ],
      };
    });
    it('should not find any illegal nodes', () => {
      const result = () => lookForIllegalNodes(elementRef, ['div', 'p']);
      expect(result()).toBeUndefined(); // Everything is OK
    });
    it('should find some illegal nodes', () => {
      const result = () => lookForIllegalNodes(elementRef, ['p']);
      expect(result).toThrowError();
    });
    it('should not allow anything other than text', () => {
      const result = () => lookForIllegalNodes(elementRef);
      expect(result).toThrowError();
    });
  });
});
