# @acpaas-ui/progress-bar
This module provides a progress bar with a max value.

## Installation
```
npm install @acpaas-ui/progress-bar
```

Import component in **app.module.ts**
```
import { ProgressBarModule } from '@acpaas-ui/progress-bar';

@NgModule({
    imports: [
        ProgressBarModule
    ]
})

export class AppModule {}
```

## Usage
```
<aui-progress-bar [value]="uploadProgress" max="100"></aui-progress-bar>
````

### Options

#### value
`number`: the current value of the progress

#### max
`number`: the value when the progress is completed
