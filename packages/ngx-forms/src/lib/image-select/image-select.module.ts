import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectComponent } from './components/image-select/image-select.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ImageSelectComponent,
  ],
  exports: [
    ImageSelectComponent,
  ],
})
export class ImageSelectModule {

}
