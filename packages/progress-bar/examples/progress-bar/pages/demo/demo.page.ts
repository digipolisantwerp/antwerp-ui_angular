import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class ProgressBarDemoPageComponent {

	public codeExampleHTML =
`<aui-progress-bar
	[value]="uploadProgress"
  max="100">
</aui-progress-bar>`;
}
