export class MemoryStorage {
	public get length(): number {
		return this.store.size;
	}

	public get storage(): any {
		return Array.from(this.store.entries()).reduce((acc, curr: [string, any]) => ({
			...acc,
			[curr[0]]: curr[1],
		}), {});
	}

	private store = new Map();

	public key(index: number): any {
		return Array.from(this.store.keys())[index];
	}

	public getItem(key: string): any {
		return this.store.get(key);
	}

	public setItem(key: string, value: any): void {
		this.store.set(key, value);
	}

	public removeItem(key: string): void {
		this.store.delete(key);
	}

	public clear(): void {
		this.store.clear();
	}
}

const storage = new MemoryStorage();

export default new Proxy(storage, {
	get: function (target: any, name, receiver) {
		if (name in target) {
			return Reflect.get(target, name, receiver);
		}

		if (name in target.__proto__) {
			return target.__proto__[name];
		}

		if (target.storage) {
			return target.getItem(name);
		}
	},
	ownKeys: function (target: any) {
		return Object.keys(target.storage); // return stored keys when storage keys are requested
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: true, // ensure stored keys kan be iterated
			configurable: true,
		};
	},
});
