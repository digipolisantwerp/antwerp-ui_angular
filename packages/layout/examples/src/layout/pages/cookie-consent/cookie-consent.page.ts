import { Component } from '@angular/core';
import { CookieconsentService } from '@acpaas-ui/ngx-components/layout';

@Component({
	templateUrl: './cookie-consent.page.html',
})
export class LayoutCookieconsentDemoPageComponent {
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
		})
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

	constructor(
		private cookieconsentService: CookieconsentService
	) {
		this.cookieconsentService.init({});
	}
}
