# @acpaas-ui/ngx-notifications

Module that allows the use of a simple notification to display success, error or warning messages.

## Usage

Import the module into your application:

````ts
import { NotificationsModule } from '@acpaas-ui/ngx-notifications';

@NgModule({
    imports: [
        NotificationsModule,
        BrowserAnimationsModule
    ]
})
export class AppModule {}

````

> Note that you manually have to import the `BrowserAnimationsModule` in your root application module.

Use the notification in a component:

````ts
import { NotificationsService } from '@acpaas-ui/ngx-notifications';

@Component({...})
export class AppComponent {

    constructor(private service: NotificationsService) {}

    showInfoNotificationNotification() {
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
````

Our notifications package is built on ngx-toastr. All available options are listed on the [ngx-toastr NPM page](https://www.npmjs.com/package/ngx-toastr#options).
