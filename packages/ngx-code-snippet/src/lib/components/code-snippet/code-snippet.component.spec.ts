import { waitForAsync, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HighLightService } from './code-snippet.service';

import { CodeSnippetComponent } from './code-snippet.component';
// @ts-ignore
import { marked } from 'marked';

class MockHighlightJsService {
  public highlight() {
    return false;
  }
}

describe('The Codesnippet Component', () => {
  let comp: CodeSnippetComponent;
  let fixture: ComponentFixture<CodeSnippetComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [CodeSnippetComponent],
      providers: [{ provide: HighLightService, useClass: MockHighlightJsService }],
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSnippetComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
    comp.codeSnippet = '<div class="testing">Some test</div>';

    // query for the element with class "aui-code-snippet__inner" by CSS element selector
    de = fixture.debugElement.query(By.css('.aui-code-snippet__inner'));
    el = de.nativeElement;
  });

  it('an element with class "aui-code-snippet__inner" should exist', () => {
    expect(el).not.toBeUndefined();
  });

  // fails
  it('marked should compile markdown to html', () => {
    const mdExample = '`some code`';
    const result = marked(mdExample);
    expect(result).toContain('<p><code>some code</code></p>');
  });

  describe('Check if everything goes right when processing Markdown', () => {
    beforeEach(() => {
      comp.processMarkdown = true;
      comp.codeSnippet = '`some code`';
    });

    // fails
    it('when processMarkdown is true, the codeSnippet should be processed by marked first', fakeAsync(() => {
      comp.ngOnChanges();
      tick();
      expect(comp.codeSnippet).toContain('<p><code>some code</code></p>');
    }));
  });
});
