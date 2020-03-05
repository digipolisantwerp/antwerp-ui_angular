import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Uploader} from '../../classes/uploader.class';

@Component({
  selector: 'aui-upload-queue',
  templateUrl: './upload-queue.component.html',
})
export class UploadQueueComponent {
  @Input() public files: File[];
  @Input() public uploader: Uploader;
  @Input() public ariaLabelRemove = 'Verwijder';
  @Output() public uploadedFiles: EventEmitter<object[]> = new EventEmitter<object[]>();

  public uploadProgress = 0;

  public remove(index) {
    this.files.splice(index, 1);
  }

  public uploadFiles() {
    const progress = undefined;
    const data = undefined;
    this.uploader.uploadFiles(this.files).subscribe(
      (response) => {
        if (response.progress) {
          this.uploadProgress = Math.floor(response.progress * 100);
        }
        if (response.data) {
          this.uploadedFiles.emit(response.data);
          this.files = [];
        }
      }
    );
  }
}
