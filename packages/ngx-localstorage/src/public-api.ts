import {LocalstorageModule} from './lib/localstorage.module';
import {LocalstorageService} from './lib/services/localstorage.service';

export {LocalstorageModule, LocalstorageService};
export {ILocalStorageConfig, IStorage, LocalStorageType} from './lib/types/localstorage.types';
export {LOCALSTORAGE_CONFIG} from './lib/providers/localstorage.provider';
