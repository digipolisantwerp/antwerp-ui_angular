import { Routes } from '@angular/router';

import { FormsDemoPageComponent } from './pages/demo/demo.page';
import { FormsAutocompleteDemoPageComponent } from './pages/autocomplete/autocomplete.page';
import { FormsDatepickerDemoPageComponent } from './pages/datepicker/datepicker.page';
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
				data: { meta: { title: 'Autocomplete' } },

			},
			{
				path: 'datepicker',
				pathMatch: 'full',
				component: FormsDatepickerDemoPageComponent,
				data: { meta: { title: 'Datepicker' } },

			},
			{
				path: 'mask',
				pathMatch: 'full',
				component: FormsMaskDemoPageComponent,
				data: { meta: { title: 'Mask' } },

			},
			{
				path: 'range-slider',
				pathMatch: 'full',
				component: FormsRangeSliderDemoPageComponent,
				data: { meta: { title: 'Range Slider' } },
			},
			{
				path: 'search-filter',
				pathMatch: 'full',
				component: FormsSearchFilterDemoPageComponent,
				data: { meta: { title: 'Search Filter' } },
			},
			{
				path: 'timepicker',
				pathMatch: 'full',
				component: FormsTimepickerDemoPageComponent,
				data: { meta: { title: 'Timepicker' } },
			},
			{
				path: 'upload',
				pathMatch: 'full',
				component: FormsUploadDemoPageComponent,
				data: { meta: { title: 'Upload' } },
			},
			{
				path: 'wysiwyg',
				pathMatch: 'full',
				component: FormsWysiwygDemoPageComponent,
				data: { meta: { title: 'WYSIWYG' } },
			},
		],
	},
];
