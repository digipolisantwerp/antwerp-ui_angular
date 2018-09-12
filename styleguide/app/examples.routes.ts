import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { PAGINATION_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/pagination';
import { SELECTABLE_LIST_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/selectable-list';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES, title: 'Avatar', },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES, title: 'Calendar', },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES, title: 'Logo', },
	{ path: 'pagination', children: PAGINATION_EXAMPLES_ROUTES, title: 'Pagination', },
	{ path: 'selectable-list', children: SELECTABLE_LIST_EXAMPLES_ROUTES, title: 'Selectable list', },
];
