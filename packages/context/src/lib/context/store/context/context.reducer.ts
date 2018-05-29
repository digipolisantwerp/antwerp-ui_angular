import { IContext } from './context.types';
import * as actionTypes from './context.actiontypes';

export const contextReducer = (
	state: IContext = null,
	action
) => {
	switch (action.type) {
		case actionTypes.CONTEXT_LOAD:
			return { ...action.context };
		default:
			return state;
	}
};
