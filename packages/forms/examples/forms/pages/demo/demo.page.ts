import { Component } from '@angular/core';
import { NotVoid } from 'lodash';

@Component({
	templateUrl: './demo.page.html',
})

export class FormsDemoPageComponent {

	public AutoCompleteImportExample = `import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    AutoCompleteModule,
  ]
});

export class AppModule {};`;

	public AutoCompleteExampleJS1 = `public selectedHero: string;

public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];
public setSelectedUser(person): void {
  // do something
}`;
	public AutoCompleteExampleHTML1 = `<aui-auto-complete
	id="hero-names"
  placeholder="Choose your hero…"
  [(ngModel)]="selectedHero"
  label="name"
  value=""
  minCharacters = "3"
  clearInvalid="true"
  showAllByDefault="true"
  [data]="heroList"
	(select)="setSelectedHero($event)">
</aui-auto-complete>`;
	public AutoCompleteExampleJS2 = `public selectedValue: string;
public results = [];

public searchHeroes(event): void {
	// do search action
	setTimeout(() => {
		this.results =  [];
	}, 1500);
}`;
	public AutoCompleteExampleHTML2 = `<aui-auto-complete
  id="id"
  placeholder="This will return no results…"
  [(ngModel)]="selectedValue"
  remote="true"
  loadingText = "Loading"
  noResultsText="No results found"
  searchIncentiveText="Type one or more keywords to start searching"
  [results]="results"
  (search)="searchSomething($event)">
</aui-auto-complete>`;

	public selectedHero: string;
	public selectedValue: string;
  public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];
	public results = [];

	public setSelectedHero(person): void {
		// do something
	}

	public searchSomething(event): void {
		// do search action
		setTimeout(() => {
			this.results =  [];
		}, 1500);
	}
}
