import { Component } from '@angular/core';

@Component({
  templateUrl: './range-slider.page.html',
})
export class FormsRangeSliderDemoPageComponent {
  public mySlider = { start: 400, end: 500 };

  public rangesliderImportExample = `import { RangeSliderModule } from '@acpaas-ui/ngx-forms';
import { FormsModule } from '@angular/forms';
	@NgModule({
		imports: [
			RangeSliderModule,
			FormsModule,
		]
	});
export class AppModule {};`;

  public rangesliderExampleHTML1 = `<aui-range-slider label="Basic"></aui-range-slider>`;

  public rangesliderExampleHTML2 = `<aui-range-slider
	label="Change in increments of 20"
	step="20"
	labelAfter="%">
</aui-range-slider>`;

  public rangesliderExampleTypescript3 = `public mySlider = {start: 400, end: 500};`;

  public rangesliderExampleHTML3 = `<aui-range-slider
	label="Min/max"
	[(ngModel)]="mySlider"
	min="300"
	max="600"
	labelBefore="€">
</aui-range-slider>`;

  public isDisabled = false;
  public disabledSlider = { start: 350, end: 450 };
  public range = { start: 40 };
}
