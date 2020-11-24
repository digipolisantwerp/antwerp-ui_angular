# @acpaas-ui/ngx-toastr

Module that allows the use of a simple toastr to display success, error or warning messages.
This package only implements a custom styled Toastr component and thus has a hard dependency on the `ngx-toastr@11` package.

> This package is the replacement for the now deprecated ngx-notification package.

## Usage

Import the module into your application:

````ts
import { AuiToastrModule} from '@acpaas-ui/ngx-toastr';

@NgModule({
    imports: [
        AuiToastrModule,
        BrowserAnimationsModule
    ]
})
export class AppModule {}

````

> Note that you manually have to import the `BrowserAnimationsModule` in your root application module.

Use the toastr in a component:

````ts
import { ToastrService } from 'ngx-toastr';

@Component({...})
export class AppComponent {
    
    constructor(private toastrService: ToastrService) {}

    showToastr() {
        this.toastrService.success('Message', 'Title', {/* options */});
    }
}
````
