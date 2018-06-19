import { async, fakeAsync, tick, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { StatusbarComponent } from './status-bar.component';
import { STATUSBAR_AVAILABLE_TYPES, STATUSBAR_DEFAULT_TYPES } from '../../status-bar.conf';
import { Label, InterpolateLabelPipe, PluralizeLabelPipe } from '@acpaas-ui/ngx-components/utils';


describe('The Statusbar Component', () => {
	let comp: StatusbarComponent;
	let fixture: ComponentFixture<StatusbarComponent>;
	let de: DebugElement;
	let el: HTMLElement;
	const routerEvents = new Subject();

	class RouterStub {
		public events = routerEvents;
		public url = '';
	}

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
			],
			declarations: [
				StatusbarComponent,
				InterpolateLabelPipe,
				PluralizeLabelPipe,
			],
			providers: [
				{ provide: STATUSBAR_AVAILABLE_TYPES, useValue: STATUSBAR_DEFAULT_TYPES },
				{ provide: Router, useClass: RouterStub },
			],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StatusbarComponent);

		comp = fixture.componentInstance;
	});

	it('should be empty when there is no active notification', () => {
		fixture.detectChanges();
		de = fixture.debugElement.query(By.css('.aui-statusbar'));
		expect(de).toBeNull();
	});

	it('should parse the notification types to typeclasses', () => {
		expect(typeof comp.typeClasses).toEqual('object');
		expect(comp.typeClasses.I).toEqual('info');
	});

	describe('Notification updates', () => {
		let notifications;
		let clearSpy;
		let setSpy;
		let emitSpy;

		beforeEach(() => {
			notifications = [{
				message: 'something went wrong',
			}, {
				message: 'not found',
			}];

			comp.notifications = notifications;

			/**
			 * Since the timer and scope listeners are private, we can only check if the
			 * clearNotification callback gets called when they are triggered.
			 */
			clearSpy = spyOn(comp, 'clearListeners');
			setSpy = spyOn(comp, 'setListeners');
			emitSpy = spyOn(comp.clearNotification, 'emit').and.stub();

			comp.ngOnChanges();

			fixture.detectChanges();

			de = fixture.debugElement.query(By.css('.o-statusbar'));
			el = de.nativeElement;
		});

		it('should update the listeners and active notification on change', () => {
			expect(el).toBeDefined();
			expect(el.querySelector('.o-statusbar__notification').textContent).toContain('not found');
			expect(clearSpy.calls.count()).toEqual(1);
			expect(setSpy.calls.count()).toEqual(1);
		});

		it('should clear the active notification if there are no notifications left', () => {
			comp.notifications.length = 0;
			comp.activeNotification = {
				message: 'test',
				handle: '',
				target: '',
				type: '',
				timer: 200,
				scope: '',
				clear: () => {},
			};

			comp.ngOnChanges();
			fixture.detectChanges();

			expect(comp.activeNotification).toEqual(null);
		});

		it('should clear the active notification if there are no notifications', () => {
			comp.notifications = undefined;
			comp.activeNotification = {
				message: 'test',
				handle: '',
				target: '',
				type: '',
				timer: 200,
				scope: '',
				clear: () => { },
			};

			comp.ngOnChanges();
			fixture.detectChanges();

			expect(comp.activeNotification).toEqual(null);
		});

		it('should not set the listeners if there are no more notifications', () => {
			clearSpy.calls.reset();
			setSpy.calls.reset();
			comp.notifications.length = 0;
			comp.ngOnChanges();

			expect(clearSpy.calls.count()).toEqual(1);
			expect(setSpy.calls.count()).toEqual(0);
		});

		it('should emit the activeNotification on clear', () => {
			const expected = {...notifications[1]};
			comp.onClearNotification();

			fixture.detectChanges();

			expect(emitSpy).toHaveBeenCalledWith(expected);
		});
	});

	describe('Notification timers', () => {
		let emitSpy;
		let notification;

		beforeEach(() => {
			emitSpy = spyOn(comp.clearNotification, 'emit');

			notification = {
				message: 'not found',
				timer: 400,
			};
		});

		it('should not set a timer if the notification has a timer <= 0', fakeAsync(() => {
			notification.timer = 0;
			comp.notifications = [notification];
			comp.ngOnChanges();
			tick(500);
			fixture.detectChanges();
			fixture.whenStable().then(() => {
				expect(emitSpy.calls.count()).toEqual(0);
			});
		}));

		it('should set a timer if the notification has a timer > 0 and clear the notification when the timer has ended', fakeAsync(() => { // tslint:disable-line:max-line-length
			comp.notifications = [notification];
			comp.ngOnChanges();
			tick(500);
			fixture.detectChanges();
			fixture.whenStable().then(() => {
				expect(emitSpy.calls.count()).toEqual(1);
				expect(emitSpy.calls.mostRecent().args[0]).toEqual(notification);
			});
		}));

		it('should cancel the timer if the notifications are updated', fakeAsync(() => {
			const newNotification = {
				message: 'test',
				handle: '',
				target: '',
				type: '',
				timer: 200,
				scope: '',
				clear: () => { },
			};

			comp.notifications.push(newNotification);
			comp.ngOnChanges();
			fixture.detectChanges();

			tick(500);
			fixture.detectChanges();
			fixture.whenStable().then(() => {
				expect(emitSpy.calls.count()).toEqual(1);
			});
		}));
	});

	describe('Notification scope', () => {
		beforeEach(() => {
			const currentRoute = new NavigationStart(1, '/home');

			routerEvents.next(currentRoute);
		});

		it('should not subscribe to the router if the scope was "root"', async(inject([Router], (router: RouterStub) => {
			spyOn(router.events, 'subscribe');
			comp.notifications = [{
				message: 'not found',
				handle: '',
				target: '',
				type: '',
				timer: 200,
				scope: '',
				clear: () => { },
			}];
			comp.ngOnChanges();
			fixture.detectChanges();

			expect(router.events.subscribe).not.toHaveBeenCalled();
		})));

		it('should subscribe to the router if the scope was "page"', async(inject([Router], (router: RouterStub) => {
			spyOn(router.events, 'subscribe');

			comp.notifications = [{
				message: 'not found',
				handle: '',
				target: '',
				type: '',
				timer: 200,
				scope: 'page',
				clear: () => { },
			}];
			comp.ngOnChanges();
			fixture.detectChanges();

			expect(router.events.subscribe).toHaveBeenCalled();
		})));

		it('should clear the notification if the route changes', async(inject([Router], (router: RouterStub) => {
			spyOn(comp.clearNotification, 'emit');
			comp.notifications = [{
				message: 'not found',
				handle: '',
				target: '',
				type: '',
				timer: 200,
				scope: 'page',
				clear: () => { },
			}];
			comp.ngOnChanges();
			fixture.detectChanges();

			const newRoute = new NavigationStart(2, '/about');

			router.url = '/home';
			routerEvents.next(newRoute);

			fixture.detectChanges();

			expect(comp.clearNotification.emit).toHaveBeenCalled();
		})));

		it(
			'should not clear the notificaiton if the route changes but the url is unchanged',
			async(inject([Router], (router: RouterStub) => {
				spyOn(comp.clearNotification, 'emit');
				comp.notifications = [{
					message: 'not found',
					handle: '',
					target: '',
					type: '',
					timer: 200,
					scope: 'page',
					clear: () => { },
				}];
				comp.ngOnChanges();
				fixture.detectChanges();

				const newRoute = new NavigationStart(2, '/home');

				router.url = '/home';
				routerEvents.next(newRoute);

				fixture.detectChanges();

				expect(comp.clearNotification.emit).not.toHaveBeenCalled();
			}))
		);
	});

	describe('Clearing the listeners', () => {
		it('should clear the notificationTimer if it was set', () => {
			const clearTimeoutSpy = spyOn(window, 'clearTimeout').and.stub();

			comp['notificationTimer'] = {test: 'data'};

			comp.ngOnChanges();
			fixture.detectChanges();

			expect(clearTimeoutSpy).toHaveBeenCalledWith({test: 'data'});
		});

		it('should clear the scopeListener if it was set', () => {
			comp['scopeListener'] = {
				unsubscribe: () => {},
			};

			const clearListenerSpy = spyOn(comp['scopeListener'], 'unsubscribe');

			comp.ngOnChanges();
			fixture.detectChanges();

			expect(comp['scopeListener'].unsubscribe).toHaveBeenCalled();
		});
	});
});
