import {Context} from '../../types/context.types';
import {CONTEXT_LOAD} from './context.actiontypes';

export const contextReducer = (
  state: Context = null,
  action
): Context => {
  switch (action.type) {
    case CONTEXT_LOAD:
      return {...action.context};
    default:
      return state;
  }
};
