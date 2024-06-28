import { Injectable } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

@Injectable()
export class HighlightService {

  public highlight(element: HTMLElement): void {
    hljs.highlightElement(element);
  }
}
