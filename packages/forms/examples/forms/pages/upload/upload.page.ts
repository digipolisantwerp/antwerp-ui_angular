import { Component } from '@angular/core';
import { UploadOptions } from '@acpaas-ui/ngx-components/forms';

@Component({
	templateUrl: './upload.page.html',
})
export class FormsUploadDemoPageComponent {
	public files = [];
	public output: any;

	public dropzone1: UploadOptions = {
		allowedMimeTypes: ['image/jpeg'],
		queueLimit: 2,
		type: 'drop',
		url: 'http://localhost:3002/upload',
	};

	public dropzone2: UploadOptions = {
		allowedFileTypes: ['.jpg', 'jpeg', 'png'],
		autoUpload: true,
		maxFileSize: 2000000,
		type: 'drop',
		url: 'http://localhost:3002/upload',
	};

	public dropzone3: UploadOptions = {
			type: 'button',
			url: 'http://localhost:3002/upload',
	};

	public uploadImportExample = `import { UploadModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
	imports: [
		UploadModule,
	]
});

export class AppModule {};`;
	public uploadExampleJS1 = `public dropzone1: UploadOptions = {
  allowedMimeTypes: ['image/jpeg'],
  queueLimit: 2,
  url: 'http://localhost:3002/upload',
};`;
	public uploadExampleHTML1 = `<aui-upload [options]="dropzone1" (selectUploadedFiles)="onUpload($event)">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload>`;
	public uploadExampleJS2 = `public dropzone2: UploadOptions = {
  allowedFileTypes: ['.jpg', 'jpeg', 'png'],
  autoUpload: true,
  maxFileSize: 2000000,
  url: 'http://localhost:3002/upload',
};`;
	public uploadExampleHTML2 = `<aui-upload-input [options]="dropzone2" [(ngModel)]="output" [format]="formatOutput">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload-input>`;
	public uploadExampleJS3 = `public dropzone3: UploadOptions = {
  type: 'button',
  url: 'http://localhost:3002/upload',
};`;
	public uploadExampleHTML3 = `<aui-upload [options]="dropzone3" (selectUploadedFiles)="onUpload($event)">
  <div class="aui-upload-button">
    Upload button
  </div>
</aui-upload>`;

	public onUpload(files) {
		this.files = this.files.concat(files);
	}

	public formatOutput(data) {
		console.log(data);
			return data.map((o) => {
					return o.url;
			});
	}

	public onDeleteFile(e) {
			this.files.splice(e.index, 1); // e.index and e.file are available
	}
}
