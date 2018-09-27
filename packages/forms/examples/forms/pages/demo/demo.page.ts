import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class FormsDemoPageComponent {

	public slider3 = {start: 400, end: 500};

	public rangesliderImportExample = `import { RangeSliderModule } from '@acpaas-ui/ngx-components/forms';
import { FormsModule } from '@angular/forms';
	@NgModule({
	  imports: [
			RangeSliderModule,
			FormsModule,
	  ]
	});
export class AppModule {};`;

	public rangesliderExampleHTML1 = `<aui-range-slider></aui-range-slider>`;

	public rangesliderExampleHTML2 = `<aui-range-slider
	step="20"
	labelAfter="%">
</aui-range-slider>`;

public rangesliderExampleTypescript3 = `public slider3 = {start: 400, end: 500};`;

	public rangesliderExampleHTML3 = `<aui-range-slider
	[(ngModel)]="slider3"
	min="300"
	max="600"
	labelBefore="€">
</aui-range-slider>`;

}
