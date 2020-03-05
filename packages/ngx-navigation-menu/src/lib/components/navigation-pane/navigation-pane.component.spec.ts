import {MenuService} from '../../services/menu.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import * as sinon from 'sinon';
import {COMPONENTS} from '../components';
import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {NavigationPaneComponent} from './navigation-pane.component';
import {Menu} from '../../interfaces';

describe('Navigation Pane Component Test', () => {
  let service: MenuService;
  let fixture: ComponentFixture<NavigationPaneComponent>;
  let component: NavigationPaneComponent;

  let state$: Observable<Menu.MenuState>;
  let closeAllMenus$: Observable<void>;
  let displaySubMenu$: Observable<Menu.ISubMenu>;

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
    displaySubMenu$ = cold('-');

    sinon.stub(service, 'state$').get(() => state$);
    sinon.stub(service, 'displaySubMenu$').get(() => displaySubMenu$);
    sinon.stub(service, 'onCloseMenu$').get(() => closeAllMenus$);
    sinon.stub(service, 'rootTemplateRef$').get(() => cold('-'));
    sinon.stub(service, 'currentMenuIsNestedSubMenu$').get(() => cold('-'));
    (service as any).configuration = {dockedByDefault: false};  // Overwrite prop

    fixture = TestBed.createComponent(NavigationPaneComponent);
    component = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('should create valid component', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('Pane Visibility', () => {
    it('should by default not be visible', () => {
      fixture.detectChanges();
      expect(component.paneIsVisible$).toBeObservable(cold('a', {a: false}));
    });
    it('should display pane (without slide animation) when submenu comes in for the first time', () => {
      displaySubMenu$ = hot('----a', {
        a: {
          type: 'submenu',
          templateRef: 'template',
        },
      });
      fixture.detectChanges();
      expect(component.paneIsVisible$).toBeObservable(cold('a---b', {a: false, b: true}));
    });
    it('should display slide animation on second level sub menu', () => {
      displaySubMenu$ = hot('--a-----b--c', {
        a: {
          type: 'submenu',
          templateRef: 'a',
        },
        b: {
          type: 'submenu',
          templateRef: 'b',
        },
        c: {
          type: 'submenu',
          templateRef: 'c',
        },
      });
      fixture.detectChanges();
      expect(component.paneIsVisible$).toBeObservable(cold('f-t-----t--t', {f: false, t: true}));
    });
    it('should toggle visibility on displaying the same sub menu', () => {
      const submenu = {
        type: 'main',
        templateRef: 'a',
      };
      displaySubMenu$ = hot('---a----a', {a: submenu});
      fixture.detectChanges();
      expect(component.paneIsVisible$).toBeObservable(cold('f--t----f', {f: false, t: true}));
    });
    it('should hide pane when closing all menus', () => {
      displaySubMenu$ = hot('--a', {
        a: {
          type: 'main',
          templateRef: 'a',
        },
      });
      closeAllMenus$ = hot('-----a');
      fixture.detectChanges();
      expect(component.paneIsVisible$).toBeObservable(cold('f-t--f', {f: false, t: true}));
    });
  });

  describe('Visibility State', () => {
    it('should set visibility state if visible', () => getTestScheduler().run((helpers) => {
      displaySubMenu$ = hot('-a', {a: {type: 'main', templateRef: 'a'}});
      fixture.detectChanges();
      helpers.flush();
      expect(component.paneIsVisible).toBe(true);
    }));
    it('should set visibility state if not visible', () => getTestScheduler().run(helpers => {
      displaySubMenu$ = hot('-a', {a: {type: 'main', templateRef: 'a'}});
      closeAllMenus$ = hot('---a');
      fixture.detectChanges();
      helpers.flush();
      expect(component.paneIsVisible).toBe(false);
    }));
  });

  describe('Slide In Animation', () => {
    it('should slide in the second and third level menu', () => {
      displaySubMenu$ = hot('--a----b--c', {
        a: {
          type: 'main',
          templateRef: 'a',
        },
        b: {
          type: 'submenu',
          templateRef: 'b',
        },
        c: {
          type: 'submenu',
          templateRef: 'c',
        },
      });
      fixture.detectChanges();
      expect(component.slideInSubMenu$).toBeObservable(cold('f------t--t', {f: false, t: true}));
    });
  });
});
