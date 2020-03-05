import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectableListComponent} from './components/selectable-list/selectable-list.component';
import {SelectableActionsDirective} from './directives/selectable-actions.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SelectableListComponent,
    SelectableActionsDirective,
  ],
  exports: [
    SelectableListComponent,
    SelectableActionsDirective,
  ],
})
export class SelectableListModule {

}
