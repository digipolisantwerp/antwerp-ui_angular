import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FieldErrorDefinition, FieldError } from '../../types/field-errors.types';

@Component({
	selector: 'aui-field-errors',
	templateUrl: './field-errors.component.html',
	styleUrls: [
		'./field-errors.component.scss',
	],
})
export class FieldErrorsComponent implements OnChanges {
	@Input() public errors: FieldError[];
	@Input() public errorDefinition: FieldErrorDefinition;

	errorMessages: FieldError[];

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.errors && !changes.errors.currentValue) {
			this.errorMessages = [];
			return;
		}
		const errorList = (changes.errors ? changes.errors.currentValue : this.errors);
		if (!errorList) {
			return;
		}
		this.errorMessages = Object.keys(errorList).map((key) => {
			return {
				message: this.getMessage(key, errorList[key]),
			};
		});
	}

	private getMessage(type: string, params: any) {
		if (!this.errorDefinition || !this.errorDefinition.hasOwnProperty(type)) {
			// tslint:disable-next-line:max-line-length
			return console.warn(`No errordefinition found for validator of type '${type}'. Please provide one through the [errorDefinition] attribute.`);
		}

		return this.errorDefinition[type](params);
	}
}
