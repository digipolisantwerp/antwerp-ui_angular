import { Component } from '@angular/core';
import { SearchFilterChoice } from '@acpaas-ui/ngx-components/forms';

@Component({
	templateUrl: './search-filter.page.html',
})
export class FormsSearchFilterDemoPageComponent {

	public stuff: SearchFilterChoice[] = [{
		label: "First item",
		value: "one",
	}, {
		label: "Second item",
		value: "two",
	}, {
		label: "Third item",
		value: "three",
	}, {
		label: "Fourth item",
		value: "four",
	}];

	public searchfilterImportExample = `import { SearchFilterModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
	imports: [
		SearchFilterModule,
	]
});

export class AppModule {};`;

	public searchfilterExampleJS1 = `import { SearchFilterChoice } from '@acpaas-ui/ngx-components/forms';

	public stuff: SearchFilterChoice[] = [{
		label: "First item",
		value: "one",
	}, {
		label: "Second item",
		value: "two",
	}, {
		label: "Third item",
		value: "three",
	}, {
		label: "Fourth item",
		value: "four",
}];`;

	public searchfilterExampleHTML1 = `<aui-search-filter
	id="test"
	name="test"
	label="Find stuff"
	labelDeselect="Clear stuff"
	labelResults="Found stuff"
	labelNoResults="Couldn't find stuff!"
	placeholder="Look for stuff"
	inputDelay="0"
	[choices]="stuff"
	[showAllByDefault]="true">
</aui-search-filter>`;

}
