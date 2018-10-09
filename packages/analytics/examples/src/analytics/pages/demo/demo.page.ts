import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class AnalyticsDemoPageComponent {
	public javascript1 = `import { AnalyticsModule } from '@acpaas-ui/ngx-components/analytics';

@NgModule({
	imports: [
		AnalyticsModule
	]
});

export class AppModule {};`;

	public javascript2 = `{
	path: 'home',
	component: HomePage,
	data: {
		doNotTrack: true
	}
}`;

	public javascript3 = `import { GaService } from '@acpaas-ui/ngx-components/analytics';

constructor(
	private gaService: GaService
) {}`;

	public javascript4 = `this.gaService.setDimension('some-dimension', 'some-value');`;

	public javascript5 = `this.gaService.triggerPageView();`;

	public javascript6 = `this.gaService.triggerPageView('custom title', 'custom location', 'custom page');`;

	public javascript7 = `this.gaService.triggerEvent('button', 'click');`;

	public html1 = `<button gaEvent>Switch gender to male with directive</button>`;

	public html2 = `<button [gaEvent]="activeGender">Switch gender to male with directive</button>`;

}
