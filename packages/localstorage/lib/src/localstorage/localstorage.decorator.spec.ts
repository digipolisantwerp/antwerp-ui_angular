import { storage } from './localstorage.decorator';
import { LocalstorageService } from './services/localstorage.service';

describe('Localstorage Decorator', () => {
	afterAll(() => {
		delete LocalstorageService.instance;
	});

	it('should return a function', () => {
		expect(typeof storage()).toEqual('function');
	});

	it('Should add a subscription for the selector', () => {
		const localstorageService = new LocalstorageService({}, window);
		const decorator = storage('somedata');
		const dummyComponent = {
			test: 'data',
		};
		spyOn(LocalstorageService.instance, 'select').and.stub();

		decorator(dummyComponent, 'test');

		const decoratedProperty = dummyComponent.test;

		expect(LocalstorageService.instance.select).toHaveBeenCalledWith('somedata', undefined);
		expect(dummyComponent.hasOwnProperty('test')).toBe(true);
	});

	describe('No selector provided', () => {
		let localstorageService;
		let decorator;

		beforeEach(() => {
			localstorageService = new LocalstorageService({}, window);
			decorator = storage();
			spyOn(LocalstorageService.instance, 'select').and.stub();
		});

		it('should bind to the propertyName if no selector was provided', () => {
			const dummyComponent = {
				test: 'data',
			};
			decorator(dummyComponent, 'test');

			const decoratedProperty = dummyComponent.test;

			expect(LocalstorageService.instance.select).toHaveBeenCalledWith('test', undefined);
			expect(dummyComponent.hasOwnProperty('test')).toBe(true);
		});

		it('should strip the trailing $ sign from the propertyName', () => {
			const dummyComponent = {
				test$: 'observable data',
			};
			decorator(dummyComponent, 'test$');

			const decoratedProperty = dummyComponent.test$;

			expect(LocalstorageService.instance.select).toHaveBeenCalledWith('test', undefined);
			expect(dummyComponent.hasOwnProperty('test$')).toBe(true);
		});
	});
});
