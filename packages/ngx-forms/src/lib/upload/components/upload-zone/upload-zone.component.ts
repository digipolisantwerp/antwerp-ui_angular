import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { InvalidFile } from '../../types/upload.types';
import { Uploader } from '../../classes/uploader.class';

@Component({
  selector: 'aui-upload-zone',
  styleUrls: ['./upload-zone.component.scss'],
  templateUrl: './upload-zone.component.html',
})
export class UploadZoneComponent implements AfterViewInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  @Input() public uploader: Uploader;
  @Input() public id = '';
  @Input() public accept = [];
  @Input() public capture = '';
  @Input() public ariaId = '';
  @Input() public disabled = false;
  @Input() public multiple = true;
  @Input() public label = '';
  @Input() public description = '';

  @Output() public uploadedFiles: EventEmitter<object[]> = new EventEmitter<object[]>();
  @Output() public queuedFiles: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() public invalidFiles: EventEmitter<InvalidFile[]> = new EventEmitter<InvalidFile[]>();

  public hasDragOver = false;
  public classNames: string;
  public uploadProgress = 0;
  public uploadingFiles: File[];
  public uploadedFilesString: String;

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

  constructor(private renderer: Renderer2) {}

  public triggerFile() {
    this.fileInput.nativeElement.click();
  }

  public updateFiles() {
    const files: any[] = this.fileListToArray(this.fileInput.nativeElement.files);
    this.uploadedFilesString = files.map((file) => file.name).join(', ');
    this.handleFiles(files);
  }

  public onFileClick(event) {
    // When removing a file make sure you can add it again later
    // See: https://stackoverflow.com/questions/59870335/ng2-file-upload-not-allowing-me-to-add-same-doc-after-ive-removed-it-from-que
    event.target.value = '';
  }

  ngAfterViewInit() {
    if (this.multiple !== false) {
      this.renderer.setProperty(this.fileInput.nativeElement, 'multiple', 'multiple');
    }
    if (!!this.accept.length) {
      this.renderer.setProperty(this.fileInput.nativeElement, 'accept', this.accept.join());
    }
    if (this.disabled) {
      this.renderer.setProperty(this.fileInput.nativeElement, 'disabled', 'disabled');
    }
    if (this.capture !== '') {
      this.renderer.setAttribute(this.fileInput.nativeElement, 'capture', this.capture);
    }
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

  public uploadedFilesToString(): string {
    console.log('UPLOADS TO STRING');
    return this.fileInput.nativeElement.files.map((file) => file.name).join('');
  }
}
