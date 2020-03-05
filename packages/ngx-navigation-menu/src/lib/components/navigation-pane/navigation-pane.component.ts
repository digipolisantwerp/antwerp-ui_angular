import {Component, HostBinding, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {delay, filter, map, mapTo, pairwise, scan, startWith, takeUntil, tap} from 'rxjs/operators';
import {MenuService} from '../../services/menu.service';
import {merge, Observable, Subject} from 'rxjs';
import {Menu} from '../../interfaces';

/**
 * Navigation Pane
 * This component represents a container that will slide in
 * from underneath the screen (mobile layout ONLY)
 * and present the submenus an navigatable items,
 * together with a slide-in animation for sub-levels.
 *
 * The effect is produced using 2 main containers:
 * - a container that shows the menu items, which is static
 * - a container that slides in from the left containing the submenu. Once
 *   this container is in place, the content of the main panel (that at the time is
 *   hidden behind this container) is swapped, and then this container is hidden
 *   back in place for a new animation.
 */
@Component({
  selector: 'aui-navigation-pane',
  templateUrl: './navigation-pane.component.html',
})
export class NavigationPaneComponent implements OnInit, OnDestroy {
  @HostBinding('class.o-menu__navigation-pane')
  navigationPane = true;
  /**
   * Helper observable that emits whenever we need to slide in a new menu
   */
  public slideInSubMenu$: Observable<boolean>;
  @HostBinding('class.is-visible')
  public paneIsVisible = false;
  public paneIsVisible$: Observable<boolean>;
  /**
   * Container reference where we will inject the submenu
   */
  @ViewChild('subMenu', {read: ViewContainerRef, static: true})
  private container: ViewContainerRef;
  /**
   * Container reference used for sliding in a submenu.
   */
  @ViewChild('slideInSubMenu', {read: ViewContainerRef, static: true})
  private slideInContainer: ViewContainerRef;
  private destroy$ = new Subject();

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {
    // Helper observable that emits when we need to display a submenu (NOT A MAIN MENU)
    const subMenuComesIn$: Observable<TemplateRef<Menu.ISubMenuContext>> = this.menuService.displaySubMenu$.pipe(
      takeUntil(this.destroy$),
      filter(menu => menu && menu.type === 'submenu'),
      map(menu => menu.templateRef)
    );

    // Helper observable that emits whetever we should show the panel
    this.paneIsVisible$ = merge(
      this.menuService.displaySubMenu$.pipe(
        startWith(undefined),
        pairwise(),
        scan((accumulator: any, currentValue) => {
          const [previous, current] = currentValue;
          // Should we toggle displaying the current menu?
          const isSame = (previous && current && previous.templateRef === current.templateRef);
          if (isSame) {
            // if we open up the same value, we'll toggle the menu
            return !accumulator;
          }
          // We've opened a different menu, so just pass on the current menu item
          return currentValue;
        }, false),
        takeUntil(this.destroy$),
        map(ref => !!ref),
        startWith(false)
      ),
      // If we close all menus, close the navigation pane
      this.menuService.onCloseMenu$.pipe(mapTo(false))
    );

    // Show main menu in the panel, without animation
    const showMainMenu$ = this.menuService.displaySubMenu$.pipe(
      filter(menu => menu && menu.type === 'main'),
      map(menu => menu.templateRef),
      tap((ref: TemplateRef<Menu.ISubMenuContext>) => {
        this.container.clear();
        if (ref && (typeof ref.createEmbeddedView === 'function')) {
          this.container.createEmbeddedView(ref);
        }
      })
    );

    // Slide in the main menu
    const showSlideInMenu$ = subMenuComesIn$.pipe(
      tap((ref: TemplateRef<Menu.ISubMenuContext>) => {
        this.slideInContainer.clear();
        if (ref && (typeof ref.createEmbeddedView === 'function')) {
          this.slideInContainer.createEmbeddedView(ref);
        }
      }),
      delay(150),
      tap((ref: TemplateRef<Menu.ISubMenuContext>) => {
        this.container.clear();
        if (ref && (typeof ref.createEmbeddedView === 'function')) {
          this.container.createEmbeddedView(ref);
        }
      })
    );

    // When do we need to slide in the menu?
    this.slideInSubMenu$ = merge(
      subMenuComesIn$.pipe(mapTo(true)),  // When we have a submenu coming in
      subMenuComesIn$.pipe(delay(150), mapTo(false)),  // After 100ms, hide the side panel again, sice the animation is done
      this.paneIsVisible$.pipe(filter(v => !v)) // And of course, if we close the panel, hide it as well
    );

    this.paneIsVisible$.pipe(takeUntil(this.destroy$)).subscribe(v => this.paneIsVisible = v);

    // Start the show!
    showMainMenu$.pipe(takeUntil(this.destroy$)).subscribe();
    showSlideInMenu$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  closeMenu() {
    this.menuService.closeAllMenus();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
