import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconModule } from '@acpaas-ui/ngx-icon';

import { AvatarComponent, sizes } from './avatar.component';

describe('The Avatar Component', () => {
  let comp: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // waitForAsync beforeEach
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IconModule],
      declarations: [AvatarComponent], // declare the test component
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    de = fixture.debugElement.query(By.css('.a-avatar'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should render an image', () => {
    comp.image = 'https://www.antwerpen.be/assets/aOS/gfx/gui/a-logo.svg';

    fixture.detectChanges();
    expect(el.querySelector('img').getAttribute('src')).toBe(comp.image);
  });

  it('should render an icon', () => {
    comp.icon = 'ai-alarm-bell';

    fixture.detectChanges();
    expect(el.querySelector('aui-icon').getAttribute('class')).toContain('ai');
    expect(el.querySelector('.ai-alarm-bell')).not.toEqual(null);
  });

  it('should render a letter', () => {
    comp.letter = 'A';

    fixture.detectChanges();
    expect(el.querySelector('.a-avatar__letter').innerHTML).toBe(comp.letter);
  });

  it('should render at different sizes', () => {
    comp.size = sizes.L;

    fixture.detectChanges();
    expect(el.getAttribute('class')).toContain('a-avatar--l');
  });
});
