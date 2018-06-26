import { EventEmitter } from '@angular/core';
export declare class PaneComponent {
    opened: boolean;
    side: string;
    backdrop: boolean;
    open: EventEmitter<{}>;
    close: EventEmitter<{}>;
    togglePane(): void;
    openPane(): void;
    closePane(): void;
}
