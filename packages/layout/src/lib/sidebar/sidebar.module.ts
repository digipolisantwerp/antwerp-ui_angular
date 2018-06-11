import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Components } from './components/index';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [
		Components,
	],
	exports: [
		Components,
	],
})
export class SidebarModule { }
