import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-toastr-demo',
  templateUrl: './aui-toastr.page.html'
})
export class ToastrDemoPageComponent {
  importModule = `import { AuiToastrModule } from '@acpaas-ui/ngx-toastr';

@NgModule({
  imports: [ AuiToastrModule ]
})
export class AppModule { }
  `;

  showToastr = `import { ToastrService } from 'ngx-toastr';

@Component({...})
export class Component {

    constructor(private toastrService: ToastrService) {}

    showToastr() {
        this.toastrService.success('Body of the toastr', 'Title', { /* extra options */ });
        // Also: error(...) or warning(...)
    }
}
  `;

  constructor(private toastrService: ToastrService) {
  }

  success() {
    this.toastrService.success('This is the body of a success toastr.', 'Success Toast');
  }

  error() {
    this.toastrService.error('This is the body of an error message', 'Error Toast');
  }

  warning() {
    this.toastrService.warning('This is the body of a warning message', 'Warning Toast');
  }
}
