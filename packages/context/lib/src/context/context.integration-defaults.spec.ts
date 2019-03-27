import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { async, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { combineReducers, Store, createStore } from 'redux';

import { ContextModule } from './context.module';
import { ContextWriterService } from './services/context-writer.service';
import { ContextActionCreator } from './store/context/context.actioncreator';
import { contextReducer } from './store/context/context.reducer';

@Component({
	template: '<router-outlet></router-outlet>',
})
class AppComponent { }

@Component({
	template: '<h1>Home</h1><router-outlet></router-outlet>',
})
class HomeComponent { }

const routes = [
	{
		path: 'home',
		component: HomeComponent,
		data: {
			meta: {
				page: 'home',
				title: 'Home page',
				description: 'Description of the home page',
				metatags: 'Angular2, meta, seo',
			},
		},
		children: [{
			path: 'child',
			component: HomeComponent,
			data: {
				meta: {
					page: 'child',
					title: 'Child page',
				},
			},
		}],
	},
	{
		path: 'empty',
		component: HomeComponent,
	},
];

export const store: Store<any> = createStore(
	combineReducers<any>({
		context: contextReducer,
	})
);

@NgModule({
	imports: [
		NgReduxModule,
		ContextModule,
	],
})
class AppModule {
	constructor() {
	}
}

describe('The Context Service', () => {
	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				ContextActionCreator,
			],
			imports: [
				ContextModule.forRoot({
					useTitleSuffix: true,
					// when defaults are disabled default tests should pass
					defaults: {
						title: 'Main title ',
						titleSuffix: 'Sub title',
					},
					routerContext: false,
				}),
				RouterTestingModule.withRoutes(routes),
				AppModule,
			],
			declarations: [
				AppComponent,
				HomeComponent,
			],
		}).compileComponents();

		const fixture = TestBed.createComponent(AppComponent);
	}));

	it(
		'should update with the defaults values when there is NO routerContext set',
		inject(
			[Router, ContextWriterService],
			(router: Router, contextWriterService: ContextWriterService) => {
				spyOn(contextWriterService, 'setTag').and.stub();

				router.navigate(['home/child']).then(() => {
					expect(contextWriterService.setTag).toHaveBeenCalled();
				});
			}
		)
	);
});
