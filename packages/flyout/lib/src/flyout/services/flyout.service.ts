import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { FlyoutState } from '../types/flyout.types';

@Injectable()
export class FlyoutService {
	// Observable string sources
	public subject = new Subject<FlyoutState>();

	public close() {
		this.subject.next({
			close: true,
		});
	}
}
