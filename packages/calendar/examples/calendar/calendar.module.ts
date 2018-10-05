import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from '@acpaas-ui/ngx-components/calendar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CalendarModule.forChild([
			'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
			], [
			'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
		]),
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class CalendarExamplesModule {}
