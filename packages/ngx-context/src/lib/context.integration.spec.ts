import {Component, NgModule} from '@angular/core';
import {Router} from '@angular/router';
import {async, inject, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {combineReducers, createStore, Store} from 'redux';

import {ContextModule} from './context.module';
import {ContextService} from './services/context.service';
import {ContextActionCreator} from './store/context/context.actioncreator';
import {contextReducer} from './store/context/context.reducer';

@Component({
  template: '<router-outlet></router-outlet>',
})
class AppComponent {
}

@Component({
  template: '<h1>Home</h1><router-outlet></router-outlet>',
})
class HomeComponent {
}

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
  constructor(ngRedux: NgRedux<any>) {
    ngRedux.provideStore(store);
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
        ContextModule,
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

  it('should select tags from router config', async(inject(
    [Router, ContextService],
    (router: Router, contextService: ContextService) => {
      router.navigate(['/home']).then(() => {
        contextService.context$.subscribe((value) => {
          expect(value.title).toBe('Home page');
        });
      });
    }
  )));

  it(
    'should provide defaults if no route data or metadata was found',
    async(inject(
      [Router, ContextService],
      (router: Router, contextService: ContextService) => {
        spyOn(contextService, 'updateContext').and.stub();

        router.navigate(['empty']).then(() => {
          expect(contextService.updateContext).toHaveBeenCalledWith({
            parent: [],
          });
        });
      }
    ))
  );

  it(
    'should update the parent titles if it is a child route',
    async(inject(
      [Router, ContextService],
      (router: Router, contextService: ContextService) => {
        spyOn(contextService, 'updateContext').and.stub();

        router.navigate(['home/child']).then(() => {
          expect(contextService.updateContext).toHaveBeenCalledWith({
            page: 'child',
            title: 'Child page',
            parent: ['Home page'],
          });
        });
      }
    ))
  );
});
