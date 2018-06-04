import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'aui-uploaded-list',
	templateUrl: './uploaded-list.component.html',
})
export class UploadedListComponent {
	@Input() public uploadedFiles = [];
	@Output() public delete = new EventEmitter();

	public remove(file, index) {
		this.delete.emit({file, index});
	}
}
