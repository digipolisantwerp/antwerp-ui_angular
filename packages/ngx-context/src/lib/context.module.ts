import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterModule} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT} from './context.conf';
import {ContextService} from './services/context.service';
import {ContextWriterService} from './services/context-writer.service';
import {ContextConfig} from './types/context.types';
import {RouterHelper} from './utils/router.helper';

@NgModule({
  imports: [
    RouterModule,
  ],
  providers: [
    ContextService,
    ContextWriterService,
    {provide: CONTEXT_CONFIG, useValue: CONTEXT_CONFIG_DEFAULT},
  ],
})
export class ContextModule {
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

  static forRoot(metaConfig: ContextConfig): ModuleWithProviders {
    return {
      ngModule: ContextModule,
      providers: [
        {provide: CONTEXT_CONFIG, useValue: metaConfig},
        ContextService,
        ContextWriterService,
      ],
    };
  }
}
