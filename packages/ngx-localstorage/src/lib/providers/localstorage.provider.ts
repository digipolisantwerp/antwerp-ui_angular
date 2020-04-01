import {InjectionToken} from '@angular/core';
import {ILocalStorageConfig} from '../types/localstorage.types';

export const LOCALSTORAGE_CONFIG: InjectionToken<ILocalStorageConfig> = new InjectionToken<ILocalStorageConfig>('localstorageConfig');
