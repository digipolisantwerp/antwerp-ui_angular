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

    showToastr() {
        this.service.success('Message', 'Title', {/* options */});
        // also warning() or error()
    }
}
````
