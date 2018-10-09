import { ContextModule } from '@acpaas-ui/ngx-components/context';
import { HeaderModule, FooterModule } from '@acpaas-ui/ngx-components/layout';
import { LogoModule } from '@acpaas-ui/ngx-components/logo';

export const AUIModules = [
	ContextModule.forRoot({
		useTitleSuffix: true,
		extendTitle: true,
		titleDelimiter: ' | ',
		defaults: {
			titleSuffix: 'Context Module',
		},
		routerContext: true,
	}),
	HeaderModule,
	FooterModule,
	LogoModule,
];
