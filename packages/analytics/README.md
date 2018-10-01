# @acpaas-ui/ngx-components/analytics

This service adds an Angular layer on top of the Google Analytics `ga()` function.

## Usage

```typescript
import { AnalyticsModule } from '@acpaas-ui/ngx-components/analytics'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Analytics service

### Methods

| Method         | Description |
| -----------    | -------------------------- |
| `setDimension(key: string, value: string)` | Send a custom dimension. More info on dimensions and its parameters can be found [in the Google Analytics documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets). |
| `triggerPageView(title?: string, location?: string, page?: string)` | Trigger a page view with optional custom parameters. More info on page tracking and its parameters can be found [in the Google Analytics documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/pages). |
| `triggerEvent(category: string, action: string, label?: string, value?: any)` | Trigger an event with optional custom parameters. Usually the category is the tagname of the element. More info on event tracking and its parameters can be found [in the Google Analytics documentation](https://developers.google.com/analytics/devguides/collection/analyticsjs/events). |

### Example

```typescript
import { AnalyticsModule } from '@acpaas-ui/ngx-components/analytics';

@NgModule({
    imports: [
        AnalyticsModule
    ]
});

export class AppModule {};
```

By default there is a page trigger for each route change. To disable this feature for a specific route, add `doNotTrack: true` to your route's data in `app-routing.module.ts`.

```typescript
{
    path: 'home',
    component: HomePage,
    data: {
        doNotTrack: true
    }
}
```

```typescript
import { GaService } from '@acpaas-ui/ngx-components/analytics';

constructor(
    private gaService: GaService
) {}
```

#### Set dimension

```typescript
this.gaService.setDimension('some-dimension', 'some-value');
```

#### Trigger page view

Use default parameters:

```typescript
this.gaService.triggerPageView();
```

Or use custom parameters:

```typescript
this.gaService.triggerPageView('custom title', 'custom location', 'custom page');
```

#### Trigger event

Trigger an event from the controller:

```typescript
this.gaService.triggerEvent('button', 'click');
```

Or trigger an event from the view with the `gaEvent` directive. This directive sends a click event to GA with the tagname of the element as category, click as action, the inner text as label and the directive input as value.

Trigger event without value:

```html
<button gaEvent>Switch gender to male with directive</button>
```

Trigger event with value:

```html
<button [gaEvent]="activeGender">Switch gender to male with directive</button>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
