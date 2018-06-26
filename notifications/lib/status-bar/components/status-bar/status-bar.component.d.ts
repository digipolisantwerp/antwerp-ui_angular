import { EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '@acpaas-ui/js-notification-store';
import { Label } from '@acpaas-ui/ngx-components/utils';
export declare class StatusbarComponent implements OnChanges {
    private availableTypes;
    private router;
    notifications: Notification[];
    remainingMessage: Label;
    clearNotification: EventEmitter<{}>;
    activeNotification: Notification;
    typeClasses: any;
    iconMap: any;
    replaceMap: {
        remaining: number;
    };
    private notificationTimer;
    private scopeListener;
    constructor(availableTypes: any, router: Router);
    clearListeners(): void;
    setListeners(): void;
    ngOnChanges(): void;
    onClearNotification(): void;
}
