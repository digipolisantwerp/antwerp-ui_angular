export interface LocalstorageConfig {
    storageType?: string;
    identifier?: string;
}
export declare type PropertySelector = string | number;
export declare type PathSelector = Array<string | number>;
export declare type FunctionSelector = (storage: any) => boolean;
export declare type Comparator = (x: any, y: any) => boolean;
export declare type Selector = PropertySelector | PathSelector | FunctionSelector;
export declare type PropertyDecorator = (target: any, propertyKey: string) => void;
