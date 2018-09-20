import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})

export class FormsDemoPageComponent {

  public codeExampleJS1 = `import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms'`;
	public codeExampleJS2 = `public selectedValue: string;
public results = [];

public searchHeroes(event) {
	// do search action
  this.results =  [
    {name: 'Batman'},
    {name: 'Wonder Woman'},
    {name: 'Wolverine'},
    {name: 'Iron Man'},
	  {name: 'Deadpool'},
  ];
}`;
	public codeExampleHTML1 = `<aui-auto-complete
  id="id"
  placeholder="Choose your hero…"
  remote="true"
  [(ngModel)]="selectedValue"
  [results]="results"
  searchIncentiveText="Type one or more keywords to start searching…"
  showAllByDefault="true"
  (search)="searchHeroes($event)">
</aui-auto-complete>`;
public selectedValue: string;
public results = [];

public searchHeroes(event) {
	// do search action
		this.results =  [
			{name: 'Batman'},
			{name: 'Wonder Woman'},
			{name: 'Wolverine'},
			{name: 'Iron Man'},
			{name: 'Deadpool'},
	];
}
}
