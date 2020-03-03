declare var require: any;
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class MapService {

	public L = null;
	public esri = null;
	public geoman = null;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		this.requireMap();
	}

	requireMap() {
		if (isPlatformBrowser(this.platformId)) {
			this.L = require('leaflet');
			this.esri = require('esri-leaflet');
			this.geoman = require('@geoman-io/leaflet-geoman-free');
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
