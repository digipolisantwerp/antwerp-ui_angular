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
				dismiss: \`<button aria-label="Dismiss cookie message" tabindex="0" class="a-button a-button--secondary cc-btn cc-dismiss">
					{{dismiss}}
				</button>\`
			},
			window: \`<section role="dialog" aria-live="polite" aria-label="Cookie consent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">
				<!--googleoff: all-->{{children}}<!--googleon: all-->
			</section>\`
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

	constructor(
		private cookieconsentService: CookieconsentService
	) {
		this.cookieconsentService.init({});
	}
}
