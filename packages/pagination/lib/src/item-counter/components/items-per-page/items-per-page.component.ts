import {
	Component,
	Inject,
	Input,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
	HostBinding
} from '@angular/core';

import { ITEMS_PER_PAGE_LABEL } from '../../item-counter.conf';

export enum sizes {
	S = <any>'S',
	R = <any>'R',
	L = <any>'L',
}

@Component({
	selector: 'aui-items-per-page',
	templateUrl: './items-per-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./items-per-page.component.scss'],
})
export class ItemsPerPageComponent {
	public inputSizes = {
		S: 'a-input--small',
		R: '',
		L: 'a-input--large',
	};

	@HostBinding('class.aui-items-per-page') setClass = true;

	@Input() label: any;
	@Input() size: sizes = sizes.R;
	@Input() selectOptions: number[];
	@Input() amountPerPage: number;
	@Output() returnAmount: EventEmitter<number> = new EventEmitter<number>();

	constructor(
		@Inject(ITEMS_PER_PAGE_LABEL) label
	) {
		if (label && !this.label) {
			this.label = label;
		} else if (!this.label) {
			this.label = {
				singular: 'item per page',
				plural: 'items per page',
			};
		}
	}

	public setAmount(changedValue) {
		this.amountPerPage = changedValue;
		this.returnAmount.emit(this.amountPerPage);
	}
}
