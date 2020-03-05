import {Component, DebugElement, Input} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {UploadComponent} from './upload.component';
import {InvalidFile} from '../../types/upload.types';

const mockUploadFiles = [{
  url: 'http://localhost/myfile.jpg',
  name: 'myfile',
}];

const mockFile1 = new File(['file1'], 'filename1.txt', {type: 'text/plain', lastModified: (new Date()).getTime()});
const mockFile2 = new File(['file2'], 'filename2.txt', {type: 'text/plain', lastModified: (new Date()).getTime()});
const mockFileList = [mockFile1, mockFile2];

const mockInvalidFiles: InvalidFile[] = [{
  reasons: ['INVALID_FILE_TYPE'],
  file: mockFile1,
}];

@Component({
  selector: 'aui-upload-zone',
  template: '<div>aui-upload-zone</div>',
})
export class UploadZoneComponent {
  @Input() uploader;
  @Input() ariaId;
  @Input() disabled = false;
}

@Component({
  selector: 'aui-upload-queue',
  template: '<div>aui-upload-queue</div>',
})
export class UploadQueueComponent {
  @Input() uploader;
  @Input() files;
  @Input() ariaLabelRemove;
}

@Component({
  selector: 'aui-validation-list',
  template: '<div>aui-validation-list</div>',
})
export class ValidationListComponent {
  @Input() invalidFiles;
  @Input() ariaLabelRemove;
}

describe('The Upload Component', () => {
  let comp: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadComponent,
        UploadZoneComponent,
        UploadQueueComponent,
        ValidationListComponent,
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.m-upload'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should emit uploaded files', () => {
    spyOn(comp.selectUploadedFiles, 'emit');
    comp.onUploadedFiles(mockUploadFiles);
    expect(comp.selectUploadedFiles.emit).toHaveBeenCalledWith(mockUploadFiles);
  });

  it('should concat queued files', () => {
    comp.queuedFiles = [mockFile1];
    comp.onQueuedFiles(mockFileList);
    const result = [mockFile1].concat(mockFileList);
    expect(comp.queuedFiles).toEqual(result);
  });

  it('should set invalid files', () => {
    comp.onInvalidFiles(mockInvalidFiles);
    expect(comp.invalidFiles).toEqual(mockInvalidFiles);
  });
});
