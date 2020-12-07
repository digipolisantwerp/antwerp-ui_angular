import {Component} from '@angular/core';
import {NotificationsService} from '../../../../../ngx-notifications/src/public-api';

@Component({
  selector: 'app-notifications-demo',
  templateUrl: './aui-notifications.page.html'
})
export class NotificationsPageDemoComponent {
  importModule = `import { NotificationsModule } from '@acpaas-ui/ngx-notifications';

@NgModule({
  imports: [ NotificationsModule, BrowserAnimationsModule ]
})
export class AppModule { }
  `;

  showNotification = `import { NotificationsService } from '@acpaas-ui/ngx-notifications';

@Component({...})
export class Component {

    constructor(private service: NotificationsService) {}

    showInfoNotification() {
      this.notificationsService.info('This is the body of an info notification.', 'Info', { /* Extra options */ });
    }

    showSuccessNotification() {
      this.notificationsService.success('This is the body of a success notification.', 'Success', { /* Extra options */ });
    }

    showWarningNotification() {
      this.notificationsService.warning('This is the body of a warning notification', 'Warning', { /* Extra options */ });
    }

    showErrorNotification() {
      this.notificationsService.error('This is the body of an error notification', 'Error', { /* Extra options */ });
    }
}
  `;

  constructor(private notificationsService: NotificationsService) {
  }

  showInfoNotification() {
    this.notificationsService.info('This is the body of an info notification.', 'Info');
  }

  showSuccessNotification() {
    this.notificationsService.success('This is the body of a success notification.', 'Success');
  }

  showWarningNotification() {
    this.notificationsService.warning('This is the body of a warning notification', 'Warning');
  }

  showErrorNotification() {
    this.notificationsService.error('This is the body of an error notification', 'Error');
  }
}
