# @acpaas-ui/labels
The labels module exposes some useful tools to handle (template) labels in isolated components.

## Installation
```
npm install @acpaas-ui/labels
```

Import the `LabelsModule` in **app.module.ts**
```
import { LabelsModule } from '@acpaas-ui/labels';

@NgModule({
    imports: [
        LabelsModule
    ]
})

export class AppModule {}
```

## Usage
The `LabelsModule` exposes 2 pipes, the `interpolate` function and the `Label` & `ReplaceData` type.

### Label (type)

The `Label` type defines a type for labels that can either be a string or an object containing a `singular` and `plural` prop that hold strings for the label depending on a provided count.

```
label = 'some label';

label = {
    singular: 'some label',
    plural: 'some labels'
};
```

### interpolate (function)

The `interpolate` function takes a `Label` and a `ReplaceData` object and returns an interpolated string. It will match `%{}` groups in the label and replace them with the corresponding value found in the replaceMap.

Some examples:
```
interpolate('This is %{happiness} cool!', {
    happiness: 'very'
});
// This is very cool!

interpolate('This is %{happiness} cool!', {
    happiness: 'kinda'
});
// This is kinda cool!

interpolate('This is %{happiness} cool!', {
    happiness: 'not'
});
// This is not cool!
```

You can add as many values to replace as you like.

### InterpolateLabelPipe

The `InterpolateLabel` pipe will run the provided string and optional replaceData through the `interpolate` function.
```
<p>{{ 'This is %{happiness} cool!' | interpolate:{happiness: 'kinda' } }}</p> // textContent will be 'This is kinda cool!'
```

### PluralizeLabelPipe

The `PluralizeLabel` pipe will verify the provided amount and return the singular or plural label found in the provided `Label`.

```
<p>{{ 'this is a label' | pluralize }}</p> // textContent will be 'this is a label'
<p>{{ 'this is a label' | pluralize:3 }}</p> // textContent will be 'this is a label'
<p>{{ { singular: 'this is a label', plural: 'these are some labels' } | pluralize:1 }}</p> // textContent will be 'this is a label'
<p>{{ { singular: 'this is a label', plural: 'these are some labels' } | pluralize:2 }}</p> // textContent will be 'these are some labels'
```

## Handling translations

You can mix the pipes with the translate pipe form either `ngx-translate` or `i18n` by running the label through the `translate` pipe before handing it off to the pipes provided by the `@acpaas-ui/labels` package:

```
<p>{{ 'this is a label with a %{value}' | translate | interpolate:{value: 10} }}</p>


<p>{{ {
        singular: ('this is a label with a value: %{value}' | translate),
        plural: ('this is a label with some values: %{value}' | translate)
      } | interpolate:{value: 10}
}}</p>
```
