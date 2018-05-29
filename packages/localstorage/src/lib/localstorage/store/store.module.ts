import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { LocalstorageReduxPlugin } from './localstorage/localstorage.enhancer';

@NgModule({
	imports: [ NgReduxModule ],
	providers: [ LocalstorageReduxPlugin ],
})
export class LocalstorageStoreModule {}
