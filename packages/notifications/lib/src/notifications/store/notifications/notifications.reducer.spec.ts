import { notificationsReducer } from './notifications.reducer';
import { Notification, Notifications } from '../../types/notifications.types';
import { NOTIFICATIONS_LOAD } from './notifications.actiontypes';

describe('Notification Reducer', () => {
	let newNotification: Notification;
	let notifications: Notifications;

	beforeEach(() => {
		const notification: Notification = {
			handle: '404',
			type: 'E',
			target: 'test',
			message: 'not found',
			scope: 'root',
			timer: 0,
		};

		newNotification = {
			handle: '401',
			type: 'E',
			target: 'test',
			message: 'not logged in',
			scope: 'root',
			timer: 0,
		};

		notifications = {
			test: [notification],
		};
	});

	it('should return an empty object as default', () => {
		expect(notificationsReducer(undefined, {})).toEqual({});
	});

	it('should return the state if the actionType is not known', () => {
		expect(notificationsReducer({}, {
			type: 'test',
			notifications,
		})).toEqual({});
	});

	it('should update the state if the actionType is known', () => {
		expect(notificationsReducer({}, {
			type: NOTIFICATIONS_LOAD,
			notifications,
		})).toEqual(notifications);
	});
});
