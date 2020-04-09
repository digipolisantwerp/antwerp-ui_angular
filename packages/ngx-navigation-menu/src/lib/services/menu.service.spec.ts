import {MenuService} from './menu.service';
import {cold, getTestScheduler} from 'jasmine-marbles';
import {Menu} from '../interfaces';
import {TestBed} from '@angular/core/testing';
import {select} from './helpers';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {LocalstorageService} from './localstorage.service';

describe('Menu Service Test', () => {
  let service: MenuService;
  let config: Menu.ModuleConfiguration;
  let storage: LocalstorageService;

  beforeEach(() => {
    config = {
      dockedByDefault: false,
    };
    TestBed.configureTestingModule({
      providers: [
        {
          provide: 'config',
          useValue: config,
        },
        {
          provide: LocalstorageService,
          useValue: sinon.createStubInstance(LocalstorageService)
        },
        MenuService,
      ],
    });
    service = TestBed.get(MenuService);
    storage = TestBed.get(LocalstorageService);
  });

  afterEach(() => {
    service.destroy();
  });

  describe('Service Creation', () => {
    it('should create initial state on mobile', () => {
      (window as any).innerWidth = 100;  // Simulate mobile
      expect(service.state$).toBeObservable(cold('a', {
        a: {
          docked: false,
          mode: 'mobile',
          activeMenu: null,
        },
      }));
    });
    it('should create an initial state on desktop', () => {
      (window as any).innerWidth = 2000; // Simulate desktop
      expect(service.state$).toBeObservable(cold('a', {
        a: {
          docked: false,
          mode: 'desktop',
          activeMenu: null,
        },
      }));
    });
  });

  describe('Service Destruction', () => {
    it('should unsubscribe from the tree on destruction', () => getTestScheduler().run((helpers) => {
      // First navigat to submenus :) (fake of course)
      service.displaySubMenu('one' as any);
      service.displaySubMenu('two' as any);

      // We should be able to navigate back twice
      const spyOnNavigateBack = sinon.spy(service, 'displaySubMenu');
      const spyOnCloseAllMenus = sinon.spy(service, 'closeAllMenus');
      service.navigateBack();
      expect(spyOnNavigateBack.callCount).toBe(1);
      // We now shouldn't be able to navigate back again
      service.navigateBack(); // This will close the last layer, so our three is left with []
      expect(spyOnNavigateBack.callCount).toBe(1);
      expect(spyOnCloseAllMenus.calledOnce).toBe(true);

      // Now re-add a layer, so that we should be able to navigate back
      // But destroy the service first, so that it won't work anymore
      service.destroy();
      helpers.flush();
      service.displaySubMenu('two' as any);
      service.displaySubMenu('three' as any);
      service.navigateBack();
      expect(spyOnNavigateBack.callCount).toBe(3);  // if we didn't destroy, this should be 4
    }));
  });

  describe('Module Configuration', () => {
    it('should not dock, not in localstorage', () => {
      const s = new MenuService({dockedByDefault: false}, storage);
      expect(s.state$.pipe(select(state => state.docked))).toBeObservable(cold('a', {a: false}));
    });
    it('SHOULD dock, not in localstorage', () => {
      const s = new MenuService({dockedByDefault: true}, storage);
      expect(s.state$.pipe(select(state => state.docked))).toBeObservable(cold('a', {a: true}));
    });
    it('should not dock, in localstorage', () => {
      (storage.getMenuState as SinonStub).returns({docked: false});
      const s = new MenuService({dockedByDefault: true, useLocalStorage: true}, storage);
      expect(s.state$.pipe(select(state => state.docked))).toBeObservable(cold('a', {a: false}));
    });
    it('SHOULD dock, in localstorage', () => {
      (storage.getMenuState as SinonStub).returns({docked: true});
      const s = new MenuService({dockedByDefault: false, useLocalStorage: true}, storage);
      expect(s.state$.pipe(select(state => state.docked))).toBeObservable(cold('a', {a: true}));
    });
  });

  describe('Window Resizing', () => {
    it('should trigger state change from desktop to mobile', () => getTestScheduler().run((helpers) => {
      (window as any).innerWidth = 2000;  // Desktop
      helpers.flush();
      const mode$ = service.state$.pipe(select(state => state.mode));
      expect(mode$).toBeObservable(cold('a', {a: 'desktop'}));

      // Now change to mobile
      (window as any).innerWidth = 130;  // Mobile
      window.dispatchEvent(new Event('resize'));
      expect(mode$).toBeObservable(cold('a', {a: 'mobile'}));
    }));
  });

  describe('Updating State', () => {
    it('should update known state property', () => {
      const docked$ = service.state$.pipe(select(state => state.docked));
      expect(docked$).toBeObservable(cold('a', {a: false}));
      service.updateState('docked', true);
      expect(docked$).toBeObservable(cold('a', {a: true}));
    });
    it('should not update the state with undefined new states', () => {
      service.state$.subscribe();
      service.updateState(null, null);
      expect(service.state$.pipe(
        select(v => (v as any).null)
      )).toBeObservable(cold('a', {a: undefined}));  // Weird bug that we test here
    });
  });

  describe('Tree Creation and Update', () => {
    /*
     When we navigate down the layers on a mobile layout, we'll
     hold a 'tree' model that remembers the previous menus, for back navigation
     */
    it('should accumulate a tree when navigating down the layers', () => {
      service.displaySubMenu('one' as any);
      service.displaySubMenu('two' as any);
      service.displaySubMenu('three' as any);

      // We should now have three items in the tree
      expect(service.treeLength$).toBeObservable(cold('a', {a: 3}));
    });
    it('should pop items from the tree when navigating back', () => {
      service.displaySubMenu('one' as any);
      service.displaySubMenu('two' as any);
      service.displaySubMenu('three' as any);
      // Now go back 2 layers
      service.navigateBack();
      service.navigateBack();
      expect(service.treeLength$).toBeObservable(cold('a', {a: 1}));
    });
    it('should close all menus when no layers available in the tree anymore', () => {
      const spyOnClose = sinon.spy(service, 'closeAllMenus');
      service.displaySubMenu('one' as any);
      service.displaySubMenu('two' as any);
      service.displaySubMenu('three' as any);
      service.navigateBack();
      service.navigateBack();
      service.navigateBack();
      expect(service.treeLength$).toBeObservable(cold('a', {a: 0}));
      expect(spyOnClose.calledOnce).toBe(true);
    });

    it('should forget about the tree when opening up a new main menu', () => {
      service.displaySubMenu({
        templateRef: 'one' as any,
        type: 'main',
      } as any);
      service.displaySubMenu({
        templateRef: 'one' as any,
        type: 'submenu',
      } as any);
      expect(service.treeLength$).toBeObservable(cold('a', {a: 2}));
      // Now navigate to another main menu
      service.displaySubMenu({
        templateRef: 'another' as any,
        type: 'main',
      });
      expect(service.treeLength$).toBeObservable(cold('a', {a: 1}));
    });
    it('should forget about the tree when closing all menus', () => {
      service.displaySubMenu('one' as any);
      service.displaySubMenu('two' as any);
      expect(service.treeLength$).toBeObservable(cold('a', {a: 2}));
      service.closeAllMenus();
      expect(service.treeLength$).toBeObservable(cold('a', {a: 0}));

    });
  });
});
