import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { Components } from './components';
import { Directives } from './directives';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
		...Components,
		...Directives,
    ],
    exports: [
		...Components,
		...Directives,
    ]
})
export class HeroModule {
}
