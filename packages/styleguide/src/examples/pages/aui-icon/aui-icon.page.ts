import {Component} from '@angular/core';

@Component({
  templateUrl: './aui-icon.page.html',
})
export class IconDemoPageComponent {
  public javascript1 = `import { IconModule } from '@acpaas-ui/ngx-icon';

@NgModule({
	imports: [
		IconModule
	]
});

export class AppModule {};`;

  public javascript2 = `some icon code`;

  public html = `<aui-icon></aui-icon>`;
}
