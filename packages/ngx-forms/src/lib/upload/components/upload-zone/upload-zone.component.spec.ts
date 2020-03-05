import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement, Input} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs';

import {UploadZoneComponent} from './upload-zone.component';
import {UPLOAD_OPTIONS_DEFAULT} from '../../upload.conf';
import {Uploader} from '../../classes/uploader.class';

@Component({
  template: '<progress></progress>',
  selector: 'aui-progress-bar',
})
class ProgressBarComponent {
  @Input() public value;
}

const mockFile1 = new File(['file1'], 'filename1.txt', {type: 'text/plain', lastModified: (new Date()).getTime()});
const mockFile2 = new File(['file2'], 'filename2.txt', {type: 'text/plain', lastModified: (new Date()).getTime()});
const mockFileList = [mockFile1, mockFile2];

class MockUploader implements Partial<Uploader> {
  public options = UPLOAD_OPTIONS_DEFAULT;

  constructor(options = {}) {
    this.options = Object.assign({}, this.options, options);
  }

  public validateFiles(files) {
    return {
      validFiles: mockFileList,
      invalidFiles: [],
    };
  }

  public uploadFiles(files): any {
    return new Observable(observer => {
      observer.next({
        progress: 0.5,
        data: null,
      });

      setTimeout(() => {
        observer.next({
          progress: 1,
          data: {
            test: 'ok',
          },
        });
      }, 500);
    });
  }
}

const mockDragEvent = {
  preventDefault: () => {
  },
  stopPropagation: () => {
  },
};

const mockDropEvent = {
  preventDefault: () => {
  },
  stopPropagation: () => {
  },
  dataTransfer: {
    files: [mockFile1],
  },
};

describe('The upload zone component', () => {
  let comp: UploadZoneComponent;
  let fixture: ComponentFixture<UploadZoneComponent>;
  let de: DebugElement;
  const el: HTMLElement = undefined;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadZoneComponent,
        ProgressBarComponent,
      ],
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(UploadZoneComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.m-upload__dropzone')); // find hero element
  });

  it('Should have options', () => {
    comp.uploader = new MockUploader() as any;
    fixture.detectChanges(); // trigger initial data binding

    expect(comp.uploader.options).toEqual(UPLOAD_OPTIONS_DEFAULT);
  });

  it('Should trigger dragover', () => {
    comp.uploader = new MockUploader() as any;
    fixture.detectChanges(); // trigger initial data binding

    fixture.debugElement.triggerEventHandler('dragover', mockDragEvent);
    expect(comp.hasDragOver).toBeTruthy();
  });

  it('Should trigger dragleave', () => {
    comp.uploader = new MockUploader() as any;
    fixture.detectChanges(); // trigger initial data binding

    fixture.debugElement.triggerEventHandler('dragleave', mockDragEvent);
    expect(comp.hasDragOver).toBeFalsy();
  });

  it('Should trigger drop and queue files', () => {
    comp.uploader = new MockUploader() as any;
    fixture.detectChanges(); // trigger initial data binding

    spyOn(comp.queuedFiles, 'emit');
    fixture.debugElement.triggerEventHandler('drop', mockDropEvent);
    expect(comp.hasDragOver).toBeFalsy();
    expect(comp.queuedFiles.emit).toHaveBeenCalled();
  });

  it('Should trigger drop and upload files', async (done) => {
    comp.uploader = new MockUploader({autoUpload: true}) as any;
    fixture.detectChanges(); // trigger initial data binding

    spyOn(comp.uploadedFiles, 'emit');
    fixture.debugElement.triggerEventHandler('drop', mockDropEvent);

    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges(); // trigger initial data binding

      expect(comp.uploadProgress).toEqual(50);

      setTimeout(() => {
        expect(comp.uploadProgress).toEqual(100);
        expect(comp.uploadedFiles.emit).toHaveBeenCalled();
        expect(comp.hasDragOver).toBeFalsy();
        done();
      }, 600);
    });
  });

  it('Should trigger click', () => {
    comp.uploader = new MockUploader() as any;
    fixture.detectChanges(); // trigger initial data binding

    spyOn(comp.fileInput.nativeElement, 'click');
    comp.triggerFile();
    expect(comp.fileInput.nativeElement.click).toHaveBeenCalled();
  });

  it('Should display a button zone', () => {
    comp.uploader = new MockUploader({type: 'button'}) as any;
    fixture.detectChanges(); // trigger initial data binding

    const btn = fixture.debugElement.query(By.css('.a-button'));

    expect(btn.nativeElement).not.toBeUndefined();
  });
});
