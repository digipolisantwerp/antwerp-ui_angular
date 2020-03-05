import * as Hammer from 'hammerjs';
import {HammerGestureConfig} from '@angular/platform-browser';

export class HammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: {direction: Hammer.DIRECTION_ALL},
  } as any;
}
