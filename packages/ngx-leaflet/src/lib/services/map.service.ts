import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';
import * as eL from 'esri-leaflet';
import 'leaflet-draw';

@Injectable()
export class MapService {
  public L = null;
  public esri = null;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.requireMap();
  }

  requireMap() {
    if (isPlatformBrowser(this.platformId)) {
      this.L = L;
      this.esri = eL;
    }
  }

  isAvailable() {
    if (isPlatformBrowser(this.platformId)) {
      return true;
    } else {
      return false;
    }
  }
}
