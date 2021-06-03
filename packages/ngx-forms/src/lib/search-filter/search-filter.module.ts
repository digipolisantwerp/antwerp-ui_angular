import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/ngx-flyout';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FlyoutModule,
    FormsModule,
    IconModule,
  ],
  declarations: [
    SearchFilterComponent,
  ],
  exports: [
    SearchFilterComponent,
  ],
})
export class SearchFilterModule {
}
