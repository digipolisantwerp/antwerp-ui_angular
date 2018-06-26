import { EventEmitter, TemplateRef } from '@angular/core';
export declare class SelectableListComponent {
    items: any[];
    index: number;
    search: string;
    label: string;
    itemTemplate: TemplateRef<any>;
    selected: EventEmitter<any>;
    template: TemplateRef<any>;
    selectItem(item: any): void;
    formatLabel(input: any): any;
}
