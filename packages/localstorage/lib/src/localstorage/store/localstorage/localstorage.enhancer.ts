import { Reducer, StoreCreator, StoreEnhancer, Store, StoreEnhancerStoreCreator } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { isEqual } from 'lodash-es';

import { LocalstorageHelper } from '../../localstorage.helper';
import { LocalstorageService } from '../../services/localstorage.service';
import { PropertySelector, PathSelector } from '../../types/localstorage.types';

@Injectable()
export class LocalstorageReduxPlugin {
	private storeSubscription: Subscription;
	private subscribers: Map<PropertySelector|PathSelector, Subscription> = new Map<PropertySelector|PathSelector, Subscription>();

	constructor(
		private ngRedux: NgRedux<any>,
		private localstorageService: LocalstorageService
	) {}

	enhancer<T = any>(selectors?: Array<PropertySelector|PathSelector>): StoreEnhancer<T> {
		const storedState = this.selectFromState(selectors);

		this.subscribe(selectors);

		return (createStore: StoreEnhancerStoreCreator<T>): StoreEnhancerStoreCreator<T> => (
			reducer: Reducer<T>,
			initialState: any
		): Store<T> => {
			return createStore(reducer, {
				...initialState,
				...storedState,
			});
		};
	}

	subscribe(selectors?: Array<PropertySelector | PathSelector>): void {
		this.ngRedux.select()
			.filter(store => !!store)
			.first()
			.subscribe(store => {
				if (!selectors) {
					this.subscribeSelector('reduxState');
					return;
				}

				selectors.forEach(selector => this.subscribeSelector(selector));
			});
	}

	private subscribeSelector(selector: PropertySelector | PathSelector): void {
		if (!selector) {
			return;
		}

		const subscriber = this.subscribers.get(selector);

		if (subscriber) {
			subscriber.unsubscribe();
		}

		this.subscribers.set(selector, this.ngRedux.subscribe(() => {
			const selectorKey = Array.isArray(selector) ? selector.join('.') : String(selector);
			const stored = this.localstorageService.getItem(selectorKey);
			const newValues = selector === 'reduxState' ? this.ngRedux.getState() :
				LocalstorageHelper.select(this.ngRedux.getState(), selector);

			if (isEqual(stored, newValues)) {
				return;
			}

			this.localstorageService.setItem(selectorKey, newValues);
		}) as any);
	}

	private selectFromState(selectors?: Array<PropertySelector|PathSelector>): any {
		if (!selectors || !selectors.length) {
			return this.localstorageService.getItem('reduxState');
		}

		return selectors.reduce((acc, selector) => {
			const storedData = LocalstorageHelper.select(this.localstorageService.getStorageSnapshot(), selector);
			const pathSelector = Array.isArray(selector) ? selector : [selector];

			LocalstorageHelper.updateOrCreatePath(acc, pathSelector, storedData);

			return acc;
		}, {});
	}
}
