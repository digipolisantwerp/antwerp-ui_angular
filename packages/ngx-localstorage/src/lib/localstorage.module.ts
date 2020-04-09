import {ModuleWithProviders, NgModule} from '@angular/core';
import {ILocalStorageConfig} from './types/localstorage.types';
import {LocalstorageService} from './services/localstorage.service';
import {DEFAULT_LOCALSTORAGE_CONFIG} from './localstorage.conf';
import {WINDOW_PROVIDERS, WindowModule} from '@acpaas-ui/ngx-utils';
import {LOCALSTORAGE_CONFIG} from './providers/localstorage.provider';
import {StorageFactory} from './factories/storage.factory';
import {storageProvider} from './providers/storage.provider';
import {MemoryStorage} from './services/memory.storage';

@NgModule({
  imports: [
    WindowModule
  ],
  providers: [
    {
      provide: LOCALSTORAGE_CONFIG,
      useValue: DEFAULT_LOCALSTORAGE_CONFIG
    },
    ...WINDOW_PROVIDERS,
    MemoryStorage,
    LocalstorageService,
    StorageFactory,
    storageProvider,
  ],
})
export class LocalstorageModule {
  static forRoot(
    localstorageConfig: ILocalStorageConfig = DEFAULT_LOCALSTORAGE_CONFIG
  ): ModuleWithProviders {
    return {
      ngModule: LocalstorageModule,
      providers: [
        {
          provide: LOCALSTORAGE_CONFIG,
          useValue: localstorageConfig
        },
        ...WINDOW_PROVIDERS,
        MemoryStorage,
        LocalstorageService,
        StorageFactory,
        storageProvider,
      ],
    };
  }
}
