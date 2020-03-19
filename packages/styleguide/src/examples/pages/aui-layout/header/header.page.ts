import {Component} from '@angular/core';

@Component({
  templateUrl: './header.page.html',
})
export class LayoutHeaderDemoPageComponent {
  public header1 = `import { HeaderModule } from '@acpaas-ui/ngx-layout';

@NgModule({
	imports: [
		HeaderModule,
	]
});

export class AppModule {};`;

  public header2 = `<aui-header>
	<div auiHeaderLogo>
		<aui-logo title="ACPaaS UI logo." src="./assets/acpaas-ui-logo.svg" [link]="'/'"></aui-logo>
	</div>
	<div auiHeaderContent><!-- Optional --></div>
	<div auiHeaderMenuItem>
		<a href="http://github.com/digipolisantwerp/acpaas-ui_angular" class="a-button-negative o-header__button has-icon-left">
			<span class="fa fa-github"></span>GitHub
		</a>
	</div>
</aui-header>
`;
}
