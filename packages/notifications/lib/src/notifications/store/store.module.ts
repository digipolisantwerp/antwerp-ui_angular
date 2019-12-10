import { NgModule } from '@angular/core';
import { NotificationsActions } from './notifications/notifications.actions';

@NgModule({
	providers: [ NotificationsActions ],
})
export class NotificationStoreModule {}
