# @acpaas-ui/ngx-utils

The `LabelsModule` exposes `InterpolateLabelPipe`, `PluralizeLabelPipe`, the `interpolate` function and the types `Label` and `ReplaceData` to handle (template) labels in isolated components.

## Usage

```typescript
import { LabelsModule } from '@acpaas-ui/ngx-utils';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Examples

```typescript
import { LabelsModule } from '@acpaas-ui/ngx-utils';

@NgModule({
    imports: [
        LabelsModule
    ],
})

export class AppModule {};
```

```typescript
import { Label, interpolate } from '@acpaas-ui/ngx-utils';
```

#### Interpolate
The `interpolate` function takes a string and a `[key, value]` pair of the type `ReplaceData`. It will match `%{}` groups in the string and replace them with the corresponding value found in the `ReplaceData`. This value can be a string or number.
The returned value is an interpolated string.

```typescript
public interpolateValue() {
    const interpolatedValue = interpolate('This is number %{number} of an interpolated %{text}.', {text: 'message', number: 1});
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

The `PluralizeLabelPipe` will verify the provided amount and return the singular or plural label found in the provided object of the type `Label`.

```typescript
public pluralizeMail: Label = {
    singular: 'This mail requires your attention.',
    plural: 'These mails require your attention.',
};

public get amount() { return this.toggle ? { value: 1 } : { value: 0 }; }

public toggleAmount() { this.toggle = !this.toggle; }
```

```html
<button type="button" class="a-button" (click)="toggleAmount()">Toggle amount</button>

{{ pluralizeMail | pluralizeLabel:amount.value }}
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
    remaining: 3,
};
```

```html
{{ pluralizeMessage | pluralizeLabel:remainingMessages.remaining | interpolateLabel:interpolateString }}
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
