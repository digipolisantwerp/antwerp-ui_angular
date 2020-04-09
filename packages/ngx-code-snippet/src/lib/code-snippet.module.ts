import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightJsModule, HighlightJsService} from 'angular2-highlight-js';
import {CodeSnippetComponent} from './components/code-snippet/code-snippet.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightJsModule,
  ],
  declarations: [
    CodeSnippetComponent,
  ],
  providers: [
    HighlightJsService,
  ],
  exports: [
    CodeSnippetComponent,
  ],
})
export class CodeSnippetModule {
}
