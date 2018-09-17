import { Component, Input, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export enum sizes {
	S = <any>'S',
	M = <any>'M',
	L = <any>'L',
	R = <any>'R',
}

@Component({
	selector: 'aui-avatar',
	templateUrl: './avatar.component.html',
})
export class AvatarComponent {
	public avatarSizes = {
		S: 'a-avatar--small',
		M: 'a-avatar--medium',
		L: 'a-avatar--large',
		R: '',
	};

	@Input() title = '';

	@Input() image: string;

	@Input() icon: string;

	@Input() letter: string;

	@Input() className = '';

	@Input() size: sizes = sizes.R;
}
