import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {FlyoutState} from '../types/flyout.types';

@Injectable()
export class FlyoutService {
  public state$ = new Subject<FlyoutState>();

  public close() {
    this.state$.next(FlyoutState.CLOSED);
  }
}
