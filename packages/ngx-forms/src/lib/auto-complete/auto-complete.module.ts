import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlyoutModule} from '@acpaas-ui/ngx-flyout';
import {SelectableListModule} from '@acpaas-ui/ngx-selectable-list';
import {MaskModule} from '../mask/mask.module';
import {SearchService} from '../shared/services/search.service';
import {AutoCompleteComponent} from './components/auto-complete/auto-complete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlyoutModule,
    SelectableListModule,
    MaskModule,
  ],
  declarations: [
    AutoCompleteComponent,
  ],
  exports: [
    AutoCompleteComponent,
  ],
  providers: [
    SearchService,
  ],
})
export class AutoCompleteModule {
}
