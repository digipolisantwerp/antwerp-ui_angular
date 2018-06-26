import { EventEmitter, OnChanges } from '@angular/core';
import { PaginationDisplay } from '../../types/pagination.types';
export declare class PaginationComponent implements OnChanges {
    ariaNavigationLabel: string;
    ariaPreviousLabel: string;
    ariaNextLabel: string;
    currentPage: number;
    display: PaginationDisplay;
    itemsPerPage: number;
    styling: string;
    totalValues: number;
    update: EventEmitter<{}>;
    totalPages: number;
    numbers: string[];
    instanceId: string;
    ngOnChanges(): void;
    next(): boolean;
    prev(): boolean;
    onUpdate(i: number | string): boolean;
    private setValues();
}
