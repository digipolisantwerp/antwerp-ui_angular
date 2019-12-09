import { NgModule } from '@angular/core';
import { UserMenuDemoPageComponent } from './pages/demo/demo.page';
import { UserMenuModule } from '@acpaas-ui/ngx-components/user-menu';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

@NgModule({
	declarations: [
		UserMenuDemoPageComponent,
	],
	imports: [
		UserMenuModule,
		CodeSnippetModule,
	],
})
export class UserMenuExamplesModule {

}
