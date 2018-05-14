import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer.component';
import { CopyrightComponent } from './components/copyright.component';
import { SubFooterComponent } from './components/subfooter.component';
import { FooterContentDirective } from './directives/content.directive';
import { FooterBottomDirective } from './directives/bottom.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FooterComponent,
        FooterContentDirective,
        FooterBottomDirective,
        CopyrightComponent,
        SubFooterComponent
    ],
    exports: [
        FooterComponent,
        FooterContentDirective,
        FooterBottomDirective,
        CopyrightComponent,
        SubFooterComponent
    ]
})
export class FooterModule {
}
