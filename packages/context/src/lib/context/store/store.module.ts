import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';

import { ContextActionCreator } from './context';

@NgModule({
	imports: [ NgReduxModule ],
	providers: [ ContextActionCreator ],
})
export class ContextStoreModule {
	constructor(
		contextActions: ContextActionCreator // make sure the actioncreator is subscribed to the service
	) {}
}
