import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { IRootState, IContext } from './context.types';
import * as actionTypes from './context.actiontypes';
import { ContextService, ContextWriterService } from '../../services/index';

@Injectable()
export class ContextActionCreator {
	private storeSubscription: Subscription;
	private onStoreLoaded: Function;

	constructor(
		private contextService: ContextService,
		private contextWriter: ContextWriterService,
		private ngRedux: NgRedux<IRootState>
	) {
		contextService.context$.subscribe(context => this.loadContext(context, true));
	}

	loadContext(context: IContext, fromRoute?: Boolean) {
		if (!this.ngRedux['_store']) {
			return this.subscribeToStore(() => this.loadContext(context, fromRoute));
		}

		this.ngRedux.dispatch({
			type: actionTypes.CONTEXT_LOAD,
			context,
		});

		if (!fromRoute) {
			this.contextWriter.updateMetaTags(context);
		}
	}

	private subscribeToStore(cb) {
		this.onStoreLoaded = cb;

		if (this.storeSubscription) {
			return;
		}

		this.storeSubscription = (this.ngRedux['_store$'] as Observable<any>)
			.subscribe((store => {
				if (store) {
					this.storeSubscription.unsubscribe();

					this.onStoreLoaded();
				}
			}).bind(this));
	}
}
