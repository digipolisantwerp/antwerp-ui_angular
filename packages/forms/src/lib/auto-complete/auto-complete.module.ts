import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { SelectableListModule } from '@acpaas-ui/selectable-list'; // TODO: fix import once package is added

import { MaskModule } from '../mask/mask.module';
import { SearchService } from '../shared/services/search.service';

import { Components } from './components';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FlyoutModule,
		SelectableListModule,
		MaskModule,
	],
	declarations: [
		...Components,
	],
	exports: [
		...Components,
	],
	providers: [
		SearchService,
	],
})
export class AutoCompleteModule {
}
