import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    LogoComponent,
  ],
  exports: [
    LogoComponent,
  ],
})
export class LogoModule {
}
