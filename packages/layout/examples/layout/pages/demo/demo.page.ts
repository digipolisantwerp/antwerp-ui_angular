import { Component } from '@angular/core';
import { CookieconsentService } from '@acpaas-ui/ngx-components/layout';
import { ModalService } from '@acpaas-ui/ngx-components/layout';
import { AUIDemoModalComponent } from './demo-modal.component';

@Component({
	templateUrl: './demo.page.html',
})
export class LayoutDemoPageComponent {
	public cookie1 = `import { CookieconsentModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		CookieconsentModule.forRoot({
			autoInit: false,
			content: {
				message: 'I am the cookie consent demo. Will you allow my cookies?',
				dismiss: 'Allow cookies',
				link: 'Learn more',
				href: 'http://cookiepedia.co.uk/all-about-cookies'
			},
			cookie: {
				name: 'cookieconsent_demo',
				path: '/',
				domain: '',
				expiryDays: 1
			},
			elements: {
				messagelink: \`<p id="cookieconsent:desc">{{message}}
					<a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a>
				</p>\`,
				dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>'
			}
		}),
	]
});

export class AppModule {};`;
	public cookie2 = `import { CookieconsentService } from '@acpaas-ui/ngx-components/layout';

constructor(
	private cookieconsentService: CookieconsentService
) {
	this.cookieconsentService.init({});
}`;

	public cookie3 = `@import '~@a-ui/core/dist/assets/styles/_quarks';

.cc-banner {
	align-items: baseline;
	background: $white;
	border-top: 1px solid $border-color;
	box-shadow: 0 $spacer / -2 0 rgba($black, .1);
	bottom: 0;
	display: flex;
	flex: 1 1 auto;
	justify-content: space-between;
	left: 0;
	position: fixed;
	right: 0;
	transition: opacity $animation-duration $animation-easing;
	z-index: 10;

	&.cc-invisible {
		opacity: 0;
	}

	> p {
		padding: $spacer / 2;
	}
}`;

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
	public footer1 = `import { FooterModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		FooterModule,
	]
});

export class AppModule {};`;

	public footer2 = `<aui-footer isExtended="false">
	<div class="u-margin-bottom u-margin-top">
		<div auiFooterContent>
			Footer content goes here
		</div>
		<div auiFooterBottom>
			<aui-subfooter>
				<aui-copyright domain="Digipolis"></aui-copyright>
			</aui-subfooter>
		</div>
	</div>
</aui-footer>`;

	public hero1 = `import { HeroModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		HeroModule
	]
});

export class AppModule {};`;

	public hero2 = `<div class="u-margin-bottom u-margin-top">
	<aui-hero>
		<div auiHeroCard>
			<h1>Your app</h1>
			<a>Some link</a>
		</div>
		<div auiHeroCta>
			<div class="buttons">
				<a class="a-button">Home</a>
				<a class="a-button">Another page</a>
			</div>
		</div>
	</aui-hero>
</div>`;

	constructor(
		private cookieconsentService: CookieconsentService,
		private modalService: ModalService
	) {
		this.cookieconsentService.init({});
	}

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
