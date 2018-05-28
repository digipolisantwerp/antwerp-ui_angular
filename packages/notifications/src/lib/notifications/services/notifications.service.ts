import { Injectable } from '@angular/core';
import { NotificationStore } from '@acpaas-ui/notification-store'; // TODO: fix import once package is published

@Injectable()
export class NotificationsService {
	constructor() {
		return new NotificationStore();
	}
}
