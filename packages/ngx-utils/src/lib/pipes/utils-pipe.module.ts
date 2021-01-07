import {NgModule} from '@angular/core';
import {BytesPipe} from './bytes.pipe';

@NgModule({
  declarations: [
    BytesPipe
  ],
  exports: [
    BytesPipe
  ],
  providers: [
    BytesPipe
  ]
})
export class UtilsPipeModule {
}
