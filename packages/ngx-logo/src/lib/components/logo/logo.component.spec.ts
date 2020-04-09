import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

import {LogoComponent} from './logo.component';

describe('LogoComponent (templateUrl)', () => {

  let logo: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LogoComponent],
    })
      .compileComponents();
  }));

  it('Should not throw an error if no input is provided', () => {
    expect(() => {
      TestBed.createComponent(LogoComponent);
    }).not.toThrow(Error);
  });

  describe('Rendering the logo', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(LogoComponent);

      logo = fixture.componentInstance;

      de = fixture.debugElement;

      element = de.query(By.css('.o-header__logo')).nativeElement;
    });

    it('Should render a logo', () => {
      logo.title = 'Klik op de A om terug naar de startpagina van antwerpen.be te gaan.';
      logo.src = 'https://www.antwerpen.be/assets/aOS/gfx/gui/a-logo.svg';
      logo.link = '/home';

      fixture.detectChanges();

      expect(element.querySelector('img').getAttribute('alt')).toBe(logo.title);
      expect(element.querySelector('img').getAttribute('src')).toBe(logo.src);
      expect(element.getAttribute('href')).toBe('#'); // Introducing new behaviour
    });

    it('Should have a callback', async(() => {
      logo.link = '#'; // Do not reload page!
      logo.onClick = () => {
        return 'OK';
      };
      fixture.detectChanges();

      spyOn(logo, 'onClick');
      element.click();

      fixture.whenStable().then(() => {
        expect(logo.onClick).toHaveBeenCalled();
      });
    }));
  });
});
