import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { Selector, Comparator, LocalstorageConfig } from '../types/localstorage.types';
export declare class LocalstorageService {
    private localstorageConfig;
    private $window;
    static instance: LocalstorageService;
    instance: LocalstorageService;
    storageType: string;
    identifier: string;
    private storage;
    private subscribers;
    constructor(localstorageConfig: any, $window: any);
    setStorage({storageType, identifier}?: LocalstorageConfig): void;
    /**
     * Browser Storage api
     */
    setItem(key: string, value: any): void;
    getItem<T = any>(key: string): T;
    removeItem(key: string): void;
    clear(...args: any[]): void;
    /**
     * Decorator api
     */
    select<T = any>(selector: Selector, comparator?: Comparator): BehaviorSubject<T>;
    clearSubscribers(): void;
    getStorageSnapshot<T = any>(): T;
    addSubscriber<T = any>(selector: Selector): BehaviorSubject<T>;
    private validateStorage();
    private getChildSubscription<T>(selector, parentSubscription);
    private updateSubscribers(key?);
    private verifyStorageType(storageType?, defaultValue?);
}
