import {MenuService} from '../../services/menu.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import * as sinon from 'sinon';
import {MenuComponent} from './menu.component';
import {COMPONENTS} from '../components';
import {cold, getTestScheduler, hot} from 'jasmine-marbles';
import {NavigationStart, Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {Menu} from '../../interfaces';

describe('Menu Component Test', () => {
  let service: MenuService;
  let fixture: ComponentFixture<MenuComponent>;
  let component: MenuComponent;
  let router: Router;

  let state$: Observable<Menu.MenuState>;

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
    router = TestBed.get(Router);

    /*
    DEFAULT CONFIG
    */
    state$ = hot('-');

    sinon.stub(service, 'state$').get(() => state$);
    sinon.stub(service, 'displaySubMenu$').get(() => cold('-'));
    sinon.stub(service, 'onCloseMenu$').get(() => cold('-'));
    sinon.stub(service, 'rootTemplateRef$').get(() => cold('-'));
    sinon.stub(service, 'currentMenuIsNestedSubMenu$').get(() => cold('-'));
    (service as any).configuration = {dockedByDefault: false};  // Overwrite prop

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Initializion', () => {
    it('should create a valid component', () => {
      expect(component).toBeDefined();
      fixture.detectChanges();
    });
  });

  describe('Undock and Dock', () => {

    it('should toggle docking', () => getTestScheduler().run((helpers) => {
      state$ = hot('--a', {a: {docked: true}});
      const spyOnUpdate = (service.updateState as sinon.SinonStub)
        .withArgs('docked', false)
        // Fake update the state
        .callsFake(() => state$ = hot('--a', {a: {docked: false}}));
      fixture.detectChanges();
      component.toggleDocking();
      helpers.flush();
      expect(spyOnUpdate.withArgs('docked', false).calledOnce).toBe(true);

      // Now toggle it again
      component.toggleDocking();
      helpers.flush();
      expect(spyOnUpdate.withArgs('docked', true).calledOnce).toBe(true);
    }));
  });

  describe('Closing Menus', () => {
    it('should close the menus when a navigation start event occurs', () => getTestScheduler().run((helpers) => {
      (router as any).events = hot('--a', {a: (new NavigationStart(1, '/some/url'))});
      fixture.detectChanges();
      helpers.flush();
      expect((service.closeAllMenus as sinon.SinonStub).calledOnce).toBe(true);
    }));
    it('should not close menus on other events', () => getTestScheduler().run((helpers) => {
      (router as any).events = hot('--a', {a: 'not an event'});
      fixture.detectChanges();
      helpers.flush();
      expect((service.closeAllMenus as sinon.SinonStub).called).toBe(false);
    }));
  });

  describe('Destruction', () => {
    it('should destroy the service when destroying itself', () => {
      fixture.detectChanges();
      const spyOnDestroy = (service.destroy as sinon.SinonStub);
      component.ngOnDestroy();
      expect(spyOnDestroy.calledOnce).toBe(true);
    });
  });
});
