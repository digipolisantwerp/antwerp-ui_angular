import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {
	constructor() {
		return window;
	}
}
