import {NgModule} from '@angular/core';

import {Pipes} from './pipes';

@NgModule({
  declarations: [
    Pipes,
  ],
  exports: [
    Pipes,
  ],
})
export class LabelsModule {
}
