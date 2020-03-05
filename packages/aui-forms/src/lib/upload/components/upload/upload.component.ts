import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {InvalidFile, UploadOptions} from '../../types/upload.types';
import {UPLOAD_OPTIONS_DEFAULT} from '../../upload.conf';
import {Uploader} from '../../classes/uploader.class';

@Component({
  selector: 'aui-upload',
  styleUrls: [
    './upload.component.scss',
  ],
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {
  @Input() public id = '';
  @Input() public ariaLabelRemove = 'Verwijder';
  @Input() public disabled = false;
  @Input() public options: UploadOptions = UPLOAD_OPTIONS_DEFAULT;
  @Output() public selectUploadedFiles: EventEmitter<object[]> = new EventEmitter<object[]>();

  public uploader;
  public ariaId;
  public uploadedFiles: object[] = [];
  public invalidFiles: InvalidFile[] = [];
  public queuedFiles: File[] = [];

  public ngOnInit() {
    if (!this.id) {
      this.ariaId = 'aui-upload-' + Math.random().toString(36).substring(2);
    }
    this.uploader = new Uploader(this.options);
  }

  public onUploadedFiles(files: object[]) {
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
