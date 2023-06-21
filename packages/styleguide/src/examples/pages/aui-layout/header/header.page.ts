import { Component } from '@angular/core';

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
		<aui-logo title="Antwerp logo." src="./assets/a-logo.svg" [link]="'/'"></aui-logo>
	</div>
	<div auiHeaderContent><!-- Optional --></div>
	<div auiHeaderMenuItem>
    <a class="a-button--text o-header__button has-icon-left" href="http://github.com/digipolisantwerp/antwerp-ui_angular">
      <aui-icon name="ai-developer-community-github-1"></aui-icon>GitHub
    </a>
  </div>
</aui-header>
`;
}
