import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '@acpaas-ui/ngx-components/avatar';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		AvatarModule,
	],
	declarations: [
		Pages,
	],
})
export class AvatarExamplesModule {}
