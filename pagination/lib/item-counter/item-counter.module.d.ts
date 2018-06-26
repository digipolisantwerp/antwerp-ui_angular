import { InjectionToken } from '@angular/core';
import { Label } from '@acpaas-ui/ngx-components/utils';
export declare class ItemCounterModule {
    static forChild(itemCounterLabel: Label, itemsPerPageLabel: Label): {
        ngModule: typeof ItemCounterModule;
        providers: {
            provide: InjectionToken<Label>;
            useValue: Label;
        }[];
    };
}
