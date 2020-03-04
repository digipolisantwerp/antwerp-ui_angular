import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Components } from './components';
import { Directives } from './directives';

import { TableHelperService } from './services/table-helper.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	providers: [
		TableHelperService,
	],
	declarations: [
		Components,
		Directives,
	],
	exports: [
		Components,
		Directives,
	],
})
export class TableModule {}
