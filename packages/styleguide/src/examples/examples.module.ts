import {NgModule} from '@angular/core';
import {LogoDemoPageComponent} from './pages/aui-logo/aui-logo.page';
import {AuiModule} from '../aui/aui.module';
import {RouterModule} from '@angular/router';
import {EXAMPLES_ROUTES} from './examples.routes';
import {CodeSnippetDemoPageComponent} from './pages/aui-code-snippet/aui-snippet.page';
import {AnalyticsDemoPageComponent} from './pages/aui-analytics/aui-analytics.page';
import {AgendaDemoPageComponent} from './pages/aui-agenda/aui-agenda.page';
import {AvatarDemoPageComponent} from './pages/aui-avatar/aui-avatar.page';
import {NavigationMenuDemoPage} from './pages/aui-navigation-menu/aui-navigation-menu.page';
import {CalendarDemoPage} from './pages/aui-calendar/aui-calendar.page';
import {ContextDemoPageComponent} from './pages/aui-context/aui-context';
import {FlyoutDemoPage} from './pages/aui-flyout/aui-flyout';
import {LocalstorageDemoPageComponent} from './pages/aui-localstorage/aui-localstorage';
import {PaginationDemoPageComponent} from './pages/aui-pagination/aui-pagination.page';
import {BrowserModule} from '@angular/platform-browser';
import {ProgressBarDemoPageComponent} from './pages/aui-progress-bar/aui-progress-bar.page';
import {TableDemoPageComponent} from './pages/aui-table/aui-table.page';
import {TableActionComponent} from './components/table-action.component';
import {UserMenuDemoPageComponent} from './pages/aui-user-menu/aui-user-menu.page';
import {SelectableListDemoPageComponent} from './pages/aui-selectable-list/aui-selectable-list.page';
import {FormsAutocompleteDemoPageComponent} from './pages/aui-forms/autocomplete/autocomplete.page';
import {FormsDatepickerDemoPageComponent} from './pages/aui-forms/datepicker/datepicker.page';
import {FormsMaskDemoPageComponent} from './pages/aui-forms/mask/mask.page';
import {FormsRangeSliderDemoPageComponent} from './pages/aui-forms/range-slider/range-slider.page';
import {FormsSearchFilterDemoPageComponent} from './pages/aui-forms/search-filter/search-filter.page';
import {FormsTimepickerDemoPageComponent} from './pages/aui-forms/timepicker/timepicker.page';
import {FormsUploadDemoPageComponent} from './pages/aui-forms/upload/upload.page';
import {FormsWysiwygDemoPageComponent} from './pages/aui-forms/wysiwyg/wysiwyg.page';
import {FormsDemoPageComponent} from './pages/aui-forms/demo/demo.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutDemoPageComponent} from './pages/aui-layout/demo/demo.page';
import {LayoutCookieconsentDemoPageComponent} from './pages/aui-layout/cookie-consent/cookie-consent.page';
import {LayoutFooterDemoPageComponent} from './pages/aui-layout/footer/footer.page';
import {LayoutHeaderDemoPageComponent} from './pages/aui-layout/header/header.page';
import {LayoutHeroDemoPageComponent} from './pages/aui-layout/hero/hero.page';
import {LayoutModalDemoPageComponent} from './pages/aui-layout/modal/modal.page';
import {LayoutPaneDemoPageComponent} from './pages/aui-layout/pane/pane.page';
import {LayoutSidebarDemoPageComponent} from './pages/aui-layout/sidebar/sidebar.page';
import {AUIDemoModalComponent} from './pages/aui-layout/modal/demo-modal.component';
import {UtilsDemoPageComponent} from './pages/aui-utils/demo/demo.page';
import {UtilsFilterDemoPageComponent} from './pages/aui-utils/filter/filter.page';
import {UtilsLabelsDemoPageComponent} from './pages/aui-utils/labels/labels.page';
import {UtilsWindowDemoPageComponent} from './pages/aui-utils/window/window.page';
import {LeafletDemoPageComponent} from './pages/aui-leaflet/aui-leaflet.page';
import {IntervalPageComponent} from './pages/aui-utils/interval/interval.page';
import {NotificationsPageDemoComponent} from './pages/aui-notifications/aui-notifications.page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LogoDemoPageComponent,
    CodeSnippetDemoPageComponent,
    AnalyticsDemoPageComponent,
    AgendaDemoPageComponent,
    AvatarDemoPageComponent,
    NavigationMenuDemoPage,
    CalendarDemoPage,
    ContextDemoPageComponent,
    FlyoutDemoPage,
    LocalstorageDemoPageComponent,
    PaginationDemoPageComponent,
    ProgressBarDemoPageComponent,
    TableDemoPageComponent,
    TableActionComponent,
    UserMenuDemoPageComponent,
    SelectableListDemoPageComponent,
    FormsDemoPageComponent,
    FormsAutocompleteDemoPageComponent,
    FormsDatepickerDemoPageComponent,
    FormsMaskDemoPageComponent,
    FormsRangeSliderDemoPageComponent,
    FormsSearchFilterDemoPageComponent,
    FormsTimepickerDemoPageComponent,
    FormsUploadDemoPageComponent,
    FormsWysiwygDemoPageComponent,
    LayoutDemoPageComponent,
    LayoutCookieconsentDemoPageComponent,
    LayoutFooterDemoPageComponent,
    LayoutHeaderDemoPageComponent,
    LayoutHeroDemoPageComponent,
    LayoutModalDemoPageComponent,
    LayoutPaneDemoPageComponent,
    LayoutSidebarDemoPageComponent,
    AUIDemoModalComponent,
    UtilsDemoPageComponent,
    UtilsFilterDemoPageComponent,
    UtilsLabelsDemoPageComponent,
    UtilsWindowDemoPageComponent,
    LeafletDemoPageComponent,
    IntervalPageComponent,
    NotificationsPageDemoComponent
  ],
  imports: [
    AuiModule,
    BrowserAnimationsModule,
    RouterModule.forChild(EXAMPLES_ROUTES),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LogoDemoPageComponent
  ],
  entryComponents: [
    TableActionComponent,
    AUIDemoModalComponent
  ]
})
export class ExamplesModule {

}
