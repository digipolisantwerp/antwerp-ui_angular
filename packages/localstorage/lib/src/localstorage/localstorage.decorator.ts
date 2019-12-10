import { Selector, Comparator, PropertyDecorator } from './types/localstorage.types';
import { LocalstorageService } from './services/localstorage.service';

export function storage(selector?: Selector, comparator?: Comparator): PropertyDecorator {

	return function decorate(target: any, key: string): void {
		let bindingKey = selector;
		if (!selector) {
			bindingKey = (key.lastIndexOf('$') === key.length - 1) ? key.substring(0, key.length - 1) : key;
		}

		function getter() {
			return LocalstorageService.instance.select(bindingKey, comparator);
		}

		// Replace decorated property with a getter that returns the observable.
		delete target[key];

		Object.defineProperty(target, key, {
			get: getter,
			enumerable: true,
			configurable: true,
		});
	};
}
