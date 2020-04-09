import {Inject, Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

import {WINDOW} from '@acpaas-ui/ngx-utils';

@Injectable()
export class GAService {

  constructor(
    location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(WINDOW) private windowService
  ) {
    if (!this.windowService.ga) {
      throw new Error('GA is not defined, is analytics included?');
    }

    this.autoTriggerPageView(location, router);
  }

  public setDimension(key: string, value: string) {
    this.windowService.ga('set', key, value);
  }

  public triggerPageView(title?: string, location?: string, page?: string) {
    this.windowService.ga('send', 'pageview', {
      title: title || this.windowService.document.title,
      location: location || this.windowService.location.href,
      page: page || this.windowService.location.pathname,
    });
  }

  public triggerEvent(category: string, action: string, label?: string, value?: any) {
    if (!category) {
      throw new Error('category is required');
    }

    if (!action) {
      throw new Error('action is required');
    }

    if (!label) {
      return this.windowService.ga('send', 'event', category, action);
    }

    if (!value) {
      return this.windowService.ga('send', 'event', category, action, label);
    }

    return this.windowService.ga('send', 'event', category, action, label, value);
  }

  private autoTriggerPageView(location: Location, router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.findLastChild(this.activatedRoute))
      )
      .subscribe((route: any) => {
        if (!route.data || !route.data.doNotTrack) {
          this.triggerPageView(this.windowService.document.title, this.windowService.location.href, location.path());
        }
      });
  }

  private findLastChild(activatedRoute: ActivatedRoute) {
    const snapshot = activatedRoute.snapshot;

    let child = snapshot.firstChild;
    while (child.firstChild !== null) {
      child = child.firstChild;
    }

    return child;
  }
}
