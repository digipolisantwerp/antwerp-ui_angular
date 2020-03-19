import {Component} from '@angular/core';
import {SearchFilterChoice} from '../../../../../../ngx-forms/src/public-api';

@Component({
  templateUrl: './search-filter.page.html',
})
export class FormsSearchFilterDemoPageComponent {

  public stuff: SearchFilterChoice[] = [{
    label: 'First item',
    value: 'one',
  }, {
    label: 'Second item',
    value: 'two',
  }, {
    label: 'Third item',
    value: 'three',
  }, {
    label: 'Fourth item',
    value: 'four',
  }];
  public selectedItems: any[] = [];
  public isDisabled = false;

  public searchfilterImportExample = `import { SearchFilterModule } from '@acpaas-ui/ngx-forms';

@NgModule({
	imports: [
		SearchFilterModule,
	]
});

export class AppModule {};`;

  public searchfilterExampleJS1 = `import { SearchFilterChoice } from '@acpaas-ui/ngx-forms';

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
	labelResults=""
	labelNoResults="Couldn't find stuff!"
	placeholder="Look for stuff"
	inputDelay="0"
	[choices]="stuff"
	[showAllByDefault]="true">
</aui-search-filter>`;

}
