export declare class Filter {
    id: string;
    name: string;
    options: any[];
    value: string | any[];
    parse: (data: any[], value: any) => any[];
    parseData(data: any): any[];
}
