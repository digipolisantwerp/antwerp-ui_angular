import { NgModule } from '@angular/core';

import { InterpolateLabelPipe, PluralizeLabelPipe } from './labels.pipe';

@NgModule({
    declarations: [
        InterpolateLabelPipe,
        PluralizeLabelPipe
    ],
    exports: [
        InterpolateLabelPipe,
        PluralizeLabelPipe
    ]
})
export class LabelsModule {
}
