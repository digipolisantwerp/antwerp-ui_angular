# @acpaas-ui/ngx-components/code-snippet

This module contains a component for displaying a code snippet formatted by highlight.js

## Dependencies
This package is build depending on:

- [hightlight.js](https://highlightjs.org)
- and the [corresponding angular2 npm package](https://www.npmjs.com/package/angular2-highlight-js).
- the [Marker npm package](https://www.npmjs.com/package/marked)

## Usage

```typescript
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Code snippet list modules

#### API

| Name         | Description | Documentations |
| -----------  | ------ | -------------------------- |
| `@Input() codeSnippet: string;` | `-` | Add your code snippet here. |
| `@Input() processMarkdown: boolean;` | `false` | When having some markdown that contains code snippets. |
| `@Input() scrollable: boolean;` | `true` | Boolean for when code snippet should not have a horizontal scrollbar when the code snippet is not wide enough. |

#### Example

##### A single code snippet

```typescript
import { CodeSnippetModule } from '@acpaas-ui/code-snippet';

@NgModule({
    imports: [
        CodeSnippetModule
    ]
})

export class AppModule {}
```
```typescript
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
```html
<aui-code-snippet [codeSnippet]="codeExampleJSON"></aui-code-snippet>
```

##### Multiple code snippets

```typescript
public codeExamples = [this.codeExampleJS, this.codeExampleJSON];
```
```html
<aui-code-snippet
    *ngFor="let codeExample of codeExamples"
    [codeSnippet]="codeExample"
></aui-code-snippet>
```

### Process markdown with code snippets
If you have some markdown that contains code snippets, the component can also deal with that.

*Create a service to get the markdown (this is just an example of getting a local markdown file):*

```typescript
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
```typescript
public mdExample: string;

constructor(
    private contentService: ContentService
) {
    contentService.getMarkdown().subscribe(data => this.mdExample = data);
}
```
```html
<aui-code-snippet
    *ngIf="mdExample"
    [codeSnippet]="mdExample"
    [processMarkdown]="true"
></aui-code-snippet>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
