/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';
import { MaskModule } from '../mask/mask.module';
import { SearchService } from '../shared/services/search.service';
import { Components } from './components';
var AutoCompleteModule = /** @class */ (function () {
    function AutoCompleteModule() {
    }
    AutoCompleteModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        FlyoutModule,
                        SelectableListModule,
                        MaskModule,
                    ],
                    declarations: tslib_1.__spread(Components),
                    exports: tslib_1.__spread(Components),
                    providers: [
                        SearchService,
                    ],
                },] },
    ];
    return AutoCompleteModule;
}());
export { AutoCompleteModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUVqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O2dCQUV6QyxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsVUFBVTtxQkFDVjtvQkFDRCxZQUFZLG1CQUNSLFVBQVUsQ0FDYjtvQkFDRCxPQUFPLG1CQUNILFVBQVUsQ0FDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsYUFBYTtxQkFDYjtpQkFDRDs7NkJBN0JEOztTQThCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGbHlvdXRNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL2ZseW91dCc7XG5pbXBvcnQgeyBTZWxlY3RhYmxlTGlzdE1vZHVsZSB9IGZyb20gJ0BhY3BhYXMtdWkvbmd4LWNvbXBvbmVudHMvc2VsZWN0YWJsZS1saXN0JztcblxuaW1wb3J0IHsgTWFza01vZHVsZSB9IGZyb20gJy4uL21hc2svbWFzay5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9zZWFyY2guc2VydmljZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdEZseW91dE1vZHVsZSxcblx0XHRTZWxlY3RhYmxlTGlzdE1vZHVsZSxcblx0XHRNYXNrTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHQuLi5Db21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VhcmNoU2VydmljZSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlTW9kdWxlIHtcbn1cbiJdfQ==