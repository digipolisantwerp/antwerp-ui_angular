import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  templateUrl: './autocomplete.page.html',
})
export class FormsAutocompleteDemoPageComponent implements OnInit, OnDestroy {

  public autocompleteImportExample = `import { AutoCompleteModule } from '@acpaas-ui/ngx-forms';

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
	// Do something
}`;

  public autocompleteExampleHTML1 = `<div class="a-input">
	<label class="a-input__label" for="hero-names">Hero</label>
	<div class="a-input__wrapper">
		<aui-auto-complete
			data-id="hero-names"
			placeholder="Choose your hero…"
			label="name"
			value=""
			minCharacters = "3"
			clearInvalid="true"
			showAllByDefault="true"
			[data]="heroList"
			(select)="setSelectedItem($event)">
		</aui-auto-complete>
	</div>
</div>`;

  public autocompleteExampleJS2 = `public results = [];
public heroList = [
	{name: 'Batman'},
	{name: 'Wonder Woman'},
	{name: 'Wolverine'},
	{name: 'Iron Man'},
	{name: 'Deadpool'},
];
public searchValue = '';
public selectedItem = '';

public searchItems(search: string): void {
	this.searchValue = search;
	// Do search
	this.debouncer.next(search);
}

public setSelectedItem(hero: {name}): void {
	this.selectedItem = hero;
}

public formatLabel(input: any) {
	const inputString = input.name;

	if (!this.searchValue) {
		return inputString;
	}

	// Highlight searchValue in result
	const regEx = new RegExp(this.searchValue, 'ig');
	const inputStringHighlighted = (inputString.replace(regEx, '<strong>' + this.searchValue + '</strong>'));
	return \`<span class="fa fa-user u-text-light u-margin-right-xs"></span>\${inputStringHighlighted}\`;
}`;

  public autocompleteExampleHTML2 = `<div class="a-input">
	<label class="a-input__label" for="hero">Hero</label>
	<div class="a-input__wrapper">
		<aui-auto-complete
			data-id="hero"
			placeholder="Choose your hero…"
			remote="true"
			[results]="results"
			label="name"
			key="id"
			loadingText = "Loading…"
			noResultsText="No results found"
			searchIncentiveText="Type one or more keywords to start searching"
			(search)="searchItems($event)"
			(select)="setSelectedItem($event)">
			<ng-template let-item >
				<div class="has-icon-left" [innerHTML]="formatLabel(item)"></div>
			</ng-template>
		</aui-auto-complete>
	</div>
</div>`;

  public results = [];
  public heroList = [
    {name: 'Batman'},
    {name: 'Wonder Woman'},
    {name: 'Wolverine'},
    {name: 'Iron Man'},
    {name: 'Deadpool'},
  ];
  public disabledModel = 'Batman';
  public isDisabled = true;
  public searchValue = '';
  public selectedItem1 = '-';
  public selectedItem2 = '-';
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
          return hero.name.localeCompare(value, 'en', {sensitivity: 'base'});
        });
      }
    });
  }

  public ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }

  public searchItems(search: string): void {
    this.searchValue = search;
    // Do search
    this.debouncer.next(search);
  }

  public setSelectedItem1(hero: any): void {
    this.selectedItem1 = (!!hero && !!hero.name) ? hero.name : '-';
  }

  public setSelectedItem2(hero: any): void {
    this.selectedItem2 = (!!hero && !!hero.name) ? hero.name : '-';
  }

  public formatLabel(input: any) {
    const inputString = input.name;

    if (!this.searchValue) {
      return inputString;
    }

    // Highlight searchValue in result
    const regEx = new RegExp(this.searchValue, 'ig');
    const inputStringHighlighted = (inputString.replace(regEx, '<strong>' + this.searchValue + '</strong>'));
    return `<span class="fa fa-user u-text-light u-margin-right-xs"></span>${inputStringHighlighted}`;
  }
}
