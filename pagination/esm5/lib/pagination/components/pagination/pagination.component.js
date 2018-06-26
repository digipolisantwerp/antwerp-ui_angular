/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.ariaNavigationLabel = 'Paginering';
        this.ariaPreviousLabel = 'Ga naar de vorige pagina';
        this.ariaNextLabel = 'Ga naar de volgende pagina';
        this.display = 'basic';
        this.styling = 'outlined';
        this.update = new EventEmitter();
        this.totalPages = 0;
        this.numbers = [];
        this.instanceId = Math.random().toString(36).substr(2, 9);
    }
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setValues();
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.currentPage < this.totalPages) {
            this.onUpdate(this.currentPage + 1);
        }
        return false; //  prevent the href being followed
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.prev = /**
     * @return {?}
     */
    function () {
        if (this.currentPage > 1) {
            this.onUpdate(this.currentPage - 1);
        }
        return false; //  prevent the href being followed
    };
    /**
     * @param {?} i
     * @return {?}
     */
    PaginationComponent.prototype.onUpdate = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.update.emit(parseInt(/** @type {?} */ (i), 10)); // input from numbers array is a string
        return false; //  prevent the href being followed
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.setValues = /**
     * @return {?}
     */
    function () {
        if (this.totalValues && this.itemsPerPage) {
            this.totalPages = Math.ceil(this.totalValues / this.itemsPerPage);
            var /** @type {?} */ generateNumbers = Array(this.totalPages).fill('').map(function (e, i) {
                return String(i + 1);
            });
            if (generateNumbers.length < 8) {
                return this.numbers = generateNumbers;
            }
            if (this.currentPage < 5) {
                this.numbers = generateNumbers.slice(0, 5);
            }
            else if (this.currentPage > this.totalPages - 4) {
                this.numbers = generateNumbers.slice(this.totalPages - 5);
            }
            else {
                this.numbers = generateNumbers.slice(this.currentPage - 2, this.currentPage + 1);
            }
            // First page
            if (this.numbers.indexOf('1') === -1) {
                this.numbers.unshift('1');
            }
            // Last Page
            if (this.numbers.indexOf(String(this.totalPages)) === -1) {
                this.numbers.push(String(this.totalPages));
            }
            // Add dots at the beginning
            if (this.numbers.indexOf('2') === -1) {
                this.numbers.splice(1, 0, '...');
            }
            // Add dots at the end
            if (this.numbers.indexOf(String(this.totalPages - 1)) === -1) {
                this.numbers.splice(this.numbers.length - 1, 0, '...');
            }
        }
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-pagination',
                    template: "<nav *ngIf=\"totalPages > 1\" role=\"navigation\" [attr.aria-label]= ariaNavigationLabel>\n    <!-- Basic -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'basic'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [attr.href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [attr.href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Text -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'text'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [attr.href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li class=\"m-pagination__label\">{{ currentPage }} - {{ totalPages }}</li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [attr.href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n\n    <!-- Numbers -->\n    <ul class=\"m-pagination\" [ngClass]=\"{'m-pagination--outline': styling === 'outlined' }\" *ngIf=\"display === 'numbers'\">\n        <li class=\"m-pagination__prev\">\n            <a [ngClass]=\"{'is-disabled': currentPage <= 1 }\" [attr.href]=\"currentPage > 1 ? '#' : null\" id=\"pagination-{{ instanceId }}-prev-page\" (click)=\"prev()\" [attr.aria-label]= ariaPreviousLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-left\"></i>\n                <span class=\"u-screen-reader-only\">Previous</span>\n            </a>\n        </li>\n        <li *ngFor=\"let number of numbers; let i = index\">\n            <a [ngClass]=\"{'is-active': number === currentPage + '' }\" href=\"#\" id=\"pagination-{{ instanceId }}-button-{{ i }}\" (click)=\"onUpdate(number)\" [attr.aria-label]=\"'Pagina ' + number\" [attr.aria-current]=\"number === currentPage + '' ? 'page' : null\">{{ number }}</a>\n        </li>\n        <li class=\"m-pagination__next\">\n            <a [ngClass]=\"{'is-disabled': currentPage >= totalPages }\" [attr.href]=\"currentPage < totalPages ? '#' : null\" id=\"pagination-{{ instanceId }}-next-page\" (click)=\"next()\" [attr.aria-label]= ariaNextLabel>\n                <i aria-hidden=\"true\" class=\"fa fa-angle-right\"></i>\n                <span class=\"u-screen-reader-only\">Next</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n",
                },] },
    ];
    PaginationComponent.propDecorators = {
        ariaNavigationLabel: [{ type: Input }],
        ariaPreviousLabel: [{ type: Input }],
        ariaNextLabel: [{ type: Input }],
        currentPage: [{ type: Input }],
        display: [{ type: Input }],
        itemsPerPage: [{ type: Input }],
        styling: [{ type: Input }],
        totalValues: [{ type: Input }],
        update: [{ type: Output }]
    };
    return PaginationComponent;
}());
export { PaginationComponent };
function PaginationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PaginationComponent.prototype.ariaNavigationLabel;
    /** @type {?} */
    PaginationComponent.prototype.ariaPreviousLabel;
    /** @type {?} */
    PaginationComponent.prototype.ariaNextLabel;
    /** @type {?} */
    PaginationComponent.prototype.currentPage;
    /** @type {?} */
    PaginationComponent.prototype.display;
    /** @type {?} */
    PaginationComponent.prototype.itemsPerPage;
    /** @type {?} */
    PaginationComponent.prototype.styling;
    /** @type {?} */
    PaginationComponent.prototype.totalValues;
    /** @type {?} */
    PaginationComponent.prototype.update;
    /** @type {?} */
    PaginationComponent.prototype.totalPages;
    /** @type {?} */
    PaginationComponent.prototype.numbers;
    /** @type {?} */
    PaginationComponent.prototype.instanceId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL3BhZ2luYXRpb24vY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7bUNBOEQzQyxZQUFZO2lDQUNkLDBCQUEwQjs2QkFDOUIsNEJBQTRCO3VCQUVmLE9BQU87dUJBRTFCLFVBQVU7c0JBRVYsSUFBSSxZQUFZLEVBQUU7MEJBRXhCLENBQUM7dUJBQ00sRUFBRTswQkFFRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7OztJQUU1RCx5Q0FBVzs7OztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Ozs7O0lBR1gsa0NBQUk7Ozs7UUFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Ozs7O0lBR1Asa0NBQUk7Ozs7UUFDVixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQzs7Ozs7O0lBR1Asc0NBQVE7Ozs7Y0FBQyxDQUFnQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFD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QjtvQkFDMUIsUUFBUSxFQUFFLHVrSEFxRFY7aUJBQ0E7OztzQ0FFQyxLQUFLO29DQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7OEJBdEVSOztTQTZEYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luYXRpb25EaXNwbGF5IH0gZnJvbSAnLi4vLi4vdHlwZXMvcGFnaW5hdGlvbi50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1wYWdpbmF0aW9uJyxcblx0dGVtcGxhdGU6IGA8bmF2ICpuZ0lmPVwidG90YWxQYWdlcyA+IDFcIiByb2xlPVwibmF2aWdhdGlvblwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmF2aWdhdGlvbkxhYmVsPlxuICAgIDwhLS0gQmFzaWMgLS0+XG4gICAgPHVsIGNsYXNzPVwibS1wYWdpbmF0aW9uXCIgW25nQ2xhc3NdPVwieydtLXBhZ2luYXRpb24tLW91dGxpbmUnOiBzdHlsaW5nID09PSAnb3V0bGluZWQnIH1cIiAqbmdJZj1cImRpc3BsYXkgPT09ICdiYXNpYydcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19wcmV2XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPD0gMSB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA+IDEgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tcHJldi1wYWdlXCIgKGNsaWNrKT1cInByZXYoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhUHJldmlvdXNMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX25leHRcIj5cbiAgICAgICAgICAgIDxhIFtuZ0NsYXNzXT1cInsnaXMtZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzIH1cIiBbYXR0ci5ocmVmXT1cImN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcyA/ICcjJyA6IG51bGxcIiBpZD1cInBhZ2luYXRpb24te3sgaW5zdGFuY2VJZCB9fS1uZXh0LXBhZ2VcIiAoY2xpY2spPVwibmV4dCgpXCIgW2F0dHIuYXJpYS1sYWJlbF09IGFyaWFOZXh0TGFiZWw+XG4gICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInUtc2NyZWVuLXJlYWRlci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuXG4gICAgPCEtLSBUZXh0IC0tPlxuICAgIDx1bCBjbGFzcz1cIm0tcGFnaW5hdGlvblwiIFtuZ0NsYXNzXT1cInsnbS1wYWdpbmF0aW9uLS1vdXRsaW5lJzogc3R5bGluZyA9PT0gJ291dGxpbmVkJyB9XCIgKm5nSWY9XCJkaXNwbGF5ID09PSAndGV4dCdcIj5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19wcmV2XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPD0gMSB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA+IDEgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tcHJldi1wYWdlXCIgKGNsaWNrKT1cInByZXYoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhUHJldmlvdXNMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtLXBhZ2luYXRpb25fX2xhYmVsXCI+e3sgY3VycmVudFBhZ2UgfX0gLSB7eyB0b3RhbFBhZ2VzIH19PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibS1wYWdpbmF0aW9uX19uZXh0XCI+XG4gICAgICAgICAgICA8YSBbbmdDbGFzc109XCJ7J2lzLWRpc2FibGVkJzogY3VycmVudFBhZ2UgPj0gdG90YWxQYWdlcyB9XCIgW2F0dHIuaHJlZl09XCJjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgPyAnIycgOiBudWxsXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tbmV4dC1wYWdlXCIgKGNsaWNrKT1cIm5leHQoKVwiIFthdHRyLmFyaWEtbGFiZWxdPSBhcmlhTmV4dExhYmVsPlxuICAgICAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1LXNjcmVlbi1yZWFkZXItb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cblxuICAgIDwhLS0gTnVtYmVycyAtLT5cbiAgICA8dWwgY2xhc3M9XCJtLXBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJ7J20tcGFnaW5hdGlvbi0tb3V0bGluZSc6IHN0eWxpbmcgPT09ICdvdXRsaW5lZCcgfVwiICpuZ0lmPVwiZGlzcGxheSA9PT0gJ251bWJlcnMnXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fcHJldlwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1kaXNhYmxlZCc6IGN1cnJlbnRQYWdlIDw9IDEgfVwiIFthdHRyLmhyZWZdPVwiY3VycmVudFBhZ2UgPiAxID8gJyMnIDogbnVsbFwiIGlkPVwicGFnaW5hdGlvbi17eyBpbnN0YW5jZUlkIH19LXByZXYtcGFnZVwiIChjbGljayk9XCJwcmV2KClcIiBbYXR0ci5hcmlhLWxhYmVsXT0gYXJpYVByZXZpb3VzTGFiZWw+XG4gICAgICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBudW1iZXIgb2YgbnVtYmVyczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1hY3RpdmUnOiBudW1iZXIgPT09IGN1cnJlbnRQYWdlICsgJycgfVwiIGhyZWY9XCIjXCIgaWQ9XCJwYWdpbmF0aW9uLXt7IGluc3RhbmNlSWQgfX0tYnV0dG9uLXt7IGkgfX1cIiAoY2xpY2spPVwib25VcGRhdGUobnVtYmVyKVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1BhZ2luYSAnICsgbnVtYmVyXCIgW2F0dHIuYXJpYS1jdXJyZW50XT1cIm51bWJlciA9PT0gY3VycmVudFBhZ2UgKyAnJyA/ICdwYWdlJyA6IG51bGxcIj57eyBudW1iZXIgfX08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm0tcGFnaW5hdGlvbl9fbmV4dFwiPlxuICAgICAgICAgICAgPGEgW25nQ2xhc3NdPVwieydpcy1kaXNhYmxlZCc6IGN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMgfVwiIFthdHRyLmhyZWZdPVwiY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzID8gJyMnIDogbnVsbFwiIGlkPVwicGFnaW5hdGlvbi17eyBpbnN0YW5jZUlkIH19LW5leHQtcGFnZVwiIChjbGljayk9XCJuZXh0KClcIiBbYXR0ci5hcmlhLWxhYmVsXT0gYXJpYU5leHRMYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L25hdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRASW5wdXQoKSBwdWJsaWMgYXJpYU5hdmlnYXRpb25MYWJlbCA9ICdQYWdpbmVyaW5nJztcblx0QElucHV0KCkgcHVibGljIGFyaWFQcmV2aW91c0xhYmVsID0gJ0dhIG5hYXIgZGUgdm9yaWdlIHBhZ2luYSc7XG5cdEBJbnB1dCgpIHB1YmxpYyBhcmlhTmV4dExhYmVsID0gJ0dhIG5hYXIgZGUgdm9sZ2VuZGUgcGFnaW5hJztcblx0QElucHV0KCkgcHVibGljIGN1cnJlbnRQYWdlOiBudW1iZXI7XG5cdEBJbnB1dCgpIHB1YmxpYyBkaXNwbGF5OiBQYWdpbmF0aW9uRGlzcGxheSA9ICdiYXNpYyc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtc1BlclBhZ2U6IG51bWJlcjtcblx0QElucHV0KCkgcHVibGljIHN0eWxpbmcgPSAnb3V0bGluZWQnO1xuXHRASW5wdXQoKSBwdWJsaWMgdG90YWxWYWx1ZXM6IG51bWJlcjtcblx0QE91dHB1dCgpIHB1YmxpYyB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHRvdGFsUGFnZXMgPSAwO1xuXHRwdWJsaWMgbnVtYmVyczogc3RyaW5nW10gPSBbXTtcblx0Ly8gVXNlIHRoaXMgdG8gaGF2ZSB1bmlxdWUgaWRzIHdpdGggbXVsdGlwbGUgcGFnaW5hdGlvbiBpbnN0YW5jZXMgb24gb25lIHBhZ2UuXG5cdHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG5cblx0cHVibGljIG5nT25DaGFuZ2VzKCkge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCk7XG5cdH1cblxuXHRwdWJsaWMgbmV4dCgpIHtcblx0XHRpZiAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMudG90YWxQYWdlcykge1xuXHRcdFx0dGhpcy5vblVwZGF0ZSh0aGlzLmN1cnJlbnRQYWdlICsgMSk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTsgLy8gIHByZXZlbnQgdGhlIGhyZWYgYmVpbmcgZm9sbG93ZWRcblx0fVxuXG5cdHB1YmxpYyBwcmV2KCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRQYWdlID4gMSkge1xuXHRcdFx0dGhpcy5vblVwZGF0ZSh0aGlzLmN1cnJlbnRQYWdlIC0gMSk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTsgLy8gIHByZXZlbnQgdGhlIGhyZWYgYmVpbmcgZm9sbG93ZWRcblx0fVxuXG5cdHB1YmxpYyBvblVwZGF0ZShpOiBudW1iZXJ8c3RyaW5nKSB7XG5cdFx0dGhpcy51cGRhdGUuZW1pdChwYXJzZUludChpIGFzIHN0cmluZywgMTApKTsgLy8gaW5wdXQgZnJvbSBudW1iZXJzIGFycmF5IGlzIGEgc3RyaW5nXG5cdFx0cmV0dXJuIGZhbHNlOyAvLyAgcHJldmVudCB0aGUgaHJlZiBiZWluZyBmb2xsb3dlZFxuXHR9XG5cblx0cHJpdmF0ZSBzZXRWYWx1ZXMoKSB7XG5cdFx0aWYgKHRoaXMudG90YWxWYWx1ZXMgJiYgdGhpcy5pdGVtc1BlclBhZ2UpIHtcblx0XHRcdHRoaXMudG90YWxQYWdlcyA9IE1hdGguY2VpbCh0aGlzLnRvdGFsVmFsdWVzIC8gdGhpcy5pdGVtc1BlclBhZ2UpO1xuXG5cdFx0XHRjb25zdCBnZW5lcmF0ZU51bWJlcnMgPSBBcnJheSh0aGlzLnRvdGFsUGFnZXMpLmZpbGwoJycpLm1hcCgoZSwgaSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gU3RyaW5nKGkgKyAxKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZ2VuZXJhdGVOdW1iZXJzLmxlbmd0aCA8IDgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubnVtYmVycyA9IGdlbmVyYXRlTnVtYmVycztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuY3VycmVudFBhZ2UgPCA1KSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycyA9IGdlbmVyYXRlTnVtYmVycy5zbGljZSgwLCA1KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5jdXJyZW50UGFnZSA+IHRoaXMudG90YWxQYWdlcyAtIDQpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzLnNsaWNlKHRoaXMudG90YWxQYWdlcyAtIDUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzID0gZ2VuZXJhdGVOdW1iZXJzLnNsaWNlKHRoaXMuY3VycmVudFBhZ2UgLSAyLCB0aGlzLmN1cnJlbnRQYWdlICsgMSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpcnN0IHBhZ2Vcblx0XHRcdGlmICh0aGlzLm51bWJlcnMuaW5kZXhPZignMScpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLm51bWJlcnMudW5zaGlmdCgnMScpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMYXN0IFBhZ2Vcblx0XHRcdGlmICh0aGlzLm51bWJlcnMuaW5kZXhPZihTdHJpbmcodGhpcy50b3RhbFBhZ2VzKSkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycy5wdXNoKFN0cmluZyh0aGlzLnRvdGFsUGFnZXMpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGRvdHMgYXQgdGhlIGJlZ2lubmluZ1xuXHRcdFx0aWYgKHRoaXMubnVtYmVycy5pbmRleE9mKCcyJykgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubnVtYmVycy5zcGxpY2UoMSwgMCwgJy4uLicpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZG90cyBhdCB0aGUgZW5kXG5cdFx0XHRpZiAodGhpcy5udW1iZXJzLmluZGV4T2YoU3RyaW5nKHRoaXMudG90YWxQYWdlcyAtIDEpKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5udW1iZXJzLnNwbGljZSh0aGlzLm51bWJlcnMubGVuZ3RoIC0gMSwgMCwgJy4uLicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19