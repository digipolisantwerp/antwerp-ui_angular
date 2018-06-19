import {
	Component,
	Input,
	OnChanges,
	AfterViewChecked,
	ChangeDetectionStrategy,
	HostBinding,
	ElementRef,
	Inject,
	PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const marked = require('marked');
import { HighlightJsService } from 'angular2-highlight-js';

@Component({
	selector: 'aui-code-snippet',
	templateUrl: './code-snippet.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSnippetComponent implements OnChanges, AfterViewChecked {
	@HostBinding('class.aui-code-snippet') setClass = true;

	@Input() codeSnippet: string;
	@Input() processMarkdown = false;
	@Input() scrollable = true;

	constructor(
		@Inject(PLATFORM_ID) private platformId,
		private el: ElementRef,
		private highlightJsService: HighlightJsService
	) {}

	public ngOnChanges() {
		if (this.processMarkdown) { this.codeSnippet = marked(this.codeSnippet); }
	}

	public ngAfterViewChecked() {
		if (isPlatformBrowser(this.platformId)) {
			const allPreEl = this.el.nativeElement.querySelectorAll('pre');

			for (let i = 0; i < allPreEl.length; i++) {
				// Add class to pre-elements in markdown files
				if (!allPreEl[i].classList.contains('a-pre')) {
					allPreEl[i].className += ' a-pre';
					if (this.scrollable) {
						allPreEl[i].className += ' a-pre--scrollable';
					}
				}

				this.highlightJsService.highlight(allPreEl[i]);
			}
		}
	}
}
