import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RangeSliderComponent} from './components/range-slider/range-slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    RangeSliderComponent,
  ],
  exports: [
    RangeSliderComponent,
  ],
})
export class RangeSliderModule {
}
