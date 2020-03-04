import {NgModule, ModuleWithProviders, Inject} from '@angular/core';
import {
  RouterModule,
  Router,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';
import {filter, map} from 'rxjs/operators';

import {Services} from './services';

import {CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT} from './context.conf';
import {ContextService} from './services/context.service';
import {ContextWriterService} from './services/context-writer.service';
import {ContextConfig} from './types/context.types';
import {RouterHelper} from './utils/router.helper';
import {StoreModule} from '@ngrx/store';
import {contextReducer, ContextState} from './store';

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(contextReducer)
  ],
  providers: [
    Services,
    {provide: CONTEXT_CONFIG, useValue: CONTEXT_CONFIG_DEFAULT},
  ],
})
export class ContextModule {
  static forRoot(metaConfig: ContextConfig): ModuleWithProviders {
    return {
      ngModule: ContextModule,
      providers: [
        {provide: CONTEXT_CONFIG, useValue: metaConfig},
        ...Services,
      ],
    };
  }

  constructor(
    private contextService: ContextService,
    private contextWriterService: ContextWriterService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(CONTEXT_CONFIG) private contextConfig: ContextConfig
  ) {
    if (!contextConfig.routerContext && contextConfig.defaults) {
      Object.keys(contextConfig.defaults).forEach(key => {
        this.contextWriterService.setTag(key, contextConfig.defaults);
      });
      return;
    }

    this.router.events
      .pipe(
        filter(event => (event instanceof NavigationEnd)),
        map(() => RouterHelper.findLastChild(this.activatedRoute))
      )
      .subscribe((route: any) => {
        route.data = route.data || {};
        route.data.meta = route.data.meta || {};
        route.data.meta.parent = RouterHelper.getParentTitle(route);

        this.contextService.updateContext(route.data.meta);
      });
  }
}
