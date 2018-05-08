import { Injectable } from '@angular/core';
import { NotificationStore } from '@acpaas-ui/notification-store';

@Injectable()
export class NotificationsService {
    constructor() {
        return new NotificationStore();
    }
}
