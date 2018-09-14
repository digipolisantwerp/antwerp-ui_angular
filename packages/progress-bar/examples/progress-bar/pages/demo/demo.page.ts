import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class ProgressBarDemoPageComponent {

	public codeExampleJS = `import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';

@NgModule({
  imports: [
    ProgressBarModule
  ]
});

export class AppModule {};`;

	public codeExampleHTML =
`<aui-progress-bar
	[value]="uploadProgress"
  max="100">
</aui-progress-bar>`;
}
