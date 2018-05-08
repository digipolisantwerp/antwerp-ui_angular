import {
    Inject,
    Optional,
    NgModule,
    ModuleWithProviders,
} from '@angular/core';
import { NotificationStore } from '@acpaas-ui/notification-store';

import { NotificationsService } from './notifications/notifications.service';
import {
    NOTIFICATIONS_INITIAL_MESSAGES,
    NOTIFICATIONS_INITIAL_OPTIONS,
} from './notifications/notifications.conf';
import {
    NotificationsMessages,
    NotificationsOptions,
} from './store/notifications/notifications.types';

@NgModule({
    providers: [
        NotificationsService,
        { provide: NOTIFICATIONS_INITIAL_MESSAGES, useValue: {} },
        { provide: NOTIFICATIONS_INITIAL_OPTIONS, useValue: {} }
    ]
})
export class NotificationsModule {
    static forRoot(
        messages: NotificationsMessages,
        options: NotificationsOptions
    ): ModuleWithProviders {
        return {
            ngModule: NotificationsModule,
            providers: [
                NotificationsService,
                { provide: NOTIFICATIONS_INITIAL_MESSAGES, useValue: messages },
                { provide: NOTIFICATIONS_INITIAL_OPTIONS, useValue: options }
            ]
        };
    }

    constructor(
        @Inject(NOTIFICATIONS_INITIAL_MESSAGES) private messages,
        @Inject(NOTIFICATIONS_INITIAL_OPTIONS) private options
    ) {
        NotificationStore.messages = messages;
        NotificationStore.options = options;
    }
}
