import {CONTEXT_LOAD, LoadContext} from './context.actions';
import {Action} from '@ngrx/store';
import {ContextState} from './store.types';

const defaultState: ContextState = {
  context: null
};

export function contextReducer(state: ContextState = defaultState, action: Action): ContextState {
  switch (action.type) {
    case CONTEXT_LOAD:
      return {...state, context: (action as LoadContext).context};
    default:
      return state;
  }
}
