import {Component} from '@angular/core';

@Component({
  templateUrl: './wysiwyg.page.html',
})
export class FormsWysiwygDemoPageComponent {
  public contents = '<p>Type some rich text here</p>';
  public isDisabled = false;

  public wysiwygImportExample1 = `import { WysiwygModule } from '@acpaas-ui/ngx-forms';
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
	<script src="https://cdn.ckeditor.com/4.13.0/standard-all/ckeditor.js"></script>
</head>
</html>`;

  public wysiwygExampleHTML1 = `<aui-wysiwyg
	[(ngModel)]="contents"
	[debounce]="500"
	[availableTags]="'h2;h3;h4;h5;h6;p'"
	[uiColour]="'#d8d8d8'"
	[disabled]="isDisabled"
	(focus)="onFocus($event)"
	(blur)="onBlur($event)"
	(emitContent)="getContent($event)">
</aui-wysiwyg>`;

  public wysiwygTypescript = `public contents = '<p>Type some rich text here</p>';

public getContent(event) {
	// Do something with 'event';
}`;

  public wysiwygExampleHTML2 = `{
	bodyClass: 'a-input ckeditor-editable-body',
	contentsCss: ['https://cdn.antwerpen.be/core_branding_scss/4.0.0/main.min.css'],
	extraPlugins: 'divarea',
	find_highlight: {
		element: 'span',
		styles: { 'background-color': '#fffc00', color: '#0064b4' },
	},
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
    // Do something with 'event';
  }

  public onFocus(event) {
    // Do something on focus;
  }

  public onBlur(event) {
    // Do something on blur;
  }
}
