import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
	templateUrl: './demo.page.html',
})
export class FormsDemoPageComponent implements OnInit, OnDestroy {

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

	public timepickerExampleTypescript = `public time1 = '10:30';`;

  public timepickerExampleHTML1 = `<aui-timepicker
	size="small"
	[(ngModel)]="time1">
</aui-timepicker>`;

	public timepickerExampleTypescript2 = `public time2 = '20:30';`;

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

	// AUTOCOMPLETE METHODS
	public ngOnInit() {
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
	}

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
