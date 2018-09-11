import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { PAGINATION_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/pagination';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES },
	{ path: 'pagination', children: PAGINATION_EXAMPLES_ROUTES },
];
