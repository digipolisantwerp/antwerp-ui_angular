import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsModule } from '@acpaas-ui/labels';

import { FieldErrorComponent } from './components/field-error/field-error.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';

@NgModule({
    imports: [
        CommonModule,
        LabelsModule
    ],
    declarations: [
        FieldErrorsComponent,
        FieldErrorComponent
    ],
    exports: [
        FieldErrorsComponent,
        FieldErrorComponent
    ]
})
export class FieldErrorsModule {
}
