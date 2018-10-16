# @acpaas-ui/ngx-components/utils

The `LabelsModule` exposes 2 pipes, the `interpolate` function and the `Label` & `ReplaceData` type to handle (template) labels in isolated components.

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
The `interpolate` function takes a label and a `ReplaceData` object and returns an interpolated string. It will match `%{}` groups in the label and replace them with the corresponding value found in the `ReplaceData`.

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
The `InterpolateLabelPipe` will run the provided string and optional `ReplaceData` through the `interpolate` function.

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

The `PluralizeLabelPipe` will verify the provided amount and return the singular or plural label found in the provided `Label`.

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
