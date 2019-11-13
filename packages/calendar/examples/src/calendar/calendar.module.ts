import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from '@acpaas-ui/ngx-components/calendar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CalendarModule.forChild([
			'Monday', 'Tuesdag', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
		], [
			'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
		]),
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class CalendarExamplesModule {}
