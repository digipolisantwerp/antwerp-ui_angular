import { async, inject, TestBed } from '@angular/core/testing';
import { NgRedux } from '@angular-redux/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Reducer, StoreEnhancer, StoreCreator, Unsubscribe } from 'redux';

import { LocalstorageReduxPlugin } from './localstorage.enhancer';
import { LocalstorageService } from '../../services/localstorage.service';


const injectService = (cb) => {
	return inject(
		[LocalstorageReduxPlugin],
		(localstorageReduxPlugin: LocalstorageReduxPlugin) => cb(localstorageReduxPlugin)
	);
};

const localstorageServiceStub = {
	setItem: () => {},
	getItem: () => {},
	getStorage: () => {},
};
const ngReduxStub = {
	_store: null,
	_store$: new BehaviorSubject(null),
	subscribe: () => {},
	getState: () => {},
	select: () => ngReduxStub._store$,
};

describe('The Localstorage Redux Plugin', () => {
	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				LocalstorageReduxPlugin,
				{ provide: NgRedux, useValue: ngReduxStub },
				{ provide: LocalstorageService, useValue: localstorageServiceStub },
			],
		});
	}));

	afterAll(() => {
		delete LocalstorageService.instance;
	});

	describe('enhancer', () => {
		it(
			'sets the initial state, subscribes the selectors and returns a StoreCreator function',
			injectService(localstorageReduxPlugin => {
				spyOn(localstorageReduxPlugin, 'selectFromState').and.callFake((selectors) => ({test: 'data'}));
				spyOn(localstorageReduxPlugin, 'subscribe').and.stub();

				const storeCreator = localstorageReduxPlugin.enhancer(['users']);

				expect(typeof storeCreator).toEqual('function');
				expect(localstorageReduxPlugin.selectFromState).toHaveBeenCalledWith(['users']);
				expect(localstorageReduxPlugin.subscribe).toHaveBeenCalledWith(['users']);

				const reduxStub = {
					createStore: () => {},
				};

				spyOn(reduxStub, 'createStore');

				const reducer = () => {};
				const initialState = {
					posts: [],
				};

				storeCreator(reduxStub.createStore)(reducer, initialState);

				expect(reduxStub.createStore).toHaveBeenCalledWith(reducer, {
					posts: [],
					test: 'data',
				});
			})
		);
	});

	describe('subscribe', () => {
		it(
			'subscribes to the store and registers the selectors once the store is configured',
			injectService(localstorageReduxPlugin => {
				spyOn(localstorageReduxPlugin, 'subscribeSelector').and.stub();
				spyOn(localstorageReduxPlugin.ngRedux, 'select').and.callThrough();

				localstorageReduxPlugin.subscribe();

				expect(localstorageReduxPlugin.ngRedux.select).toHaveBeenCalled();
				expect(localstorageReduxPlugin.subscribeSelector).not.toHaveBeenCalled();

				localstorageReduxPlugin.ngRedux._store$.next({});

				expect(localstorageReduxPlugin.subscribeSelector).toHaveBeenCalled();
			})
		);

		it('subscribes to the "reduxState" prop if no selectors are provided', injectService(localstorageReduxPlugin => {
			localstorageReduxPlugin.ngRedux._store = {};
			spyOn(localstorageReduxPlugin, 'subscribeSelector');

			localstorageReduxPlugin.subscribe();

			expect(localstorageReduxPlugin.subscribeSelector).toHaveBeenCalledWith('reduxState');
		}));

		it('subscribes each selector', injectService(localstorageReduxPlugin => {
			localstorageReduxPlugin.ngRedux._store = {};
			spyOn(localstorageReduxPlugin, 'subscribeSelector').and.stub();
			localstorageReduxPlugin.subscribe(['test', ['some', 'data']]);

			expect(localstorageReduxPlugin.subscribeSelector).toHaveBeenCalledTimes(2);
		}));
	});

	describe('subscribeSelector', () => {
		describe('updating subscribers', () => {
			it('does nothing if no selector was provided', injectService(localstorageReduxPlugin => {
				spyOn(localstorageReduxPlugin.subscribers, 'get');

				localstorageReduxPlugin.subscribeSelector();

				expect(localstorageReduxPlugin.subscribers.get).not.toHaveBeenCalled();
			}));

			it('unsubscribes the subscriber if it exists', injectService(localstorageReduxPlugin => {
				const subscriberMock = {
					unsubscribe: () => {},
				};

				spyOn(subscriberMock, 'unsubscribe');

				localstorageReduxPlugin.subscribers.set('test', subscriberMock);

				spyOn(localstorageReduxPlugin.subscribers, 'set').and.stub();

				localstorageReduxPlugin.subscribeSelector('test');

				expect(subscriberMock.unsubscribe).toHaveBeenCalled();
			}));

			it('sets a subscriber for the selector', injectService(localstorageReduxPlugin => {
				spyOn(localstorageReduxPlugin.ngRedux, 'subscribe').and.callFake(() => () => {});
				spyOn(localstorageReduxPlugin.subscribers, 'set');

				localstorageReduxPlugin.subscribeSelector('test');

				expect(localstorageReduxPlugin.subscribers.set).toHaveBeenCalledWith('test', jasmine.any(Function));
				expect(localstorageReduxPlugin.ngRedux.subscribe).toHaveBeenCalledWith(jasmine.any(Function));
			}));
		});

		describe('updating the storage', () => {
			let subscriber;
			let state;
			let newState;

			function addSpies(plugin) {
				plugin.ngRedux.subscribe = cb => {
					subscriber = cb;
				};

				plugin.ngRedux.getState = () => newState;
				plugin.localstorageService.getItem = (key) => {
					return state[key];
				};

				spyOn(plugin.localstorageService, 'setItem').and.stub();
			}

			beforeEach(() => {
				state = {
					test: ['data'],
					some: {
						data: 'test',
					},
				};
				newState = {...state};
			});

			it('updates the storage if the store is updated and the value is changed', injectService(localstorageReduxPlugin => {
				addSpies(localstorageReduxPlugin);

				localstorageReduxPlugin.subscribeSelector('test');

				subscriber();

				expect(localstorageReduxPlugin.localstorageService.setItem).not.toHaveBeenCalled();

				newState = {
					test: ['data', 'more data'],
				};

				subscriber();

				expect(localstorageReduxPlugin.localstorageService.setItem).toHaveBeenCalledWith('test', newState.test);
			}));

			it('returns if the entire state was "reduxState"', injectService(localstorageReduxPlugin => {
				newState.test = ['data', 'more data'];

				addSpies(localstorageReduxPlugin);

				localstorageReduxPlugin.subscribeSelector('reduxState');

				subscriber();

				expect(localstorageReduxPlugin.localstorageService.setItem).toHaveBeenCalledWith('reduxState', newState);
			}));

			it('joins arrays to a path', injectService(localstorageReduxPlugin => {
				addSpies(localstorageReduxPlugin);

				localstorageReduxPlugin.subscribeSelector(['some', 'data']);

				subscriber();

				expect(localstorageReduxPlugin.localstorageService.setItem).toHaveBeenCalledWith('some.data', newState.some.data);
			}));
		});
	});

	describe('selectFromState', () => {
		it('returns the redux state if no selectors were provided', injectService(localstorageReduxPlugin => {
			spyOn(localstorageReduxPlugin.localstorageService, 'getItem').and.stub();

			localstorageReduxPlugin.selectFromState();

			expect(localstorageReduxPlugin.localstorageService.getItem).toHaveBeenCalledWith('reduxState');

			localstorageReduxPlugin.localstorageService.getItem.calls.reset();

			localstorageReduxPlugin.selectFromState([]);

			expect(localstorageReduxPlugin.localstorageService.getItem).toHaveBeenCalledWith('reduxState');
		}));

		it('returns a reduced state based on the provided selectors', injectService(localstorageReduxPlugin => {
			const state = {
				test: ['some', 'data'],
				user: {
					likes: {
						comments: ['1'],
						posts: ['one'],
					},
				},
			};

			localstorageReduxPlugin.localstorageService.getStorageSnapshot = () => state;

			expect(localstorageReduxPlugin.selectFromState([
				'test',
				['user', 'likes'],
			])).toEqual(state);
		}));
	});
});
