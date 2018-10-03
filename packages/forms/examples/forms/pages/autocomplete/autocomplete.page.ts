import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
	templateUrl: './autocomplete.page.html',
})
export class FormsAutocompleteDemoPageComponent implements OnInit, OnDestroy {

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
