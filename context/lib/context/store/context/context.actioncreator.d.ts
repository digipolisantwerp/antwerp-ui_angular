import { NgRedux } from '@angular-redux/store';
import { Context } from '../../types/context.types';
import { ContextState } from '../store.types';
import { ContextService } from '../../services/context.service';
import { ContextWriterService } from '../../services/context-writer.service';
export declare class ContextActionCreator {
    private contextService;
    private contextWriter;
    private ngRedux;
    private storeSubscription;
    private onStoreLoaded;
    constructor(contextService: ContextService, contextWriter: ContextWriterService, ngRedux: NgRedux<ContextState>);
    loadContext(context: Context, fromRoute?: Boolean): void;
    private subscribeToStore(cb);
}
