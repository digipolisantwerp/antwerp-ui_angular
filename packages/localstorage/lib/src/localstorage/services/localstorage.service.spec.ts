import { async, inject, TestBed } from '@angular/core/testing';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { LOCALSTORAGE_CONFIG } from '../localstorage.conf';
import { LocalstorageService } from './localstorage.service';

const localstorageConfig = {
	storageType: 'localStorage',
};

interface BrowserStorage {
	[key: string]: any;
}

class Storage implements BrowserStorage {
	setItem(key, value) {
		this[key] = value;
	}

	getItem(key) {
		return this[key];
	}

	removeItem(key) {
		delete this[key];
	}

	pushStorage(data) {
		Object.getOwnPropertyNames(data).forEach(prop => {
			this[prop] = JSON.stringify(data[prop]);
		});
	}

	clear() {
		Object.getOwnPropertyNames(this).forEach(prop => {
			delete this[prop];
		});
	}
}

const windowStub = {
	localStorage: new Storage(),
	sessionStorage: new Storage(),
	Storage: Storage,
};

const injectService = (cb) => {
	return inject(
		[LocalstorageService],
		(localstorageService: LocalstorageService) => cb(localstorageService)
	);
};

describe('The Localstorage Service', () => {
	afterAll(() => {
		delete LocalstorageService.instance;
	});

	describe('Instance', () => {
		beforeEach(() => {
			TestBed.configureTestingModule({
				providers: [
					{ provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
					{ provide: WINDOW, useValue: windowStub },
					LocalstorageService,
				],
			});
		});

		it('stores the first instance on the class', injectService(localstorageService => {
			expect(LocalstorageService.instance).toBeDefined();
			expect(LocalstorageService.instance).toBe(localstorageService);
			expect(LocalstorageService.instance).toBe(localstorageService.instance);
		}));
	});

	describe('Storage validation', () => {
		it('should validate the storage', () => {
			TestBed.configureTestingModule({
				providers: [
					{ provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
					{ provide: WINDOW, useValue: windowStub },
					LocalstorageService,
				],
			});

			spyOn((LocalstorageService as any).prototype, 'validateStorage').and.stub();

			injectService(localStorageService => {
				expect(localStorageService.validateStorage).toHaveBeenCalled();
			})();
		});

		describe('validateStorage', () => {
			beforeEach(() => {
				TestBed.configureTestingModule({
					providers: [
						{ provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
						{ provide: WINDOW, useValue: windowStub },
						LocalstorageService,
					],
				});
			});

			it('should do nothing if there is no identifier in the config nor the storage', injectService(localstorageService => {
				spyOn(localstorageService, 'clear').and.stub();
				spyOn(localstorageService, 'setItem').and.stub();
				spyOn(localstorageService, 'getStorageSnapshot').and.returnValue({});

				localstorageService.validateStorage();

				expect(localstorageService.clear).not.toHaveBeenCalled();
				expect(localstorageService.setItem).not.toHaveBeenCalled();
			}));

			it(
				'should do nothing if the identifier in the config equals the one found in the storage',
				injectService(localstorageService => {
					spyOn(localstorageService, 'clear').and.stub();
					spyOn(localstorageService, 'setItem').and.stub();
					spyOn(localstorageService, 'getStorageSnapshot').and.returnValue({
						['aui-storage']: 'test',
					});

					localstorageService.identifier = 'test';

					localstorageService.validateStorage();

					expect(localstorageService.clear).not.toHaveBeenCalled();
					expect(localstorageService.setItem).not.toHaveBeenCalled();
				})
			);

			it('should clear the storage and update the identifier if there is a mismatch', injectService(localstorageService => {
				spyOn(localstorageService, 'clear').and.stub();
				spyOn(localstorageService, 'setItem').and.stub();
				spyOn(localstorageService, 'getStorageSnapshot').and.returnValue({
					['aui-storage']: 'test',
				});

				localstorageService.identifier = 'test2';

				localstorageService.validateStorage();

				expect(localstorageService.clear).toHaveBeenCalled();
				expect(localstorageService.setItem).toHaveBeenCalledWith('aui-storage', 'test2');
			}));

			it('should not set the identifier if it wasn\'t provided', injectService(localstorageService => {
				spyOn(localstorageService, 'clear').and.stub();
				spyOn(localstorageService, 'setItem').and.stub();
				spyOn(localstorageService, 'getStorageSnapshot').and.returnValue({
					['aui-storage']: 'test',
				});

				localstorageService.identifier = '';

				localstorageService.validateStorage();

				expect(localstorageService.clear).toHaveBeenCalled();
				expect(localstorageService.setItem).not.toHaveBeenCalled();
			}));
		});
	});

	describe('StorageType', () => {
		// async beforeEach
		beforeEach(async(() => {
			localstorageConfig.storageType = '';
			TestBed.configureTestingModule({
				providers: [
					{ provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
					{ provide: WINDOW, useValue: windowStub },
					LocalstorageService,
				],
			});
		}));

		it('sets the storageType to "localStorage" by default', injectService(localstorageService => {
			expect(localstorageService.storageType).toEqual('localStorage');
			expect(localstorageService.storage).toEqual(windowStub.localStorage);
		}));

		it('sets the preferred storageType', injectService(localstorageService => {
			localstorageService.setStorage({
				storageType: 'sessionStorage',
			});

			expect(localstorageService.storageType).toEqual('sessionStorage');
			expect(localstorageService.storage).toEqual(windowStub.sessionStorage);
		}));

		it('falls back to "localStorage" for unknown storage types', injectService(localstorageService => {
			localstorageService.setStorage({
				storageType: 'test',
			});

			expect(localstorageService.storageType).toEqual('localStorage');
			expect(localstorageService.storage).toEqual(windowStub.localStorage);
		}));

		it('falls back to "memory" if the requested storage type and the localStorage are not available', injectService(localstorageService => { // tslint:disable-line:max-line-length
			delete localstorageService.$window.localStorage;

			spyOn(localstorageService, 'verifyStorageType').and.callThrough();

			localstorageService.setStorage({
				storageType: 'test',
			});

			expect(localstorageService.storageType).toEqual('memory');
			expect(localstorageService.verifyStorageType).toHaveBeenCalledTimes(3); // 1. test, 2. localStorage, 3. memory
		}));
	});

	describe('API\'s', () => {
		// async beforeEach
		beforeEach(async(() => {
			TestBed.configureTestingModule({
				providers: [
					{ provide: LOCALSTORAGE_CONFIG, useValue: localstorageConfig },
					{ provide: WINDOW, useValue: windowStub },
					LocalstorageService,
				],
			});
		}));

		describe('Browser Storage API', () => {
			beforeAll(() => {
				spyOn(LocalstorageService.prototype as any, 'updateSubscribers').and.stub();
			});

			it('calls the setItem method on the storage and updates the subscribers', injectService(localstorageService => {
				spyOn(windowStub.localStorage, 'setItem');

				const data = {
					id: '1',
				};
				localstorageService.setItem('test', data);

				expect(windowStub.localStorage.setItem).toHaveBeenCalledWith('test', JSON.stringify(data));
				expect(localstorageService.updateSubscribers).toHaveBeenCalledWith('test');

				localstorageService.clearSubscribers();
			}));

			it('calls the getItem method on the storage and returns the result', injectService(localstorageService => {
				spyOn(windowStub.localStorage, 'getItem').and.callThrough();
				const expected = {
					user: {
						name: 'bob',
						email: 'bob@mail.com',
					},
				};

				windowStub.localStorage.pushStorage({ test: expected });

				expect(localstorageService.getItem('test')).toEqual(expected);
				expect(windowStub.localStorage.getItem).toHaveBeenCalledWith('test');

				localstorageService.clearSubscribers();
			}));

			it('calls the removeItem method on the storage and updates the subscribers', injectService(localstorageService => {
				spyOn(windowStub.localStorage, 'removeItem');

				localstorageService.removeItem('test');

				expect(windowStub.localStorage.removeItem).toHaveBeenCalledWith('test');
				expect(localstorageService.updateSubscribers).toHaveBeenCalledWith('test');

				localstorageService.clearSubscribers();
			}));

			it(
				'calls the clear method on the storage with any provided arguments and updates the subscribers',
				injectService(localstorageService => {
					spyOn(windowStub.localStorage, 'clear');
					localstorageService.clear('test');

					expect(windowStub.localStorage.clear).toHaveBeenCalledWith('test');
					expect(localstorageService.updateSubscribers).toHaveBeenCalled();

					localstorageService.clearSubscribers();
				})
			);
		});

		describe('Subscription API', () => {
			beforeEach(() => {
				windowStub.localStorage.pushStorage({
					test: {
						user: {
							email: 'bob@mail.com',
							username: 'bob',
						},
					},
					data: 'test',
				});
			});

			it('returns a subscriber for a property selector', injectService(localstorageService => {
				const subscriber = localstorageService.select('test');
				expect(subscriber.source instanceof BehaviorSubject).toBe(true);
				expect(localstorageService.select('test')).toEqual(subscriber);

				localstorageService.clearSubscribers();
			}));

			it('returns a subscriber for a path selector', injectService(localstorageService => {
				const subscriber = localstorageService.select(['test', 'user']);
				expect(subscriber.source instanceof BehaviorSubject).toBe(true);
				expect(localstorageService.select(['test', 'user'])).toEqual(subscriber);

				localstorageService.clearSubscribers();
			}));

			it('returns a subscriber for a function selector', injectService(localstorageService => {
				const selector = storage => storage.test.user;
				const subscriber = localstorageService.select(selector);
				expect(subscriber.source instanceof BehaviorSubject).toBe(true);
				expect(localstorageService.select(selector)).toEqual(subscriber);

				localstorageService.clearSubscribers();
			}));

			it('only updates the subscriber if the value has changed', injectService(localstorageService => {
				const subscriber = localstorageService.select(['test', 'user', 'username']);
				const mockSubscription = {
					cb: (nextValue) => {},
				};

				spyOn(mockSubscription, 'cb').and.callThrough();

				subscriber.subscribe(mockSubscription.cb);

				localstorageService.setItem('test', {
					user: {
						email: 'bob@gmail.com',
						username: 'bob',
					},
				});

				expect(mockSubscription.cb).toHaveBeenCalledTimes(1);

				localstorageService.setItem('test', {
					user: {
						email: 'bob@gmail.com',
						username: 'john',
					},
				});

				expect(mockSubscription.cb).toHaveBeenCalledTimes(2);
				expect(mockSubscription.cb).toHaveBeenCalledWith('john');

				localstorageService.clearSubscribers();
			}));

			it('only updates the value if the custom comparator marks a change', injectService(localstorageService => {
				const subscriber = localstorageService.select(['test', 'user'], (currVal, newVal) => {
					return currVal.username === newVal.username;
				});
				const mockSubscription = {
					cb: (nextValue) => {},
				};

				spyOn(mockSubscription, 'cb').and.callThrough();

				subscriber.subscribe(mockSubscription.cb);

				expect(mockSubscription.cb).toHaveBeenCalledTimes(1);

				localstorageService.setItem('test', {
					user: {
						email: 'bob@someothermail.com',
						username: 'bob',
					},
				});

				expect(mockSubscription.cb).toHaveBeenCalledTimes(1);

				localstorageService.setItem('test', {
					user: {
						email: 'bob@someothermail.com',
						username: 'john',
					},
				});

				expect(mockSubscription.cb).toHaveBeenCalledTimes(2);
				expect(mockSubscription.cb).toHaveBeenCalledWith({
					email: 'bob@someothermail.com',
					username: 'john',
				});

				localstorageService.clearSubscribers();
			}));

			it('only updates relevant subscribers', injectService(localstorageService => {
				const userSubscriber = localstorageService.select(['test', 'user']);
				const dataSubscriber = localstorageService.select('data');
				const mockSubscription = {
					user: (nextValue) => {},
					data: (nextValue) => {},
				};

				spyOn(mockSubscription, 'user');
				spyOn(mockSubscription, 'data');

				userSubscriber.subscribe(mockSubscription.user);
				dataSubscriber.subscribe(mockSubscription.data);

				localstorageService.setItem('test', {
					user: {
						email: 'bob@someothermail.com',
						username: 'bob',
					},
				});

				expect(mockSubscription.user).toHaveBeenCalledTimes(2);
				expect(mockSubscription.data).toHaveBeenCalledTimes(1);
			}));

			it('sets the nextValue to null if it is not found in the storage', done => {
				injectService(localstorageService => {
					const subscriber = localstorageService.select('data');
					subscriber.subscribe(nextValue => {
						// behaviorsubject triggers subscribers on initial value
						if (nextValue === 'test') {
							return;
						}
						expect(nextValue).toEqual(null);
						done();
					});

					localstorageService.removeItem('data');
				})();
			});
		});

		describe('Helper Methods', () => {
			describe('verify the storage type', () => {
				it('returns "memory" if no type or default was provided', injectService(localstorageService => {
					expect(localstorageService.verifyStorageType()).toEqual('memory');
				}));

				it('returns the provided default if no type was provided', injectService(localstorageSerivce => {
					expect(localstorageSerivce.verifyStorageType(undefined, 'sessionStorage')).toEqual('sessionStorage');
				}));

				it('returns the provided default if an unknown type was provded', injectService(localstorageService => {
					expect(localstorageService.verifyStorageType('test', 'localStorage')).toEqual('localStorage');
				}));

				it('returns the provided storageType if it exists on the window', injectService(localstorageService => {
					expect(localstorageService.verifyStorageType('sessionStorage')).toEqual('sessionStorage');
				}));
			});

			describe('get the storage', () => {
				const storage = {
					test: {
						user: {
							email: 'bob@mail.com',
							username: 'bob',
						},
					},
					data: 'test',
				};

				beforeEach(() => {
					windowStub.localStorage.pushStorage(storage);
				});

				it('returns the storage for the set storageType', injectService(localstorageService => {
					expect(localstorageService.getStorageSnapshot()).toEqual(storage);
				}));

				it('returns an empty object if the storageType is set to "memory"', injectService(localstorageService => {
					localstorageService.setStorage({
						storageType: 'memory',
					});
					expect(localstorageService.getStorageSnapshot()).toEqual({});
				}));
			});
		});
	});
});
