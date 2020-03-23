import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterService} from './services/filter.service';
import {CheckboxFilterComponent} from './components/checkbox-filter/checkbox-filter.component';
import {InputFilterComponent} from './components/input-filter/input-filter.component';
import {SelectFilterComponent} from './components/select-filter/select-filter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CheckboxFilterComponent,
    InputFilterComponent,
    SelectFilterComponent
  ],
  providers: [
    FilterService,
  ],
  exports: [
    CheckboxFilterComponent,
    InputFilterComponent,
    SelectFilterComponent
  ],
})
export class FilterModule {
}
