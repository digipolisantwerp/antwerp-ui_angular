import {
	Directive,
	ContentChild,
	Output,
	EventEmitter,
	Input,
	HostBinding,
	OnDestroy,
	Inject,
	ChangeDetectorRef,
	ElementRef,
} from '@angular/core';
import { Subject, merge } from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

import { FlyoutZoneDirective } from './flyout-zone.directive';
import { FlyoutService } from '../services/flyout.service';
import { FlyoutSize, FlyoutState } from '../types/flyout.types';
import { isEvent } from '../utils/event';

// @dynamic
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
		return this.isOpened;
	}

	@Input() public size: FlyoutSize = FlyoutSize.Auto;
	@Input() public align: string;
	@Input() public toggleClick = true;
	@Input() public activateOnFocus = false;

	@Output() public opened = new EventEmitter();
	@Output() public closed = new EventEmitter();

	@ContentChild(FlyoutZoneDirective) public flyoutZone: FlyoutZoneDirective;

	public isOpened = false;
	public state$ = new Subject<FlyoutState>();

	private destroyed$: Subject<boolean> = new Subject<boolean>();

	constructor(
		@Inject(DOCUMENT) private document: Document,
		private flyoutService: FlyoutService,
		private cdr: ChangeDetectorRef,
		private ref: ElementRef
	) {
		this.handleKeyUp = this.handleKeyUp.bind(this);

		this.state$.next(FlyoutState.CLOSED);

		merge(
			this.state$,
			this.flyoutService.state$
		)
			.pipe(
				takeUntil(this.destroyed$),
				distinctUntilChanged()
			)
			.subscribe((state: FlyoutState) => {
				this.isOpened = state === FlyoutState.OPEN;

				if (this.isOpened) {
					this.opened.emit();
				} else {
					this.closed.emit();
				}
			});
	}

	public ngOnDestroy() {
		this.destroyed$.next(true);
	}

	public open(): void {
		this.state$.next(FlyoutState.OPEN);

		this.document.addEventListener('keyup', this.handleKeyUp);
	}

	public close(): void {
		this.state$.next(FlyoutState.CLOSED);
	}

	public isInClosableZone(element: HTMLElement): boolean {
		if (!element) {
			return false;
		}

		const isInZone = this.flyoutZone && this.flyoutZone.contains(element);
		const isFlyout = this.ref.nativeElement === element || this.ref.nativeElement.contains(element);

		return isInZone || isFlyout;
	}

	private handleKeyUp(e: KeyboardEvent): void {
		if (isEvent(e, 'escape', 27)) {
			this.close();

			this.document.removeEventListener('keyup', this.handleKeyUp);

			this.cdr.detectChanges();
		}
	}
}
