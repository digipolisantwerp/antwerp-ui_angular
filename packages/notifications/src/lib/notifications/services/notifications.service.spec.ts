import { async, inject, TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import { NotificationStore } from '@acpaas-ui/notification-store';

describe('The NotificationsService', () => {
	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [NotificationsService],
		});
	}));

	it('creates an injectable instance of the NotificationsStore', inject(
		[NotificationsService],
		(notificationsService: NotificationsService) => {
			expect(notificationsService instanceof NotificationsStore).toBe(true);
		}
	));
});
