import {async, inject, TestBed} from '@angular/core/testing';
import {NgRedux} from '@angular-redux/store';
import {BehaviorSubject} from 'rxjs';

import {ContextService} from '../../services/context.service';
import {ContextWriterService} from '../../services/context-writer.service';
import {ContextActionCreator} from './context.actioncreator';
import {CONTEXT_LOAD} from './context.actiontypes';

const injectService = cb => inject(
  [ContextActionCreator],
  (contextActions: ContextActionCreator) => cb(contextActions)
);

const context$ = new BehaviorSubject(null);

describe('The ContextActionCreator', () => {
  class NgReduxMock {
    public pStore = null;
    // tslint:disable-next-line:variable-name
    public _store$ = new BehaviorSubject(null);

    public dispatch() {
    }
  }

  class ContextServiceMock {
    public context$ = context$;
  }

  class ContextWriterServiceMock {
    public updateMetaTags() {
    }
  }

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ContextActionCreator,
        {provide: NgRedux, useClass: NgReduxMock},
        {provide: ContextService, useClass: ContextServiceMock},
        {provide: ContextWriterService, useClass: ContextWriterServiceMock},
      ],
    });
  }));

  it('should subscribe to the ContextService context$', done => {
    spyOn(context$, 'subscribe');

    injectService(contextActions => {
      expect(contextActions.contextService.context$.subscribe).toHaveBeenCalled();
      done();
    })();
  });

  it('should subscribe to the NgRedux store$ if no store is configured yet', injectService(contextActions => {
    spyOn(contextActions, 'subscribeToStore');
    spyOn(contextActions.ngRedux, 'dispatch');

    contextActions.loadContext({});

    expect(contextActions.subscribeToStore).toHaveBeenCalled();
    expect(contextActions.ngRedux.dispatch).not.toHaveBeenCalled();
  }));

  it('should dispatch the CONTEXT_LOAD action if the store is configured', injectService(contextActions => {
    spyOn(contextActions.ngRedux, 'dispatch');

    contextActions.ngRedux._store = true;

    contextActions.loadContext({test: 'data'});

    expect(contextActions.ngRedux.dispatch).toHaveBeenCalledWith({
      type: CONTEXT_LOAD,
      context: {test: 'data'},
    });
  }));

  it('should call the ContextWriter if the context is not loaded from a route change', injectService(contextActions => {
    spyOn(contextActions.contextWriter, 'updateMetaTags');
    contextActions.ngRedux._store = true;

    contextActions.loadContext({test: 'data'});

    expect(contextActions.contextWriter.updateMetaTags).toHaveBeenCalledWith({test: 'data'});
  }));
});
