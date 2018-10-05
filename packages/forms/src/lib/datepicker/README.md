# @acpaas-ui/ngx-components/forms
The package creates a custom input component allowing the user to select a date either by input or by picking one in the calendar flyout.

## Dependencies
* `@acpaas-ui/js-date-utils`

## Usage

```typescript
import { DatepickerModule } from '@acpaas-ui/ngx-components/forms'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Flyout module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() id: string;` | - | The id to use on the input field. |
| `@Input() name: string;` | - | The name to use on the input field. |
| `@Input() placeholder: string;` | `'dd/mm/yyyy'`| The placeholder to use on the input field. |
| `@Input() autocomplete: string;` | `'off'` |  Turn the browsers autocompletion on or off. |
| `@Input() range: DateRange;` | - | A range of dates or weekdays to disable (see the [@acpaas-ui/js-date-utils](https://github.com/digipolisantwerp/acpaas-ui_js/blob/master/packages/date-utils/README.md) package for more info on date ranges). |

#### Example

You can provide custom month and weekday labels as wel as error labels via the `forChild` method.
```typescript
import { DatepickerModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    DatepickerModule.forChild([
      'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
    ], [
      'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
    ], {
      ERRORS_INVALID_DATE: 'Ongeldige datum.',
      ERRORS_INVALID_RANGE: 'Deze datum kan niet gekozen worden.',
    }),
  ],
})

export class AppModule {};
```

You can use the component in template driven, as well as reactive forms. The value is always an ISO string of the Date.
In the example below we use a reactive form.
```typescript
import { FormBuilder, FormGroup } from '@angular/forms';

import { DateRange } from '@acpaas-ui/js-date-utils';

constructor(private fb: FormBuilder) { }

public dateRange: DateRange = [5, 6];
public dateForm: FormGroup;

this.dateForm = this.fb.group({
  inputDate: [''],
});
```

```html
<form [formGroup]="dateForm">
  <div class="a-input has-icon-right" [ngClass]="{'has-error': dateForm.controls.inputDate.dirty && dateForm.controls.inputDate.invalid}">
    <label class="a-input__label" for="input-datepicker">Pick a date</label>
    <aui-datepicker
      id="input-datepicker"
      name="input-datepicker"
      autocomplete="off"
      placeholder="dd/mm/jjjj"
      formControlName="inputDate"
      [range]="dateRange">
    </aui-datepicker>
    <div *ngIf="dateForm.controls['inputDate'].errors">
      <p *ngIf="dateForm.controls['inputDate'].errors.format">{{ dateForm.controls['inputDate'].errors.format }}</p>
      <p *ngIf="dateForm.controls['inputDate'].errors.range">{{ dateForm.controls['inputDate'].errors.range }}</p>
    </div>
  </div>
</form>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
