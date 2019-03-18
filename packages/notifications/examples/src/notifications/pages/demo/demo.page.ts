import { Component } from '@angular/core';

@Component({
	templateUrl: './status-bar.page.html',
})
export class StatusbarDemoPageComponent {

	public notifications = [
		{
			type: 'E',
			handle: '401',
			target: 'statusbar',
			message: 'you need to log in',
			scope: 'page',
			timer: 0,
		}];

	public clearNotification(notification) {
		notification.clear();
	}

}
