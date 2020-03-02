import {NgModule} from '@angular/core';
import {FooterModule} from '../../../aui-layout/src/lib/footer';
import {LogoModule} from '../../../aui-logo/src/lib';
import {HeaderModule} from '../../../aui-layout/src/lib/header';
import {NavigationMenuModule} from '../../../aui-navigation-menu/src/lib/navigation-menu';
import {CodeSnippetModule} from '../../../aui-code-snippet/src/lib/code-snippet';

@NgModule({
  imports: [
    FooterModule,
    LogoModule,
    HeaderModule,
    CodeSnippetModule,
    NavigationMenuModule.configure(),
  ],
  exports: [
    FooterModule,
    CodeSnippetModule,
    LogoModule,
    NavigationMenuModule,
    HeaderModule
  ]
})
export class AuiModule {

}
