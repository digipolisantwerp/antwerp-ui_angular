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
	WysiwygModule,
} from '@acpaas-ui/ngx-components/forms';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		DatepickerModule.forChild([
			'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
		], [
			'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
		], {
			ERRORS_INVALID_DATE: 'Ongeldige datum.',
			ERRORS_INVALID_RANGE: 'Deze datum kan niet gekozen worden.',
		}),
		FormsModule,
		RangeSliderModule,
		CodeSnippetModule,
		FormsModule,
		AutoCompleteModule,
		CodeSnippetModule,
 		MaskModule,
		TimepickerModule,
		WysiwygModule,
	],
	declarations: [
		Pages,
	],
})
export class FormsExamplesModule {}
