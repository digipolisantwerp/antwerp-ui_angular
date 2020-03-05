import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaneComponent} from './components/pane/pane.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PaneComponent,
  ],
  exports: [
    PaneComponent,
  ],
})
export class PaneModule {
}
