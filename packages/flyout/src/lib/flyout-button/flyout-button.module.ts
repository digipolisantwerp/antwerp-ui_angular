import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlyoutModule } from '../flyout';

import { Components } from './components';

@NgModule({
    imports: [
        CommonModule,
        FlyoutModule
    ],
    declarations: [
        ...Components,
    ],
    exports: [
        ...Components,
    ]
})
export class FlyoutButtonModule {
}
