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

	public stuff2: SearchFilterChoice[] = [];

	public searchfilterImportExample = `import { SearchFilterModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
	imports: [
		SearchFilterModule,
	]
});

export class AppModule {};`;

	public searchfilterExampleJS1 = `public stuff: SearchFilterChoice[] = [{
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
	[choices]="stuff">
</aui-search-filter>`;

public searchfilterExampleJS2 = `public stuff: SearchFilterChoice[] = [{
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

	public searchfilterExampleHTML2 = `<aui-search-filter
	id="test"
	name="test"
	[choices]="stuff">
</aui-search-filter>`;

}
