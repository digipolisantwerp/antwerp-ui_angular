import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    templateUrl: './demo.page.html',
})
export class FormsDemoPageComponent {

	public time1 = "";
	public time2 = "";
	public time3 = "";

    public timepickerImportExample = `import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';
    @NgModule({
      imports: [
        TimepickerModule,
      ]
    });
export class AppModule {};`;

    public timepickerExampleHTML1 = `<aui-timepicker
	size="small"
	[(ngModel)]="time1">
</aui-timepicker>`;

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
