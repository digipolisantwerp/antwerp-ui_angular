import { Component } from '@angular/core';

@Component({
	templateUrl: './header.page.html',
})
export class LayoutHeaderDemoPageComponent {
	public header1 = `import { HeaderModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		HeaderModule,
	]
});

export class AppModule {};`;

	public header2 = `<aui-header>
	<div auiHeaderContent>
		<div auiHeaderLogo class="o-header__wrapper">
			<aui-logo title="Example" src="https://robohash.org/acpaas-ui"></aui-logo>
			<a class="o-header__link">Example</a>
		</div>
	</div>
	<div auiHeaderMenuItem>
		<a href="http://github.com/digipolisantwerp/acpaas-ui_angular" class="a-button a-button--navigation has-icon-left" target="_blank">
			<i class="fa fa-github"></i>ACPaaS UI on GitHub
		</a>
	</div>
</aui-header>`;
}
