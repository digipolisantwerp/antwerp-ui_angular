import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { addWeeks } from 'date-fns';

@Component({
  templateUrl: './datepicker.page.html',
})
export class FormsDatepickerDemoPageComponent implements OnInit, OnDestroy {
  public dateForm: UntypedFormGroup;
  public min = new Date();
  public max = addWeeks(new Date(), 2);
  public datepickerImportExample = `import { DatepickerModule } from '@acpaas-ui/ngx-forms';

@NgModule({
	imports: [
		DatepickerModule.forChild([
			'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag',
		], [
			'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December',
		], {
			ERRORS_INVALID_DATE: 'Ongeldige datum',
			ERRORS_INVALID_RANGE: 'Deze datum kan niet gekozen worden',
		}),
	],
})

export class AppModule {};`;
  public datepickerExampleTypescript = `import { FormBuilder, FormGroup } from '@angular/forms';

import { DateRange } from '@acpaas-ui/ngx-utils';
import { addWeeks } from 'date-fns'; // date-fns is an external library and can be replaced by a library of your choice

constructor(private fb: FormBuilder) { }

// Since we only pass through a min date, the past will be disabled
public min = new Date();
public max = addWeeks(new Date(), 2);
public dateForm: FormGroup;

this.dateForm = this.fb.group({
	inputDate: [''],
});`;
  public datepickerExampleHTML = `<form [formGroup]="dateForm">
	<div class="a-input has-icon-right" [ngClass]="{'has-error': dateForm.controls.inputDate.dirty && dateForm.controls.inputDate.invalid}">
		<label class="a-input__label" for="input-datepicker">Pick a date</label>
		<aui-datepicker
			data-id="input-datepicker"
			name="input-datepicker"
			autocomplete="off"
      label="Pick date"
      description="description"
			placeholder="dd/mm/jjjj"
			formControlName="inputDate"
			[min]="min"
			[max]="max">
		</aui-datepicker>
		<div *ngIf="dateForm.controls['inputDate'].errors">
			<p *ngIf="dateForm.controls['inputDate'].errors.format">{{ dateForm.controls['inputDate'].errors.format }}</p>
			<p *ngIf="dateForm.controls['inputDate'].errors.range">{{ dateForm.controls['inputDate'].errors.range }}</p>
		</div>
	</div>
</form>`;
  private destroyed$ = new Subject<boolean>();

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit() {
    this.dateForm = this.fb.group({
      inputDate: [new Date().toISOString()],
      isDisabled: false,
    });

    this.dateForm
      .get('isDisabled')
      .valueChanges.pipe(takeUntil(this.destroyed$))
      .subscribe((isDisabled: boolean) => {
        if (isDisabled) {
          this.dateForm.get('inputDate').disable();
        } else {
          this.dateForm.get('inputDate').enable();
        }
      });
  }

  public ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
