import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, SimpleChange, SimpleChanges, Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderContentDirective } from '../../directives/content.directive';
import { HeaderLogoDirective } from '../../directives/logo.directive';
import { HeaderMenuItemDirective } from '../../directives/menu-item.directive';

@Component({
	selector: 'aui-test',
	template: `<aui-header>
		<div auiHeaderLogo>
			<img src="https://angular.io/assets/images/logos/angular/angular.svg" />
		</div>
	</aui-header>`,
})
class LogoComponent {}

describe('The Header Component', () => {
	let comp: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let de: DebugElement;

	function getByCSSQuery(query, elm, all?) {
		return all ? elm.querySelectorAll(query) : elm.querySelector(query);
	}

	// async beforeEach
	beforeEach(async(() => {
		TestBed
			.configureTestingModule({
				declarations: [
					HeaderComponent,
					HeaderLogoDirective,
					HeaderContentDirective,
					HeaderMenuItemDirective,
					LogoComponent,
				],
			})
			.compileComponents();
	}));

	describe('Rendering the header component', () => {
		// synchronous beforeEach
		beforeEach(() => {
			fixture = TestBed.createComponent(HeaderComponent);

			comp = fixture.componentInstance;

			de = fixture.debugElement;
		});

		it('Should initialize headroom', () => {
			spyOn(comp, 'setupHeadroom');
			fixture.detectChanges();
			expect(comp.setupHeadroom).toHaveBeenCalled();
		});

		it('Should set the has-logo class if a logo was provided', () => {
			const logoFixture = TestBed.createComponent(LogoComponent);
			const logoDe = logoFixture.debugElement;

			logoFixture.detectChanges();

			const header = getByCSSQuery('.aui-header', logoDe.nativeElement);

			expect(header.classList).toContain('has-logo');
		});

		it('Should not show the content section if no content is provided', () => {
			expect(fixture.nativeElement.querySelector('.aui-header-content') === null).toBe(true);
		});
	});
});
