import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar/fesm2015/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar/fesm2015/calendar';
import { FLYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/flyout/fesm2015/flyout';
import { FORMS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/forms/fesm2015/forms';
import { LAYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/layout/fesm2015/layout';
import { LOCALSTORAGE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/localstorage/fesm2015/localstorage';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo/fesm2015/logo';
import { MAP_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/map/fesm2015/map';
import { PAGINATION_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/pagination/fesm2015/pagination';
import { PROGRESS_BAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/progress-bar/fesm2015/progress-bar';
import { SELECTABLE_LIST_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/selectable-list/fesm2015/selectable-list';
import { TABLE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/table/fesm2015/table';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES, title: 'Avatar', },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES, title: 'Calendar', },
	{ path: 'flyout', children: FLYOUT_EXAMPLES_ROUTES, title: 'Flyout', },
	{ path: 'forms', children: FORMS_EXAMPLES_ROUTES, title: 'Forms', },
	{ path: 'layout', children: LAYOUT_EXAMPLES_ROUTES, title: 'Layout', },
	{ path: 'localstorage', children: LOCALSTORAGE_EXAMPLES_ROUTES, title: 'Localstorage', },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES, title: 'Logo', },
	{ path: 'map', children: MAP_EXAMPLES_ROUTES, title: 'Map', },
	{ path: 'pagination', children: PAGINATION_EXAMPLES_ROUTES, title: 'Pagination', },
	{ path: 'progress-bar', children: PROGRESS_BAR_EXAMPLES_ROUTES, title: 'Progress bar', },
	{ path: 'selectable-list', children: SELECTABLE_LIST_EXAMPLES_ROUTES, title: 'Selectable list', },
	{ path: 'table', children: TABLE_EXAMPLES_ROUTES, title: 'Table', },
];
