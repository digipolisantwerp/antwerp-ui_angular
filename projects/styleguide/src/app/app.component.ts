import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {Routes, Route} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {EXAMPLES_ROUTES} from '../examples/examples.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild('mainContent', {static: true}) mainContent: ElementRef;
  @ViewChild('skipContent', {static: true}) skipContent: ElementRef;

  public packages: Routes = EXAMPLES_ROUTES;

  constructor() {
    const routes = [...EXAMPLES_ROUTES];
    this.packages = routes;

  }

  shouldDisplaySubMenu(route: Route): boolean {
    return route && route.children && route.children[0] && route.children[0].children && route.children[0].children.length >= 1;
  }

  getChildrenRoutes(route: Route): Route[] {
    const children = [...route.children[0].children];
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
