import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightService } from './components/code-snippet/code-snippet.service';
import { CodeSnippetComponent } from './components/code-snippet/code-snippet.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CodeSnippetComponent,
  ],
  providers: [
    HighlightService,
  ],
  exports: [
    CodeSnippetComponent,
  ],
})
export class CodeSnippetModule {
}
