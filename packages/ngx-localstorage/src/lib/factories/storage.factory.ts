import {Inject, Injectable} from '@angular/core';
import {WINDOW} from '@acpaas-ui/ngx-utils';
import {MemoryStorage} from '../services/memory.storage';
import {IStorage, IWindow, LocalStorageType} from '../types/localstorage.types';

@Injectable()
export class StorageFactory {
  constructor(@Inject(WINDOW) private window: IWindow,
              private  memoryStorage: MemoryStorage) {
  }

  public getStorageType(type: LocalStorageType): IStorage {
    switch (type) {
      case 'localStorage':
        return window.localStorage;
      case 'sessionStorage':
        return window.sessionStorage;
      case 'memory':
        return this.memoryStorage;
    }
  }
}
