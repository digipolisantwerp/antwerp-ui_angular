import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LabelsModule } from '@acpaas-ui/labels';

import { StatusbarComponent } from './components/status-bar.component';
import { STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES } from './components/status-bar.conf';
import { StatusbarAvailableTypes } from './types/status-bar.types';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        LabelsModule,
    ],
    declarations: [
        StatusbarComponent
    ],
    exports: [
        StatusbarComponent
    ],
    providers: [
        { provide: STATUSBAR_AVAILABLE_TYPES, useValue: STATUSBAR_DEFAULT_TYPES }
    ]
})
export class StatusbarModule {
    static forChild(
        availableTypes: StatusbarAvailableTypes
    ): ModuleWithProviders {
        return {
            ngModule: StatusbarModule,
            providers: [
                { provide: STATUSBAR_AVAILABLE_TYPES, useValue: availableTypes }
            ]
        };
    }
}
