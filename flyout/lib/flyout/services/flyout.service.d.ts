import { Subject } from 'rxjs/Subject';
import { FlyoutState } from '../types/flyout.types';
export declare class FlyoutService {
    subject: Subject<FlyoutState>;
    close(): void;
}
