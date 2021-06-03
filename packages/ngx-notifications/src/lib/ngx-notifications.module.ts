import { NgModule } from '@angular/core';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { ToastrModule } from 'ngx-toastr';
import { NotificationComponent } from './components/notification/notification.component';
import { CommonModule } from '@angular/common';


@NgModule({
  entryComponents: [
    NotificationComponent
  ],
  declarations: [
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    ToastrModule.forRoot({
      toastComponent: NotificationComponent,
      closeButton: true
    })
  ]
})
export class NotificationsModule {
}
