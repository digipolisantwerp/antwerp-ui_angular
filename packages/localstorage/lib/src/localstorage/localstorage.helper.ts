import { isEqual } from 'lodash-es';
import { PathSelector, Selector } from './types/localstorage.types';

export class LocalstorageHelper {
	static comparator = isEqual;

	// select data from the storage for the provided selector
	static select(storage: any, selector: Selector): any {
		if (!storage) {
			return null;
		}

		if (!selector) {
			return storage;
		}

		if (typeof selector === 'function') {
			return selector(storage);
		}

		if (Array.isArray(selector)) {
			return this.verifyPath(storage, selector);
		}

		return this.verifyPath(storage, [selector]);
	}

	// verify the key matches with the selector
	// property selector: compare the key with the selector
	// path selector: verify the key is the last item in the path
	// function selector: always return true
	static keyMatches(key: string, selector: Selector): Boolean {
		const keyMatchesSelector = key === selector;
		const keyInSelector = Array.isArray(selector) ? selector.indexOf(key) >= 0 : false;
		const selectorIsFunction = typeof selector === 'function';

		return keyMatchesSelector || keyInSelector || selectorIsFunction;
	}

	// verify a path exists in an object
	static verifyPath(data?: any, selector?: PathSelector) {
		if (!data || !selector) {
			return null;
		}

		let curr = data;

		for (let i = 0; i < selector.length; i += 1) {
			if (curr.hasOwnProperty(selector[i])) {
				curr = curr[selector[i]];
				continue;
			}

			return null;
		}

		return curr;
	}

	static updateOrCreatePath(state?: any, selector?: PathSelector, newValue?: any) {
		if (!state || !selector) {
			return null;
		}

		let curr = state;
		let i = 0;

		for (i = 0; i < selector.length; i += 1) {
			if (!curr.hasOwnProperty(selector[i])) {
				curr[selector[i]] = {};
			}

			if (i === selector.length - 1) {
				break;
			}

			curr = curr[selector[i]];
		}

		curr[selector[i]] = newValue;

		return state;
	}

	static parseJSON(key: string, json: string): any {
		try {
			return JSON.parse(json);
		} catch (e) {
			console.warn(`Parsing key "${key}" in localstorage failed, ignoring value.`); // tslint:disable-line:no-console
			return String(json);
		}
	}
}
