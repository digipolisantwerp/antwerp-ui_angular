/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';
import { MaskModule } from '../mask/mask.module';
import { SearchService } from '../shared/services/search.service';
import { Components } from './components';
export class AutoCompleteModule {
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
                declarations: [
                    ...Components,
                ],
                exports: [
                    ...Components,
                ],
                providers: [
                    SearchService,
                ],
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1jb21wbGV0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9hdXRvLWNvbXBsZXRlL2F1dG8tY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQW9CMUMsTUFBTTs7O1lBbEJMLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixVQUFVO2lCQUNWO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsYUFBYTtpQkFDYjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmx5b3V0TW9kdWxlIH0gZnJvbSAnQGFjcGFhcy11aS9uZ3gtY29tcG9uZW50cy9mbHlvdXQnO1xuaW1wb3J0IHsgU2VsZWN0YWJsZUxpc3RNb2R1bGUgfSBmcm9tICdAYWNwYWFzLXVpL25neC1jb21wb25lbnRzL3NlbGVjdGFibGUtbGlzdCc7XG5cbmltcG9ydCB7IE1hc2tNb2R1bGUgfSBmcm9tICcuLi9tYXNrL21hc2subW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvc2VhcmNoLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGb3Jtc01vZHVsZSxcblx0XHRGbHlvdXRNb2R1bGUsXG5cdFx0U2VsZWN0YWJsZUxpc3RNb2R1bGUsXG5cdFx0TWFza01vZHVsZSxcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0Li4uQ29tcG9uZW50cyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdC4uLkNvbXBvbmVudHMsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlYXJjaFNlcnZpY2UsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZU1vZHVsZSB7XG59XG4iXX0=