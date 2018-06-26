/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// replace with common titlecase pipe in angular 4, mind the regex with special characters (e.g. é)
import { Pipe } from '@angular/core';
/**
 * Helper method to transform a single word to titlecase.
 *
 * \@stable
 * @param {?} word
 * @return {?}
 */
function titleCaseWord(word) {
    if (!word) {
        return word;
    }
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
}
/**
 * Transforms text to titlecase.
 *
 * \@stable
 */
export class TitleCasePipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (!value || typeof value !== 'string') {
            return value;
        }
        return value.split(/\s/g).map(word => titleCaseWord(word)).join(' ');
    }
}
TitleCasePipe.decorators = [
    { type: Pipe, args: [{ name: 'titlecase' },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtY2FzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvcGlwZXMvdGl0bGUtY2FzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBT3BELHVCQUF1QixJQUFZO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDWjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztDQUM3RDs7Ozs7O0FBUUQsTUFBTTs7Ozs7SUFDSixTQUFTLENBQUMsS0FBYTtRQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDYjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuRTs7O1lBUkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlcGxhY2Ugd2l0aCBjb21tb24gdGl0bGVjYXNlIHBpcGUgaW4gYW5ndWxhciA0LCBtaW5kIHRoZSByZWdleCB3aXRoIHNwZWNpYWwgY2hhcmFjdGVycyAoZS5nLiDDqSlcblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gdHJhbnNmb3JtIGEgc2luZ2xlIHdvcmQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuZnVuY3Rpb24gdGl0bGVDYXNlV29yZCh3b3JkOiBzdHJpbmcpIHtcbiAgaWYgKCF3b3JkKSB7XG5cdCAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICByZXR1cm4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRleHQgdG8gdGl0bGVjYXNlLlxuICpcbiAqIEBzdGFibGVcbiAqL1xuQFBpcGUoe25hbWU6ICd0aXRsZWNhc2UnfSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNhc2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcblx0aWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlLnNwbGl0KC9cXHMvZykubWFwKHdvcmQgPT4gdGl0bGVDYXNlV29yZCh3b3JkKSkuam9pbignICcpO1xuICB9XG59XG4iXX0=