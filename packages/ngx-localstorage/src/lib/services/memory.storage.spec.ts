import {TestBed} from '@angular/core/testing';
import {MemoryStorage} from './memory.storage';

describe('Memory Storage Test', () => {
  let storage: MemoryStorage;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MemoryStorage
      ]
    });

    storage = TestBed.get(MemoryStorage);
  });

  describe('Creation', () => {
    it('should create the memory service', () => {
      expect(storage).toBeDefined();
    });
  });

  describe('Using Items', () => {
    it('should set an item when non exiting', () => {
      storage.setItem('a', 'value');
      expect(storage.getItem('a')).toBe('value');
    });
    it('should set an item when existing', () => {
      storage.setItem('a', 'value');
      storage.setItem('a', 'new value');
      expect(storage.getItem('a')).toBe('new value');
    });
    it('should get an item when non existing', () => {
      const item = storage.getItem('other');
      expect(item).toBeUndefined();
    });
    it('should remove a non existing item', () => {
      storage.removeItem('hi'); // should not crash
    });
    it('should remove an existing item', () => {
      storage.setItem('a', 'value');
      storage.removeItem('a');
      expect(storage.getItem('a')).toBeUndefined();
    });
  });
});
