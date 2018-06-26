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
var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TitleCasePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value || typeof value !== 'string') {
            return value;
        }
        return value.split(/\s/g).map(function (word) { return titleCaseWord(word); }).join(' ');
    };
    TitleCasePipe.decorators = [
        { type: Pipe, args: [{ name: 'titlecase' },] },
    ];
    return TitleCasePipe;
}());
export { TitleCasePipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtY2FzZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvcGlwZXMvdGl0bGUtY2FzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBT3BELHVCQUF1QixJQUFZO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDWjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztDQUM3RDs7Ozs7Ozs7Ozs7OztJQVNDLGlDQUFTOzs7O0lBQVQsVUFBVSxLQUFhO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNiO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ25FOztnQkFSRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOzt3QkF0QnpCOztTQXVCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVwbGFjZSB3aXRoIGNvbW1vbiB0aXRsZWNhc2UgcGlwZSBpbiBhbmd1bGFyIDQsIG1pbmQgdGhlIHJlZ2V4IHdpdGggc3BlY2lhbCBjaGFyYWN0ZXJzIChlLmcuIMOpKVxuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byB0cmFuc2Zvcm0gYSBzaW5nbGUgd29yZCB0byB0aXRsZWNhc2UuXG4gKlxuICogQHN0YWJsZVxuICovXG5mdW5jdGlvbiB0aXRsZUNhc2VXb3JkKHdvcmQ6IHN0cmluZykge1xuICBpZiAoIXdvcmQpIHtcblx0ICByZXR1cm4gd29yZDtcbiAgfVxuXG4gIHJldHVybiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGV4dCB0byB0aXRsZWNhc2UuXG4gKlxuICogQHN0YWJsZVxuICovXG5AUGlwZSh7bmFtZTogJ3RpdGxlY2FzZSd9KVxuZXhwb3J0IGNsYXNzIFRpdGxlQ2FzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWUuc3BsaXQoL1xccy9nKS5tYXAod29yZCA9PiB0aXRsZUNhc2VXb3JkKHdvcmQpKS5qb2luKCcgJyk7XG4gIH1cbn1cbiJdfQ==