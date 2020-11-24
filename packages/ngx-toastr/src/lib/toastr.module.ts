import {NgModule} from '@angular/core';
import {ToastrComponent} from './components/toastr/toastr.component';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  entryComponents: [
    ToastrComponent
  ],
  declarations: [
    ToastrComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      toastComponent: ToastrComponent,
      closeButton: true
    })
  ],
  exports: [
    ToastrComponent
  ]
})
export class AuiToastrModule {

}
