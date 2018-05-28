import { NgModule } from '@angular/core';
import { NotificationsActionCreator } from './notifications/notifications.actioncreator';

@NgModule({
	providers: [ NotificationsActionCreator ],
})
export class NotificationStoreModule {}
