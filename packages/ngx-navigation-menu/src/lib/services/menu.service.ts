import {Inject, Injectable, TemplateRef} from '@angular/core';
import {fromEvent, merge, Observable, Subject} from 'rxjs';
import {filter, first, map, mapTo, mergeMap, scan, share, shareReplay, startWith, takeUntil, tap} from 'rxjs/operators';
import {Menu} from '../interfaces';
import {LocalstorageService} from './localstorage.service';

/**
 * Singleton helper service to orchestrate the navigation menu.
 * To not have a dependency on state management frameworks such as redux,
 * this service holds the menu state and exposes it using an observable.
 *
 * Caution should be taken: do not instantiate more than 1 instane of this service,
 * since it contains subscriptions.
 */
@Injectable()
export class MenuService {
  // Const variable used to know whether the app is rendered on a mobile screen or not
  private static readonly MOBILE_VIEWPORT = 576;

  // Internal observable used to know when to display a submenu (only for mobile)
  private readonly pDisplaySubMenu$: Observable<Menu.ISubMenu> = new Subject();

  // Internal helper observable containing the current navigation tree (only for mobile)
  private tree$: Observable<Array<Menu.ISubMenu>>;

  // Internal subject used to update the state of the menu
  private updateProps$: Subject<{ prop: string, value: any }> = new Subject();

  // Internal observable representing the state of the menu
  private pState$: Observable<Menu.MenuState>;

  private translationsMap: Menu.Translations = {
    lblBack: 'Back',
    lblHideMenu: 'Hide Menu',
    lblMore: 'More...',
  };

  private destroy$ = new Subject();

  constructor(@Inject('config') public readonly configuration: Menu.ModuleConfiguration,
              private localStorage: LocalstorageService) {
    let defaultConfig = {
      mode: 'mobile',
      docked: configuration.dockedByDefault,
      activeMenu: null,
    };
    if (configuration.useLocalStorage) {
      defaultConfig = {
        ...defaultConfig,
        ...this.localStorage.getMenuState()
      };
    }
    // Scan the update props to populate the state with the new properties coming in
    this.pState$ = this.updateProps$.pipe(
      startWith(null),
      scan((acc: Menu.MenuState, current: { prop: string, value: any }) => {
        return current && current.prop ? {
          ...acc,
          [current.prop]: current.value,
        } : acc;
      }, defaultConfig),  // Start off with the default state
      mergeMap(state => this.isMobile$.pipe(  // Internally also subscribe to the isMobile$
        map(isMobile => {
          return {
            ...state, // and update the state accordingly
            mode: isMobile ? ('mobile' as Menu.MenuMode) : ('desktop' as Menu.MenuMode),
          };
        })
      )),
      tap(state => configuration.useLocalStorage && this.localStorage.setMenuState(state)),
      shareReplay(1)  // Act as a behaviour subject observable
    );

    this.tree$ = merge(
      this.pDisplaySubMenu$,
      this.onCloseMenu$
    ).pipe(
      takeUntil(this.destroy$),
      scan((acc: Array<Menu.ISubMenu>, value: Menu.ISubMenu) => {
        if (value && acc[0] && value.type === 'main' && acc[0].type === 'main' && value.templateRef !== acc[0].templateRef) {
          return [value];
        } else if (value) {
          return [...acc, value];
        } else {
          return [];
        }
      }, []),
      shareReplay(1)
    );

    this.tree$.subscribe();  // Start watching the tree immediately on construction
  }

  set translations(value: Menu.Translations) {
    this.translationsMap = {
      ...this.translationsMap,
      ...value,
    };
  }

  /**
   * Returns an observable that will emit whenever we show/hide a submenu.
   * Hiding a submenu is triggered when this observable emits null | undefined
   */
  get displaySubMenu$(): Observable<Menu.ISubMenu> {
    return this.pDisplaySubMenu$.pipe(share());
  }

  /**
   * Returns an observable that emits true if the current menu is a nested submenu
   * (this is only used when displaying the external navigation pane)
   */
  get currentMenuIsNestedSubMenu$(): Observable<boolean> {
    return this.pDisplaySubMenu$.pipe(
      map(menu => menu && menu.type === 'submenu')
    );
  }

  /**
   * Returns the template referenece of the root menu tab element (this is
   * used to know which tab is active at the moment, on mobile layout)
   */
  get rootTemplateRef$(): Observable<TemplateRef<Menu.ISubMenuContext>> {
    return this.tree$.pipe(
      map(tree => tree && tree[0] ? tree[0].templateRef : undefined)
    );
  }

  /**
   * Observable emits when closing all menus
   */
  get onCloseMenu$(): Observable<void> {
    return this.pDisplaySubMenu$.pipe(filter(v => !v), mapTo(undefined));
  }

  get treeLength$(): Observable<number> {
    return this.tree$.pipe(map(tree => tree.length));
  }

  /**
   * Exposure of the state (this observable is replayed)
   */
  get state$(): Observable<Menu.MenuState> {
    return this.pState$;
  }

  /**
   * Internal helper observable that emits true if we're on mobile
   * or false otherwise. Based on screen size.
   */
  private get isMobile$(): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      map(event => window.innerWidth),
      startWith(window.innerWidth),
      map(width => width < MenuService.MOBILE_VIEWPORT)
    );
  }

  public translate() {
    return this.translationsMap;
  }

  /**
   * Update the state with known properties using patch system.
   */
  updateState<T extends keyof Menu.MenuState>(property: T, value: Menu.MenuState[T]): void {
    return this.updateProps$.next({prop: property, value});
  }

  /**
   * Navigate back in the tree, used for mobile navigation only
   */
  navigateBack() {
    this.tree$.pipe(
      first(),
      map(tree => tree.length >= 2 ? tree.pop() && tree.pop() : null),
      tap(menu => !menu ? this.closeAllMenus() : this.displaySubMenu(menu))
    ).subscribe();
  }


  public closeAllMenus() {
    (this.pDisplaySubMenu$ as Subject<Menu.ISubMenu>).next();
  }

  /**
   * Only for mobile
   * Injects the TemplateRef in the right container, depending on the submenu
   */
  public displaySubMenu(subMenu: Menu.ISubMenu) {
    (this.pDisplaySubMenu$ as Subject<Menu.ISubMenu>).next(subMenu);
  }

  public destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
