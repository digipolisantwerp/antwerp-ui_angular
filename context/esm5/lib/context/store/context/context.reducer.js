/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CONTEXT_LOAD } from './context.actiontypes';
export var /** @type {?} */ contextReducer = function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case CONTEXT_LOAD:
            return tslib_1.__assign({}, action.context);
        default:
            return state;
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGV4dC8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0L3N0b3JlL2NvbnRleHQvY29udGV4dC5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJELE1BQU0sQ0FBQyxxQkFBTSxjQUFjLEdBQUcsVUFDN0IsS0FBcUIsRUFDckIsTUFBTTtJQUROLHNCQUFBLEVBQUEsWUFBcUI7SUFHckIsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxZQUFZO1lBQ2hCLE1BQU0sc0JBQU0sTUFBTSxDQUFDLE9BQU8sRUFBRztRQUM5QjtZQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtDQUNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vLi4vdHlwZXMvY29udGV4dC50eXBlcyc7XG5pbXBvcnQgeyBDT05URVhUX0xPQUQgfSBmcm9tICcuL2NvbnRleHQuYWN0aW9udHlwZXMnO1xuXG5leHBvcnQgY29uc3QgY29udGV4dFJlZHVjZXIgPSAoXG5cdHN0YXRlOiBDb250ZXh0ID0gbnVsbCxcblx0YWN0aW9uXG4pOiBDb250ZXh0ID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgQ09OVEVYVF9MT0FEOlxuXHRcdFx0cmV0dXJuIHsgLi4uYWN0aW9uLmNvbnRleHQgfTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59O1xuIl19