import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyoutModule } from '../flyout';

import { FlyoutButtonComponent } from './components/flyout-button.component';

@NgModule({
    imports: [
        CommonModule,
        FlyoutModule
    ],
    declarations: [
        FlyoutButtonComponent
    ],
    exports: [
        FlyoutButtonComponent
    ]
})
export class FlyoutButtonModule {
}
