import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { DateRange } from '@acpaas-ui/js-date-utils';

@Component({
	templateUrl: './demo.page.html',
})
export class FormsDemoPageComponent implements OnInit, OnDestroy {

	constructor(private fb: FormBuilder) { }

	// AUTOCOMPLETE DECLARATIONS
	public autocompleteImportExample = `import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    AutoCompleteModule,
  ]
});

export class AppModule {};`;

	public autocompleteExampleJS1 = `public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];
public setSelectedUser(hero): void {
  // do something
}`;

	public autocompleteExampleHTML1 = `<aui-auto-complete
  id="hero-names"
  placeholder="Choose your hero…"
  label="name"
  value=""
  minCharacters = "3"
  clearInvalid="true"
  showAllByDefault="true"
  [data]="heroList"
  (select)="setSelectedHero($event)">
</aui-auto-complete>`;

	public autocompleteExampleJS2 = `public results = [];
public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];

public searchItems(search: string): void {
  // do search
}`;

	public autocompleteExampleHTML2 = `<aui-auto-complete
  id="hero"
  placeholder="Choose your hero…"
  remote="true"
  [results]="results"
  label="name"
  key="id"
  loadingText = "Loading…"
  noResultsText="No results found"
  searchIncentiveText="Type one or more keywords to start searching"
  (search)="searchItems($event)">
</aui-auto-complete>`;

	public results = [];
	public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];
	private debouncer: Subject<string> = new Subject();
	private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

	// RANGESLIDER DECLARATIONS
	public slider3 = {start: 400, end: 500};

	public rangesliderImportExample = `import { RangeSliderModule } from '@acpaas-ui/ngx-components/forms';
import { FormsModule } from '@angular/forms';
	@NgModule({
		imports: [
			RangeSliderModule,
			FormsModule,
		]
	});
export class AppModule {};`;

	public rangesliderExampleHTML1 = `<aui-range-slider></aui-range-slider>`;

	public rangesliderExampleHTML2 = `<aui-range-slider
	step="20"
	labelAfter="%">
</aui-range-slider>`;

  public rangesliderExampleTypescript3 = `public slider3 = {start: 400, end: 500};`;

	public rangesliderExampleHTML3 = `<aui-range-slider
	[(ngModel)]="slider3"
	min="300"
	max="600"
	labelBefore="€">
</aui-range-slider>`;

	// MASK DECLARATIONS
	public maskImportExample = `import { MaskModule } from '@acpaas-ui/ngx-components/forms';
	@NgModule({
		imports: [
				MaskModule,
		]
	});
export class AppModule {};`;

	public maskExampleHTML1 = `<div class="a-input">
	<input
		type="text"
		placeholder="BE99 9999 9999 9999"
		auiMask="BE99 9999 9999 9999" />
</div>`;

	// TIMEPICKER DECLARATIONS
	public time1 = '10:30';
	public time2 = '20:30';
	public time3 = '';

  public timepickerImportExample = `import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';
	@NgModule({
		imports: [
			TimepickerModule,
		]
	});
export class AppModule {};`;

	public timepickerExampleTypescript = `public time1 = "10:30";`;

  public timepickerExampleHTML1 = `<aui-timepicker
	size="small"
	[(ngModel)]="time1">
</aui-timepicker>`;

  public timepickerExampleTypescript2 = `public time2 = "20:30";`;

  public timepickerExampleHTML2 = `<aui-timepicker
	hoursPlaceholder="20"
	minutesPlaceholder="30"
	size="small"
	[(ngModel)]="time2">
</aui-timepicker>`;

	public timepickerExampleHTML3 = `<aui-timepicker
	hasError="true"
	size="large"
	[(ngModel)]="time3">
</aui-timepicker>`;

	// DATEPICKER DECLARATIONS
	public dateRange: DateRange = [
		5, 6,
	];
	public dateForm: FormGroup;

	public datepickerImportExample = `import { DatepickerModule } from '@acpaas-ui/ngx-components/forms';

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

import { DateRange } from '@acpaas-ui/js-date-utils';

constructor(private fb: FormBuilder) { }

public dateRange: DateRange = [
	5, 6,
];
public dateForm: FormGroup;

this.dateForm = this.fb.group({
	inputDate: [''],
});`;
  public datepickerExampleHTML = `<form [formGroup]="dateForm">
	<div class="a-input has-icon-right u-margin-bottom-xs col-md-6 col-xs-12"
	[ngClass]="{'has-error': dateForm.controls.inputDate.dirty && dateForm.controls.inputDate.invalid}">
		<label class="a-input__label" for="input-datepicker">Pick a date</label>
		<aui-datepicker
			id="input-datepicker"
			name="input-datepicker"
			autocomplete="off"
			placeholder="dd/mm/jjjj"
			formControlName="inputDate"
			[range]="dateRange">
		</aui-datepicker>
		<div *ngIf="dateForm.controls['inputDate'].errors" class="u-text-danger u-margin-bottom-xs">
			<p *ngIf="dateForm.controls['inputDate'].errors.format">{{ dateForm.controls['inputDate'].errors.format }}</p>
			<p *ngIf="dateForm.controls['inputDate'].errors.range">{{ dateForm.controls['inputDate'].errors.range }}</p>
		</div>
	</div>
</form>`;

	public ngOnInit() {
		// AUTOCOMPLETE
		this.debouncer.pipe(
			takeUntil(this.componentDestroyed$),
			debounceTime(1000)
			).subscribe((value) => {
				if (!value) {
					this.results = [];
				} else {
					this.results = this.heroList.filter((hero) => {
						return hero.name.indexOf(value) !== -1;
					});
				}
			});
		// DATEPICKER
		this.dateForm = this.fb.group({
			inputDate: [''],
		});
	}

	// AUTOCOMPLETE METHODS
	public ngOnDestroy() {
		this.componentDestroyed$.next(true);
		this.componentDestroyed$.complete();
	}

	public setSelectedHero(hero: string): void {
		// do something
	}

	public searchItems(search: string): void {
		// do search
		this.debouncer.next(search);
	}
}
