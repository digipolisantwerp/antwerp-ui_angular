import {ActivatedRoute} from '@angular/router';

export class RouterHelper {
  public static getParentTitle(route, titles: string[] = []): string[] {
    if (!route) {
      return titles;
    }

    const title = this.verifyPath(route, 'parent.data.meta.title');
    const newTitles = title ? titles.concat(title) : titles;

    return route.parent ? this.getParentTitle(route.parent, newTitles) : newTitles;
  }

  public static verifyPath(data: any, path: string): any {
    let curr = data;
    const namespace = path.split('.');

    for (const ns of namespace) {
      if (!!curr[ns]) { // can't use hasOwnProperty so we'll cast to boolean
        curr = curr[ns];
        continue;
      }

      return null;
    }

    return curr;
  }

  public static findLastChild(activatedRoute: ActivatedRoute): any {
    const snapshot = activatedRoute.snapshot;

    let child = snapshot.firstChild;
    while (child.firstChild !== null) {
      child = child.firstChild;
    }

    return child;
  }
}
