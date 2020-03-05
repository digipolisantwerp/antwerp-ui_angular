import {NgModule} from '@angular/core';
import {PluralizeLabelPipe} from './pipes/pluralize-label.pipe';
import {InterpolateLabelPipe} from './pipes/interpolate-label.pipe';

@NgModule({
  declarations: [
    PluralizeLabelPipe,
    InterpolateLabelPipe,
  ],
  exports: [
    PluralizeLabelPipe,
    InterpolateLabelPipe,
  ],
})
export class LabelsModule {
}
