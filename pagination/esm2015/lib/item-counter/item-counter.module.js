/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';
import { Components } from './components/index';
import { ITEM_COUNTER_LABEL, ITEMS_PER_PAGE_LABEL } from './item-counter.conf';
const ɵ0 = undefined, ɵ1 = undefined;
export class ItemCounterModule {
    /**
     * @param {?} itemCounterLabel
     * @param {?} itemsPerPageLabel
     * @return {?}
     */
    static forChild(itemCounterLabel, itemsPerPageLabel) {
        return {
            ngModule: ItemCounterModule,
            providers: [
                { provide: ITEM_COUNTER_LABEL, useValue: itemCounterLabel },
                { provide: ITEMS_PER_PAGE_LABEL, useValue: itemsPerPageLabel },
            ],
        };
    }
}
ItemCounterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    LabelsModule,
                ],
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    { provide: ITEM_COUNTER_LABEL, useValue: ɵ0 },
                    { provide: ITEMS_PER_PAGE_LABEL, useValue: ɵ1 },
                ],
            },] },
];
export { ɵ0, ɵ1 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1jb3VudGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BhZ2luYXRpb24vIiwic291cmNlcyI6WyJsaWIvaXRlbS1jb3VudGVyL2l0ZW0tY291bnRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBUyxNQUFNLGlDQUFpQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztXQWVwQyxTQUFTLE9BQ1AsU0FBUztBQUd0RCxNQUFNOzs7Ozs7SUFDTCxNQUFNLENBQUMsUUFBUSxDQUNkLGdCQUF1QixFQUN2QixpQkFBd0I7UUFFeEIsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2dCQUMzRCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7YUFDOUQ7U0FDRCxDQUFDO0tBQ0Y7OztZQTdCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxJQUFXLEVBQUU7b0JBQ3BELEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsSUFBVyxFQUFFO2lCQUN0RDthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IExhYmVsc01vZHVsZSwgTGFiZWwgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3V0aWxzJztcblxuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9pbmRleCc7XG5cbmltcG9ydCB7IElURU1fQ09VTlRFUl9MQUJFTCwgSVRFTVNfUEVSX1BBR0VfTEFCRUwgfSBmcm9tICcuL2l0ZW0tY291bnRlci5jb25mJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRMYWJlbHNNb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IElURU1fQ09VTlRFUl9MQUJFTCwgdXNlVmFsdWU6IHVuZGVmaW5lZCB9LFxuXHRcdHsgcHJvdmlkZTogSVRFTVNfUEVSX1BBR0VfTEFCRUwsIHVzZVZhbHVlOiB1bmRlZmluZWQgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvdW50ZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yQ2hpbGQoXG5cdFx0aXRlbUNvdW50ZXJMYWJlbDogTGFiZWwsXG5cdFx0aXRlbXNQZXJQYWdlTGFiZWw6IExhYmVsXG5cdCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogSXRlbUNvdW50ZXJNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBJVEVNX0NPVU5URVJfTEFCRUwsIHVzZVZhbHVlOiBpdGVtQ291bnRlckxhYmVsIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogSVRFTVNfUEVSX1BBR0VfTEFCRUwsIHVzZVZhbHVlOiBpdGVtc1BlclBhZ2VMYWJlbCB9LFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG59XG4iXX0=