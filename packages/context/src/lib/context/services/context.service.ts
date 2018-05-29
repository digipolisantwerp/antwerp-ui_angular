import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { IContext } from '../types/context.types';
import { ContextWriterService } from './context-writer.service';

@Injectable()
export class ContextService {
	public context$ = new BehaviorSubject<IContext>(null);

	constructor(
		private contextWriter: ContextWriterService
	) {}

	public updateContext(context: IContext): void {
		this.contextWriter.updateMetaTags(context);
		this.context$.next(context);
	}
}
