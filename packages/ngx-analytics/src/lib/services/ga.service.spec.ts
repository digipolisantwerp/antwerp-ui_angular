import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {WINDOW} from '@acpaas-ui/ngx-utils';

import {GAService} from './ga.service';
import {Router} from '@angular/router';

const mockWindow = {
  ga: () => {

  },
  document: {
    title: 'title',
  },
  location: {
    href: 'href',
    path: 'path',
  },
};

const mockGa = () => {
  console.log('test');
};

@Component({
  template: '<router-outlet></router-outlet>',
})
class AppComponent {
}

@Component({
  template: '<h1>Home</h1>',
})
class HomeComponent {
}

const routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'test',
    component: HomeComponent,
    data: {
      doNotTrack: true,
    },
  },
];

describe('The Analytics Service', () => {
  let fixture;
  let gaService: GAService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {provide: WINDOW, useValue: mockWindow},
        GAService,
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        AppComponent,
        HomeComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    gaService = TestBed.get(GAService);
    router = TestBed.get(Router);
  });

  it('should trigger an event', () => {
    expect(() => {
      gaService.triggerEvent(null, null);
    }).toThrow(Error('category is required'));
    expect(() => {
      gaService.triggerEvent('category', null);
    }).toThrow(Error('action is required'));

    // It would be better to spy on windowService.ga but it is private...
    expect(gaService.triggerEvent('category', 'click')).toBeUndefined();
    expect(gaService.triggerEvent('category', 'click', 'label')).toBeUndefined();
    expect(gaService.triggerEvent('category', 'click', 'label', 10)).toBeUndefined();
  });

  it('should trigger a page view', () => {
    // It would be better to spy on windowService.ga but it is private...
    expect(gaService.triggerPageView()).toBeUndefined();
  });

  it('should autoTriggerPageView', () => {
    spyOn(gaService, 'triggerPageView');
    router.navigate(['/home']).then(() => {
      expect(gaService.triggerPageView).toHaveBeenCalledWith('title', 'href', '/home');
    });
  });

  it('should be possible to disable autoTriggerPageView', () => {
    spyOn(gaService, 'triggerPageView');
    router.navigate(['/test']).then(() => {
      expect(gaService.triggerPageView).not.toHaveBeenCalled();
    });
  });
});
