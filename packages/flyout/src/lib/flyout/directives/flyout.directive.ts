import {
	Directive,
	ElementRef,
	ContentChild,
	Output,
	EventEmitter,
	Input,
	HostBinding,
	OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FlyoutZoneDirective } from './flyout-zone.directive';
import { FlyoutService } from '../services/flyout.service';
import { FlyoutSize } from '../types/flyout.types';


@Directive({
	selector: '[auiFlyout]',
	exportAs: 'auiFlyout',
})
export class FlyoutDirective implements OnDestroy {
	@HostBinding('class.m-flyout') flyoutClass = true;
	@HostBinding('class.m-flyout--right') get flyoutAlignRight() {
		return this.align === 'right';
	}
	@HostBinding('class.m-flyout--sm') get flyoutSmall() {
		return this.size === 'small';
	}
	@HostBinding('class.m-flyout--md') get flyoutMedium() {
		return this.size === 'medium';
	}
	@HostBinding('class.m-flyout--lg') get flyoutLarge() {
		return this.size === 'large';
	}
	@HostBinding('class.m-flyout--full') get flyoutFull() {
		return this.size === 'full';
	}
	@HostBinding('class.is-open') get flyoutOpen() {
		return this.flyoutOpened;
	}

	@Input() public class = '';
	@Input() public size: FlyoutSize = FlyoutSize.Auto;
	@Input() public align: string;
	@Input() public toggleClick = true;
	@Input() public activateOnFocus = false;
	@Output() public opened = new EventEmitter();
	@Output() public closed = new EventEmitter();

	@ContentChild(FlyoutZoneDirective) public flyoutZone: FlyoutZoneDirective;

	private element: HTMLElement;
	private flyoutOpened = false;

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(private elementRef: ElementRef, private flyoutService: FlyoutService) {
		this.element = this.elementRef.nativeElement;

		this.flyoutService.subject
			.pipe(takeUntil(this.destroyed$))
			.subscribe((res) => {
				this.close();
			});
	}

	public ngOnDestroy() {
		this.destroyed$.next(true);
	}

	public open(): void {
		if (!this.flyoutOpened) {
			this.flyoutOpened = true;
			this.opened.emit(undefined);
		}
	}

	public close(): void {
		if (this.flyoutOpened) {
			this.flyoutOpened = false;
			this.closed.emit(undefined);
		}
	}

	public isInClosableZone(element: HTMLElement): boolean {
		if (!this.flyoutZone) {
			return false;
		}

		return this.flyoutZone.contains(element);
	}

	public isOpened(): boolean {
		return this.flyoutOpened;
	}
}
