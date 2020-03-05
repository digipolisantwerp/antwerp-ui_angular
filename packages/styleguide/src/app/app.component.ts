import {Component, ElementRef, ViewChild} from '@angular/core';
import {Route, Routes} from '@angular/router';
import {EXAMPLES_ROUTES} from '../examples/examples.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('mainContent', {static: true}) mainContent: ElementRef;
  @ViewChild('skipContent', {static: true}) skipContent: ElementRef;

  public packages: Routes = EXAMPLES_ROUTES.splice(0, 1);

  constructor() {
    const routes = [...EXAMPLES_ROUTES];
    this.packages = routes;

  }

  shouldDisplaySubMenu(route: Route): boolean {
    return route && route.children && route.children.length >= 1;
  }

  getChildrenRoutes(route: Route): Route[] {
    const children = [...route.children];
    children.splice(0, 1);
    return children;
  }

  public goToMainContent(event) {
    event.preventDefault();
    event.stopPropagation();
    const mainElement = this.mainContent.nativeElement;
    const skipElement = this.skipContent.nativeElement;
    mainElement.focus();
    skipElement.blur();
  }
}
