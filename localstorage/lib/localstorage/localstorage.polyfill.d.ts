export declare class MemoryStorage {
    readonly length: number;
    readonly storage: any;
    private store;
    key(index: number): any;
    getItem(key: string): any;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void;
}
declare const _default: any;
export default _default;
