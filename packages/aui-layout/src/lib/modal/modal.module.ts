import {NgModule} from '@angular/core';

import {Components, EntryComponents} from './components';
import {Directives} from './directives';
import {Services} from './services';

@NgModule({
  providers: [
    ...Services,
  ],
  declarations: [
    ...Components,
    ...Directives,
  ],
  exports: [
    ...Components,
    ...Directives,
  ],
  entryComponents: [
    ...EntryComponents,
  ],
})
export class ModalModule {
}
