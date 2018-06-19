import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Components } from './components/index';
import { FilterService } from './services/filter.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		Components,
	],
	providers: [
		FilterService,
	],
	exports: [
		Components,
	],
})
export class FilterModule {}
