import { Component } from '@angular/core';
import { LocalstorageService } from '@acpaas-ui/ngx-components/localstorage';

@Component({
	templateUrl: './demo.page.html',
	providers: [ LocalstorageService ],
})
export class LocalstorageDemoPageComponent {

	public user: any;
	public item: any;
	public timesUsed: any;

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
public timesUsed: any;

constructor(
	private localstorageService: LocalstorageService
) {
	this.user = this.localstorageService.select('user');
	this.timesUsed = 0;
	this.localstorageService.setItem('number', this.timesUsed);
}

loggedIn(): void {
	this.localstorageService.setItem('user', 'You are logged in');
}

loggedOut(): void {
	this.localstorageService.setItem('user', 'You are logged out');
}

init(): void {
	this.localstorageService.removeItem('user');
	this.timesUsed = this.timesUsed + 1;
	this.localstorageService.setItem('number', this.timesUsed);
}

clear(): void {
	this.localstorageService.clear('user', 'number');
}

getItem(): any {
	this.item = this.localstorageService.getItem('user');
	this.timesUsed = this.localstorageService.getItem('number');
}`;

	public example = `<div class="u-margin-bottom">
	<button (click)="loggedIn()" class="a-button u-margin-right">
		User: Log in
	</button>
	<button (click)="loggedOut()" class="a-button u-margin-right">
		User: Log out
	</button>
	<button (click)="init()" class="a-button u-margin-right">
		User: init
	</button>
	<button (click)="clear()" class="a-button">
		User and number: clear
	</button>
</div>
<div class="u-margin-bottom">
	<button (click)="getItem()" class="a-button u-margin-right">
		Get items from localstorage
	</button>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">User: {{ this.item }}</label>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">number: You clicked the user init button this many times: {{ this.timesUsed }}</label>
</div>`;

	constructor(
		private localstorageService: LocalstorageService
	) {
		this.user = this.localstorageService.select('user');
		this.timesUsed = 0;
		this.localstorageService.setItem('number', this.timesUsed);
	}

	loggedIn(): void {
		this.localstorageService.setItem('user', 'You are logged in');
	}

	loggedOut(): void {
		this.localstorageService.setItem('user', 'You are logged out');
	}

	init(): void {
		this.localstorageService.removeItem('user');
		this.timesUsed = this.timesUsed + 1;
		this.localstorageService.setItem('number', this.timesUsed);
	}

	clear(): void {
		this.localstorageService.clear('user', 'number');
	}

	getItem(): any {
		this.item = this.localstorageService.getItem('user');
		this.timesUsed = this.localstorageService.getItem('number');
	}
}
