import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class CodeSnippetDemoPageComponent {
	public codeExampleJSON = `
	[
	    {
	        "title": "apples",
	        "count": [12000, 20000],
	        "description": {"text": "...", "sensitive": false}
	    },
	    {
	        "title": "oranges",
	        "count": [17500, null],
	        "description": {"text": "...", "sensitive": false}
	    }
	]`;

	public codeExampleJS = `
	function greetMe(yourName) {
        alert('Hello ' + yourName);
    }
	greetMe('World');`;

	public importModule = 'import { CodeSnippetModule } from \'@acpaas-ui/ngx-components/code-snippet\';';
	public example1 = '<aui-code-snippet [codeSnippet]="Single text example"></aui-code-snippet>';
	public example2 = '<aui-code-snippet [codeSnippet]="codeExampleJSON"></aui-code-snippet>';
	public example3 = '<aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>';
}
