import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class ProgressBarDemoPageComponent {

	public uploadProgress = 20;
	public maxValue = 100;

	public codeExampleJS1 = `import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';

@NgModule({
  imports: [
    ProgressBarModule
  ]
});

export class AppModule {};`;

	public codeExampleJS2 = `public uploadProgress = 20;
public maxValue = 100;`;

	public codeExampleHTML =
`<aui-progress-bar
  [value]="uploadProgress"
  [max]="maxValue">
</aui-progress-bar>`;
}
