# @acpaas-ui/ngx-components/utils

The labels module exposes some useful tools to handle (template) labels in isolated components.

## Usage

```typescript
import { LabelsModule } from '@acpaas-ui/ngx-components/utils'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Examples

```typescript
import { LabelsModule } from '@acpaas-ui/ngx-components/utils';

@NgModule({
    imports: [
        LabelsModule
    ],
})

export class AppModule {};
```

```typescript
import { Label, interpolate } from '@acpaas-ui/ngx-components/utils';
```

#### Interpolate

```typescript
public interpolateValue() {
    const interpolatedValue = interpolate('This is an interpolated %{text}.', {text: 'message'});
    return interpolatedValue;
}
```

```html
{{ interpolateValue() }}
```

#### InterpolateLabelPipe

```typescript
public interpolateMessage = 'This %{text} requires your attention.';

public interpolateString = {
    text: 'message',
};
```

```html
<span [innerHTML]="interpolateMessage | interpolateLabel:interpolateString "></span>
```

#### PluralizeLabelPipe

```typescript
public pluralizeMail: Label = {
    singular: 'This mail requires your attention.',
    plural: 'These mails require your attention.',
};

public remainingMessages = {
    remaining: 0,
};
```

```html
<span [innerHTML]="pluralizeMail | pluralizeLabel:remainingMessages.remaining"></span>
```

#### Combine label pipes

```typescript
public interpolateString = {
    text: 'message',
};

public pluralizeMessage: Label = {
    singular: 'This %{text} requires your attention.',
    plural: 'These %{text}s require your attention.',
};

public remainingMessages = {
    remaining: 0,
};
```

```html
{{ pluralizeMessage | pluralizeLabel:remainingMessages.remaining | interpolateLabel:interpolateString }}
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
