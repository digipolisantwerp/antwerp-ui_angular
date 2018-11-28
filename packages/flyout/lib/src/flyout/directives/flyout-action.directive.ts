import { Directive, ElementRef, OnDestroy, Host, HostListener, HostBinding, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FlyoutDirective } from './flyout.directive';


@Directive({
	selector: '[auiFlyoutAction]',
	exportAs: 'auiFlyoutAction',
})
export class FlyoutActionDirective implements OnDestroy {

	@HostBinding('class.aui-flyout-action') class = true;

	/**
     * This property is needed for dropdown not to open and instantly closed
     * because the click event will be fired after the focus event so the click event will close the flyout
     */
	private openedByFocus = false;
	private closeDropdownOnOutsideClick: (event: MouseEvent) => void;

	constructor(
		@Host() public flyout: FlyoutDirective,
		@Inject(PLATFORM_ID) private platformId: Object,
		private elementRef: ElementRef
	) {
		// Define this method in the constructor so "this" points to "this class"
		this.closeDropdownOnOutsideClick = (event: Event) => {
			this.closeIfInClosableZone(event);
		};
	}

	ngOnDestroy() {
		if (this.isPlatformBrowser()) {
			document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
		}
	}

	@HostListener('click')
	onClick() {
		if (this.flyout.activateOnFocus && this.openedByFocus) {
			this.openedByFocus = false;
			return;
		}

		if (this.flyout.isOpened() && this.flyout.toggleClick) {
			this.close();
		} else {
			this.open();
		}
	}

	@HostListener('focus')
	onFocus() {
		if (!this.isPlatformBrowser()) {
			return;
		}

		if (this.flyout.isOpened()) {
			return;
		}

		this.openedByFocus = true;
		this.flyout.open();

		document.addEventListener('click', this.closeDropdownOnOutsideClick.bind(this), true);
	}

	@HostListener('blur', ['$event'])
	onBlur(event: FocusEvent) {
		if (!this.isPlatformBrowser()) {
			return;
		}

		if (event.relatedTarget && !this.flyout.isInClosableZone(<HTMLElement> event.relatedTarget)
			&& event.relatedTarget !== this.elementRef.nativeElement) {
			this.flyout.close();
			document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
		}
	}

	public toggle() {
		if (this.flyout.isOpened()) {
			this.close();
		} else {
			this.open();
		}
	}

	public open() {
		if (!this.isPlatformBrowser()) {
			return;
		}

		if (this.flyout.isOpened()) {
			return;
		}

		this.flyout.open();
		document.addEventListener('click', this.closeDropdownOnOutsideClick, true);
	}

	public close() {
		if (!this.isPlatformBrowser()) {
			return;
		}

		if (!this.flyout.isOpened()) {
			return;
		}

		this.flyout.close();
		document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
	}

	private checkIfInClosableZone(event) {
		return !this.flyout.isInClosableZone(<HTMLElement> event.target)
				&& event.target !== this.elementRef.nativeElement
				&& !this.elementRef.nativeElement.contains(event.target);
	}

	private closeIfInClosableZone(event: Event): void {
		if (!this.isPlatformBrowser()) {
			return;
		}

		if (this.checkIfInClosableZone(event)) {
			this.flyout.close();
			document.removeEventListener('click', this.closeDropdownOnOutsideClick, true);
		}
	}

	private isPlatformBrowser(): boolean {
		return isPlatformBrowser(this.platformId);
	}
}
