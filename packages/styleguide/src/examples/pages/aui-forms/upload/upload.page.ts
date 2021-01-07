import {Component} from '@angular/core';
import {InvalidFile, Uploader, UploadOptions} from '../../../../../../ngx-forms/src/public-api';

@Component({
  templateUrl: './upload.page.html',
})
export class FormsUploadDemoPageComponent {
  public files = [];
  public invalidFiles: InvalidFile[] = [];
  public queuedFiles: File[] = [];
  public uploadedFiles: File[] = [];
  public uploader = new Uploader({
    allowedFileTypes: ['jpg', 'jpeg', 'png'],
    type: 'drop',
  });
  public showError = false;
  public fileName = '';

  public dropzone1: UploadOptions = {
    allowedMimeTypes: ['image/jpeg'],
    maxFileSize: 10000000,
    queueLimit: 2,
    type: 'drop',
  };

  public dropzone2: UploadOptions = {
    type: 'button',
    allowedFileTypes: ['jpg', 'jpeg', 'png'],
    autoUpload: true,
    maxFileSize: 2000000,
  };

  public uploadImportExample = `import { UploadModule } from '@acpaas-ui/ngx-forms';

@NgModule({
	imports: [
		UploadModule,
	]
});

export class AppModule {};`;

  public uploadExampleJS1 = `public dropzone1: UploadOptions = {
	allowedMimeTypes: ['image/jpeg'],
	maxFileSize: 10000000,
	queueLimit: 2,
	type: 'drop',
	url: 'api/upload',
};`;

  public uploadExampleHTML1 = `<label class="a-input__label" for="my-upload">Upload files</label>
<aui-upload
	data-id="my-upload"
	[options]="dropzone1"
	(selectUploadedFiles)="onUpload($event)">
	<div class="m-upload__message">
		Drag your files here or click to upload
	</div>
	<div class="m-upload__description">
		Optional description message
	</div>
</aui-upload>`;

  public uploadExampleJS2 = `public dropzone2: UploadOptions = {
	type: 'button',
	allowedFileTypes: ['jpg', 'jpeg', 'png'],
	autoUpload: true,
	maxFileSize: 2000000,
	url: 'api/upload',
};`;

  public uploadExampleHTML2 = `<aui-upload
	[options]="dropzone2"
	(selectUploadedFiles)="onUpload($event)">
	<div class="m-upload__button">
		Select your files to upload
	</div>
</aui-upload>`;

  public uploadExampleJS3 = `public files = [];
public invalidFiles: InvalidFile[] = [];
public queuedFiles: File[] = [];
public uploadedFiles: File[] = [];
// Pass created options into new instance of Uploader
public uploader = new Uploader({
	allowedFileTypes: ['jpg', 'jpeg', 'png'],
	type: 'drop',
	url: 'api/upload',
});
public showError = false;
public fileName = '';
});`;

  public uploadExampleJS4 = `public onQueuedFiles(files: File[]) {
	if (!files.length) {
		return;
	}

	this.queuedFiles = this.queuedFiles.concat(files);
}

public onUploadedFiles(files) {
	this.uploadedFiles = this.uploadedFiles.concat(files);
}

public onInvalidFiles(errorFiles: InvalidFile[]) {
	this.invalidFiles = errorFiles;
	if (errorFiles.length > 0) {
		this.fileName = this.invalidFiles[0]['file'].name;
		this.showError = true;
		this.invalidFiles = [];
	} else {
		this.showError = false;
	}
}

public reloadErrors() {
	this.showError = false;
	if (!this.queuedFiles.length) {
		return;
	}
}

/**
* Using the uploader url option
*/

public uploadFiles(): void {
// Upload files returns an obervable
this.uploader.uploadFiles(this.queuedFiles).subscribe(
	(response) => {
		// Response has a progress property to use with a progress bar
		if (response.progress) {
			console.log('response.progress = ', response.progress);
		}
		// Response had a data property with an array of uploaded files: UploadedFile[]
		if (response.data) {
			console.log('response.data = ', response.data);
		}
		this.uploadedFiles = response.data;
	},
	(err) => {
		console.log('HTTP Error', err);
	});
}

/**
 * Using a custom upload service
 */

public uploadFiles(): void {
	if (!this.queuedFiles.length) {
		return;
	}
	this.customService.postFile(this.queuedFiles).subscribe(res => {
		this.result = res;
	}, (error) => {
		console.log(error);
	});
}`;

  public uploadExampleSCSS = `// don't display the default upload button
::ng-deep .a-upload-queue__wrapper {
	.a-button {
		display: none;
	}
}`;

  public uploadExampleHTML3 = `<aui-upload-zone
	ariaId="my-other-upload"
	[uploader]="uploader"
	(queuedFiles)="onQueuedFiles($event)"
	(uploadedFiles)="onUploadedFiles($event)"
	(invalidFiles)="onInvalidFiles($event)">
	<div class="m-upload__message">
		Drag your files here or click to upload
	</div>
	<div class="m-upload__description">
		Maximum filesize: 10 MB,
		File extension: jpg, jpeg, png
	</div>
</aui-upload-zone>
<aui-upload-queue [files]="queuedFiles"></aui-upload-queue>
<div *ngIf="showError" class="u-margin-bottom">
	<ul class="m-upload__files">
		<li class="is-error">
			<span class="fa fa-warning"></span>
			<span class="m-upload__filename">{{ fileName }}</span>
			<span class="m-upload__error">This file extension is not allowed.</span>
			<button
				type="button"
				(click)="reloadErrors()"
				class="m-upload__delete a-button-transparent a-button--danger a-button--small has-icon">
				<span class="u-screen-reader-only">Remove</span>
			</button>
		</li>
	</ul>
</div>`;

  public onUpload(files) {
    this.files = this.files.concat(files);
  }

  // CUSTOM UPLOAD
  public onQueuedFiles(files: File[]) {
    if (!files.length) {
      return;
    }
    this.queuedFiles = this.queuedFiles.concat(files);
  }

  public onUploadedFiles(files) {
    this.uploadedFiles = this.uploadedFiles.concat(files);
  }

  public onInvalidFiles(errorFiles: InvalidFile[]) {
    this.invalidFiles = errorFiles;
    if (errorFiles.length > 0) {
      this.fileName = this.invalidFiles[0].file.name;
      this.showError = true;
      this.invalidFiles = [];
    } else {
      this.showError = false;
    }
  }

  public reloadErrors() {
    this.showError = false;
    if (!this.queuedFiles.length) {
      return;
    }
  }

  public uploadFiles(): void {
    // Upload files returns an obervable
    this.uploader.uploadFiles(this.queuedFiles).subscribe(
      (response) => {
        // Response has a progress property to use with a progress bar
        if (response.progress) {
          console.log('response.progress = ', response.progress);
        }
        // Response had a data property with an array of uploaded files: UploadedFile[]
        if (response.data) {
          console.log('response.data = ', response.data);
        }
        this.uploadedFiles = response.data as File[];
      },
      (err) => {
        console.log('HTTP Error', err);
      });
  }
}
