import { Component } from '@angular/core';

@Component({
	templateUrl: './wysiwyg.page.html',
})
export class FormsWysiwygDemoPageComponent {

	public result = '';

	public wysiwygImportExample = `import { WysiwygModule } from '@acpaas-ui/ngx-components/forms';
	@NgModule({
		imports: [
			WysiwygModule,
		]
	});
export class AppModule {};`;

public wysiwygImportExample2 = `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<script src="https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js"></script>
</head>
</html>`;

	public wysiwygExampleHTML1 = `<aui-wysiwyg
	[placeholder]="'Type some richt text here…'"
	[availableTags]="'h2;h3;h4;h5;h6;p'"
	[uiColour]="'#C0C0C0'"
	[debounce]="500"
	(emitContent)="getContent($event)">
</aui-wysiwyg>`;

	public wysiwygTypescript = `public result = '';

public getContent(event) {
	this.result = event;
}`;

	public getContent(event) {
		this.result = event;
	}

}
