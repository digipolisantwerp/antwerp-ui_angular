# @acpaas-ui/ngx-components/code-snippet

This module contains a component for displaying a code snippet formatted by highlight.js

## Dependencies
This package is build depending on:

- [hightlight.js](https://highlightjs.org)
- and the [corresponding angular2 npm package](https://www.npmjs.com/package/angular2-highlight-js).
- the [Marker npm package](https://www.npmjs.com/package/marked)

*If you were to link this component locally, perform an `npm install` for the above npm packages in your app first.*

### Highlight.js CDN's
Add the following CDN's to your project:

- `<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-light.min.css">`
- `<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js"></script>`

You can also add additional languages if that's needed:

- `<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/languages/typescript.min.js"></script>`
- `<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/languages/scss.min.js"></script>`
- ...

An overview of all CDN links can be found [here](https://cdnjs.com/libraries/highlight.js/)

## Usage

```javascript
import 'CodeSnippetModule' from '@acpaas-ui/ngx-components/code-snippet'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Code-snippet list modules

### API

| Name         | Description | Documentations |
| -----------  | ------ | -------------------------- |
| `@Input() codeSnippet: string;` | `''` | Add your code-snippet here. |
| `@Input() processMarkdown: boolean;` | `false` | When having some Markdown that contains code snippets. |
| `@Input() scrollable: boolean;` | `true` | Boolean for when code-snippet should not have a horizontal scrollbar when the code-snippet is not wide enough. |

#### Example

##### A single code snippet

```
import { CodeSnippetModule } from '@acpaas-ui/code-snippet';

@NgModule({
    imports: [
        CodeSnippetModule
    ]
})

export class AppModule {}
```
```
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
```
```
<aui-code-snippet [codeSnippet]="codeExampleJSON"></aui-code-snippet>
```

##### Multiple code snippets

```
public codeExamples = [this.codeExampleJS, this.codeExampleJSON];
```
```
<aui-code-snippet
	*ngFor="let codeExample of codeExamples"
	[codeSnippet]="codeExample"
></aui-code-snippet>
```

### Process Markdown with code snippets
If you have some Markdown that contains code snippets, the component can also deal with that.

*Create a service to get the markdown (this is just an example of getting a local markdown file):*

```
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {
    constructor(
        private http: Http
    ) {}

    getMarkdown(): any {
        return this.http.get('/example.md')
        .map((res) => res.text());
    }
}
```
```
public mdExample: string;

constructor(
    private contentService: ContentService
) {
    contentService.getMarkdown().subscribe(data => this.mdExample = data);
}
```
```
<aui-code-snippet
    *ngIf="mdExample"
    [codeSnippet]="mdExample"
    [processMarkdown]="true"
></aui-code-snippet>

```

## Options

#### processMarkdown

`boolean`: `false` by default but if you need to include some Markdown containing a code snippet, you can set it to `true` and just add the content of the markdown file to `[codeSnippet]`.

#### scrollable

`boolean`: `true` by default. Change to option to false if the code-snippet should not have a horizontal scrollbar when the code-snippet is not wide enough.

## Contributing

Visit our [Contribution Guidelines](./contribute.md) for more information on how to contribute.
