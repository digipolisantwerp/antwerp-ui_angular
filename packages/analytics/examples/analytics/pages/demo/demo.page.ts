import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class AnalyticsDemoPageComponent {
	public importModule = `import { AnalyticsModule } from '@acpaas-ui/ngx-components/analytics';

@NgModule({
  imports: [
    AnalyticsModule
  ]
});

export class AppModule {};`;

}
