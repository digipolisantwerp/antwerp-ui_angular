import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import {MenuTabComponent} from '../menu-tab/menu-tab.component';
import {merge, Observable, Subject} from 'rxjs';
import {delay, filter, first, map, mapTo, pairwise, shareReplay, startWith, take, takeUntil, tap} from 'rxjs/operators';
import {MenuService} from '../../services/menu.service';
import {select} from '../../services/helpers';
import {NavigationStart, Router} from '@angular/router';
import {Menu} from '../../interfaces';

/**
 * Main wrapper container that will orchestrate the menu.
 * This component will use content inclusion to display a menu.
 * It is also responsible for filtering out 'too much' menu tabs
 * that won't be visible on the mobile menu. These tabs will then
 * be displayed under a 'more' menu tab. (This behavior is only for
 * mobile menu)
 *
 * A DOCKED menu only shows the tabs' icons and will show submenus
 * in an overlay panel. An UNDOCKED menu shows all labels and submenus
 * in droppable subitems (no overlay used
 */
@Component({
  selector: 'aui-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit, AfterContentChecked, OnDestroy {
  /**
   * We need a querylist of the main tabs to know if we should filter some out
   * in case we are dealing with a screen that is to small (for mobile only)
   */
  @ContentChildren(MenuTabComponent, {descendants: false})
  public tabs: QueryList<MenuTabComponent>;
  public isDocked$: Observable<boolean>;
  public hasIconsInTabs$: Observable<boolean>;
  /**
   * Menu items that are not visible on the screen since the latter is
   * too small will have to be accessed to a 'more' tab. (for mobile only)
   */
  public moreMenuItems$: Observable<Array<MenuTabComponent>>;
  public shouldShowMoreTab$: Observable<boolean>;
  /**
   * Helper observables used to show/hide the labels to (un)dock
   * the menu. We're purposely not using a simple *ngIf directive as to
   * be able to exactly decide when to show/hide the respective
   * labels.
   */
  public showHideMenuLabel$: Observable<boolean>;
  public showRevealMenuLabel$: Observable<boolean>;
  @Input()	// Translations coming from the user
  translations: Menu.Translations;
  public configuration: Menu.ModuleConfiguration;
  public pTranslations: Menu.Translations;	// Real translations from the service
  /**
   * Helper used to hook observables to the content is init lifecycle hook
   */
  private afterContentChecked$ = new Subject<void>();
  private destroy$ = new Subject();

  constructor(private menuService: MenuService, private router: Router) {
  }

  ngOnInit() {
    this.menuService.translations = this.translations;
    this.configuration = this.menuService.configuration;
    this.pTranslations = this.menuService.translate();
    // observable will change css host class of this component‹
    this.isDocked$ = this.menuService.state$.pipe(
      select(state => state.docked)
    );

    this.hasIconsInTabs$ = this.afterContentChecked$.pipe(
      first(),
      map(() => this.tabs.toArray()),
      map(tabs => tabs.every(tab => !!tab.icon))
    );

    // Helper observable
    // Emits when the menu goes from docked => undocked
    const dockedToUndocked$ = this.isDocked$.pipe(
      startWith(!this.menuService.configuration.dockedByDefault),
      pairwise(),
      filter(([previous, current]) => !!previous && !current)
    );

    // Helper observable
    // Emits when the menu goes from undocked => docked
    const undockedToDocked$ = this.isDocked$.pipe(
      startWith(this.menuService.configuration.dockedByDefault),
      pairwise(),
      filter(([previous, current]) => !previous && !!current),
      shareReplay(1)
    );

    this.showHideMenuLabel$ = merge(
      undockedToDocked$.pipe(mapTo(false)), // Immediately show hide label
      dockedToUndocked$.pipe(delay(150), mapTo(true)) // Delay showing the label until there is enough space
    );

    this.showRevealMenuLabel$ = this.isDocked$.pipe(
      map(isDocked => !!isDocked)
    );

    // Which tabs should be visible under the 'more' menu items?
    this.moreMenuItems$ = this.afterContentChecked$.pipe(
      map(() => this.tabs),
      map(queryList => queryList.toArray()),
      filter((tabs: Array<MenuTabComponent>) => tabs.length >= 3),	// 2 tabs + 'more' tab
      map(tabs => tabs.splice(2, tabs.length - 2)),
      tap(tabs => tabs.forEach(tab => tab.isSubMenu = true))
    );

    this.shouldShowMoreTab$ = this.afterContentChecked$.pipe(
      map(() => this.tabs.toArray().length > 2)
    );


    // Close all menus whenever we navigate
    this.router.events.pipe(
      filter(event => (event instanceof NavigationStart)),
      takeUntil(this.destroy$),
      tap(() => this.menuService.closeAllMenus())
    ).subscribe();
  }

  @HostListener('document:click')
  public onDocumentClick() {
    this.menuService.closeAllMenus();
  }

  @HostListener('click', ['$event'])
  public onInsideClick(event) {
    // Don't propagate event down to the document, since that would make the menu close
    event.stopPropagation();
  }

  ngAfterContentChecked() {
    this.afterContentChecked$.next();
  }

  toggleDocking(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
    }
    this.menuService.state$.pipe(
      select(state => state.docked),
      take(1),
      tap(isDocked => this.menuService.updateState('docked', !isDocked))
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.menuService.destroy(); // Don't forget to destroy subscriptions created in the service!!
  }
}
