import {NgModule, ModuleWithProviders} from '@angular/core';
import {WindowModule, WINDOW_PROVIDERS} from '@acpaas-ui/ngx-components/utils';

import {
  LocalstorageConfig
} from './types/localstorage.types';
import {
  LocalstorageService,
} from './services/localstorage.service';
import {
  LOCALSTORAGE_CONFIG,
  DEFAULT_LOCALSTORAGE_CONFIG,
} from './localstorage.conf';

@NgModule({
  imports: [
    WindowModule,
  ],
  providers: [
    {provide: LOCALSTORAGE_CONFIG, useValue: DEFAULT_LOCALSTORAGE_CONFIG},
    ...WINDOW_PROVIDERS,
    LocalstorageService,
  ],
})
export class LocalstorageModule {
  static forRoot(
    localstorageConfig: LocalstorageConfig = DEFAULT_LOCALSTORAGE_CONFIG
  ): ModuleWithProviders {
    return {
      ngModule: LocalstorageModule,
      providers: [
        {provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig},
        ...WINDOW_PROVIDERS,
        LocalstorageService,
      ],
    };
  }
}
