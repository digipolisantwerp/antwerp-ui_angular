import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TableHelperService} from './services/table-helper.service';
import {ColumnSelectorComponent} from './components/column-selector/column-selector.component';
import {TableComponent} from './components/table/table.component';
import {TableBarComponent} from './components/table-bar/table-bar.component';
import {TableCellComponent} from './components/table-cell/table-cell.component';
import {TableHeaderComponent} from './components/table-header/table-header.component';
import {TableBarItemDirective} from './directives/table-bar-item/table-bar-item.directive';
import {TableBarSearchDirective} from './directives/table-bar-search/table-bar-search.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    TableHelperService,
  ],
  declarations: [
    ColumnSelectorComponent,
    TableComponent,
    TableBarComponent,
    TableCellComponent,
    TableHeaderComponent,
    TableBarItemDirective,
    TableBarSearchDirective,
  ],
  exports: [
    ColumnSelectorComponent,
    TableComponent,
    TableBarComponent,
    TableCellComponent,
    TableHeaderComponent,
    TableBarItemDirective,
    TableBarSearchDirective,
  ],
})
export class TableModule {
}
