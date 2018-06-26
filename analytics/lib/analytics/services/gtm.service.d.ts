import { GTMConfig } from '../types/analytics.types';
export declare class GTMService {
    private windowService;
    private config;
    constructor(windowService: any, config: GTMConfig);
    addToDataLayer(data: any): void;
    trigger(event: string, data?: {}): void;
    triggerPageView(data?: {}): void;
    triggerEvent(category: string, action: string, label?: string, value?: number): void;
}
