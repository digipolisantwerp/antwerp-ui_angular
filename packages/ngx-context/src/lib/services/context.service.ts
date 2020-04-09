import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Context} from '../types/context.types';
import {ContextWriterService} from './context-writer.service';

@Injectable()
export class ContextService {
  public context$ = new BehaviorSubject<Context>(null);

  constructor(
    private contextWriter: ContextWriterService
  ) {
  }

  public updateContext(context: Context): void {
    this.contextWriter.updateMetaTags(context);
    this.context$.next(context);
  }
}
