import { Component, Input, Inject } from '@angular/core';

import { InvalidFile } from '../../types/upload.types';

import { ValidationMessagesService } from '../../services/validation-messages.service';

@Component({
	selector: 'aui-validation-list',
	templateUrl: './validation-list.component.html',
})
export class ValidationListComponent {
	@Input() public invalidFiles: InvalidFile[] = [];

	constructor(private messagesService: ValidationMessagesService) {}

	public remove(index: number): void {
		this.invalidFiles.splice(index, 1);
	}

	public formatReasons(reasons: string[]): string {
		const result = [];
		for  (const reason of reasons) {
			result.push(this.messagesService[reason]);
		}
		return result.join(', ');
	}
}
