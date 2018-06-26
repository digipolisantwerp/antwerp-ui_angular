import { ActivatedRoute } from '@angular/router';
export declare class RouterHelper {
    static getParentTitle(route: any, titles?: string[]): string[];
    static verifyPath(data: any, path: string): any;
    static findLastChild(activatedRoute: ActivatedRoute): any;
}
