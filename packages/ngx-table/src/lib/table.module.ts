import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { TableHelperService } from './services/table-helper.service';
import { ColumnSelectorComponent } from './components/column-selector/column-selector.component';
import { TableComponent } from './components/table/table.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    FormsModule,
  ],
  providers: [
    TableHelperService,
  ],
  declarations: [
    ColumnSelectorComponent,
    TableComponent,
    TableCellComponent,
    TableHeaderComponent,
  ],
  exports: [
    ColumnSelectorComponent,
    TableComponent,
    TableCellComponent,
    TableHeaderComponent,
  ],
})
export class TableModule {
}
