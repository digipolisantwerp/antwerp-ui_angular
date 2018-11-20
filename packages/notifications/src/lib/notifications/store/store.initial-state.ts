import { NotificationsState } from './store.types';
import { NOTIFICATIONS_INITIAL_VALUE } from './notifications/notifications.initial-state';

export const NOTIFICATIONS_INITIAL_STATE: NotificationsState = {
	notifications: NOTIFICATIONS_INITIAL_VALUE,
};
