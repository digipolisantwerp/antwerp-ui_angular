import { Routes } from '@angular/router';

import { FormsDemoPageComponent } from './pages/demo/demo.page';
import { FormsAutocompleteDemoPageComponent } from './pages/autocomplete/autocomplete.page';
import { FormsDatepickerDemoPageComponent } from './pages/datepicker/datepicker.page';
import { FormsFieldErrorsDemoPageComponent } from './pages/field-errors/field-errors.page';
import { FormsMaskDemoPageComponent } from './pages/mask/mask.page';
import { FormsRangeSliderDemoPageComponent } from './pages/range-slider/range-slider.page';
import { FormsSearchFilterDemoPageComponent } from './pages/search-filter/search-filter.page';
import { FormsTimepickerDemoPageComponent } from './pages/timepicker/timepicker.page';
import { FormsUploadDemoPageComponent } from './pages/upload/upload.page';
import { FormsWysiwygDemoPageComponent } from './pages/wysiwyg/wysiwyg.page';

export const FORMS_EXAMPLES_ROUTES: Routes = [
	{
		component: FormsDemoPageComponent,
		path: '',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'autocomplete',
			},
			{
				path: 'autocomplete',
				pathMatch: 'full',
				component: FormsAutocompleteDemoPageComponent,
			},
			{
				path: 'datepicker',
				pathMatch: 'full',
				component: FormsDatepickerDemoPageComponent,
			},
			{
				path: 'field-errors',
				pathMatch: 'full',
				component: FormsFieldErrorsDemoPageComponent,
			},
			{
				path: 'mask',
				pathMatch: 'full',
				component: FormsMaskDemoPageComponent,
			},
			{
				path: 'range-slider',
				pathMatch: 'full',
				component: FormsRangeSliderDemoPageComponent,
			},
			{
				path: 'search-filter',
				pathMatch: 'full',
				component: FormsSearchFilterDemoPageComponent,
			},
			{
				path: 'timepicker',
				pathMatch: 'full',
				component: FormsTimepickerDemoPageComponent,
			},
			{
				path: 'upload',
				pathMatch: 'full',
				component: FormsUploadDemoPageComponent,
			},
			{
				path: 'wysiwyg',
				pathMatch: 'full',
				component: FormsWysiwygDemoPageComponent,
			},
		],
	},
];
