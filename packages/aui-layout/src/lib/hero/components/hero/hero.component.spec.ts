import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';

import {HeroComponent} from './hero.component';
import {HeroCardDirective} from '../../directives/hero-card.directive';
import {HeroCtaDirective} from '../../directives/hero-cta.directive';

@Component({
  selector: 'aui-test',
  template: `
        <aui-hero>
            <div auiHeroCard>
                <h1>Test</h1>
            </div>
            <div auiHeroCta>
                <a href="/test">test</a>
            </div>
        </aui-hero>
    `,
})
class TestComponent {
}

describe('The Hero Component', () => {
  let comp: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent,
        HeroCardDirective,
        HeroCtaDirective,
        TestComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.o-hero'));
    el = de.nativeElement;

    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(el).not.toBeUndefined();
  });

  it('should render the card and cta sections', () => {
    expect(fixture.debugElement.query(By.css('o-hero__card h1'))).not.toBeUndefined();
    expect(fixture.debugElement.query(By.css('o-hero__cta a'))).not.toBeUndefined();
  });

  // it('should have the "cta" class if there is a call to action section', () => {
  //     expect(el.classList).toContain('cta');
  // });
});
