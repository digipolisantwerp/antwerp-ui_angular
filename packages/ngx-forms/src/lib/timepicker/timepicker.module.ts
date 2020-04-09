import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TimepickerComponent} from './components/timepicker/timepicker.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
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
