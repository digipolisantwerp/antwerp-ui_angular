import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '@acpaas-ui/ngx-components/utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { LOCALSTORAGE_CONFIG, DEFAULT_LOCALSTORAGE_CONFIG } from '../localstorage.conf';
import { Selector, PathSelector, Comparator, LocalstorageConfig } from '../types/localstorage.types';
import { LocalstorageHelper } from '../localstorage.helper';
import memoryStorage from '../localstorage.polyfill';


// @dynamic
@Injectable()
export class LocalstorageService {
	public static instance: LocalstorageService;

	public get instance(): LocalstorageService {
		return LocalstorageService.instance;
	}

	public set instance(instance: LocalstorageService) {
		if (LocalstorageService.instance) {
			return;
		}

		LocalstorageService.instance = instance;
	}

	public storageType: string;
	public identifier: string;
	private storage: Storage;
	private subscribers: Map<Selector, BehaviorSubject<any>> = new Map<Selector, BehaviorSubject<any>>();

	constructor(
		@Inject(LOCALSTORAGE_CONFIG) private localstorageConfig,
		@Inject(WINDOW) private $window
	) {
		// store a reference to the instance on the service so the decorator has access to instance methods
		this.instance = this;

		this.setStorage(localstorageConfig);
		this.validateStorage();
	}

	public setStorage({
		storageType,
		identifier = '',
	}: LocalstorageConfig = {}): void {
		this.storageType = this.verifyStorageType(storageType, 'localStorage');
		this.storage = this.storageType === 'memory' ? memoryStorage : this.$window[this.storageType];

		this.identifier = identifier;
	}

	/**
	 * Browser Storage api
	 */
	public setItem(key: string, value: any): void {
		this.storage.setItem(key, JSON.stringify(value));
		this.updateSubscribers(key);
	}

	public getItem<T = any>(key: string): T {
		return LocalstorageHelper.parseJSON(key, this.storage.getItem(key));
	}

	public removeItem(key: string): void {
		this.storage.removeItem(key);
		this.updateSubscribers(key);
	}

	public clear(...args): void {
		this.storage.clear.apply(this.storage, args);
		this.updateSubscribers();
	}

	/**
	 * Decorator api
	 */
	public select<T = any>(selector: Selector, comparator: Comparator = LocalstorageHelper.comparator): BehaviorSubject<T> {
		// if the selector is an array, add a subscription for the last item
		if (Array.isArray(selector)) {
			return (this
				.getChildSubscription(selector, this.select(selector[0]))
				.distinctUntilChanged(comparator) as any) as BehaviorSubject<T>; // make sure it is only triggered when the value changes
		}

		return this
			.addSubscriber<T>(selector)
			.distinctUntilChanged<T>(comparator) as BehaviorSubject<T>;
	}

	public clearSubscribers(): void {
		this.subscribers.forEach(subscriber => {
			subscriber.unsubscribe();
		});
	}

	// get a clone of the current stored values
	public getStorageSnapshot<T = any>(): T {
		if (this.storageType === 'memory') {
			return {} as T;
		}

		return {...Object.keys(this.storage).reduce((acc, prop) => {
			acc[prop] = LocalstorageHelper.parseJSON(prop, this.storage[prop]);
			return acc;
		}, {})} as T;
	}

	// return or create a behaviorsubject from the selected value
	public addSubscriber<T = any>(selector: Selector): BehaviorSubject<T> {
		if (!this.subscribers.has(selector)) {
			this.subscribers.set(selector, new BehaviorSubject<T>(LocalstorageHelper.select(this.getStorageSnapshot(), selector)));
		}

		return this.subscribers.get(selector);
	}

	private validateStorage(): void {
		const storage = this.getStorageSnapshot();

		if (!this.identifier && !storage['aui-storage']) {
			return;
		}

		if (this.identifier === storage['aui-storage']) {
			return;
		}

		this.clear();

		if (this.identifier) {
			this.setItem('aui-storage', this.identifier);
		}
	}

	// fetch or create a subscription for the parent
	// subscribe to said subscription and return a new subscriber from the value
	private getChildSubscription<T = any>(selector: PathSelector, parentSubscription: BehaviorSubject<any>): BehaviorSubject<T> {
		const subscriber = this.addSubscriber<T>(selector);

		parentSubscription
			.map((nextValue => {
				return LocalstorageHelper.verifyPath(nextValue, selector.slice(1)); // filter out the selected path value
			}).bind(this))
			.subscribe((nextValue: T) => {
				subscriber.next(nextValue);
			});

		return subscriber;
	}

	// update all subscribers
	// if a key is provided, matching will prevent useless updates
	private updateSubscribers(key?: string): void {
		const storage = this.getStorageSnapshot();
		this.subscribers.forEach((subscriber: BehaviorSubject<any>, selector: Selector) => {
			if (key !== undefined && !LocalstorageHelper.keyMatches(key, selector)) {
				return;
			}

			subscriber.next(LocalstorageHelper.select(storage, selector));
		});
	}

	// verify the prefered storagetype exists, fall back to "localStorage“ or memory
	private verifyStorageType(storageType?: string, defaultValue: string = 'memory'): string {
		const storageTypeExists = this.$window.hasOwnProperty(storageType) && this.$window[storageType] instanceof this.$window.Storage;

		if (storageTypeExists) {
			return storageType;
		}

		// if storage type does not exist, verify defaultValue until found or memory was set as default
		return storageType === 'memory' ? 'memory' : this.verifyStorageType(defaultValue);
	}
}
