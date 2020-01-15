import {
	Component,
	Input,
	HostBinding,
	ContentChild,
	ViewChild,
	ElementRef,
	OnInit,
	HostListener,
	OnDestroy,
	ChangeDetectionStrategy,
	Host
} from '@angular/core';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../interfaces';
import { lookForIllegalNodes, select } from '../../services/helpers';
import { filter, tap, map, takeUntil, mapTo, scan, repeat, share, startWith } from 'rxjs/operators';
import { Subject, Observable, merge, combineLatest, of } from 'rxjs';

@Component({
	selector: 'aui-sub-menu-item',
	templateUrl: './sub-menu-item.component.html',
	styleUrls: ['./sub-menu-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubMenuItemComponent implements OnInit, Menu.ChecksChildren, OnDestroy {
	private static readonly ALLOWED_CHILDREN = [
		'AUI-SUB-MENU',
		'AUI-MENU-LINK',
		'A',
		'SPAN',
	];

	@ViewChild('inclusedContent')
	ngContent: ElementRef;

  /**
   * Allows for recursive sub menus
   */
	@ContentChild(SubMenuComponent)
	public subMenu?: SubMenuComponent;

	@Input()
	href = '#';
	@Input()
	forceShowArrow: boolean;

	@HostBinding('class')
	class = 'm-nav-list m-nav-list--left';

	@HostBinding('class.active')
	isActive = false;
	isActive$: Observable<boolean>;

	state$: Observable<Menu.MenuState>;
	// Helper event observable
	itemClicked$: Observable<MouseEvent> = new Subject();

	private destroy$ = new Subject();

	public constructor(
		private menuService: MenuService,
		@Host() public parent: SubMenuComponent
	) {
	}

	ngOnInit() {
		this.checkChildren();
		this.state$ = this.menuService.state$;
		const activeMenu$ = this.state$.pipe(select(state => state.activeMenu));

		// Observable emits true whenever sub menu should close
		const shouldClose$: Observable<boolean> = merge(
			// Close whenever we close all menus
			this.menuService.onCloseMenu$.pipe(mapTo(true)),
			// Close all when we open a new tab
			activeMenu$.pipe(map(activeMenu => activeMenu && activeMenu.type === 'main')),
			// Close when we open another item in the same parent menu
			activeMenu$.pipe(
				map(activeMenu => activeMenu
					&& activeMenu.type === 'submenu'
					&& activeMenu.parentMenu === this.parent
					&& activeMenu.menuItem !== this
				),
				// Cascase the close event down to our submenu
				tap((shouldClose: boolean) => this.subMenu && this.subMenu.onClose$ && this.subMenu.onClose$.next(shouldClose))
			),
			// Or close down whenever our parent closes down
			this.parent && this.parent.onClose$ ? this.parent.onClose$.pipe(
				filter(shouldClose => shouldClose === true),
				// Cascase the event down to our submenus, allows for recursive sub menus
				tap(() => this.subMenu && this.subMenu.onClose$.next(true))
			) : of(undefined)
		).pipe(
			takeUntil(this.destroy$),
			filter(v => v === true),
			share()// Share to prevent double subscriptions!
		);

		// When is the sub menu item active?
		this.isActive$ = merge(
			shouldClose$.pipe(mapTo(false)),
			this.itemClicked$.pipe( // toggle active on click
				scan(acc => !acc, false as any),
				takeUntil(shouldClose$),
				repeat()
			)
		).pipe(
			tap(isActive => {
				if (isActive) {
					this.menuService.updateState('activeMenu', {
						menuItem: this,
						subMenu: this.subMenu ? this.subMenu : undefined,
						parentMenu: this.parent,
						type: 'submenu',
					});
				}
				this.isActive = isActive;
			}),
			takeUntil(this.destroy$),
			startWith(false)
		);

		const openMobileMenu$ = combineLatest([
			this.itemClicked$,
			this.state$.pipe(select(state => state.mode), filter(mode => mode === 'mobile')),
		]).pipe(
			filter(() => !!this.subMenu),
			tap(() => this.menuService.displaySubMenu({
				type: 'submenu',
				templateRef: this.subMenu.templateRef,
			})),
			takeUntil(this.destroy$)
		);

		this.isActive$.subscribe();
		openMobileMenu$.subscribe();
	}

	checkChildren() {
		lookForIllegalNodes(this.ngContent, SubMenuItemComponent.ALLOWED_CHILDREN);
	}

	@HostListener('click', ['$event'])
	openSubMenu(event: MouseEvent) {
		if (event) {
			event.stopPropagation();
		}
		(this.itemClicked$ as Subject<MouseEvent>).next(event);
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
