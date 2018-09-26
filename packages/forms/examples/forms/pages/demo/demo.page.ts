import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class FormsDemoPageComponent {

	public slider3 = {start: 400, end: 500};

	public rangesliderImportExample = `import { RangeSliderModule } from '@acpaas-ui/ngx-components/forms';
	@NgModule({
	  imports: [
		RangeSliderModule,
	  ]
	});
	export class AppModule {};`;

	public rangesliderExampleHTML1 = `<aui-range-slider></aui-range-slider>`;

	public rangesliderExampleHTML2 = `<aui-range-slider
	  step="20">
	</aui-range-slider>`;

	public rangesliderExampleJS3 = `public selectedValue: string;
	public results = [];
	public searchHeroes(event): void {
		// do search action
		setTimeout(() => {
			this.results =  [];
		}, 1500);
	}`;
	public rangesliderExampleHTML3 = `<aui-auto-complete
	  id="id"
	  placeholder="This will return no results…"
	  [(ngModel)]="selectedValue"
	  remote="true"
	  loadingText="Loading"
	  noResultsText="No results found"
	  searchIncentiveText="Type one or more keywords to start searching"
	  [results]="results"
	  (search)="searchSomething($event)">
	</aui-auto-complete>`;

}
