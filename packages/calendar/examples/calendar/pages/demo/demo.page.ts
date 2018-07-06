import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {
	public selectDate(event) {
		console.log(event);
	}
}
