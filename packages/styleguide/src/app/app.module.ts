import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Components} from './components';
import {Pages} from './pages';

import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {ExamplesModule} from '../examples/examples.module';
import {AuiModule} from '../aui/aui.module';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Pages,
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
