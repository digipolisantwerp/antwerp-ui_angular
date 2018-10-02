import { Component } from '@angular/core';

@Component({
	templateUrl: './timepicker.page.html',
})
export class FormsTimepickerDemoPageComponent {
	public time1 = '10:30';
	public time2 = '20:30';
	public time3 = '';

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
