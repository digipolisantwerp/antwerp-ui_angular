import { StoreEnhancer } from 'redux';
import { NgRedux } from '@angular-redux/store';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import { LocalstorageService } from '../../services/localstorage.service';
import { PropertySelector, PathSelector } from '../../types/localstorage.types';
export declare class LocalstorageReduxPlugin {
    private ngRedux;
    private localstorageService;
    private storeSubscription;
    private subscribers;
    constructor(ngRedux: NgRedux<any>, localstorageService: LocalstorageService);
    enhancer<T = any>(selectors?: Array<PropertySelector | PathSelector>): StoreEnhancer<T>;
    subscribe(selectors?: Array<PropertySelector | PathSelector>): void;
    private subscribeSelector(selector);
    private selectFromState(selectors?);
}
