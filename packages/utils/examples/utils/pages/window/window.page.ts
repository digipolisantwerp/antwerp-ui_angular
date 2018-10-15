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
	windowObject: Window;

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

	public codeExampleJS3 = `windowObject: Window;
constructor(@Inject(WINDOW) private window) {
	this.windowObject = window;
}`;

	public codeExampleHTML = `<dl>
	<dt>innerWidth:</dt>
		<dd>{{ windowObject.innerHeight }}</dd>
	<dt>innerHeight:</dt>
		<dd>{{ windowObject.innerWidth }}</dd>
</dl>`;

	constructor(@Inject(WINDOW) private window) {
		this.windowObject = window;
	}
}
