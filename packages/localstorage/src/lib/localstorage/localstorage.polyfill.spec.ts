import { MemoryStorage, default as storage } from './localstorage.polyfill';

describe('LocalStorage polyfill', () => {
	describe('MemoryStorage Class', () => {
		let memStorage;

		beforeEach(() => {
			memStorage = new MemoryStorage();
		});

		it('should return the map size via the "length" getter', () => {
			expect(memStorage.length).toEqual(0);

			memStorage.store.set('test', 0);

			expect(memStorage.length).toEqual(1);
		});

		it('should return a flat object from all stored values via the "storage" getter', () => {
			expect(memStorage.storage).toEqual({});

			memStorage.store.set('test', 0);

			expect(memStorage.storage).toEqual({
				test: 0,
			});
		});

		it('should return the nth item in the map when "key" is called with an index', () => {
			memStorage.store.set('one', 0);
			memStorage.store.set('two', 1);
			memStorage.store.set('three', 2);
			memStorage.store.set('four', 3);

			expect(memStorage.key(0)).toEqual('one');
			expect(memStorage.key(1)).toEqual('two');
			expect(memStorage.key(2)).toEqual('three');
			expect(memStorage.key(3)).toEqual('four');
		});

		it('should get an item from the store', () => {
			memStorage.store.set('one', 0);
			memStorage.store.set('two', 1);
			memStorage.store.set('three', 2);
			memStorage.store.set('four', 3);

			expect(memStorage.getItem('three')).toEqual(2);
		});

		it('should set an item in the store', () => {
			memStorage.setItem('one', 0);

			expect(memStorage.store.get('one')).toEqual(0);
		});

		it('should remove an item from the store', () => {
			memStorage.store.set('one', 0);
			memStorage.store.set('two', 1);
			memStorage.store.set('three', 2);
			memStorage.store.set('four', 3);

			memStorage.removeItem('two');

			expect(memStorage.storage).toEqual({
				one: 0,
				three: 2,
				four: 3,
			});
		});

		it('should clear all items from the store', () => {
			memStorage.store.set('one', 0);
			memStorage.store.set('two', 1);
			memStorage.store.set('three', 2);
			memStorage.store.set('four', 3);

			expect(memStorage.store.size).toEqual(4);

			memStorage.clear();

			expect(memStorage.store.size).toEqual(0);
		});
	});

	describe('Memorystorage Proxy', () => {
		it('should allow access to known properties on the MemoryStorage instance', () => {
			expect(storage.length).toEqual(0);
		});

		it('should allow access to known methods on the MemoryStorage instance', () => {
			storage.store.set('test', 0);

			expect(storage.getItem).toEqual(jasmine.any(Function));
			expect(storage.getItem('test')).toEqual(0);
		});

		it('should find unknown properties in the store', () => {
			storage.store.set('test', 0);

			expect(storage.test).toEqual(0);
		});

		it('should return the store ownKeys when ownKeys is called on the MemoryStorage instance', () => {
			storage.store.set('test', 0);

			expect(Object.keys(storage)).toEqual(['test']);
		});
	});
});
