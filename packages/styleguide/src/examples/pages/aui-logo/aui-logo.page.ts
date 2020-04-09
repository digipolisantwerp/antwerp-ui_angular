import {Component} from '@angular/core';

@Component({
  templateUrl: './aui-logo.page.html',
})
export class LogoDemoPageComponent {
  public imgTitle = 'Title for logo';
  public imgSrc = 'https://robohash.org/acpaas-ui';
  public imgLink = '#';

  public javascript1 = `import { LogoModule } from '@acpaas-ui/ngx-logo';

@NgModule({
	imports: [
		LogoModule
	]
});

export class AppModule {};`;

  public javascript2 = `public imgTitle = 'Title for logo';
public imgSrc = 'https://robohash.org/acpaas-ui';
public imgLink = '#';

public imgClicked(event) {
	alert('Logo was clicked');
}`;

  public html = `<aui-logo [src]="imgSrc" [title]="imgTitle" [link]="imgLink" [onClick]="imgClicked"></aui-logo>`;

  public imgClicked(event) {
    alert('Logo was clicked');
  }
}
