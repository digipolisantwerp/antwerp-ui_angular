import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';

import {InvalidFile} from '../../types/upload.types';
import {Uploader} from '../../classes/uploader.class';

@Component({
  selector: 'aui-upload-zone',
  templateUrl: './upload-zone.component.html',
})
export class UploadZoneComponent {
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

  @Input() public uploader: Uploader;
  @Input() public disabled = false;
  @Input() public multiple = true;
  @Input() public id = '';
  @Input() public ariaId = '';
  @Output() public uploadedFiles: EventEmitter<object[]> = new EventEmitter<object[]>();
  @Output() public queuedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() public invalidFiles: EventEmitter<InvalidFile[]> = new EventEmitter<InvalidFile[]>();

  public hasDragOver = false;
  public classNames: string;
  public uploadProgress = 0;
  public uploadingFiles: File[];

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any): void {
    this.preventAndStop(event);
    this.hasDragOver = true;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any): void {
    this.preventAndStop(event);
    this.hasDragOver = false;
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): void {
    this.preventAndStop(event);
    this.hasDragOver = false;
    const files = this.fileListToArray(event.dataTransfer.files);
    this.handleFiles(files);
  }

  public triggerFile() {
    this.fileInput.nativeElement.click();
  }

  public updateFiles() {
    const files: any[] = this.fileListToArray(this.fileInput.nativeElement.files);
    this.handleFiles(files);
  }

  protected handleFiles(files) {
    const response = this.uploader.validateFiles(files);
    this.invalidFiles.emit(response.invalidFiles);

    if (this.uploader.options.autoUpload && response.validFiles.length > 0) {
      this.uploadFiles(response.validFiles);
    } else {
      this.queuedFiles.emit(response.validFiles);
    }
  }

  protected uploadFiles(files) {
    // Reset progress
    this.uploadProgress = 0;
    this.uploadingFiles = files;

    // upload
    this.uploader.uploadFiles(files).subscribe(
      (response) => {
        if (response.progress) {
          this.uploadProgress = Math.floor(response.progress * 100);
        }
        if (response.data) {
          this.uploadedFiles.emit(response.data);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  protected fileListToArray(list: FileList): object[] {
    return Array.from(list);
  }

  protected preventAndStop(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }
}
