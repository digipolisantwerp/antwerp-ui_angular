import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Components } from './components/index';

import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CKEditorModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
})
export class WysiwygModule {
}
