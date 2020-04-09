import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';

import {HeaderComponent} from './header.component';
import {HeaderContentDirective} from '../../directives/content.directive';
import {HeaderLogoDirective} from '../../directives/logo.directive';
import {HeaderMenuItemDirective} from '../../directives/menu-item.directive';

@Component({
  selector: 'aui-test',
  template: `<aui-header>
		<div auiHeaderLogo>
			<img src="https://angular.io/assets/images/logos/angular/angular.svg" />
		</div>
	</aui-header>`,
})
class LogoComponent {
}

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

    it('Should not show the content section if no content is provided', () => {
      expect(fixture.nativeElement.querySelector('.o-header__content').children.length === 0).toBe(true);
    });
  });
});
