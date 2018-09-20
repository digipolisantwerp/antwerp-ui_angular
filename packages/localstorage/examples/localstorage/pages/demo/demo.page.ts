import { Component } from '@angular/core';
import { LocalstorageService } from '@acpaas-ui/ngx-components/localstorage';

@Component({
	templateUrl: './demo.page.html',
	providers: [ LocalstorageService ],
})
export class LocalstorageDemoPageComponent {

	public user: any;
	public item: any;

	public typescript1 = `import { LocalstorageModule } from '@acpaas-ui/localstorage';

@NgModule({
    imports: [
        LocalstorageModule.forRoot({
            storageType: 'sessionStorage',
            identifier: 'my-app-v1,
        })
    ]
})

export class AppModule {}`;

	public typescript2 = `public user: any;
public item: any;

constructor(
	private localstorageService: LocalstorageService
) {
	this.user = this.localstorageService.select('user');
}

loggedIn(): void {
	this.localstorageService.setItem('user', 'You are logged in');
}

loggedOut(): void {
	this.localstorageService.setItem('user', 'You are logged out');
}

init(): void {
	this.localstorageService.removeItem('user');
}

getItem(): any {
	this.item = this.localstorageService.getItem('user');
}`;

	public example = `<div class="u-margin-bottom">
	<button (click)="loggedIn()" class="a-button u-margin-right">
		Log in
	</button>
	<button (click)="loggedOut()" class="a-button u-margin-right">
		Log out
	</button>
	<button (click)="init()" class="a-button">
		Init
	</button>
</div>
<div class="u-margin-bottom">
	<button (click)="getItem()" class="a-button u-margin-right">
		Get item from local storage
	</button>
	<label class="a-input__label a-input__label--inline">{{ this.item }}</label>
</div>`;

	constructor(
		private localstorageService: LocalstorageService
	) {
		this.user = this.localstorageService.select('user');
	}

	loggedIn(): void {
		this.localstorageService.setItem('user', 'You are logged in');
	}

	loggedOut(): void {
		this.localstorageService.setItem('user', 'You are logged out');
	}

	init(): void {
		this.localstorageService.removeItem('user');
	}

	getItem(): any {
		this.item = this.localstorageService.getItem('user');
	}
}
