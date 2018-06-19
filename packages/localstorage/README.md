# Localstorage Service
The `@acpaas-ui/localstorage` package allows you to easily store and retrieve data in and from your browsers storage. You can choose between different storage types and retrieve slices of the storage as observables with the `@storage` decorator. On top of that, you can easily sync your redux app state with the browser storage using the provided enhancer in the `LocalstorageStoreModule`.

## Installation
```
npm install @acpaas-ui/localstorage --save
```

Import the Localstorage Module in **app.module.ts** and provide a config (optional):
```
import { LocalstorageModule } from '@acpaas-ui/localstorage';

@NgModule({
    imports: [
        LocalstorageModule.forRoot({
            storageType: 'sessionStorage',
            identifier: 'my-app-v1,
        })
    ]
})

export class AppModule {}
```

## Usage

### Storage type

You can set the preferred storage type in the `forRoot` method when importing the `LocalstorageModule`. The service will verify the type exists and fall back to `localStorage` by default. If `localStorage` is not available, an in-memory polyfill will be used.

### Identifier

You can provide a custom identifier that will be checked on instantiating the `LocalstorageService`. If the identifier found in the storage is different from the config, the storage will be cleared.

This way, you can invalidate your apps storage to prevent data conflicts.

### LocalstorageService

**Browser Storage API**

* `setItem(key, value)`: store an item in the localstorage and update the subscribers (all data is stringified to a JSON string)
* `getItem(key)`: retrieve an item from the localstorage (all data is parsed from a JSON string)
* `removeItem(key)`: remove an item from the localstorage and update the subscribers
* `clear()`: clear the localstorage

**Decorator API**
* `select(selector, comparator)`: get a behaviorsubject containing the selected value
    * selector can be of type: string|number, (string|number)[], Function
    * comparator will be run in the `distinctUntilChanged` callback (meaning it will only update if the returned value is `false`)
* `clearSubscribers()`: unsubscribe all subscribers

**Usage**
```
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalstorageService } from '@acpaas-ui/localstorage';

interface IUser = {
    username: string;
}

@Component({
    selector: 'my-component',
    template: '...',
    providers: [ LocalstorageService ]
})
export class MyComponent {
    public user$: BehaviorSubject<IUser>;

    constructor(
        private localstorageService: LocalstorageService
    ) {
        this.user$ = this.localstorageService.select('user');
    }

    getUser(): IUser {
        this.localstorageService.getItem('user');
    }

    loggedIn(user: IUser): void {
        this.localstorageService.setItem('user', user);
    }

    loggedOut(): void {
        this.localstorageService.removeItem('user');
    }
}
```

### Storage Decorator

To retrieve data from the storage a bit easier, you can use the `storage` decorator:

```
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { storage, LocalstorageService } from '@acpaas-ui/localstorage';

interface IUser = {
    username: string;
}

@Component({
    selector: 'my-component',
    template: '...',
    providers: [ LocalstorageService ]
})
export class MyComponent {
    @storage() user$: BehaviorSubject<IUser>;

    constructor(
        private localstorageService: LocalstorageService
    ) {}

    getUser(): IUser {
        this.localstorageService.getItem('user');
    }

    loggedIn(user: IUser): void {
        this.localstorageService.setItem('user', user);
    }

    loggedOut(): void {
        this.localstorageService.removeItem('user');
    }
}
```

You can select data from the storage using different **selectors** (see `Selector` type):

```
@select() user$: BehaviorSubject<IUser>; // select 'user' from the storage
@select('user') user$: BehaviorSubject<IUser>; // identical, works for numbers as well

@select(['user', 'username']) username$: BehaviorSubject<string>; // select only the username from the store

@select(storage => storage.user.email) email$: BehaviorSubject<string>; // select by using a custom callback (note: this is triggered every time the storage changes)
```

By providing a custom comparator function, you can choose when the `BehaviorSubject` should be updated. By default, a deep compare will determine wether an update is necessary.

The following example will only update the user if the username has changed. Changing other properties on the user will have no effect:
```
@select('user', (prevValue, nextValue) => prevValue.username === nextValue.username)) user$: BehaviorSubject<IUser>;
```

### LocalstorageReduxPlugin

If you are working with the `@angular-redux/store` package, you can use the enhancer provided in the `LocalstorageStoreModule` to keep your app state in sync with the browser storage.

Simply include the module:
```
import { LocalstorageModule, LocalstorageStoreModule } from '@acpaas-ui/localstorage';

@NgModule({
    imports: [
        LocalstorageModule.forRoot({
            storageType: 'sessionStorage'
        }),
        LocalstorageStoreModule
    ]
})
```
and add the enhancer when configuring your store:
```
export class AppModule {
    constructor(
        private ngRedux: NgRedux<any>,
        private localstorageReduxPlugin: LocalstorageReduxPlugin
    ) {
        const enhancers = [localstorageReduxPlugin.enhancer(), ...enhancers];

        this.ngredux.configureStore(rootReducer, initialState, [...middleware], enhancers);
    }
}
```
**Usage**
If you provide no selectors, the enhancer will keep track of the entire app state and store it in the selected storage as `reduxState`. You can however choose which parts of the state to store by providing some property and path `selectors`:

```
localstorageReduxPlugin.enhancer([
    'users',
    ['user', 'likes', 'comments']
]);
```

The selectors will be stored in the state as flattened keys:
```
{
    'users',
    'users.likes.comments'
}
```
and will be kept in sync when updating the state or vice versa when refreshing the page.

## Web Storage support

Different browsers have different implementations of the Web Storage API when using private mode. There are also still a few ([very few](http://caniuse.com/#search=localstorage)) browser that have no localstorage support.

An in-memory polyfill is included to mimick the Web Storage API when it is not available.