import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';

import {FooterComponent} from './footer.component';
import {FooterContentDirective} from '../../directives/content.directive';
import {FooterBottomDirective} from '../../directives/bottom.directive';

@Component({
  selector: 'aui-test',
  template: `
        <aui-footer>
            <div auiFooterContent>
                <span>this is the footer</span>
            </div>
            <div auiFooterBottom>
                <span>this is the bottom</span>
            </div>
        </aui-footer>
    `,
})
class TestComponent {
}

describe('FooterComponent (templateUrl)', () => {
  let footer: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          FooterComponent,
          FooterBottomDirective,
          FooterContentDirective,
          TestComponent,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    footer = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('.aui-footer'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should render the footer', () => {
    expect(el).not.toBeUndefined();
  });

  it('should have the "extended" class if there is content', () => {
    expect(el.classList).toContain('extended');
  });
});
