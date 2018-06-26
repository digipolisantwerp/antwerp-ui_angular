import { Title } from '@angular/platform-browser';
import { ContextConfig } from '../types/context.types';
export declare class ContextWriterService {
    private metaConfig;
    private document;
    private titleService;
    constructor(metaConfig: ContextConfig, document: any, titleService: Title);
    updateMetaTags(meta?: any): void;
    setTag(key: string, values?: {
        [key: string]: string;
    }): void;
    private setTitle(title?, titleSuffix?);
    private setFavIcon(favIcon);
    private updateFavIcon(rel, href, attrs?);
    private setTagDefault(tag, content);
    private isDefined(value);
    private getOrCreateMetaTag(name);
    private getTitle(meta?);
}
