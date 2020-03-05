import {NgModule} from '@angular/core';

import {WINDOW_PROVIDERS} from './services/window.service';

@NgModule({
  providers: [
    WINDOW_PROVIDERS,
  ],
})
export class WindowModule {
}
