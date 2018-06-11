import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { DebugElement, SimpleChange, SimpleChanges, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { UPLOAD_OPTIONS_DEFAULT } from '../../upload.conf';

import { UploadQueueComponent } from './upload-queue.component';

const mockFile1 = new File(['file1'], 'filename1.txt', {type: 'text/plain', lastModified: (new Date()).getTime()});
const mockFile2 = new File(['file2'], 'filename2.txt', {type: 'text/plain', lastModified: (new Date()).getTime()});
const mockFileList = [mockFile1, mockFile2];

class MockUploader {
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

	public uploadFiles(files) {
		return Observable.create(observer => {
			observer.next({
				progress: 0.5,
				data: null,
			});

			setTimeout(function() {
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

describe('The upload queue component', () => {
	let comp: UploadQueueComponent;
	let fixture: ComponentFixture<UploadQueueComponent>;
	let de: DebugElement;
	const el: HTMLElement = undefined;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				UploadQueueComponent,
			],
		})
		.compileComponents(); // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(UploadQueueComponent);
		comp  = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.aui-upload-queue')); // find hero element

		comp.uploader = new MockUploader();
		comp.files = mockFileList;
		fixture.detectChanges(); // trigger initial data binding
	});

	it('Should trigger upload', () => {
		const btn = fixture.debugElement.query(By.css('.a-button')); // find hero element
		spyOn(comp, 'uploadFiles');
		btn.nativeElement.click();
		expect(comp.uploadFiles).toHaveBeenCalled();
	});

	it('Should upload file', async(done) => {
		comp.uploadFiles();
		spyOn(comp.uploadedFiles , 'emit');

		fixture.detectChanges(); // trigger initial data binding

		expect(comp.uploadProgress).toEqual(50);

		setTimeout(function() {
			expect(comp.uploadProgress).toEqual(100);
			expect(comp.uploadedFiles.emit).toHaveBeenCalled();
			done();
		}, 600);
	});

	it('should remove a file', () => {
		comp.remove(1);

		expect(comp.files.length).toEqual(1);
		expect(comp.files.indexOf(mockFile2)).toEqual(-1);
		expect(comp.files.indexOf(mockFile1)).toEqual(0);
	});
});
