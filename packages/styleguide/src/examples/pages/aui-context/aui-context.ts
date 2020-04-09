import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ContextService} from '../../../../../ngx-context/src/public-api';


@Component({
  templateUrl: './aui-context.html',
  providers: [
    ContextService,
  ],
})
export class ContextDemoPageComponent implements OnInit, OnDestroy {
  public importModule = `import { ContextModule } from '@acpaas-ui/ngx-context';

@NgModule({
	imports: [
		ContextModule
	]
})`;
  public codeExampleJS1 = `@NgModule({
	imports: [
		ContextModule.forRoot({
			useTitleSuffix: true,
			extendTitle: true,
			titleDelimiter: ' | ',
			defaults: {
				titleSuffix: 'Context Module',
			},
			routerContext: true,
		}),
	]
})`;
  public codeExampleJS2 = `export const CONTEXT_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: ContextDemoPageComponent,
		pathMatch: 'full',
		data: {
			meta: {
				page: 'Context example page',
				title: 'Context',
				description: 'Description of the context example page',
				metatags: 'ACPaaS UI, Angular, context',
			},
		},
	},
];`;
  public codeExampleJS3 = `import { ContextService } from '@acpaas-ui/ngx-context';

@Component({
	providers: [
		ContextService,
	],
})

export class ContextDemoPageComponent {
	constructor(private contextService: ContextService) {}

	public setTitle() {
		this.contextService.updateContext({
			title: 'New context example title',
		});
	}
}`;
  public codeExampleHTML = `<button class="a-button" (click)="setTitle()">Set title</button>`;
  public pageTitle: string;
  public pageDescription: string;

  constructor(private contextService: ContextService, private meta: Meta, private titleService: Title) {
  }

  public setTitle() {
    this.contextService.updateContext({
      title: 'New context example title',
    });
    this.pageTitle = this.titleService.getTitle();
  }

  public ngOnInit() {
    this.pageTitle = this.titleService.getTitle();
    this.pageDescription = this.meta.getTag('name = "description"').content;
  }

  ngOnDestroy() {
    this.contextService.updateContext({
      title: 'ACPaaS UI Angular',
    });
  }
}
