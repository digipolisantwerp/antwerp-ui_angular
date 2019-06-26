import { Component } from '@angular/core';

@Component({
	templateUrl: './wysiwyg.page.html',
})
export class FormsWysiwygDemoPageComponent {
	public contents = '';
	public isDisabled = false;

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
	[placeholder]="'Type some rich text here…'"
	[availableTags]="'h2;h3;h4;h5;h6;p'"
	[uiColour]="'#C0C0C0'"
	[debounce]="500"
	(emitContent)="getContent($event)">
</aui-wysiwyg>`;

	public wysiwygTypescript = `public contents = ''

public getContent(event) {
	this.contents = event;
}`;

	public wysiwygExampleHTML2 = `{
	bodyClass: 'a-input ckeditor-editable-body',
	contentsCss: ['https://cdn.antwerpen.be/core_branding_scss/3.2.2/main.min.css'],
	format_tags: 'p;h1;h2;h3;h4;h5;h6',
	toolbar_Basic: [
		[ 'Bold', 'Italic', 'Underline', '-', 'Format', '-', 'Source' ],
	],
	removeButtons: 'Styles',
	removePlugins: 'about',
	toolbar: null,
	uiColor: '#d8d8d8',
}`;

	public wysiwygExampleHTML3 = `<aui-wysiwyg
	[customConfig]="myCustomConfig">
</aui-wysiwyg>`;

	public getContent(event) {
		this.contents = event;
	}
}
