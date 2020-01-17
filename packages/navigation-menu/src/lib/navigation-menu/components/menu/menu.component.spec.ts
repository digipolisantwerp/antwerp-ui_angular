import { MenuService } from '../../services/menu.service';
import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
import * as sinon from 'sinon';
import { MenuComponent } from './menu.component';
import { COMPONENTS } from '../index';
import { hot, cold, getTestScheduler } from 'jasmine-marbles';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Menu } from '../../interfaces';

describe('Menu Component Test', () => {
	let service: MenuService;
	let fixture: ComponentFixture<MenuComponent>;
	let component: MenuComponent;

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

		/*
		DEFAULT CONFIG
		*/
		state$ = hot('-');

		sinon.stub(service, 'state$').get(() => state$);
		sinon.stub(service, 'displaySubMenu$').get(() => cold('-'));
		sinon.stub(service, 'onCloseMenu$').get(() => cold('-'));
		sinon.stub(service, 'rootTemplateRef$').get(() => cold('-'));
		sinon.stub(service, 'currentMenuIsNestedSubMenu$').get(() => cold('-'));
		(service as any).configuration = { dockedByDefault: false };  // Overwrite prop

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
			state$ = hot('--a', { a: { docked: true } });
			const spyOnUpdate = (service.updateState as sinon.SinonStub)
				.withArgs('docked', false)
				// Fake update the state
				.callsFake(() => state$ = hot('--a', { a: { docked: false } }));
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

	describe('Destruction', () => {
		it('should destroy the service when destroying itself', () => {
			fixture.detectChanges();
			const spyOnDestroy = (service.destroy as sinon.SinonStub);
			component.ngOnDestroy();
			expect(spyOnDestroy.calledOnce).toBe(true);
		});
	});
});
