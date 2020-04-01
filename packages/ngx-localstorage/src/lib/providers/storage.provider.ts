import {FactoryProvider, InjectionToken} from '@angular/core';
import {StorageFactory} from '../factories/storage.factory';
import {LOCALSTORAGE_CONFIG} from './localstorage.provider';
import {ILocalStorageConfig} from '../types/localstorage.types';

export const STORAGE_TOKEN = new InjectionToken('Storage_Token');

export function provideStorage(factory: StorageFactory, configuration: ILocalStorageConfig): Storage {
  return factory.getStorageType(configuration.storageType);
}

export const storageProvider: FactoryProvider = {
  provide: STORAGE_TOKEN,
  useFactory: provideStorage,
  deps: [StorageFactory, LOCALSTORAGE_CONFIG]
};
