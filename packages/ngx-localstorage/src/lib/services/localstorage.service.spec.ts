import {LocalstorageService} from './localstorage.service';
import {TestBed} from '@angular/core/testing';
import {STORAGE_TOKEN} from '../providers/storage.provider';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {MemoryStorage} from './memory.storage';

describe('Localstorage Service Test', () => {
  let service: LocalstorageService;
  let storage: Storage;

  beforeEach(() => {
    storage = sinon.createStubInstance(MemoryStorage) as any;
    TestBed.configureTestingModule({
      providers: [
        LocalstorageService,
        {
          provide: STORAGE_TOKEN,
          useValue: storage
        }
      ]
    });

    service = TestBed.get(LocalstorageService);
  });

  describe('Creation', () => {
    it('should create the service', () => {
      expect(service).toBeDefined();
    });
  });
  describe('Getting storage type', () => {
    it('should return the storage', () => {
      const storageGot = service.storage;
      expect(storageGot).toBe(storage);
    });
  });
});
