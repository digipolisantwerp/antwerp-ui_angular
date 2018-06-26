/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TableHelperService } from '../../services/table-helper.service';
import * as DEFAULT_MESSAGES from '../table.messages';
export class TableComponent {
    /**
     * @param {?} tableHelper
     */
    constructor(tableHelper) {
        this.tableHelper = tableHelper;
        this.rows = [];
        this.columns = [];
        this.loading = false;
        this.responsive = true;
        this.hasClickAction = false;
        this.noDataMessage = DEFAULT_MESSAGES.NO_DATA;
        this.loadDataMessage = DEFAULT_MESSAGES.LOAD_DATA;
        this.noColumnsMessage = DEFAULT_MESSAGES.NO_COLUMNS;
        this.orderBy = new EventEmitter();
        this.rowClicked = new EventEmitter();
    }
    /**
     * @param {?} key
     * @param {?} order
     * @return {?}
     */
    sort(key, order) {
        const /** @type {?} */ prop = this.tableHelper.getValue(key);
        this.activeSorting = { key: prop, order };
        this.orderBy.emit({ key: prop, order });
    }
    /**
     * @param {?} rowData
     * @return {?}
     */
    clickRow(rowData) {
        if (this.hasClickAction) {
            this.rowClicked.emit(rowData);
        }
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-table',
                template: `<div [ngClass]="{'a-table__wrapper-responsive': responsive}">
	<table class="a-table a-table--striped aui-table">
		<thead *ngIf="columns.length > 0">
			<tr>
				<th *ngFor="let column of columns" [ngClass]="tableHelper.getClass(column)">
					<ng-container *ngIf="column.headerComponent">
						<aui-table-header [label]="tableHelper.getLabel(column)" [value]="tableHelper.getValue(column)" [component]="column.headerComponent"></aui-table-header>
					</ng-container>
					<ng-container *ngIf="!column.headerComponent">
						<ng-container *ngIf="activeSorting">
							<button *ngIf="!column.disableSorting && tableHelper.getValue(column) !== activeSorting?.key" class="a-button a-button--tiny a-button--transparent has-icon-right" (click)="sort(column, 'asc')">
								{{ tableHelper.getLabel(column) }} <span class="fa fa-sort"></span>
							</button>
							<button *ngIf="!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'desc'" class=" a-button a-button--tiny a-button--transparent has-icon-right" (click)="sort(column, 'asc')">
								{{ tableHelper.getLabel(column) }} <span class="fa fa-sort-desc"></span>
							</button>
							<button *ngIf="!column.disableSorting && tableHelper.getValue(column) === activeSorting?.key && activeSorting?.order === 'asc'" class=" a-button a-button--tiny a-button--transparent has-icon-right" (click)="sort(column, 'desc')">
								{{ tableHelper.getLabel(column) }} <span class="fa fa-sort-asc"></span>
							</button>
							<ng-container *ngIf="column.disableSorting">
								{{ tableHelper.getLabel(column) }}
							</ng-container>
						</ng-container>
						<ng-container *ngIf="!activeSorting">
							{{ tableHelper.getLabel(column) }}
						</ng-container>
					</ng-container>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr *ngIf="loading">
				<td [colSpan]="columns.length">
					<div class="table-loading">
						{{ loadDataMessage }} <span class="a-spinner"></span>
					</div>
				</td>
			</tr>
			<tr *ngIf="!loading && columns.length === 0">
				<td>{{ noColumnsMessage }}</td>
			</tr>
			<tr *ngIf="!loading && (!rows || rows.length === 0)">
				<td [colSpan]="columns.length">{{ noDataMessage }}</td>
			</tr>
			<ng-container *ngIf="!loading && columns.length > 0">
				<tr *ngFor="let row of rows; let rowIndex = index" (click)="clickRow(row)" [ngClass]="{'a-table--clickable': hasClickAction}">
					<td *ngFor="let column of columns" [ngClass]="tableHelper.getClass(column)">
						<aui-table-cell [value]="tableHelper.formatValue(row, column, rowIndex)" [component]="column.component"></aui-table-cell>
					</td>
				</tr>
			</ng-container>
		</tbody>
	</table>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: TableHelperService }
];
TableComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    loading: [{ type: Input }],
    responsive: [{ type: Input }],
    hasClickAction: [{ type: Input }],
    activeSorting: [{ type: Input }],
    noDataMessage: [{ type: Input }],
    loadDataMessage: [{ type: Input }],
    noColumnsMessage: [{ type: Input }],
    orderBy: [{ type: Output }],
    rowClicked: [{ type: Output }]
};
function TableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.columns;
    /** @type {?} */
    TableComponent.prototype.loading;
    /** @type {?} */
    TableComponent.prototype.responsive;
    /** @type {?} */
    TableComponent.prototype.hasClickAction;
    /** @type {?} */
    TableComponent.prototype.activeSorting;
    /** @type {?} */
    TableComponent.prototype.noDataMessage;
    /** @type {?} */
    TableComponent.prototype.loadDataMessage;
    /** @type {?} */
    TableComponent.prototype.noColumnsMessage;
    /** @type {?} */
    TableComponent.prototype.orderBy;
    /** @type {?} */
    TableComponent.prototype.rowClicked;
    /** @type {?} */
    TableComponent.prototype.tableHelper;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxLQUFLLGdCQUFnQixNQUFNLG1CQUFtQixDQUFDO0FBOER0RCxNQUFNOzs7O0lBY0wsWUFDUTtRQUFBLGdCQUFXLEdBQVgsV0FBVztvQkFkSSxFQUFFO3VCQUNrQixFQUFFO3VCQUMxQixLQUFLOzBCQUNGLElBQUk7OEJBQ0EsS0FBSzs2QkFFTixnQkFBZ0IsQ0FBQyxPQUFPOytCQUN0QixnQkFBZ0IsQ0FBQyxTQUFTO2dDQUN6QixnQkFBZ0IsQ0FBQyxVQUFVO3VCQUVoQixJQUFJLFlBQVksRUFBRTswQkFDZixJQUFJLFlBQVksRUFBRTtLQUl4RDs7Ozs7O0lBRUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLO1FBQ3JCLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR2hDLFFBQVEsQ0FBQyxPQUFZO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCOzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzRFY7Z0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFFL0M7Ozs7WUEvRFEsa0JBQWtCOzs7bUJBaUV6QixLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztzQkFFTCxNQUFNO3lCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVGFibGVIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGFibGUtaGVscGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVDb2x1bW4sIE9yZGVyQnkgfSBmcm9tICcuLi8uLi90eXBlcy90YWJsZS50eXBlcyc7XG5pbXBvcnQgKiBhcyBERUZBVUxUX01FU1NBR0VTIGZyb20gJy4uL3RhYmxlLm1lc3NhZ2VzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXRhYmxlJyxcblx0dGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cInsnYS10YWJsZV9fd3JhcHBlci1yZXNwb25zaXZlJzogcmVzcG9uc2l2ZX1cIj5cblx0PHRhYmxlIGNsYXNzPVwiYS10YWJsZSBhLXRhYmxlLS1zdHJpcGVkIGF1aS10YWJsZVwiPlxuXHRcdDx0aGVhZCAqbmdJZj1cImNvbHVtbnMubGVuZ3RoID4gMFwiPlxuXHRcdFx0PHRyPlxuXHRcdFx0XHQ8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25nQ2xhc3NdPVwidGFibGVIZWxwZXIuZ2V0Q2xhc3MoY29sdW1uKVwiPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uaGVhZGVyQ29tcG9uZW50XCI+XG5cdFx0XHRcdFx0XHQ8YXVpLXRhYmxlLWhlYWRlciBbbGFiZWxdPVwidGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKVwiIFt2YWx1ZV09XCJ0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pXCIgW2NvbXBvbmVudF09XCJjb2x1bW4uaGVhZGVyQ29tcG9uZW50XCI+PC9hdWktdGFibGUtaGVhZGVyPlxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhY29sdW1uLmhlYWRlckNvbXBvbmVudFwiPlxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZVNvcnRpbmdcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cIiFjb2x1bW4uZGlzYWJsZVNvcnRpbmcgJiYgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSAhPT0gYWN0aXZlU29ydGluZz8ua2V5XCIgY2xhc3M9XCJhLWJ1dHRvbiBhLWJ1dHRvbi0tdGlueSBhLWJ1dHRvbi0tdHJhbnNwYXJlbnQgaGFzLWljb24tcmlnaHRcIiAoY2xpY2spPVwic29ydChjb2x1bW4sICdhc2MnKVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX0gPHNwYW4gY2xhc3M9XCJmYSBmYS1zb3J0XCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cIiFjb2x1bW4uZGlzYWJsZVNvcnRpbmcgJiYgdGFibGVIZWxwZXIuZ2V0VmFsdWUoY29sdW1uKSA9PT0gYWN0aXZlU29ydGluZz8ua2V5ICYmIGFjdGl2ZVNvcnRpbmc/Lm9yZGVyID09PSAnZGVzYydcIiBjbGFzcz1cIiBhLWJ1dHRvbiBhLWJ1dHRvbi0tdGlueSBhLWJ1dHRvbi0tdHJhbnNwYXJlbnQgaGFzLWljb24tcmlnaHRcIiAoY2xpY2spPVwic29ydChjb2x1bW4sICdhc2MnKVwiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX0gPHNwYW4gY2xhc3M9XCJmYSBmYS1zb3J0LWRlc2NcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiIWNvbHVtbi5kaXNhYmxlU29ydGluZyAmJiB0YWJsZUhlbHBlci5nZXRWYWx1ZShjb2x1bW4pID09PSBhY3RpdmVTb3J0aW5nPy5rZXkgJiYgYWN0aXZlU29ydGluZz8ub3JkZXIgPT09ICdhc2MnXCIgY2xhc3M9XCIgYS1idXR0b24gYS1idXR0b24tLXRpbnkgYS1idXR0b24tLXRyYW5zcGFyZW50IGhhcy1pY29uLXJpZ2h0XCIgKGNsaWNrKT1cInNvcnQoY29sdW1uLCAnZGVzYycpXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3sgdGFibGVIZWxwZXIuZ2V0TGFiZWwoY29sdW1uKSB9fSA8c3BhbiBjbGFzcz1cImZhIGZhLXNvcnQtYXNjXCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbHVtbi5kaXNhYmxlU29ydGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdHt7IHRhYmxlSGVscGVyLmdldExhYmVsKGNvbHVtbikgfX1cblx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhYWN0aXZlU29ydGluZ1wiPlxuXHRcdFx0XHRcdFx0XHR7eyB0YWJsZUhlbHBlci5nZXRMYWJlbChjb2x1bW4pIH19XG5cdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblx0XHRcdFx0PC90aD5cblx0XHRcdDwvdHI+XG5cdFx0PC90aGVhZD5cblx0XHQ8dGJvZHk+XG5cdFx0XHQ8dHIgKm5nSWY9XCJsb2FkaW5nXCI+XG5cdFx0XHRcdDx0ZCBbY29sU3Bhbl09XCJjb2x1bW5zLmxlbmd0aFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWJsZS1sb2FkaW5nXCI+XG5cdFx0XHRcdFx0XHR7eyBsb2FkRGF0YU1lc3NhZ2UgfX0gPHNwYW4gY2xhc3M9XCJhLXNwaW5uZXJcIj48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PHRyICpuZ0lmPVwiIWxvYWRpbmcgJiYgY29sdW1ucy5sZW5ndGggPT09IDBcIj5cblx0XHRcdFx0PHRkPnt7IG5vQ29sdW1uc01lc3NhZ2UgfX08L3RkPlxuXHRcdFx0PC90cj5cblx0XHRcdDx0ciAqbmdJZj1cIiFsb2FkaW5nICYmICghcm93cyB8fCByb3dzLmxlbmd0aCA9PT0gMClcIj5cblx0XHRcdFx0PHRkIFtjb2xTcGFuXT1cImNvbHVtbnMubGVuZ3RoXCI+e3sgbm9EYXRhTWVzc2FnZSB9fTwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsb2FkaW5nICYmIGNvbHVtbnMubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHQ8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzOyBsZXQgcm93SW5kZXggPSBpbmRleFwiIChjbGljayk9XCJjbGlja1Jvdyhyb3cpXCIgW25nQ2xhc3NdPVwieydhLXRhYmxlLS1jbGlja2FibGUnOiBoYXNDbGlja0FjdGlvbn1cIj5cblx0XHRcdFx0XHQ8dGQgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW25nQ2xhc3NdPVwidGFibGVIZWxwZXIuZ2V0Q2xhc3MoY29sdW1uKVwiPlxuXHRcdFx0XHRcdFx0PGF1aS10YWJsZS1jZWxsIFt2YWx1ZV09XCJ0YWJsZUhlbHBlci5mb3JtYXRWYWx1ZShyb3csIGNvbHVtbiwgcm93SW5kZXgpXCIgW2NvbXBvbmVudF09XCJjb2x1bW4uY29tcG9uZW50XCI+PC9hdWktdGFibGUtY2VsbD5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC9uZy1jb250YWluZXI+XG5cdFx0PC90Ym9keT5cblx0PC90YWJsZT5cbjwvZGl2PlxuYCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSByb3dzOiBhbnlbXSA9IFtdO1xuXHRASW5wdXQoKSBjb2x1bW5zOiAoVGFibGVDb2x1bW58c3RyaW5nKVtdID0gW107XG5cdEBJbnB1dCgpIGxvYWRpbmcgPSBmYWxzZTtcblx0QElucHV0KCkgcmVzcG9uc2l2ZSA9IHRydWU7XG5cdEBJbnB1dCgpIGhhc0NsaWNrQWN0aW9uID0gZmFsc2U7XG5cdEBJbnB1dCgpIGFjdGl2ZVNvcnRpbmc6IE9yZGVyQnk7IC8vIEp1c3QgYSBwcm9wZXJ0eSB0byB1c2UgaW4gdGhlIHRlbXBsYXRlLCBub3QgZnVuY3Rpb25hbFxuXHRASW5wdXQoKSBub0RhdGFNZXNzYWdlID0gREVGQVVMVF9NRVNTQUdFUy5OT19EQVRBO1xuXHRASW5wdXQoKSBsb2FkRGF0YU1lc3NhZ2UgPSBERUZBVUxUX01FU1NBR0VTLkxPQURfREFUQTtcblx0QElucHV0KCkgbm9Db2x1bW5zTWVzc2FnZSA9IERFRkFVTFRfTUVTU0FHRVMuTk9fQ09MVU1OUztcblxuXHRAT3V0cHV0KCkgb3JkZXJCeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSByb3dDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgdGFibGVIZWxwZXI6IFRhYmxlSGVscGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIHNvcnQoa2V5LCBvcmRlcik6IHZvaWQge1xuXHRcdGNvbnN0IHByb3AgPSB0aGlzLnRhYmxlSGVscGVyLmdldFZhbHVlKGtleSk7XG5cdFx0dGhpcy5hY3RpdmVTb3J0aW5nID0ge2tleTogcHJvcCwgb3JkZXJ9O1xuXHRcdHRoaXMub3JkZXJCeS5lbWl0KHtrZXk6IHByb3AsIG9yZGVyfSk7XG5cdH1cblxuXHRwdWJsaWMgY2xpY2tSb3cocm93RGF0YTogYW55KTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaGFzQ2xpY2tBY3Rpb24pIHtcblx0XHRcdHRoaXMucm93Q2xpY2tlZC5lbWl0KHJvd0RhdGEpO1xuXHRcdH1cblx0fVxufVxuIl19