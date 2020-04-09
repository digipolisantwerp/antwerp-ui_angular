import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SubMenuComponent} from './sub-menu.component';
import {COMPONENTS} from '../components';
import * as sinon from 'sinon';
import {MenuService} from '../../services/menu.service';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {Menu} from '../../interfaces';
import {cold, getTestScheduler, hot} from 'jasmine-marbles';

describe('Sub Menu Component Test', () => {
  let fixture: ComponentFixture<SubMenuComponent>;
  let component: SubMenuComponent;
  let service: MenuService;
  let state$: Observable<Menu.MenuState>;
  let nestedSubMenu$: Observable<boolean>;

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
    nestedSubMenu$ = cold('-');

    sinon.stub(service, 'state$').get(() => state$);
    sinon.stub(service, 'displaySubMenu$').get(() => cold('-'));
    sinon.stub(service, 'onCloseMenu$').get(() => cold('-'));
    sinon.stub(service, 'rootTemplateRef$').get(() => cold('-'));
    sinon.stub(service, 'currentMenuIsNestedSubMenu$').get(() => nestedSubMenu$);
    (service as any).configuration = {dockedByDefault: false};  // Overwrite prop

    fixture = TestBed.createComponent(SubMenuComponent);
    component = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('should create valid component', () => {
      fixture.detectChanges();
      expect(component).toBeDefined();
    });
  });

  describe('Dock and Undock', () => {
    it('should should apply css class if docked', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          docked: true,
        },
      });
      fixture.detectChanges();
      helpers.flush();
      expect(component.isDocked).toBe(true);
    }));
    it('should remove css class if not docked', () => getTestScheduler().run((helpers) => {
      state$ = hot('a', {
        a: {
          docked: false,
        },
      });
      fixture.detectChanges();
      helpers.flush();
      expect(component.isDocked).toBe(false);
    }));
  });

  describe('Nested Submenu', () => {
    it('should apply nested submenu rule by state', () => getTestScheduler().run((helpers) => {
      nestedSubMenu$ = hot('a', {a: true});
      fixture.detectChanges();
      helpers.flush();
      expect(component.isNestedSubMenu).toBe(true);
    }));
    it('should remove nested submenu rule by state', () => getTestScheduler().run((helpers) => {
      nestedSubMenu$ = hot('a', {a: false});
      fixture.detectChanges();
      helpers.flush();
      expect(component.isNestedSubMenu).toBe(false);
    }));
  });
});
