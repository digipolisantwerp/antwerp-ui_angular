import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})

export class FormsDemoPageComponent {

  public codeExampleJS1 = `import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms'`;
  public codeExampleHTML1 = `<aui-auto-complete
  placeholder="Choose your hero…"
  remote="true"
  [results]="heroes"
  label="name"
  key="id"
  (search)="searchItems($event)">
</aui-auto-complete>`;

	public heroes = [
			{
					name: 'Batman',
			},
			{
					name: 'Wonder Woman',
			},
			{
					name: 'Wolverine',
			},
			{
					name: 'Iron Man',
			},
			{
					name: 'Deadpool',
			},
	];

	public searchItems(event) { }
}
