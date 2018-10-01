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
			identifier: 'my-app-v1',
		})
	]
});

export class AppModule {};`;

	public typescript2 = `import { LocalstorageService } from '@acpaas-ui/ngx-components/localstorage';

public user: any;
public item: any;
public timesUsed: any;

constructor(
	private localstorageService: LocalstorageService
) {
	this.user = this.localstorageService.select('user');
	this.timesUsed = 0;
	this.localstorageService.setItem('number', this.timesUsed);
}

public loggedIn(): void {
	this.localstorageService.setItem('user', 'You are logged in');
}

public loggedOut(): void {
	this.localstorageService.setItem('user', 'You are logged out');
}

public init(): void {
	this.localstorageService.removeItem('user');
	this.timesUsed = this.timesUsed + 1;
	this.localstorageService.setItem('number', this.timesUsed);
}

public clear(): void {
	this.localstorageService.clear('user', 'number');
}

public getItem(): any {
	this.item = this.localstorageService.getItem('user');
	this.timesUsed = this.localstorageService.getItem('number');
}`;

	public example = `<div class="u-margin-bottom">
	<button (click)="loggedIn()" class="a-button u-margin-right">
		Log in
	</button>
	<button (click)="loggedOut()" class="a-button u-margin-right">
		Log out
	</button>
	<button (click)="init()" class="a-button u-margin-right">
		Count clicks
	</button>
</div>
<div class="u-margin-bottom">
	<button (click)="getItem()" class="a-button u-margin-right">
		Get from local storage
	</button>
	<button (click)="clear()" class="a-button">
		Clear local storage
	</button>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">{{ this.item }}</label>
</div>
<div class="u-margin-bottom">
	<label class="a-input__label a-input__label--inline">You clicked the count clicks button this many times: {{ this.timesUsed }}</label>
</div>`;

	constructor(
		private localstorageService: LocalstorageService
	) {
		this.user = this.localstorageService.select('user');
		this.timesUsed = 0;
		this.localstorageService.setItem('number', this.timesUsed);
	}

	public loggedIn(): void {
		this.localstorageService.setItem('user', 'You are logged in');
	}

	public loggedOut(): void {
		this.localstorageService.setItem('user', 'You are logged out');
	}

	public init(): void {
		this.localstorageService.removeItem('user');
		this.timesUsed = this.timesUsed + 1;
		this.localstorageService.setItem('number', this.timesUsed);
	}

	public clear(): void {
		this.localstorageService.clear('user', 'number');
	}

	public getItem(): any {
		this.item = this.localstorageService.getItem('user');
		this.timesUsed = this.localstorageService.getItem('number');
	}
}
