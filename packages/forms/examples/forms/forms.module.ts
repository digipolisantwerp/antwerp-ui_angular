import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
	AutoCompleteModule,
	DatepickerModule,
	MaskModule,
	RangeSliderModule,
	TimepickerModule,
	UploadModule,
	WysiwygModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		AutoCompleteModule,
		CodeSnippetModule,
		DatepickerModule.forChild([
			'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
		], [
			'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
		], {
			ERRORS_INVALID_DATE: 'Ongeldige datum.',
			ERRORS_INVALID_RANGE: 'Deze datum kan niet gekozen worden.',
		}),
		MaskModule,
		RangeSliderModule,
		TimepickerModule,
		UploadModule,
		WysiwygModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
