import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class AgendaDemoPageComponent {
	public javascript1 = `import { AgendaModule } from '@acpaas-ui/ngx-components/analytics';

@NgModule({
	imports: [
		AgendaModule
	]
});

export class AppModule {};`;
}
