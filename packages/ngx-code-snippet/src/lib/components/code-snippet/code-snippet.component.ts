import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import * as _marked from 'marked';
import {HighlightJsService} from 'angular2-highlight-js';

const marked = _marked;

@Component({
  selector: 'aui-code-snippet',
  templateUrl: './code-snippet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSnippetComponent implements OnChanges, AfterViewInit {
  @HostBinding('class.ngx-code-snippet') setClass = true;

  @Input() codeSnippet: string;
  @Input() processMarkdown = false;
  @Input() scrollable = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private el: ElementRef,
    private highlightJsService: HighlightJsService
  ) {
  }

  public ngOnChanges() {
    if (this.processMarkdown) {
      this.codeSnippet = marked(this.codeSnippet);
    }
  }

  public ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const allPreEl = this.el.nativeElement.querySelectorAll('pre');

      for (const preElement of allPreEl) {
        if (!preElement.classList.contains('a-pre')) {
          preElement.className += ' a-pre';
          if (this.scrollable) {
            preElement.className += ' a-pre--scrollable';
          }
        }

        this.highlightJsService.highlight(preElement);
      }
    }
  }
}
