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

    showNotification() {
        this.service.success('Body of the notification', 'Title', { /* extra options */ });
        // Also: error(...) or warning(...)
    }
}
  `;

  constructor(private notificationsService: NotificationsService) {
  }

  success() {
    this.notificationsService.success('This is the body of a success notification.', 'Success');
  }

  error() {
    this.notificationsService.error('This is the body of an error notification', 'Error');
  }

  warning() {
    this.notificationsService.warning('This is the body of a warning notification', 'Warning');
  }
}
