# Analytics Service
This service adds an angular layer on top of the Google Analytics `ga()` function.

## Dependencies
/

## Installation
```
npm install @acpaas-ui/analytics --save
```

Import the Analytics Module in **app.module.ts**
```
import { AnalyticsModule } from '@acpaas-ui/analytics';

@NgModule({
    imports: [
        AnalyticsModule
    ]
})

export class AppModule {}
```

## Usage
### Add the service to the component
```
...
import { GaService } from '@acpaas-ui/analytics';
...
@Component({
    selector: 'home-page',
    styleUrls: ['./home.page.scss'],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
    ...
    constructor(private gaService: GaService) {}
    ...
}
```

### Disable autoTriggerPageView
By default there is a page trigger for each route change. To disable this feature for a specific route, add `doNotTrack: true` property to your route
```
// app-routing.module
{
    path: 'home',
    component: HomePage,
    data: {
        doNotTrack: true
    }
}
```

### Trigger page view
https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
```
// Use default options
this.gaService.triggerPageView();

// Custom options
// title: string, location: string, page: string
this.gaService.triggerPageView('title', 'location', 'page');
```

### Set dimension
https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets
```
this.gaService.setDimension('dimension1', 'the value');
``` 

### Trigger event
https://developers.google.com/analytics/devguides/collection/analyticsjs/events

Trigger an event, parameters category and action are required. Category is mostly the tagname of the element. 
```
category: string, action: string, label?: string, value?: any
this.gaService.triggerEvent('button', 'click');
```

### Trigger event with the GaEventDirective
This directive sends a click event to GA with the tagname of the element as category, click as action, innertext as label and the directive input as value.
```
<!-- Without value -->
<button gaEvent>Switch gender to male with directive</button>

<!-- With value -->
<button [gaEvent]="activeGender">Switch gender to male with directive</button>
```