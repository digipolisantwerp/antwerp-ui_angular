import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'aui-copyright',
	templateUrl: './copyright.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent {
	@Input() domain?: String;

	public currentYear = new Date().getFullYear();
}
