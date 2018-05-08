import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LogoComponent
    ],
    exports: [
        LogoComponent
    ]
})
export class LogoModule {
}
