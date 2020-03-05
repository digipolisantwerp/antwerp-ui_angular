import {contextReducer} from './context.reducer';
import * as actionTypes from './context.actiontypes';

describe('Context Reducer', () => {
  let context;

  beforeEach(() => {
    context = {
      title: 'test',
    };
  });

  it('should return an null as default', () => {
    expect(contextReducer(undefined, context)).toEqual(null);
  });

  it('should return the state if the actionType is not known', () => {
    expect(contextReducer(null, {
      type: 'test',
      context,
    })).toEqual(null);
  });

  it('should update the state if the actionType is known', () => {
    expect(contextReducer(null, {
      type: actionTypes.CONTEXT_LOAD,
      context,
    })).toEqual(context);
  });
});
