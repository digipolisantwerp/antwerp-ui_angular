import { Component } from '@angular/core';
import { LocalstorageService } from '@acpaas-ui/ngx-components/localstorage';

@Component({
	templateUrl: './demo.page.html',
	providers: [ LocalstorageService ],
})
export class LocalstorageDemoPageComponent {

	public user: any;

	constructor(
		private localstorageService: LocalstorageService
	) {
		this.user = this.localstorageService.select('user');
	}

	public javascript1 = `import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';

@NgModule({
	imports: [
		SelectableListModule
	]
});

export class AppModule {};`;

	loggedIn(): void {
		this.localstorageService.setItem('user', true);
	}

	loggedOut(): void {
		this.localstorageService.setItem('user', false);
	}

	init(): void {
		this.localstorageService.removeItem('user');
	}

}
