/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class LogoComponent {
    constructor() {
        this.title = 'Default';
        this.src = 'https://place-hold.it/170x170';
        this.link = '/';
    }
}
LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-logo',
                template: `<a class="o-header__logo" href="{{link || '#'}}" title="{{title}}" (click)="onClick($event)">
    <img [src]="src"[alt]="title" />
</a>

`,
            },] },
];
LogoComponent.propDecorators = {
    title: [{ type: Input }],
    src: [{ type: Input }],
    link: [{ type: Input }],
    onClick: [{ type: Input }]
};
function LogoComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LogoComponent.prototype.title;
    /** @type {?} */
    LogoComponent.prototype.src;
    /** @type {?} */
    LogoComponent.prototype.link;
    /** @type {?} */
    LogoComponent.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb2dvLyIsInNvdXJjZXMiOlsibGliL2xvZ28vY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVVqRCxNQUFNOztxQkFFSSxTQUFTO21CQUdYLCtCQUErQjtvQkFHNUIsR0FBRzs7OztZQWhCYixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7OztDQUlYO2FBQ0E7OztvQkFFRSxLQUFLO2tCQUdMLEtBQUs7bUJBR0wsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdWktbG9nbycsXG4gIHRlbXBsYXRlOiBgPGEgY2xhc3M9XCJvLWhlYWRlcl9fbG9nb1wiIGhyZWY9XCJ7e2xpbmsgfHwgJyMnfX1cIiB0aXRsZT1cInt7dGl0bGV9fVwiIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIj5cbiAgICA8aW1nIFtzcmNdPVwic3JjXCJbYWx0XT1cInRpdGxlXCIgLz5cbjwvYT5cblxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHRpdGxlID0gJ0RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpXG4gIHNyYyA9ICdodHRwczovL3BsYWNlLWhvbGQuaXQvMTcweDE3MCc7XG5cbiAgQElucHV0KClcbiAgbGluayA/ID0gJy8nO1xuXG4gIEBJbnB1dCgpXG4gIG9uQ2xpY2s/OiBGdW5jdGlvbjtcbn1cbiJdfQ==