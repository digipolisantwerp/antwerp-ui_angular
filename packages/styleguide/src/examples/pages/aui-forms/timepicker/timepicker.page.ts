import {Component} from '@angular/core';

@Component({
  templateUrl: './timepicker.page.html',
})
export class FormsTimepickerDemoPageComponent {
  public time1 = '10:30';
  public time2 = '20:30';
  public time3 = '';
  public time4 = '';
  public isDisabled = false;

  public timepickerImportExample = `import { TimepickerModule } from '@acpaas-ui/ngx-forms';
	@NgModule({
		imports: [
			TimepickerModule,
		]
	});
export class AppModule {};`;

  public timepickerExampleTypescript = `public time1 = "10:30";`;

  public timepickerExampleHTML1 = `<div class="a-input">
	<label class="a-input__label" for="timepicker1">Time</label>
	<aui-timepicker
		data-id="timepicker1"
		hoursPlaceholder="HH"
		ariaLabelHours="Hours"
		ariaLabelMinutes="Minutes"
		[(ngModel)]="time1">
	</aui-timepicker>
</div>`;

  public timepickerExampleTypescript2 = `public time2 = "20:30";`;

  public timepickerExampleHTML2 = `<div class="a-input">
	<label class="a-input__label" for="timepicker2">Time</label>
	<aui-timepicker
		data-id="timepicker2"
		hoursPlaceholder="HH"
		ariaLabelHours="Hours"
		ariaLabelMinutes="Minutes"
		size="small"
		[(ngModel)]="time2">
	</aui-timepicker>
</div>`;

  public timepickerExampleHTML3 = `<div class="a-input">
	<label class="a-input__label" for="timepicker3">Time</label>
	<aui-timepicker
		data-id="timepicker3"
		hoursPlaceholder="HH"
		ariaLabelHours="Hours"
		ariaLabelMinutes="Minutes"
		hasError="true"
		size="large"
		[(ngModel)]="time3">
	</aui-timepicker>
</div>`;

  public timepickerExampleHTML4 = `<div class="a-input u-margin-bottom">
	<label class="a-input__label" for="timepicker4">Time</label>
	<aui-timepicker
		data-id="timepicker4"
		hoursPlaceholder="HH"
		ariaLabelHours="Hours"
		ariaLabelMinutes="Minutes"
		[disabled]="isDisabled"
		[(ngModel)]="time4">
	</aui-timepicker>
</div>
<div class="a-input">
	<div class="a-input__checkbox">
		<input type="checkbox" id="isDisabled" [(ngModel)]="isDisabled" />
		<label for="isDisabled">Toggle disabled state</label>
	</div>
</div>`;
}
