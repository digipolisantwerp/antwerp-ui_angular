import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AUIModules } from './aui.modules';
import { AppRoutingModule } from './app-routing.module';
import { Components } from './components/index';
import { Pages } from './pages/index';

import { AvatarExamplesModule } from '@acpaas-ui/ngx-examples/avatar';

@NgModule({
	declarations: [
		AppComponent,
		Components,
		Pages,
	],
	imports: [
		BrowserModule,
		AUIModules,
		AppRoutingModule,
		AvatarExamplesModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
