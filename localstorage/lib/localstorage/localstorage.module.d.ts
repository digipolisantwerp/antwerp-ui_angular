import { ModuleWithProviders } from '@angular/core';
import { LocalstorageConfig } from './types/localstorage.types';
import { LocalstorageService } from './services/localstorage.service';
export declare class LocalstorageModule {
    private localstorageService;
    static forRoot(localstorageConfig?: LocalstorageConfig): ModuleWithProviders;
    constructor(localstorageService: LocalstorageService);
}
