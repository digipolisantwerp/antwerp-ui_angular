import { ModuleWithProviders } from '@angular/core';
import { NotificationsMessages, NotificationsOptions } from './types/notifications.types';
export declare class NotificationsModule {
    private messages;
    private options;
    static forRoot(messages: NotificationsMessages, options: NotificationsOptions): ModuleWithProviders;
    constructor(messages: any, options: any);
}
