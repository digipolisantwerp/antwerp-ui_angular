import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from 'ng2-ckeditor';
import {WysiwygComponent} from './components/wysiwyg/wysiwyg.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
  ],
  declarations: [
    WysiwygComponent,
  ],
  exports: [
    WysiwygComponent,
  ],
})
export class WysiwygModule {
}
