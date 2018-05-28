import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ContentChild,
	AfterContentChecked,
	ChangeDetectorRef,
	Inject,
	PLATFORM_ID,
	ElementRef,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Headroom } from '@jsprds/headroom.ts';

import { HeaderLogoDirective } from '../../directives/logo.directive';
import { HeaderContentDirective } from '../../directives/content.directive';

@Component({
	selector: 'aui-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'header.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, AfterContentChecked {
	@ContentChild(HeaderLogoDirective) logo: HeaderLogoDirective;
	@ContentChild(HeaderContentDirective) content: HeaderContentDirective;
	public hasLogo: Boolean = false;
	public hasContent: Boolean = false;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private elementRef: ElementRef,
		private ref: ChangeDetectorRef
	) {}

	public setupHeadroom() { // @todo: use headroom options from injector
		const element = this.elementRef.nativeElement.querySelector('.aui-header');
		const head = new Headroom(element);

		return head;
	}

	public ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.setupHeadroom();
		}
	}

	ngAfterContentChecked() {
		const hasLogo = this.logo !== undefined;
		const hasContent = this.content !== undefined;
		const shouldUpdate = hasLogo !== this.hasLogo || hasContent !== this.hasContent;

		if (shouldUpdate) {
			this.hasLogo = hasLogo;
			this.hasContent = hasContent;

			this.ref.markForCheck();
		}
	}
}
