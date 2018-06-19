import { isEqual } from 'lodash-es';

import { Notifications, Notification } from '../../types/notifications.types';
import {
	NOTIFICATIONS_LOAD,
	NOTIFICATION_TRIGGER,
	NOTIFICATION_CLEAR,
	NOTIFICATION_CLEAR_TARGET
} from './notifications.actiontypes';
import { NOTIFICATIONS_INITIAL_VALUE } from './notifications.initial-state';

const actionTypes = [
	NOTIFICATIONS_LOAD,
	NOTIFICATION_TRIGGER,
	NOTIFICATION_CLEAR,
	NOTIFICATION_CLEAR_TARGET,
];

function parseNotifications(notifications: Notifications = {}, state: Notifications = {}): Notifications {
	if (isEqual(notifications, state)) {
		return state;
	}

	return Object.keys(notifications)
		.map(target => {
			const targetData = isEqual(state[target], notifications[target]) ? state[target] : notifications[target];
			return [target, targetData];
		})
		.reduce((newState: Notifications, data: [string, Notification[]]) => {
			newState[data[0]] = data[1];

			return newState;
		}, {});
}

export const notificationsReducer = (
	state: Notifications = NOTIFICATIONS_INITIAL_VALUE,
	action
): Notifications => {
		if (actionTypes.indexOf(action.type) >= 0) {
			return parseNotifications(action.notifications, state);
		}

		return state;
};
