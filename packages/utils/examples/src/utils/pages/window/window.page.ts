import { Component, Inject } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';

@Component({
	templateUrl: './window.page.html',
	// fix for `@Inject` and global interface type
	// https://github.com/angular/angular/issues/15640
	providers: [
		{
			provide: WINDOW,
			useValue: window,
		},
	],
})
export class UtilsWindowDemoPageComponent {
	public importModule = `import { WindowModule } from '@acpaas-ui/ngx-components/utils';

@NgModule({
	imports: [
		WindowModule
	],
	providers: [WINDOW_PROVIDERS],
})

export class AppModule {};`;

	public codeExampleJS1 = `import { WINDOW } from '@acpaas-ui/ngx-components/utils';`;

	public codeExampleJS2 = `@Component({
	templateUrl: './window.page.html',
	// fix for @Inject and global interface type
	// https://github.com/angular/angular/issues/15640
	providers: [
		{
			provide: WINDOW,
			useValue: window,
		},
	],
})`;

	public codeExampleJS3 = `public windowObject = this.window;
	constructor(
		@Inject(WINDOW) private window
	) {}`;

	public codeExampleHTML = `<dl>
	<dt>Height:</dt>
		<dd><pre>{{ windowObject.innerHeight }}</pre></dd>
	<dt>Width:</dt>
		<dd><pre>{{ windowObject.innerWidth }}</pre></dd>
</dl>`;
	public windowObject = this.window;
	constructor(
		@Inject(WINDOW) private window
	) {}
}
