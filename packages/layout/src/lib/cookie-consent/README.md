# @acpaas-ui/ngx-components/layout

The Cookie consent module provides an easy, minimal configuration setup to add a cookie consent to your app, using Insites' [cookie consent package](https://cookieconsent.insites.com).

## Dependencies

- [cookieconsent](https://cookieconsent.insites.com)

## Usage

```typescript
import { CookieconsentModule } from '@acpaas-ui/ngx-components/layout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Methods

| Method         | Description |
| -----------    | -------------------------- |
| `init(config: CookieConsentConfig): void` | Initiate the cookie config (when `autoInit` was set to false). |

The complete `CookieConsentConfig` API is documented on the [Insites documentation page](https://cookieconsent.insites.com/documentation/javascript-api/)/ However, to limit the visual flexibility of the component, some options are disabled. You can still provide the following custom content and cookie options.

#### `autoInit`

Boolean, default set to `true`.

#### `content`

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `message: string;` | `'We make use of cookies to ensure you get the best experience on our website.'` | The main message. |
| `dismiss: string;` | `'OK'` | The dismiss button text. |
| `link: string;` | `'Learn more'` | The text accompanying the href defined above. |
| `href: string;` | `'http://cookiepedia.co.uk/all-about-cookies'` | A *read more* url. |

#### `cookie`

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `name: string;` | `'cookieconsent_status'` | The key that will be used for the cookie. |
| `path: string;` | `'/'` | URL path that the cookie ‘name’ belongs to, the cookie can only be read at this location. |
| `domain: string;` | `''` | The [cookie domain](http://erik.io/blog/2014/03/04/definitive-guide-to-cookie-domains/) that the cookie **name** belongs to, the cookie can only be read on this domain. |
| `expiryDays: number;` | `365` | The amount of days after which the cookie will expire. |

#### `elements`

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `messagelink: string;` | `'<p id="cookieconsent:desc">{{message}} <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank">{{link}}</a></p>'` | The html markup for the cookie consent design |
| `dismiss: string;` | `'<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>'` | The html markup for the dismiss button. If button must have the classes `.cc-btn` and `.cc-dismiss` in order to work properly. |

> Note that since a cookie consent can take many forms, we did not provide a standard design for it. When dismissed a <code>.cc-invisible</code> class will be added. You can use this class to hide it from the user.

As an example, you can use the following SCSS code:

```scss
@import '~@a-ui/core/dist/assets/styles/_quarks';

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
}
```

### Example

```typescript
import { CookieconsentModule } from '@acpaas-ui/ngx-components/layout';

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
                messagelink: `<p id="cookieconsent:desc" class="cc-message">{{message}}
                    <a aria-label="learn more about cookies" tabindex="0" href="{{href}}" target="_blank" class="cc-link">{{link}}</a>
                </p>`,
                dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="a-button cc-btn cc-dismiss">{{dismiss}}</button>'
            }
        })
    ]
});

export class AppModule {};
```

```typescript
import { CookieconsentService } from '@acpaas-ui/ngx-components/layout';

constructor(
    private cookieconsentService: CookieconsentService
) {
    this.cookieconsentService.init({});
}
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
