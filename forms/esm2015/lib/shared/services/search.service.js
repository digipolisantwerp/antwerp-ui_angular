/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class SearchService {
    constructor() {
        this.matchItemWithSearchString = (item, searchString) => {
            return String(item).toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        };
    }
    /**
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    search(data, options = {}) {
        const /** @type {?} */ query = options.hasOwnProperty('query') ? options.query : '';
        const /** @type {?} */ minLength = options.hasOwnProperty('minLength') ? options.minLength : 0;
        const /** @type {?} */ key = options.hasOwnProperty('key') ? options.key : '';
        if ((!query && options.showAllByDefault) || query.length < minLength) {
            return [...data];
        }
        return [...data].filter(item => {
            if (key && !item.hasOwnProperty(key)) {
                return console.error(`"${key}" does not exist in item ${JSON.stringify(item, null, 2)}`);
            }
            if (key) {
                return this.matchItemWithSearchString(item[key], query);
            }
            return this.matchItemWithSearchString(item, query);
        });
    }
}
SearchService.decorators = [
    { type: Injectable },
];
function SearchService_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchService.prototype.matchItemWithSearchString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTTs7eUNBdUIrQixDQUFDLElBQVMsRUFBRSxZQUFZLEVBQVcsRUFBRTtZQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzRTs7Ozs7OztJQXhCTSxNQUFNLENBQUMsSUFBVyxFQUFFLFVBQXlCLEVBQUU7UUFDckQsdUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRSx1QkFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLHVCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFN0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNqQjtRQUVELE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsNEJBQTRCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekY7WUFFRCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkQsQ0FBQyxDQUFDOzs7O1lBckJKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlYXJjaE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9zZWFyY2gudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG5cdHB1YmxpYyBzZWFyY2goZGF0YTogYW55W10sIG9wdGlvbnM6IFNlYXJjaE9wdGlvbnMgPSB7fSk6IGFueVtdIHtcblx0XHRjb25zdCBxdWVyeSA9IG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyBvcHRpb25zLnF1ZXJ5IDogJyc7XG5cdFx0Y29uc3QgbWluTGVuZ3RoID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbWluTGVuZ3RoJykgPyBvcHRpb25zLm1pbkxlbmd0aCA6IDA7XG5cdFx0Y29uc3Qga2V5ID0gb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgna2V5JykgPyBvcHRpb25zLmtleSA6ICcnO1xuXG5cdFx0aWYgKCghcXVlcnkgJiYgb3B0aW9ucy5zaG93QWxsQnlEZWZhdWx0KSB8fCBxdWVyeS5sZW5ndGggPCBtaW5MZW5ndGgpIHtcblx0XHRcdHJldHVybiBbLi4uZGF0YV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFsuLi5kYXRhXS5maWx0ZXIoaXRlbSA9PiB7XG5cdFx0XHRpZiAoa2V5ICYmICFpdGVtLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0cmV0dXJuIGNvbnNvbGUuZXJyb3IoYFwiJHtrZXl9XCIgZG9lcyBub3QgZXhpc3QgaW4gaXRlbSAke0pTT04uc3RyaW5naWZ5KGl0ZW0sIG51bGwsIDIpfWApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLm1hdGNoSXRlbVdpdGhTZWFyY2hTdHJpbmcoaXRlbVtrZXldLCBxdWVyeSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLm1hdGNoSXRlbVdpdGhTZWFyY2hTdHJpbmcoaXRlbSwgcXVlcnkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBtYXRjaEl0ZW1XaXRoU2VhcmNoU3RyaW5nID0gKGl0ZW06IGFueSwgc2VhcmNoU3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIFN0cmluZyhpdGVtKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpID4gLTE7XG5cdH1cbn1cbiJdfQ==