import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Context } from '../types/context.types';
import { ContextWriterService } from './context-writer.service';
export declare class ContextService {
    private contextWriter;
    context$: BehaviorSubject<Context>;
    constructor(contextWriter: ContextWriterService);
    updateContext(context: Context): void;
}
