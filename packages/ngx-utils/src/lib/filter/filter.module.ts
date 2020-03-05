import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterService} from './services/filter.service';
import {CheckboxFilterComponent, InputFilterComponent, SelectFilterComponent} from '../../public-api';

const COMPONENTS = [
  CheckboxFilterComponent,
  InputFilterComponent,
  SelectFilterComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    FilterService,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class FilterModule {
}
