import { Component } from '@angular/core';
import { UploadOptions } from '@acpaas-ui/ngx-components/forms';

@Component({
	templateUrl: './demo.page.html',
})

export class FormsDemoPageComponent {

	// AUTOCOMPLETE EXAMPLES
	public AutoCompleteImportExample = `import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    AutoCompleteModule,
  ]
});

export class AppModule {};`;

	public AutoCompleteExampleJS1 = `public selectedHero: string;

public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];
public setSelectedUser(person): void {
  // do something
}`;
	public AutoCompleteExampleHTML1 = `<aui-auto-complete
	id="hero-names"
  placeholder="Choose your hero…"
  [(ngModel)]="selectedHero"
  label="name"
  value=""
  minCharacters = "3"
  clearInvalid="true"
  showAllByDefault="true"
  [data]="heroList"
	(select)="setSelectedHero($event)">
</aui-auto-complete>`;
	public AutoCompleteExampleJS2 = `public selectedValue: string;
public results = [];

public searchHeroes(event): void {
	// do search action
	setTimeout(() => {
		this.results =  [];
	}, 1500);
}`;
	public AutoCompleteExampleHTML2 = `<aui-auto-complete
  id="id"
  placeholder="This will return no results…"
  [(ngModel)]="selectedValue"
  remote="true"
  loadingText = "Loading"
  noResultsText="No results found"
  searchIncentiveText="Type one or more keywords to start searching"
  [results]="results"
  (search)="searchSomething($event)">
</aui-auto-complete>`;

	// UPLOAD EXAMPLES
	public UploadImportExample = `import { UploadModule } from '@acpaas-ui/ngx-components/forms';

	@NgModule({
		imports: [
			UploadModule,
		]
	});

	export class AppModule {};`;
	public UploadExampleJS1 = `public dropzone1: UploadOptions = {
  allowedMimeTypes: ['image/jpeg'],
  queueLimit: 2,
  url: 'http://localhost:3002/upload',
};`;
	public UploadExampleHTML1 = `<aui-upload [options]="dropzone1" (selectUploadedFiles)="onUpload($event)">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload>`;
public UploadExampleJS2 = `public dropzone2: UploadOptions = {
  allowedFileTypes: ['.jpg', 'jpeg', 'png'],
  autoUpload: true,
  maxFileSize: 2000000,
  url: 'http://localhost:3002/upload',
};`;
public UploadExampleHTML2 = `<aui-upload-input [options]="dropzone2" [(ngModel)]="output" [format]="formatOutput">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload-input>`;
public UploadExampleJS3 = `public dropzone3: UploadOptions = {
  type: 'button',
  url: 'http://localhost:3002/upload',
};`;
public UploadExampleHTML3 = `<aui-upload [options]="dropzone3" (selectUploadedFiles)="onUpload($event)">
  <div class="aui-upload-button">
    Upload button
  </div>
</aui-upload>`;

	// AUTOCOMPLETE DECLARATIONS
	public selectedHero: string;
	public selectedValue: string;
  public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];
	public results = [];

	// UPLOAD DECLARATIONS
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

	// AUTOCOMPLETE METHODS
	public setSelectedHero(person): void {
		// do something
	}

	public searchSomething(event): void {
		// do search action
		setTimeout(() => {
			this.results =  [];
		}, 1500);
	}

	// UPLOAD METHODS
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
