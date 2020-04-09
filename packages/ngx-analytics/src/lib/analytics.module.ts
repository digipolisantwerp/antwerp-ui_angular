import {ModuleWithProviders, NgModule} from '@angular/core';
import {WindowModule} from '@acpaas-ui/ngx-utils';
import {GTM_CONFIG, GTM_CONFIG_DEFAULT} from './analytics.conf';
import {GaEventDirective} from './directives/event.directive';
import {GAService} from './services/ga.service';
import {GTMService} from './services/gtm.service';

@NgModule({
  imports: [
    WindowModule,
  ],
  providers: [
    {provide: GTM_CONFIG, useValue: GTM_CONFIG_DEFAULT},
    GAService,
    GTMService,
  ],
  declarations: [
    GaEventDirective,
  ],
  exports: [
    GaEventDirective,
  ],
})
export class AnalyticsModule {
  static forChild(config = {}): ModuleWithProviders {
    config = {
      ...GTM_CONFIG_DEFAULT,
      ...config,
    };

    return {
      ngModule: AnalyticsModule,
      providers: [
        {provide: GTM_CONFIG, useValue: config},
        GAService,
        GTMService,
      ],
    };
  }
}
