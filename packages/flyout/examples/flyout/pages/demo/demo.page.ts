import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {

	public codeExampleHTML =
	`
		<div auiFlyout>
			<button class="a-button" auiFlyoutAction>Open flyout</button>
			<div auiFlyoutZone class="has-padding">
					<p>Hello world!</p>
					<button class="a-button" auiFlyoutClose>Close flyout</button>
			</div>
		</div>
	`;
}
