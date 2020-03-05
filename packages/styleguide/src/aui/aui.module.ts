import {NgModule} from '@angular/core';
import {FooterModule} from '../../../aui-layout/src/lib/footer';
import {LogoModule} from '../../../aui-logo/src/lib';
import {HeaderModule} from '../../../aui-layout/src/lib/header';
import {NavigationMenuModule} from '../../../aui-navigation-menu/src/lib';
import {CodeSnippetModule} from '../../../aui-code-snippet/src/lib';
import {AnalyticsModule} from '../../../aui-analytics/src/lib';
import {AgendaModule} from '../../../ngx-agenda/src/lib';
import {AvatarModule} from '../../../aui-avatar/src/lib';
import {CalendarModule} from '../../../aui-calendar/src/lib';
import {ContextModule} from '../../../aui-context/src/lib';
import {FlyoutModule} from '../../../aui-flyout/src/lib/flyout';
import {FlyoutButtonModule} from '../../../aui-flyout/src/lib/flyout-button';
import {LocalstorageModule} from '../../../aui-localstorage/src/lib';
import {LeafletModule} from '../../../aui-map/src/lib/leaflet';
import {PaginationModule} from '../../../aui-pagination/src/lib/pagination';
import {ItemCounterModule} from '../../../aui-pagination/src/lib/item-counter';
import {ProgressBarModule} from '../../../aui-progress-bar/src/lib';
import {TableModule} from '../../../aui-table/src/lib';
import {UserMenuModule} from '../../../aui-user-menu/src/lib';
import {SelectableListModule} from '../../../aui-selectable-list/src/lib';
import {AutoCompleteModule} from '../../../aui-forms/src/lib/auto-complete';
import {DatepickerModule} from '../../../aui-forms/src/lib/datepicker';
import {MaskModule} from '../../../aui-forms/src/lib/mask';
import {RangeSliderModule} from '../../../aui-forms/src/lib/range-slider';
import {SearchFilterModule} from '../../../aui-forms/src/lib/search-filter';
import {TimepickerModule} from '../../../aui-forms/src/lib/timepicker';
import {UploadModule} from '../../../aui-forms/src/lib/upload';
import {WysiwygModule} from '../../../aui-forms/src/lib/wysiwyg';
import {CookieconsentModule, HeroModule, ModalModule, PaneModule, SidebarModule} from '@acpaas-ui/ngx-components/layout';
import {FilterModule} from '@acpaas-ui/ngx-utils';
import {LabelsModule} from '../../../ngx-utils/src/lib/labels/labels.module';
import {WindowModule} from '../../../ngx-utils/src/lib/window/window.module';

@NgModule({
  imports: [
    FooterModule,
    LogoModule,
    HeaderModule,
    CodeSnippetModule,
    NavigationMenuModule.configure(),
    AnalyticsModule,
    AgendaModule,
    AvatarModule,
    CalendarModule,
    ContextModule,
    FlyoutModule,
    FlyoutButtonModule,
    LocalstorageModule.forRoot({
      storageType: 'sessionStorage',
      identifier: 'my-app-v1',
    }),
    LeafletModule,
    PaginationModule,
    ItemCounterModule,
    ProgressBarModule,
    TableModule,
    UserMenuModule,
    SelectableListModule,
    AutoCompleteModule,
    DatepickerModule.forChild([
      'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
    ], [
      'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
    ], {
      ERRORS_INVALID_DATE: 'Ongeldige datum.',
      ERRORS_INVALID_RANGE: 'Deze datum kan niet gekozen worden.',
    }),
    MaskModule,
    RangeSliderModule,
    SearchFilterModule,
    TimepickerModule,
    UploadModule,
    WysiwygModule,
    CookieconsentModule.forRoot({
      autoInit: false,
      content: {
        message: 'I am the cookie consent aui-logo. Will you allow my cookies?',
        dismiss: 'Allow cookies',
        link: 'Learn more',
        href: 'http://cookiepedia.co.uk/all-about-cookies',
      },
      cookie: {
        name: 'cookieconsent_demo',
        path: '/',
        domain: '',
        expiryDays: 1,
      },
      elements: {
        messagelink: `
        <p id="cookieconsent:desc">{{message}}
					<a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a>
				</p>`,
        dismiss: `
        <button type="button" aria-label="Dismiss cookie message" tabindex="0" class="a-button a-button--secondary cc-btn cc-dismiss">
        {{dismiss}}
        </button>`
      },
    }),
    FooterModule,
    HeaderModule,
    HeroModule,
    ModalModule,
    PaneModule,
    SidebarModule,
    FilterModule,
    LabelsModule,
    WindowModule
  ],
  exports: [
    FooterModule,
    CodeSnippetModule,
    LogoModule,
    NavigationMenuModule,
    HeaderModule,
    AnalyticsModule,
    AgendaModule,
    AvatarModule,
    CalendarModule,
    ContextModule,
    FlyoutModule,
    FlyoutButtonModule,
    LocalstorageModule,
    LeafletModule,
    PaginationModule,
    ItemCounterModule,
    ProgressBarModule,
    TableModule,
    UserMenuModule,
    SelectableListModule,
    AutoCompleteModule,
    DatepickerModule,
    MaskModule,
    RangeSliderModule,
    SearchFilterModule,
    TimepickerModule,
    UploadModule,
    WysiwygModule,
    CookieconsentModule,
    FooterModule,
    HeaderModule,
    HeroModule,
    ModalModule,
    PaneModule,
    SidebarModule,
    FilterModule,
    LabelsModule,
    WindowModule
  ]
})
export class AuiModule {

}
