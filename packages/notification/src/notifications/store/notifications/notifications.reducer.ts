// Unusual import explained here: https://github.com/rollup/rollup/issues/670
import * as deepEqual_ from 'deep-equal';
const deepEqual = deepEqual_;

import { Notifications, Notification } from './notifications.types';
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
    NOTIFICATION_CLEAR_TARGET
];

function parseNotifications(notifications: Notifications = {}, state: Notifications = {}): Notifications {
    if (deepEqual(notifications, state)) {
        return state;
    }

    return Object.keys(notifications)
        .map(target => {
            const targetData = deepEqual(state[target], notifications[target]) ? state[target] : notifications[target];
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
