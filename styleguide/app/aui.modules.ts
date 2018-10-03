import { ContextModule } from '@acpaas-ui/ngx-components/context/fesm2015/context';
import { HeaderModule, FooterModule } from '@acpaas-ui/ngx-components/layout/fesm2015/layout';
import { LogoModule } from '@acpaas-ui/ngx-components/logo/fesm2015/logo';

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
