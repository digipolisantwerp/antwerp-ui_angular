import { Routes } from '@angular/router';
import { LogoDemoPageComponent } from './pages/aui-logo/aui-logo.page';
import { CodeSnippetDemoPageComponent } from './pages/aui-code-snippet/aui-snippet.page';
import { AvatarDemoPageComponent } from './pages/aui-avatar/aui-avatar.page';
import { CalendarDemoPage } from './pages/aui-calendar/aui-calendar.page';
import { ContextDemoPageComponent } from './pages/aui-context/aui-context';
import { FlyoutDemoPage } from './pages/aui-flyout/aui-flyout';
import { IconDemoPageComponent } from './pages/aui-icon/aui-icon.page';
import { PaginationDemoPageComponent } from './pages/aui-pagination/aui-pagination.page';
import { ProgressBarDemoPageComponent } from './pages/aui-progress-bar/aui-progress-bar.page';
import { TableDemoPageComponent } from './pages/aui-table/aui-table.page';
import { UserMenuDemoPageComponent } from './pages/aui-user-menu/aui-user-menu.page';
import { SelectableListDemoPageComponent } from './pages/aui-selectable-list/aui-selectable-list.page';
import { FormsDemoPageComponent } from './pages/aui-forms/demo/demo.page';
import { FormsAutocompleteDemoPageComponent } from './pages/aui-forms/autocomplete/autocomplete.page';
import { FormsDatepickerDemoPageComponent } from './pages/aui-forms/datepicker/datepicker.page';
import { FormsRangeSliderDemoPageComponent } from './pages/aui-forms/range-slider/range-slider.page';
import { FormsSearchFilterDemoPageComponent } from './pages/aui-forms/search-filter/search-filter.page';
import { FormsTimepickerDemoPageComponent } from './pages/aui-forms/timepicker/timepicker.page';
import { FormsUploadDemoPageComponent } from './pages/aui-forms/upload/upload.page';
import { LayoutDemoPageComponent } from './pages/aui-layout/demo/demo.page';
import { LayoutFooterDemoPageComponent } from './pages/aui-layout/footer/footer.page';
import { LayoutHeaderDemoPageComponent } from './pages/aui-layout/header/header.page';
import { LayoutModalDemoPageComponent } from './pages/aui-layout/modal/modal.page';
import { UtilsDemoPageComponent } from './pages/aui-utils/demo/demo.page';
import { UtilsFilterDemoPageComponent } from './pages/aui-utils/filter/filter.page';
import { UtilsLabelsDemoPageComponent } from './pages/aui-utils/labels/labels.page';
import { UtilsWindowDemoPageComponent } from './pages/aui-utils/window/window.page';
import { LeafletDemoPageComponent } from './pages/aui-leaflet/aui-leaflet.page';
import { IntervalPageComponent } from './pages/aui-utils/interval/interval.page';
import { NotificationsPageDemoComponent } from './pages/aui-notifications/aui-notifications.page';

export const EXAMPLES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'modules/avatar'
  },
  {
    path: 'modules/avatar',
    component: AvatarDemoPageComponent,
    data: {meta: {title: 'Avatar'}}
  },
  {
    path: 'modules/calendar',
    component: CalendarDemoPage,
    data: {meta: {title: 'Calendar'}}
  },
  {
    path: 'modules/code-snippet',
    component: CodeSnippetDemoPageComponent,
    data: {meta: {title: 'Code Snippets'}}
  },
  {
    path: 'modules/context',
    component: ContextDemoPageComponent,
    data: {meta: {title: 'Context'}}
  },
  {
    path: 'modules/flyout',
    component: FlyoutDemoPage,
    data: {meta: {title: 'Flyout'}}
  },
  {
    component: FormsDemoPageComponent,
    path: 'modules/forms',
    data: {meta: {title: 'Forms'}},
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'autocomplete',
      },
      {
        path: 'autocomplete',
        pathMatch: 'full',
        component: FormsAutocompleteDemoPageComponent,
        data: {meta: {title: 'Autocomplete'}},

      },
      {
        path: 'datepicker',
        pathMatch: 'full',
        component: FormsDatepickerDemoPageComponent,
        data: {meta: {title: 'Datepicker'}},

      },
      {
        path: 'range-slider',
        pathMatch: 'full',
        component: FormsRangeSliderDemoPageComponent,
        data: {meta: {title: 'Range Slider'}},
      },
      {
        path: 'search-filter',
        pathMatch: 'full',
        component: FormsSearchFilterDemoPageComponent,
        data: {meta: {title: 'Search Filter'}},
      },
      {
        path: 'timepicker',
        pathMatch: 'full',
        component: FormsTimepickerDemoPageComponent,
        data: {meta: {title: 'Timepicker'}},
      },
      {
        path: 'upload',
        pathMatch: 'full',
        component: FormsUploadDemoPageComponent,
        data: {meta: {title: 'Upload'}},
      },
    ],
  },
  {
    path: 'modules/icon',
    component: IconDemoPageComponent,
    data: {meta: {title: 'Icon'}}
  },
  {
    component: LayoutDemoPageComponent,
    path: 'modules/layout',
    data: {meta: {title: 'Layout'}},
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'footer',
      },
      {
        path: 'footer',
        pathMatch: 'full',
        component: LayoutFooterDemoPageComponent,
        data: {meta: {title: 'Footer'}},
      },
      {
        path: 'header',
        pathMatch: 'full',
        component: LayoutHeaderDemoPageComponent,
        data: {meta: {title: 'Header'}},
      },
      {
        path: 'modal',
        pathMatch: 'full',
        component: LayoutModalDemoPageComponent,
        data: {meta: {title: 'Modal'}},
      },
    ],
  },
  {
    path: 'modules/leaflet',
    component: LeafletDemoPageComponent,
    data: {meta: {title: 'Leaflet'}}
  },
  {
    path: 'modules/logo',
    component: LogoDemoPageComponent,
    data: {meta: {title: 'Logo'}}
  },
  {
    path: 'modules/notifications',
    component: NotificationsPageDemoComponent,
    data: {meta: {title: 'Notifications'}}
  },
  {
    path: 'modules/pagination',
    component: PaginationDemoPageComponent,
    data: {meta: {title: 'Pagination'}}
  },
  {
    path: 'modules/progress-bar',
    component: ProgressBarDemoPageComponent,
    data: {meta: {title: 'Progress Bar'}}
  },
  {
    path: 'modules/selectable-list',
    component: SelectableListDemoPageComponent,
    data: {meta: {title: 'Selectable List'}}
  },
  {
    path: 'modules/table',
    component: TableDemoPageComponent,
    data: {meta: {title: 'Table'}}
  },
  {
    path: 'modules/user-menu',
    component: UserMenuDemoPageComponent,
    data: {meta: {title: 'User Menu'}}
  },
  {
    component: UtilsDemoPageComponent,
    path: 'modules/utils',
    data: {meta: {title: 'Utils'}},
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'filter',
      },
      {
        path: 'filter',
        pathMatch: 'full',
        component: UtilsFilterDemoPageComponent,
        data: {meta: {title: 'Filter'}},
      },
      {
        path: 'labels',
        pathMatch: 'full',
        component: UtilsLabelsDemoPageComponent,
        data: {meta: {title: 'Labels'}},
      },
      {
        path: 'window',
        pathMatch: 'full',
        component: UtilsWindowDemoPageComponent,
        data: {meta: {title: 'Window'}},
      },
      {
        path: 'interval',
        pathMatch: 'full',
        component: IntervalPageComponent,
        data: {meta: {title: 'Interval'}},
      },
    ],
  },
];
