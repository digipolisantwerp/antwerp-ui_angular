import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CookieconsentService} from '../../../../../../ngx-layout/src/public-api';

@Component({
  templateUrl: './cookie-consent.page.html',
})
export class LayoutCookieconsentDemoPageComponent implements OnInit {
  @ViewChild('cookieConsent', {static: true}) cookieConsent: ElementRef;

  public cookie1 = `import { CookieconsentModule } from '@acpaas-ui/ngx-layout';

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
			window: \`<section role="dialog" aria-live="polite" aria-label="Cookie consent"
			aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">
				<!--googleoff: all-->{{children}}<!--googleon: all-->
			</section>\`
		})
	]
});

export class AppModule {};`;
  public cookie2 = `import { CookieconsentService } from '@acpaas-ui/ngx-layout';

@ViewChild('cookieConsent') cookieConsent: ElementRef;

constructor(
	private cookieconsentService: CookieconsentService
) { }

public ngOnInit() {
	// You can also initialize the cookie consent without defining a container.
	// It will attach itself then as first element in the DOM.
	this.cookieconsentService.init({container: this.cookieConsent.nativeElement});
}`;

  public cookie3 = `// It's better to use a container in order to meet WCAG 2.1 AA.
// Otherwise the cookie consent will attach itself as first element in the DOM.'
<div #cookieConsent></div>`;

  constructor(
    private cookieconsentService: CookieconsentService
  ) {
  }

  public ngOnInit() {
    this.cookieconsentService.init({container: this.cookieConsent.nativeElement});
  }
}
