import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {SubMenuComponent} from '../sub-menu/sub-menu.component';
import {MenuService} from '../../services/menu.service';
import {filter, map, mapTo, repeat, scan, share, startWith, takeUntil, tap} from 'rxjs/operators';
import {combineLatest, merge, Observable, Subject} from 'rxjs';
import {select} from '../../services/helpers';
import {MenuLinkComponent} from '../menu-link/menu-link.component';
import {Router} from '@angular/router';

@Component({
  selector: 'aui-menu-tab',
  templateUrl: './menu-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuTabComponent implements OnInit, OnDestroy {
  /**
   * Contains the inclused content, in which we can check if only
   * valid HTML elements are used by the user
   */
  @ViewChild('inclusedContent', {static: true})
  public ngContent: ElementRef<HTMLElement>;

  @ContentChild(SubMenuComponent, {static: false})
  public subMenu?: SubMenuComponent;
  @ContentChild(MenuLinkComponent, {static: false})
  public menuLink: MenuLinkComponent;

  @HostBinding('class.o-menu__tab')
  tab = true;
  @HostBinding('class.is-active')
  isActive = false;

  public tabIsActive$: Observable<boolean>;

  /**
   * Helper to map event to observable
   */
  public headerClicked$: Observable<boolean> = new Subject<boolean>();


  @Input()
  public icon = null; // will compile to 'fa fa-bars'
  @Input()
  public isSubMenu = false;

  private destroy$ = new Subject();

  public constructor(private menuService: MenuService, private router: Router) {
  }

  ngOnInit() {
    // Observable emits true whenever our menu tab should close
    const shouldCloseMenu$: Observable<boolean> = merge(
      // Close when closing all menus
      this.menuService.onCloseMenu$.pipe(mapTo(true)),
      // Close when a menu different from ours opens
      this.menuService.state$.pipe(
        select(state => state.activeMenu),
        filter(activeMenu => activeMenu && activeMenu.type === 'main' && activeMenu.menuItem !== this),
        mapTo(true)
      )
    ).pipe(
      filter(v => v === true),
      share()// Share to prevent double subscriptions!!
    );

    this.tabIsActive$ = merge(
      // Tab becomes active if the root template ref is equal to our reference (used for mobile layout)
      this.menuService.rootTemplateRef$.pipe(
        map(ref => ref && this.subMenu && ref === this.subMenu.templateRef)
      ),
      // or toggle if we click the tab header
      this.headerClicked$.pipe(
        scan((acc) => {
          return !acc;
        }, false),
        takeUntil(shouldCloseMenu$),
        repeat()
      ),
      // or becomes inactive when closing the whole menu
      shouldCloseMenu$.pipe(mapTo(false))
    ).pipe(
      tap((isActive: boolean) => {
        if (isActive && this.subMenu) {
          this.menuService.updateState('activeMenu', {
            menuItem: this,
            type: 'main',
          });
        } else if (isActive && this.menuLink && (this.menuLink.href || this.menuLink.routerLink)) {
          this.menuLink.routerLink ? this.router.navigate(this.menuLink.routerLink) : window.location.href = this.menuLink.href;
        }
      }),
      startWith(false),
      takeUntil(this.destroy$),
      tap(v => this.isActive = v)
    );

    this.tabIsActive$.subscribe();

    // Open our menu in the navigation pane for mobile layouts
    const openMobileMenu$ = combineLatest([
      this.headerClicked$,
      this.menuService.state$.pipe(select(state => state.mode), filter(mode => mode === 'mobile')),
    ]).pipe(
      map(([isSubMenuItem, state]) => isSubMenuItem),
      filter(() => (!!this.subMenu && !!this.subMenu.templateRef)),
      tap((isSubMenuItem) => this.menuService.displaySubMenu({
        // Important when mapping our 'more' menu items to sub menu, since they won't trigger main menu's anymore
        type: isSubMenuItem ? 'submenu' : 'main',
        templateRef: this.subMenu.templateRef,
      })),
      takeUntil(this.destroy$)
    );

    openMobileMenu$.subscribe();
  }

  @HostListener('click', ['$event'])
  public followMenuTab(event: MouseEvent) {
    event.stopPropagation();
    (this.headerClicked$ as Subject<boolean>).next(this.isSubMenu);
  }

  public getLabel() {
    (window as any).a = this.ngContent;
    return this.ngContent.nativeElement.innerHTML;
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
