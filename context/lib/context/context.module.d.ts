import { ModuleWithProviders } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContextService } from './services/context.service';
import { ContextConfig } from './types/context.types';
export declare class ContextModule {
    private contextService;
    private router;
    private activatedRoute;
    private contextConfig;
    static forRoot(metaConfig: ContextConfig): ModuleWithProviders;
    constructor(contextService: ContextService, router: Router, activatedRoute: ActivatedRoute, contextConfig: ContextConfig);
}
