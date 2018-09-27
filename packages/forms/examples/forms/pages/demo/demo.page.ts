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

	public maskImportExample = `import { MaskModule } from '@acpaas-ui/ngx-components/forms';
		@NgModule({
	  	imports: [
					MaskModule,
			]
		});
export class AppModule {};`;

	public maskExampleHTML1 = `<div class="a-input">
	<input
		type="text"
		placeholder="BE99 9999 9999 9999"
		auiMask="BE99 9999 9999 9999" />
</div>`;

	public time1 = "10:30";
	public time2 = "20:30";
	public time3 = "";

  public timepickerImportExample = `import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';
    @NgModule({
      imports: [
        TimepickerModule,
      ]
    });
export class AppModule {};`;

	public timepickerExampleTypescript = `public time1 = "10:30";`;

  public timepickerExampleHTML1 = `<aui-timepicker
	size="small"
	[(ngModel)]="time1">
</aui-timepicker>`;

  public timepickerExampleTypescript2 = `public time2 = "20:30";`;

  public timepickerExampleHTML2 = `<aui-timepicker
	hoursPlaceholder="20"
	minutesPlaceholder="30"
	size="small"
	[(ngModel)]="time2">
</aui-timepicker>`;

	public timepickerExampleHTML3 = `<aui-timepicker
	hasError="true"
	size="large"
	[(ngModel)]="time3">
</aui-timepicker>`;

}
