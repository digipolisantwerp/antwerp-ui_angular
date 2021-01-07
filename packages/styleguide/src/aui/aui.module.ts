import {NgModule} from '@angular/core';
import {FooterModule} from '../../../ngx-layout/src/lib/footer/public-api';
import {LogoModule} from '../../../ngx-logo/src/public-api';
import {HeaderModule} from '../../../ngx-layout/src/lib/header/public-api';
import {NavigationMenuModule} from '../../../ngx-navigation-menu/src/public-api';
import {CodeSnippetModule} from '../../../ngx-code-snippet/src/public-api';
import {AnalyticsModule} from '../../../ngx-analytics/src/public-api';
import {AgendaModule} from '../../../ngx-agenda/src/public-api';
import {AvatarModule} from '../../../ngx-avatar/src/public-api';
import {CalendarModule} from '../../../ngx-calendar/src/public-api';
import {ContextModule} from '../../../ngx-context/src/public-api';
import {FlyoutModule} from '../../../ngx-flyout/src/lib/flyout/flyout.module';
import {FlyoutButtonModule} from '../../../ngx-flyout/src/lib/flyout-button/flyout-button.module';
import {LocalstorageModule} from '../../../ngx-localstorage/src/public-api';
import {PaginationModule} from '../../../ngx-pagination/src/lib/pagination/public-api';
import {ItemCounterModule} from '../../../ngx-pagination/src/lib/item-counter/public-api';
import {ProgressBarModule} from '../../../ngx-progress-bar/src/public-api';
import {TableModule} from '../../../ngx-table/src/public-api';
import {UserMenuModule} from '../../../ngx-user-menu/src/public-api';
import {SelectableListModule} from '../../../ngx-selectable-list/src/public-api';
import {AutoCompleteModule} from '../../../ngx-forms/src/lib/auto-complete/auto-complete.module';
import {DatepickerModule} from '../../../ngx-forms/src/lib/datepicker/datepicker.module';
import {MaskModule} from '../../../ngx-forms/src/lib/mask/mask.module';
import {RangeSliderModule} from '../../../ngx-forms/src/lib/range-slider/public-api';
import {SearchFilterModule} from '../../../ngx-forms/src/lib/search-filter/public-api';
import {TimepickerModule} from '../../../ngx-forms/src/lib/timepicker/public-api';
import {UploadModule} from '../../../ngx-forms/src/lib/upload/public-api';
import {WysiwygModule} from '../../../ngx-forms/src/lib/wysiwyg/public-api';
import {CookieconsentModule, HeroModule, ModalModule, PaneModule, SidebarModule} from '../../../ngx-layout/src/public-api';
import {FilterModule, LabelsModule, WindowModule} from '../../../ngx-utils/src/public-api';
import {LeafletModule} from '../../../ngx-leaflet/src/public-api';
import {NotificationsModule} from '../../../ngx-notifications/src/lib/ngx-notifications.module';

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
      storageType: 'sessionStorage'
    }),
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
    UploadModule.forChild({
      maxFileSizeLabel: 'Max file size:',
      allowedFileTypesLabel: 'Allowed file types:',
      INVALID_FILE_TYPE: 'Error: Invalid file type',
      INVALID_MIME_TYPE: 'Error: Invalid mime type',
      INVALID_FILE_SIZE: 'Error: Invalid file size'
    }),
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
    WindowModule,
    LeafletModule,
    NotificationsModule
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
    WindowModule,
    LeafletModule,
    NotificationsModule
  ]
})
export class AuiModule {

}
