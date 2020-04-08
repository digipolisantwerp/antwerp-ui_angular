# @acpaas-ui/ngx-user-menu

**UserMenu**

The User Menu component can be used on a webpage to provide visual login and logout buttons.
If logged out, the component displays a single button enabling the user to login.
If logged in, the component provides an avatar button, displaying a flyout where a logout button is featured.

This component uses **content projection** inside it's tag, meaning whatever html is included
between the `aui-user-menu` tag will be inserted in the flyout section. The logout button is displayed
by default but can be disabled if you wish to implement your custom logout button.

Two output events may be used to hook to login or logout functionality to the interface:
- login$: Triggered when user clicks on the login button
- logout$: Triggered when user clicks on the logout button

**You are responsible for providing login and logout functionality, this component only provides visuals.**

## Usage

In your module:

```typescript
import { UserMenuModule } from '@acpaas-ui/ngx-user-menu';

@NgModule({
    imports: [
        UserMenuModule
    ]
})
export class AppModule { }
```

In your template:
```html
<aui-user-menu [user]="userObject" flyoutSize="Medium" [notificationsCount]="100" (logout$)="logoutUser()" (login$)="loginUser()" [translations]="translations">
    <div class="u-margin-lg u-text-center">
        Your Content Here
    </div>
</aui-user-menu>
```

Component inputs:
```typescript
public mockUser: UserMenu.IUser = {
		firstName: 'John',
		lastName: 'Doe',
		avatarUrl: 'https://gravatar.com/avatar/66f865ee03bc019d2f06af6ec0c434ce?s=200'
	};
public translations: UserMenu.ITranslations = {
    login: 'Login',
    logout: 'Logout',
    userAvatar: 'User avatar',
};
public logoutUser(){
    alert('User is logged out!');
}
public loginUser(){
    alert('User is logged in!');
}
```

## Documentation

### Component Inputs

| Input              | Type                     | Required          | Default Value    |
|--------------------|--------------------------|-------------------|------------------|
| user               | UserMenu.IUser           | Yes, if logged in | -                |
| direction          | string: 'right' | 'left' | -                 | 'right'          |
| flyoutSize         | Flyout.EFlyoutSize       | -                 | FlyoutSize.Small |
| notificationsCount | number                   | -                 | -                |
| showLogoutButton   | boolean                  | -                 | true             |
| translations       | UserMenu.ITranslations   | -                 | EN labels        |

### Component Outputs

| Output  | Type               | Required | Default Value |
|---------|--------------------|----------|---------------|
| login$  | EventEmitter<void> | -        | EventEmitter  |
| logout$ | EventEmitter<void> | -        | EventEmitter  |

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

## Contributing

Visit our [Contribution Guidelines](./contribute.md) for more information on how to contribute.
