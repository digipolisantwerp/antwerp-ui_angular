import {ComponentFixture, TestBed} from '@angular/core/testing';
import {COMPONENTS} from '../components';
import * as sinon from 'sinon';
import {MenuService} from '../../services/menu.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {SubMenuItemComponent} from './sub-menu-item.component';
import {Menu} from '../../interfaces';
import {SubMenuComponent} from '../sub-menu/sub-menu.component';

describe('Sub Menu Item Component Test', () => {
  let fixture: ComponentFixture<SubMenuItemComponent>;
  let component: SubMenuItemComponent;
  let service: MenuService;
  let state$: Observable<Menu.MenuState>;
  let closeAllMenus$: Observable<void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ...COMPONENTS,
      ],
      providers: [
        {
          provide: 'config',
          useValue: {
            dockedByDefault: false,
          },
        },
        {
          provide: MenuService,
          useValue: sinon.createStubInstance(MenuService),
        },
        SubMenuComponent,
      ],
      imports: [
        RouterModule,
        CommonModule,
      ],
    }).compileComponents();

    service = TestBed.get(MenuService);

    /*
    DEFAULT CONFIG
    */
    state$ = hot('-');
    closeAllMenus$ = cold('-');

    sinon.stub(service, 'state$').get(() => state$);
    sinon.stub(service, 'displaySubMenu$').get(() => cold('-'));
    sinon.stub(service, 'onCloseMenu$').get(() => closeAllMenus$);
    sinon.stub(service, 'rootTemplateRef$').get(() => cold('-'));
    sinon.stub(service, 'currentMenuIsNestedSubMenu$').get(() => cold('a'));
    (service as any).configuration = {dockedByDefault: false};  // Overwrite prop

    fixture = TestBed.createComponent(SubMenuItemComponent);
    component = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('should create valid component', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('Events', () => {
    it('should stop propagation on click event', () => {
      const event = {stopPropagation: sinon.stub()};
      component.openSubMenu(event as any);
      expect(event.stopPropagation.called).toBe(true);
    });
  });

  describe('Active State', () => {
    it('should have default inactive state', () => {
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('a', {a: false}));
    });
    it('should become active on click', () => {
      component.itemClicked$ = hot('---a');
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('a--b', {a: false, b: true}));
    });
    it('should toggle active on multiple clicks', () => {
      component.itemClicked$ = hot('----a---b');
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('a---b---c', {a: false, b: true, c: false}));
    });
    it('should become inactive on close all menus', () => {
      component.itemClicked$ = hot('a');
      closeAllMenus$ = hot('-----a');
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('(ab)-c', {a: false, b: true, c: false}));
    });
    it('should become re-active when clicking after closing all menus', () => {
      component.itemClicked$ = hot('---a-------c');
      closeAllMenus$ = hot('------a');
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('a--b--c----d', {a: false, b: true, c: false, d: true}));
    });

    it('should become inactive when opening up another main tab', () => {
      component.itemClicked$ = hot('a');
      state$ = hot('-----a', {
        a: {
          mode: 'desktop',
          docked: false,
          activeMenu: {
            type: 'main',
          },
        },
      });
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('(ab)-c', {a: false, b: true, c: false}));
    });
    it('should close if we are opening up another submenu in the same parent menu item', () => {
      component.itemClicked$ = hot('a');
      const parent = {id: 'parent'};
      component.parent = parent as any;
      state$ = hot('------a', {
        a: {
          activeMenu: {
            type: 'submenu',
            parentMenu: parent,
            menuItem: 'some-sub-menu',
          },
        },
      });
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('(ab)--c', {a: false, b: true, c: false}));
    });
    it('should not close based on active menu if the submenu item is the same', () => {
      component.itemClicked$ = hot('a');
      const parent = {id: 'parent'};
      component.parent = parent as any;
      state$ = hot('----a', {
        a: {
          activeMenu: {
            type: 'submenu',
            parentMenu: parent,
            menuItem: component,
          },
        },
      });
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('(ab)--', {a: false, b: true}));
    });
    it('should close if the parent orders us to close', () => {
      component.itemClicked$ = hot('a');
      const parent = {onClose$: hot('------a', {a: true})};
      component.parent = parent as any;
      fixture.detectChanges();
      expect(component.isActive$).toBeObservable(cold('(ab)--a', {a: false, b: true}));
    });
    it('should cascasde the close event down to our submenu, if any', () => getTestScheduler().run((helpers) => {
      const submenu = {onClose$: {next: sinon.stub()}};
      const parent = {onClose$: hot('------a', {a: true})};
      component.itemClicked$ = hot('a');
      component.parent = parent as any;
      component.subMenu = submenu as any;

      fixture.detectChanges();
      helpers.flush();
      expect(submenu.onClose$.next.withArgs(true).calledOnce).toBe(true);
    }));
  });

  describe('Active Menu', () => {
    it('should update the state whenever active', () => getTestScheduler().run((helpers) => {
      component.itemClicked$ = hot('a');
      component.subMenu = {id: 'sub-menu'} as any;
      component.parent = {id: 'parent-menu'} as any;
      fixture.detectChanges();
      helpers.flush();
      expect((service.updateState as sinon.SinonStub).called).toBe(true);
    }));
  });

  describe('Mobile Menu', () => {
    it('should open the submenu on mobile', () => getTestScheduler().run((helpers) => {
      component.subMenu = {templateRef: 'template'} as any;
      state$ = hot('--a', {
        a: {
          mode: 'mobile',
        },
      });
      component.itemClicked$ = hot('----a');
      fixture.detectChanges();
      helpers.flush();
      expect((service.displaySubMenu as sinon.SinonStub).withArgs({type: 'submenu', templateRef: 'template'}).called).toBe(true);
    }));
    it('should not open the state menu on desktop mode', () => getTestScheduler().run((helpers) => {
      component.subMenu = {templateRef: 'template'} as any;
      state$ = hot('--a', {
        a: {
          mode: 'desktop',
        },
      });
      component.itemClicked$ = hot('----a');
      fixture.detectChanges();
      helpers.flush();
      expect((service.displaySubMenu as sinon.SinonStub).called).toBe(false);
    }));
    it('should not open submenu if submenu is undefined', () => getTestScheduler().run((helpers) => {
      component.subMenu = undefined;
      state$ = hot('--a', {
        a: {
          mode: 'mobile',
        },
      });
      component.itemClicked$ = hot('----a');
      fixture.detectChanges();
      helpers.flush();
      expect((service.displaySubMenu as sinon.SinonStub).called).toBe(false);
    }));
  });
});
