import { Component, OnInit, OnDestroy } from '@angular/core';
import { UploadOptions } from '@acpaas-ui/ngx-components/forms';
import { Subject } from 'rxjs/Subject';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
	templateUrl: './demo.page.html',
})

export class FormsDemoPageComponent implements OnInit, OnDestroy {

	public autocompleteImportExample = `import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    AutoCompleteModule,
  ]
});

export class AppModule {};`;

	public autocompleteExampleJS1 = `public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];
public setSelectedUser(person): void {
  // do something
}`;
	public autocompleteExampleHTML1 = `<aui-auto-complete
  id="hero-names"
  placeholder="Choose your hero…"
  label="name"
  value=""
  minCharacters = "3"
  clearInvalid="true"
  showAllByDefault="true"
  [data]="heroList"
	(select)="setSelectedHero($event)">
</aui-auto-complete>`;
	public autocompleteExampleJS2 = `public results = [];
public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];

public searchItems(search: string): void {
  // do search
}`;
	public autocompleteExampleHTML2 = `<aui-auto-complete
  id="hero"
  placeholder="Choose your hero…"
  remote="true"
  [results]="results"
  label="name"
  key="id"
  loadingText = "Loading…"
  noResultsText="No results found"
  searchIncentiveText="Type one or more keywords to start searching"
  (search)="searchItems($event)">
</aui-auto-complete>`;

	// UPLOAD EXAMPLES
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

	// AUTOCOMPLETE DECLARATIONS
  public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];
	public results = [];
	private debouncer: Subject<string> = new Subject();
	private componentDestroyed$: Subject<boolean> = new Subject<boolean>();

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

	public ngOnInit() {
		this.debouncer.pipe(
			takeUntil(this.componentDestroyed$),
			debounceTime(1000)
			).subscribe((value) => {
				if (!value) {
					this.results = [];
				} else {
					this.results = this.heroList.filter((hero) => {
						return hero.name.indexOf(value) !== -1;
					});
				}
			});
	}

	public ngOnDestroy() {
		this.componentDestroyed$.next(true);
		this.componentDestroyed$.complete();
	}

	// AUTOCOMPLETE METHODS
	public setSelectedHero(person): void {
		// do something
	}

	public searchItems(search: string): void {
		// do search
		this.debouncer.next(search);
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
