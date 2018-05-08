import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FlyoutService {
    // Observable string sources
    public subject = new Subject<any>();

    public close() {
        this.subject.next({
            close: true
        });
    }
}
