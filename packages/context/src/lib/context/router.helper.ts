import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class RouterHelper {
	public getParentTitle(route, titles: string[] = []): string[] {
		if (!route) {
			return titles;
		}

		const title = this.verifyPath(route, 'parent.data.meta.title');
		const newTitles = title ? titles.concat(title) : titles;

		return route.parent ? this.getParentTitle(route.parent, newTitles) : newTitles;
	}

	public verifyPath(data: any, path: string): any {
		let curr = data;
		const namespace = path.split('.');

		for (let i = 0; i < namespace.length; i += 1) {
			if (!!curr[namespace[i]]) { // can't use hasOwnProperty so we'll cast to Boolean
				curr = curr[namespace[i]];
				continue;
			}

			return null;
		}

		return curr;
	}

	public findLastChild(activatedRoute: ActivatedRoute): any {
		const snapshot = activatedRoute.snapshot;

		let child = snapshot.firstChild;
		while (child.firstChild !== null) {
			child = child.firstChild;
		}

		return child;
	}
}
