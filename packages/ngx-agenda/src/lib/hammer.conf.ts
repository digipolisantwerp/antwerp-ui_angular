import * as Hammer from 'hammerjs';
import {HammerGestureConfig} from '@angular/platform-browser';
import {Injectable} from '@angular/core';
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: {direction: Hammer.DIRECTION_ALL},
  } as any;
}
