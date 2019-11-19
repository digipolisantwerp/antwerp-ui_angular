import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { UploadOptions, InvalidFile } from '../../types/upload.types';
import { UPLOAD_OPTIONS_DEFAULT } from '../../upload.conf';
import { Uploader } from '../../classes/uploader.class';

@Component({
	selector: 'aui-upload',
	templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {
	@Input() public id = '';
	@Input() public ariaLabelRemove = 'Verwijder';
	@Input() public options: UploadOptions = UPLOAD_OPTIONS_DEFAULT;
	@Output() public selectUploadedFiles: EventEmitter<Object[]> = new EventEmitter<Object[]>();

	public uploader;
	public ariaId;
	public uploadedFiles: Object[] = [];
	public invalidFiles: InvalidFile[] = [];
	public queuedFiles: File[] = [];

	ngOnInit() {
		if (!this.id) {
			this.ariaId = 'aui-upload-' + Math.random().toString(36).substring(2);
		}
		this.uploader = new Uploader(this.options);
	}

	public onUploadedFiles(files: Object[]) {
		this.uploadedFiles = this.uploadedFiles.concat(files);
		this.selectUploadedFiles.emit(this.uploadedFiles);
	}

	public onInvalidFiles(files: InvalidFile[]) {
		this.invalidFiles = files;
	}

	public onQueuedFiles(files: File[]) {
		this.queuedFiles = this.queuedFiles.concat(files);
	}
}
