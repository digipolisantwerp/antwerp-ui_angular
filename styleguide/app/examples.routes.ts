import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { FLYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/flyout';
import { FORMS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/forms';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { PROGRESS_BAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/progress-bar';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES },
	{ path: 'flyout', children: FLYOUT_EXAMPLES_ROUTES },
	{ path: 'forms', children: FORMS_EXAMPLES_ROUTES },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES },
	{ path: 'progress-bar', children: PROGRESS_BAR_EXAMPLES_ROUTES },
];
