import {Action} from '@ngrx/store';

export const CONTEXT_LOAD = 'CONTEXT_LOAD';

export class LoadContext implements Action {
  type = CONTEXT_LOAD;
  constructor(public context) {
  }
}
