import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@acpaas-ui/ngx-components/map';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { MapMockService} from './services/map.service';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		LeafletModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
	providers: [
		MapMockService,
	],
})
export class MapExamplesModule {}
