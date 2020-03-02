import { LocalstorageHelper } from './localstorage.helper';

describe('matching a key with a selector', () => {
	it('returns true if the key matches the selector', () => {
		expect(LocalstorageHelper.keyMatches('test', 'data')).toBe(false);
		expect(LocalstorageHelper.keyMatches('test', 'test')).toBe(true);
	});

	it('returns true if the selector is an array that contains the key', () => {
		expect(LocalstorageHelper.keyMatches('test', ['some', 'other', 'data'])).toBe(false);
		expect(LocalstorageHelper.keyMatches('test', ['some', 'other', 'test', 'data'])).toBe(true);
	});

	it('returns true if the selector is a function', () => {
		expect(LocalstorageHelper.keyMatches('test', () => true)).toBe(true);
	});
});

describe('verifying a path in an object', () => {
	const data = {
		user: {
			username: 'bob',
			likes: {
				pages: 3,
				comments: 1,
			},
		},
	};

	it('returns null if no data or selector was provided', () => {
		expect(LocalstorageHelper.verifyPath()).toEqual(null);
		expect(LocalstorageHelper.verifyPath({})).toEqual(null);
		expect(LocalstorageHelper.verifyPath(undefined, ['test'])).toEqual(null);
	});

	it('returns null if the path was not found in the data', () => {
		expect(LocalstorageHelper.verifyPath(data, ['user.email'])).toEqual(null);
	});

	it('returns the found value for the path', () => {
		expect(LocalstorageHelper.verifyPath(data, ['user', 'likes', 'pages'])).toEqual(3);
	});
});

describe('selecting data from the storage', () => {
	const data = {
		user: {
			username: 'bob',
			likes: {
				pages: 3,
				comments: 1,
			},
		},
	};

	it('returns null if no storage was provided', () => {
		expect(LocalstorageHelper.select(undefined, 'test')).toEqual(null);
	});

	it('returns the storage if no selector was provided', () => {
		expect(LocalstorageHelper.select(data, undefined)).toEqual(data);
	});

	it('runs the selector on the data if the selector is a function', () => {
		const cbs = {
			cb: () => true,
		};

		spyOn(cbs, 'cb');

		LocalstorageHelper.select(data, cbs.cb);

		expect(cbs.cb).toHaveBeenCalled();
	});

	it('verifies the path if the selector is a path or property selector', () => {
		spyOn(LocalstorageHelper, 'verifyPath');

		LocalstorageHelper.select(data, 'user');

		expect(LocalstorageHelper.verifyPath).toHaveBeenCalledWith(data, ['user']);

		LocalstorageHelper.select(data, ['user', 'username']);

		expect(LocalstorageHelper.verifyPath).toHaveBeenCalledWith(data, ['user', 'username']);
	});
});

describe('updating or creating a path in an object', () => {
	it('returns null if no state or selector was provided', () => {
		expect(LocalstorageHelper.updateOrCreatePath()).toEqual(null);
		expect(LocalstorageHelper.updateOrCreatePath({})).toEqual(null);
		expect(LocalstorageHelper.updateOrCreatePath(undefined, ['stuff'])).toEqual(null);
	});

	it('creates the path in the state and sets the provided value on the last prop', () => {
		expect(LocalstorageHelper.updateOrCreatePath({some: {}}, ['some', 'path', 'to', 'data'], 'test')).toEqual({
			some: {
				path: {
					to: {
						data: 'test',
					},
				},
			},
		});
	});
});

describe('parsing JSON', () => {
	it('returns the parsed JSON object for a valid JSON string', () => {
		expect(LocalstorageHelper.parseJSON('test', JSON.stringify({test: 'data'}))).toEqual({test: 'data'});
	});

	it('returns a string representation of the provided value and logs a warning', () => {
		spyOn(window.console, 'warn');

		expect(LocalstorageHelper.parseJSON('test', 'some: data')).toEqual('some: data');
		expect(window.console.warn).toHaveBeenCalledWith('Parsing key "test" in localstorage failed, ignoring value.');
	});
});
