import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
export declare class GAService {
    private router;
    private activatedRoute;
    private windowService;
    constructor(location: Location, router: Router, activatedRoute: ActivatedRoute, windowService: any);
    setDimension(key: string, value: string): void;
    triggerPageView(title?: string, location?: string, page?: string): void;
    triggerEvent(category: string, action: string, label?: string, value?: any): any;
    private autoTriggerPageView(location, router);
    private findLastChild(activatedRoute);
}
