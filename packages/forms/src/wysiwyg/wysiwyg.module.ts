import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { WysiwygComponent } from './components/wysiwyg.component';

import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule
    ],
    declarations: [
        WysiwygComponent
    ],
    exports: [
        WysiwygComponent
    ]
})
export class WysiwygModule {
}
