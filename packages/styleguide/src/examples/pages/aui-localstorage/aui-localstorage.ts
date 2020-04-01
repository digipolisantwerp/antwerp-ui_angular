import {Component} from '@angular/core';
import {LocalstorageService} from '../../../../../ngx-localstorage/src/public-api';

@Component({
  templateUrl: './aui-localstorage.html',
})
export class LocalstorageDemoPageComponent {

  public item: number;
  public typescript1 = `import { LocalstorageModule } from '@acpaas-ui/ngx-localstorage';

@NgModule({
	imports: [
		LocalstorageModule.forRoot({
			storageType: 'sessionStorage' | 'localStorage' | 'memory'
		})
	]
});

export class AppModule {};`;

  public typescript2 = `import { LocalstorageService } from '@acpaas-ui/ngx-localstorage';
private storage: Storage;
constructor(
	private localstorageService: LocalstorageService
) {
  this.storage = this.localstorageService.storage;
}

public count(): void {
  const n: number = Number(this.storage.getItem('number'));
	this.storage.setItem('number', String(n +  1);
}

public clear(): void {
	this.storage.removeItem('number');
}
`;

  private storage: Storage;

  constructor(
    private localstorageService: LocalstorageService
  ) {
    this.storage = this.localstorageService.storage;
    this.storage.setItem('aui-localstorage-demo', '0');
  }

  public count(): void {
    const n: number = Number(this.storage.getItem('aui-localstorage-test')) + 1;
    this.storage.setItem('aui-localstorage-test', String(n));
  }

  public clear(): void {
    this.storage.setItem('aui-localstorage-demo', '0');
  }

  public getItem() {
    this.item = Number(this.storage.getItem('aui-localstorage-test'));
  }
}
