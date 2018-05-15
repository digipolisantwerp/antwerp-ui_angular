import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Components } from './components';
import { Directives } from './directives';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
		...Components,
		...Directives,
    ],
    exports: [
		...Components,
		...Directives,
    ],
})
export class SidebarModule { }
