import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { TimepickerComponent } from './components/timepicker/timepicker.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    IconModule,
  ],
  declarations: [
    TimepickerComponent,
  ],
  exports: [
    TimepickerComponent,
  ],
  providers: [],
})
export class TimepickerModule {
}
