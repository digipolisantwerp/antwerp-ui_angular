import { Component } from '@angular/core';
import { UserMenu } from '@acpaas-ui/ngx-components/user-menu';

@Component({
	templateUrl: './demo.page.html',
})
export class UserMenuDemoPageComponent {
	public mockUser: UserMenu.IUser = {
		firstName: 'John',
		lastName: 'Doe',
		avatarUrl: 'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'
	};
	public importModuleSnippet: string = `
	import { UserMenuModule } from '@acpaas-ui/ngx-components/user-menu';

	@NgModule({
		imports: [
			UserMenuModule
		]
	})
	export class AppModule { }
	`;

	public useComponentTagSnippet: string = `
	<aui-user-menu [user]="userObject" flyoutSize="Medium" [notificationsCount]="100"
		(logout$)="logoutUser()" (login$)="loginUser()">
		<div class="u-margin-lg u-text-center">
			Your Content Here
		</div>
	</aui-user-menu>
	`;

	public logoutUser() {
		alert('User is logged out!');
	}

	public loginUser() {
		alert('User is logged in!');
	}
}
