// Unusual import explained here: https://github.com/rollup/rollup/issues/670
import * as cloneDeep_ from 'lodash.clonedeep';
import * as get_ from 'lodash.get';
const get = get_;
const cloneDeep = cloneDeep_;

import { SIDEBAR_LOAD_ITEMS, SIDEBAR_TOGGLE } from './sidebar.actiontypes';
import { SIDEBAR_INITIAL_STATE } from './sidebar.initial-state';
import { Sidebar } from './sidebar.types';

export const sidebarReducer = (
    state: Sidebar = SIDEBAR_INITIAL_STATE,
    action
): Sidebar => {
    if (action.type === SIDEBAR_TOGGLE) {
        return {
            ...state,
            open: get(action, 'open', !state.open),
        };
    }

    if (action.type === SIDEBAR_LOAD_ITEMS) {
        return {
            ...state,
            items: cloneDeep(action.items),
        };
    }

    return state;
};
