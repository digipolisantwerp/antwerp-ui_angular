import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero.component';
import { HeroCardDirective } from './directives/hero-card.directive';
import { HeroCtaDirective } from './directives/hero-cta.directive';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        HeroComponent,
        HeroCardDirective,
        HeroCtaDirective
    ],
    exports: [
        HeroComponent,
        HeroCardDirective,
        HeroCtaDirective
    ]
})
export class HeroModule {
}
