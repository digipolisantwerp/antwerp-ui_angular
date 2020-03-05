import {MenuService} from '../../services/menu.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import * as sinon from 'sinon';
import {COMPONENTS} from '../components';
import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {Menu} from '../../interfaces';
import {MenuTabComponent} from './menu-tab.component';

describe('Menu Tab Component Test', () => {
  let service: MenuService;
  let fixture: ComponentFixture<MenuTabComponent>;
  let component: MenuTabComponent;

  let state$: Observable<Menu.MenuState>;
  let closeAllMenus$: Observable<void>;

  let sandbox: sinon.SinonSandbox;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();
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
      ],
      imports: [
        RouterModule.forRoot([]),
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
    sinon.stub(service, 'currentMenuIsNestedSubMenu$').get(() => cold('-'));
    (service as any).configuration = {dockedByDefault: false};  // Overwrite prop

    fixture = TestBed.createComponent(MenuTabComponent);
    component = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('should create a valid component', () => {
      expect(fixture).toBeDefined();
      expect(component).toBeDefined();
      fixture.detectChanges();
    });
  });

  describe('Active State', () => {
    it('should have default inactive state', () => {
      state$ = hot('--a', {
        a: {
          docked: false,
          mode: 'mobile',
          activeMenu: 'false',
        },
      });
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('a', {a: false}));
    });
    it('should become active on click', () => {
      component.headerClicked$ = hot('--a');
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('a-b', {a: false, b: true}));
    });

    it('should toggle active on multiple clicks', () => {
      component.headerClicked$ = hot('---a----b');
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('a--b----c', {a: false, b: true, c: false}));
    });

    it('should become inactive on close all menus', () => {
      component.headerClicked$ = hot('a');
      closeAllMenus$ = hot('------a');
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('(ab)--c', {a: false, b: true, c: false}));
    });

    it('should become inactive when opening up another (main) tab', () => {
      component.headerClicked$ = hot('a');
      state$ = hot('-------a', {
        a: {
          mode: 'mobile',
          docked: 'false',
          activeMenu: {
            type: 'main',
            menuItem: 'some-menu-item',
          },
        },
      });
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('(ab)---c', {a: false, b: true, c: false}));
    });
    it('should NOT become inactive when opening a submenu', () => {
      component.headerClicked$ = hot('a');
      state$ = hot('-------a', {
        a: {
          mode: 'mobile',
          docked: 'false',
          activeMenu: {
            type: 'submenu',
            menuItem: 'some-menu-item',
          },
        },
      });
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('(ab)----', {a: false, b: true}));
    });
  });

  describe('Active Menu', () => {
    it('should set the active menu to main type when clicked', () => getTestScheduler().run((helpers) => {
      component.headerClicked$ = hot('a');
      fixture.detectChanges();
      component.subMenu = {id: 'some-submenu'} as any;
      helpers.flush();
      expect((service.updateState as sinon.SinonStub).withArgs('activeMenu', {
        type: 'main',
        menuItem: component,
      }).calledOnce).toBe(true);
    }));
    it('should not become inactive when active menu is same as current tab', () => {
      component.headerClicked$ = hot('a');
      state$ = hot('-----a', {
        activeMenu: {
          menuItem: component,
          type: 'main',
        },
      });
      fixture.detectChanges();
      expect(component.tabIsActive$).toBeObservable(cold('(ab)--', {a: false, b: true}));
    });
  });

  describe('Mobile Menu', () => {
    it('should open main mobile menu on click', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          mode: 'mobile',
        },
      });
      component.headerClicked$ = hot('--a', {a: false});
      fixture.detectChanges();
      component.subMenu = {templateRef: 'template' as any} as any;
      helpers.flush();

      expect((service.displaySubMenu as sinon.SinonStub).withArgs({type: 'main', templateRef: 'template'}).calledOnce).toBe(true);
    }));

    it('should open a submenu on click', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          mode: 'mobile',
        },
      });
      component.headerClicked$ = hot('--a', {a: true});
      fixture.detectChanges();
      component.subMenu = {templateRef: 'template' as any} as any;
      helpers.flush();

      expect((service.displaySubMenu as sinon.SinonStub).withArgs({type: 'submenu', templateRef: 'template'}).calledOnce).toBe(true);
    }));

    it('should not open mobile menu in desktop mode', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          mode: 'desktop',
        },
      });
      component.headerClicked$ = hot('--a', {a: false});
      component.subMenu = {templateRef: 'template' as any} as any;
      fixture.detectChanges();
      helpers.flush();

      expect((service.displaySubMenu as sinon.SinonStub).called).toBe(false);
    }));

    it('should not open a menu if no submenu is present', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          mode: 'mobile',
        },
      });
      component.headerClicked$ = hot('a');
      component.subMenu = undefined;
      fixture.detectChanges();
      helpers.flush();
      expect((service.displaySubMenu as sinon.SinonStub).called).toBe(false);
    }));
    it('should not open a menu if no templateRef is present', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          mode: 'mobile',
        },
      });
      component.headerClicked$ = hot('a');
      component.subMenu = {templateRef: undefined} as any;
      fixture.detectChanges();
      helpers.flush();
      expect((service.displaySubMenu as sinon.SinonStub).called).toBe(false);
    }));
  });
});
