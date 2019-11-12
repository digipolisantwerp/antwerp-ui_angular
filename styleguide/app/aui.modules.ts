import { ContextModule } from '@acpaas-ui/ngx-components/context';
import { HeaderModule, FooterModule } from '@acpaas-ui/ngx-components/layout';
import { LogoModule } from '@acpaas-ui/ngx-components/logo';

export const AUIModules = [
	ContextModule.forRoot({
		defaults: {
			title: 'ACPaaS UI Angular',
			description: 'Angular components for building responsive front-end applications within the ACPaaS platform.',
		},
	}),
	HeaderModule,
	FooterModule,
	LogoModule,
];
