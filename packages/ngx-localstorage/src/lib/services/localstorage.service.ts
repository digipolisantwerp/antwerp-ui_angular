import {Inject, Injectable} from '@angular/core';
import {STORAGE_TOKEN} from '../providers/storage.provider';
import {IStorage} from '../types/localstorage.types';

/**
 * Wrapper service that provides
 * the storage type that was set by
 * using a configuration when importing
 * this module.
 */
@Injectable()
export class LocalstorageService {
  constructor(
    @Inject(STORAGE_TOKEN) private readonly pStorage: IStorage
  ) {
  }

  get storage(): Storage {
    return this.pStorage;
  }
}
