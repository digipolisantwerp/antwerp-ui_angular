import { InjectionToken } from '@angular/core';
import { LocalstorageConfig } from './types/localstorage.types';

export const LOCALSTORAGE_CONFIG: InjectionToken<LocalstorageConfig> = new InjectionToken<LocalstorageConfig>('localstorageConfig');

export const DEFAULT_LOCALSTORAGE_CONFIG: LocalstorageConfig = {
	storageType: 'localStorage',
};
