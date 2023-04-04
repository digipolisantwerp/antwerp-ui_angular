import { Component } from '@angular/core';

@Component({
  templateUrl: './aui-agenda.page.html',
})
export class AgendaDemoPageComponent {
  public javascript1 = `import { AgendaModule } from '@acpaas-ui/ngx-agenda';

@NgModule({
	imports: [
		AgendaModule
	]
});

export class AppModule {};`;
}
