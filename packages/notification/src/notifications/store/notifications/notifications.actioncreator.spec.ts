import { async, inject, TestBed } from '@angular/core/testing';
import { NgRedux } from '@angular-redux/store';
import { NotificationStore } from '@acpaas-ui/notification-store';

import * as actionTypes from './notifications.actiontypes';
import { Notification, Notifications } from './notifications.types';
import { NotificationsActionCreator } from './notifications.actioncreator';

describe('The NotificationsActionCreator', () => {
    class NgReduxMock {
        public dispatch() {}
    }

    const injectService = (cb) => {
        return inject(
            [NotificationsActionCreator],
            (notificationsActions: NotificationsActionCreator) => cb(notificationsActions)
        );
    };

    let notification;

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                NotificationsActionCreator,
                { provide: NgRedux, useClass: NgReduxMock }
            ]
        });
    }));

    beforeEach(() => {
        notification = {
            handle: '404',
            type: 'E',
            target: 'test',
            message: 'not found',
            scope: 'root',
            timer: 0
        };
    });

    it('should call the triggerNotification method', injectService(notificationsActions => {
        spyOn(NotificationStore.prototype, 'triggerNotification').and.stub();

        notificationsActions.triggerNotification('404', 'test', {type: 'I'});

        expect(NotificationStore.prototype.triggerNotification).toHaveBeenCalledWith('404', 'test', {type: 'I'});
    }));

    it('should return the loadNotifications action', injectService(notificationsActions => {
        const notifications = {
            test: [notification]
        };

        expect(notificationsActions.loadNotifications(notifications, 'test')).toEqual({
            type: 'test',
            notifications
        });

        expect(notificationsActions.loadNotifications(notifications, undefined)).toEqual({
            type: actionTypes.NOTIFICATIONS_LOAD,
            notifications
        });
    }));

    it('should call the clearNotification method', injectService(notificationsActions => {
        spyOn(NotificationStore.prototype, 'clearNotification');

        notificationsActions.clearNotification(notification);

        expect(NotificationStore.prototype.clearNotification).toHaveBeenCalledWith(notification);
    }));

    it('should call the clearTarget method', injectService(notificationsActions => {
        spyOn(NotificationStore.prototype, 'clearTarget');

        notificationsActions.clearTarget('test');

        expect(NotificationStore.prototype.clearTarget).toHaveBeenCalledWith('test');
    }));

    it('should trigger all registered dispatchers when the notifications are updated', injectService(notificationsActions => {
        const notifications = {
            test: [notification]
        };

        const store = new NotificationStore({
            404: 'not found'
        });
        store.triggerNotification('404', 'test');

        spyOn(notificationsActions.ngRedux, 'dispatch');

        notificationsActions.clearTarget('test');

        expect(notificationsActions.ngRedux.dispatch).toHaveBeenCalledWith({
            type: actionTypes.NOTIFICATION_CLEAR_TARGET,
            notifications: {}
        });
    }));
});
