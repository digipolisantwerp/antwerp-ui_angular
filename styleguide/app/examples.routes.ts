import { AGENDA_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/agenda';
import { ANALYTICS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/analytics';
import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { CODE_SNIPPET_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/code-snippet';
import { CONTEXT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/context';
import { FLYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/flyout';
import { FORMS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/forms';
import { LAYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/layout';
import { LOCALSTORAGE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/localstorage';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { MAP_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/map';
import { PAGINATION_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/pagination';
import { PROGRESS_BAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/progress-bar';
import { SELECTABLE_LIST_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/selectable-list';
import { TABLE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/table';
import { UTILS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/utils';

export const EXAMPLES_ROUTES = [
	{ path: 'agenda', children: AGENDA_EXAMPLES_ROUTES, title: 'Agenda', },
	{ path: 'analytics', children: ANALYTICS_EXAMPLES_ROUTES, title: 'Analytics', },
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES, title: 'Avatar', },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES, title: 'Calendar', },
	{ path: 'code-snippet', children: CODE_SNIPPET_EXAMPLES_ROUTES, title: 'Code snippet', },
	{ path: 'context', children: CONTEXT_EXAMPLES_ROUTES, title: 'Context', },
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
	{ path: 'utils', children: UTILS_EXAMPLES_ROUTES, title: 'Utils', },
];
