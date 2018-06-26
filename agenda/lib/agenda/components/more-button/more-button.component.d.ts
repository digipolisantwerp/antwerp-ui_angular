import { EventEmitter } from '@angular/core';
export declare class MoreButtonComponent {
    label: any;
    hiddenEvents: number;
    clickMore: EventEmitter<{}>;
    constructor(label: any);
    emitClickMore(event: MouseEvent): void;
}
