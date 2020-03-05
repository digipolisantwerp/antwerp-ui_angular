import {ModuleWithProviders, NgModule} from '@angular/core';

import {LocalstorageConfig} from './types/localstorage.types';
import {LocalstorageService} from './services/localstorage.service';
import {DEFAULT_LOCALSTORAGE_CONFIG, LOCALSTORAGE_CONFIG} from './localstorage.conf';
import {WINDOW_PROVIDERS, WindowModule} from '@acpaas-ui/ngx-utils';

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
