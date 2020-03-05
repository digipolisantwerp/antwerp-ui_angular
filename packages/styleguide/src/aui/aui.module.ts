import {NgModule} from '@angular/core';
import {FooterModule} from '../../../ngx-layout/src/lib/footer/public-api';
import {LogoModule} from '../../../ngx-logo/src/lib';
import {HeaderModule} from '../../../ngx-layout/src/lib/header/public-api';
import {NavigationMenuModule} from '../../../ngx-navigation-menu/src/lib';
import {CodeSnippetModule} from '../../../ngx-code-snippet/src/lib';
import {AnalyticsModule} from '../../../ngx-analytics/src/lib';
import {AgendaModule} from '../../../ngx-agenda/src/lib';
import {AvatarModule} from '../../../ngx-avatar/src/lib';
import {CalendarModule} from '../../../ngx-calendar/src/lib';
import {ContextModule} from '../../../ngx-context/src/lib';
import {FlyoutModule} from '../../../ngx-flyout/src/lib/flyout/flyout.module';
import {FlyoutButtonModule} from '../../../ngx-flyout/src/lib/flyout-button/flyout-button.module';
import {LocalstorageModule} from '../../../ngx-localstorage/src/lib';
import {LeafletModule} from '../../../ngx-map/src/lib/leaflet';
import {PaginationModule} from '../../../ngx-pagination/src/lib/pagination';
import {ItemCounterModule} from '../../../ngx-pagination/src/lib/item-counter';
import {ProgressBarModule} from '../../../ngx-progress-bar/src/lib';
import {TableModule} from '../../../ngx-table/src/lib';
import {UserMenuModule} from '../../../ngx-user-menu/src/lib';
import {SelectableListModule} from '../../../ngx-selectable-list/src/lib';
import {AutoCompleteModule} from '../../../ngx-forms/src/lib/auto-complete/auto-complete.module';
import {DatepickerModule} from '../../../ngx-forms/src/lib/datepicker/datepicker.module';
import {MaskModule} from '../../../ngx-forms/src/lib/mask/mask.module';
import {RangeSliderModule} from '../../../ngx-forms/src/lib/range-slider/public-api';
import {SearchFilterModule} from '../../../ngx-forms/src/lib/search-filter/public-api';
import {TimepickerModule} from '../../../ngx-forms/src/lib/timepicker/public-api';
import {UploadModule} from '../../../ngx-forms/src/lib/upload/public-api';
import {WysiwygModule} from '../../../ngx-forms/src/lib/wysiwyg/public-api';
import {CookieconsentModule, HeroModule, ModalModule, PaneModule, SidebarModule} from '@acpaas-ui/ngx-layout';
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
        message: 'I am the cookie consent ngx-logo. Will you allow my cookies?',
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
