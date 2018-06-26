import { PathSelector, Selector } from './types/localstorage.types';
export declare class LocalstorageHelper {
    static comparator: (value: any, other: any) => boolean;
    static select(storage: any, selector: Selector): any;
    static keyMatches(key: string, selector: Selector): Boolean;
    static verifyPath(data?: any, selector?: PathSelector): any;
    static updateOrCreatePath(state?: any, selector?: PathSelector, newValue?: any): any;
    static parseJSON(key: string, json: string): any;
}
