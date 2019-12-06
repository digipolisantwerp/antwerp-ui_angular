import { TestBed } from '@angular/core/testing';
import { UserMenuComponent } from '@acpaas-ui/ngx-components/user-menu';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';

describe('User Menu Test', () => {

	let component: UserMenuComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				UserMenuComponent,
			],
			imports: [
				CommonModule,
				FlyoutModule,
			],
		});

		component = TestBed.get(UserMenuComponent);
	});

	describe('Loggin In', () => {
		it('should initialize a button showing login functionality', () => {
			component.loggedIn = false;
		});
	});
});
