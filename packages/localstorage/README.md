# @acpaas-ui/ngx-components/localstorage

The `acpaas-ui localstorage` service allows you to easily store and retrieve data in and from your browsers storage.

## Usage

```typescript
import { LocalstorageModule } from '@acpaas-ui/ngx-components/localstorage'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Localstorage service

#### Methods

| Method         | Description |
| -----------    | -------------------------- |
| `setItem(key: string, value: any): void` | store an item in the localstorage and update the subscribers (all data is stringified to a JSON string). |
| `getItem<T = any>(key: string): T` | retrieve an item from the localstorage (all data is parsed from a JSON string). |
| `removeItem(key: string): void` | remove an item from the localstorage and update the subscribers. |
| `clear(...args): void` | clear the localstorage. |
| `select<T = any>(selector: Selector, comparator: Comparator = LocalstorageHelper.comparator): BehaviorSubject<T>` | get a BehaviorSubject containing the selected value. |
| `clearSubscribers(): void` | unsubscribe all subscribers. |

#### Storage type

You can set the preferred storage type in the `forRoot` method when importing the `LocalstorageModule`. The service will verify the type exists and fall back to `localStorage` by default. If `localStorage` is not available, an in-memory polyfill will be used.

#### Identifier

You can provide a custom identifier that will be checked on instantiating the `LocalstorageService`. If the identifier found in the storage is different from the config, the storage will be cleared.

This way, you can invalidate your apps storage to prevent data conflicts.

### Example

```typescript
import { LocalstorageModule } from '@acpaas-ui/ngx-components/localstorage';

@NgModule({
    imports: [
        LocalstorageModule.forRoot({
            storageType: 'sessionStorage',
            identifier: 'my-app-v1',
        })
    ]
});

export class AppModule {};
```

```typescript
import { LocalstorageService } from '@acpaas-ui/ngx-components/localstorage';

public user: any;
public item: any;
public timesUsed: any;

constructor(
    private localstorageService: LocalstorageService
) {
    this.user = this.localstorageService.select('user');
    this.timesUsed = 0;
    this.localstorageService.setItem('number', this.timesUsed);
}

public loggedIn(): void {
    this.localstorageService.setItem('user', 'You are logged in');
}

public loggedOut(): void {
    this.localstorageService.setItem('user', 'You are logged out');
}

public init(): void {
    this.localstorageService.removeItem('user');
    this.timesUsed = this.timesUsed + 1;
    this.localstorageService.setItem('number', this.timesUsed);
}

public clear(): void {
    this.localstorageService.clear('user', 'number');
}

public getItem(): any {
    this.item = this.localstorageService.getItem('user');
    this.timesUsed = this.localstorageService.getItem('number');
}
```

```html
<div class="u-margin-bottom">
    <button (click)="loggedIn()" class="a-button u-margin-right">
        Log in
    </button>
    <button (click)="loggedOut()" class="a-button u-margin-right">
        Log out
    </button>
    <button (click)="init()" class="a-button u-margin-right">
        Count clicks
    </button>
</div>
<div class="u-margin-bottom">
    <button (click)="getItem()" class="a-button u-margin-right">
        Get from local storage
    </button>
    <button (click)="clear()" class="a-button">
        Clear local storage
    </button>
</div>
<div class="u-margin-bottom">
    <label class="a-input__label a-input__label--inline">{{ this.item }}</label>
</div>
<div class="u-margin-bottom">
    <label class="a-input__label a-input__label--inline">You clicked the count clicks button this many times: {{ this.timesUsed }}</label>
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
