import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Context} from '../types/context.types';
import {ContextWriterService} from './context-writer.service';
import {tap} from 'rxjs/operators';
import {ContextState} from '../store';
import {Store} from '@ngrx/store';
import {LoadContext} from '../store/context.actions';

@Injectable()
export class ContextService {
  public context$ = new BehaviorSubject<Context>(null);

  constructor(
    private contextWriter: ContextWriterService,
    private store: Store<ContextState>
  ) {
    this.context$.pipe(
      tap(context => {
        this.store.dispatch(new LoadContext(context));
      })
    ).subscribe();
  }

  public updateContext(context: Context): void {
    this.contextWriter.updateMetaTags(context);
    this.context$.next(context);
  }
}
