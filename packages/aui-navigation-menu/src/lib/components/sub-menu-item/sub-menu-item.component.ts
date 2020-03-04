import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {SubMenuComponent} from '../sub-menu/sub-menu.component';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../interfaces';
import {lookForIllegalNodes, select} from '../../services/helpers';
import {filter, map, mapTo, repeat, scan, share, startWith, takeUntil, tap} from 'rxjs/operators';
import {combineLatest, merge, Observable, of, Subject} from 'rxjs';
import {MenuLinkComponent} from '../menu-link/menu-link.component';

@Component({
  selector: 'aui-sub-menu-item',
  templateUrl: './sub-menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [':host { display: list-item; border: none !important;}'],
})
export class SubMenuItemComponent implements OnInit, Menu.ChecksChildren, OnDestroy {
  private static readonly ALLOWED_CHILDREN = [
    'AUI-SUB-MENU',
    'AUI-MENU-LINK',
    'A',
    'SPAN',
  ];

  @ViewChild('inclusedContent', {static: true})
  ngContent: ElementRef;

  /**
   * Allows for recursive sub menus
   */
  @ContentChild(SubMenuComponent, {static: true})
  public subMenu?: SubMenuComponent;
  @ContentChild(MenuLinkComponent, {static: true})
  public menuLink?: MenuLinkComponent;

  @Input()
  href = null;
  @Input()
  routerLink = null;

  @Input()
  forceShowArrow: boolean;

  @HostBinding('class')
  class = 'm-nav-list m-nav-list--left';
  @HostBinding('attr.tabindex')
  tabIndex = -1;

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
