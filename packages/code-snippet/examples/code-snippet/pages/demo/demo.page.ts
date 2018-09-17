import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class CodeSnippetDemoPageComponent {

	public codeExampleJS1 = `
import { CodeSnippetModule } from \'@acpaas-ui/ngx-components/code-snippet\';

@NgModule({
    imports: [
        CodeSnippetModule
    ]
})

export class AppModule {}`;

	public codeExampleHTML1 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <h4><aui-code-snippet [codeSnippet]="'Single text example'"></aui-code-snippet></h4>
    </div>
</div>`;

	public html2 = `public codeExampleJSON = [
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
];`;

	public html3 = `public codeExampleJS =
function greetMe(yourName) {
    alert('Hello ' + yourName);
}
greetMe('World');`;


	public example1 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="'codeExample JS'"></aui-code-snippet>
    </div>
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>`;

	public example2 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="'codeExample JS'"></aui-code-snippet>
    </div>
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>`;

	public example3 = `<div class="u-margin-bottom">
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="'codeExample JS'"></aui-code-snippet>
    </div>
    <aui-code-snippet [codeSnippet]="example3"></aui-code-snippet>
    <div class="u-margin-bottom-xs">
        <aui-code-snippet [codeSnippet]="codeExampleJS"></aui-code-snippet>
    </div>
</div>`;

public codeExampleJSON = `[
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

}
