import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {ExamplesModule} from '../examples/examples.module';
import {AuiModule} from '../aui/aui.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HeroComponent} from './components/hero/hero.component';
import {RegistryComponent} from './components/registry/registry.component';
import {ModulesPageComponent} from './pages/modules/modules.page';
import {NotFoundPageComponent} from './pages/not-found/not-found.page';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    RegistryComponent,
    ModulesPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AuiModule,
    ExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
