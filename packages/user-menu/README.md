# @acpaas-ui/ngx-components/user-menu

**UserMenu**

The User Menu component can be used on a webpage to provide visual login and logout buttons.
If logged out, the component displays a single button enabling the user to login.
If logged in, the component provides an avatar button, displaying a flyout where a logout button is featured.

This component uses **content projection** inside it's tag, meaning whatever html is included
between the `aui-user-menu` tag will be inserted in the flyout section. The logout button is displayed
by default but can be disabled if you wish to implement your custom logout button.

## Usage

```javascript
import `UserMenuModule` from '@acpaas-ui/ngx-components/user-menu'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

## Contributing

Visit our [Contribution Guidelines](./contribute.md) for more information on how to contribute.
