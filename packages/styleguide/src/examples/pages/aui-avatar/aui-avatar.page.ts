import {Component} from '@angular/core';

@Component({
  templateUrl: './aui-avatar.page.html',
})
export class AvatarDemoPageComponent {
  public importModule = `import { AvatarModule } from '@acpaas-ui/ngx-avatar';

@NgModule({
	imports: [
		AvatarModule
	]
});

export class AppModule {};`;

  public example1 = '<aui-avatar image="https://robohash.org/acpaas-ui" title="A robot avatar"></aui-avatar>';

  public example2 = '<aui-avatar icon="ai-alarm-bell" size="L" title="An alarm bell icon"></aui-avatar>';

  public example3 = '<aui-avatar letter="T" size="S" title="A letter T avatar"></aui-avatar>';
}
