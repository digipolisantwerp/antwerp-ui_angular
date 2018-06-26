import { EventEmitter, DoCheck } from '@angular/core';
import { Filter } from '@acpaas-ui/ngx-components/utils';
export declare class TableBarComponent implements DoCheck {
    filters: Filter[];
    testFilter: Filter;
    filter: EventEmitter<{}>;
    open: boolean;
    invisibleItems: boolean;
    ref: any;
    ngDoCheck(): void;
    isInVisible(rectContainer: any, rectChild: any): boolean;
    countInvisibleItems(): void;
    toggle(): void;
}
