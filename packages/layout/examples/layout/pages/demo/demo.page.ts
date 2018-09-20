import { Component } from '@angular/core';
import { ModalService } from '@acpaas-ui/ngx-components/layout';
import { AUIDemoModalComponent } from './demo-modal.component';

@Component({
	templateUrl: './demo.page.html',
})
export class LayoutDemoPageComponent {
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

	constructor(
		private modalService: ModalService
	) {}

	public sidebarItems = [
		{
			href: '/',
			// icon: 'fa-caret-right',
			label: 'Label',
			theme: {
				slug: 'test',
				color: 'black',
				logo: 'https://robohash.org/acpaas-ui',
			},
			// items?: SidebarItem[],
			classList: 'sidebarClass',
		},
	];

	public openModal() {
		this.modalService.openModal(
			AUIDemoModalComponent,
			{
				title: 'Modal',
				text: 'Are you sure you want to see a demo of this modal?',
			}, {
				confirm: () => this.doSomething(),
			}
		);
	}

	private doSomething() {
		return new Promise((resolve, reject) => {
			return resolve();
		});
	}
}
