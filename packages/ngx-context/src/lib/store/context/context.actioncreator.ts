import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {Observable, Subscription} from 'rxjs';

import {Context} from '../../types/context.types';
import {ContextState} from '../store.types';
import {CONTEXT_LOAD} from './context.actiontypes';
import {ContextService} from '../../services/context.service';
import {ContextWriterService} from '../../services/context-writer.service';

@Injectable()
export class ContextActionCreator {
  private storeSubscription: Subscription;
  private onStoreLoaded: () => void;

  constructor(
    private contextService: ContextService,
    private contextWriter: ContextWriterService,
    private ngRedux: NgRedux<ContextState>
  ) {
    contextService.context$.subscribe(context => this.loadContext(context, true));
  }

  loadContext(context: Context, fromRoute?: boolean) {
    // @ts-ignore
    if (!this.ngRedux._store) {
      return this.subscribeToStore(() => this.loadContext(context, fromRoute));
    }

    this.ngRedux.dispatch({
      type: CONTEXT_LOAD,
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

    // @ts-ignore
    this.storeSubscription = (this.ngRedux._store$ as Observable<any>)
      .subscribe((store => {
        if (store) {
          this.storeSubscription.unsubscribe();

          this.onStoreLoaded();
        }
      }).bind(this));
  }
}
