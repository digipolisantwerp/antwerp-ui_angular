import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { CODE_SNIPPET_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/code-snippet';
import { FORMS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/forms';
import { LOCALSTORAGE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/localstorage';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES },
	{ path: 'code-snippet', children: CODE_SNIPPET_EXAMPLES_ROUTES },
	{ path: 'forms', children: FORMS_EXAMPLES_ROUTES },
	{ path: 'localstorage', children: LOCALSTORAGE_EXAMPLES_ROUTES },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES },
];
