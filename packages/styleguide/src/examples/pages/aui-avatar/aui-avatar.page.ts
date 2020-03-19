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

  public example1 = '<ngx-avatar image="https://robohash.org/acpaas-ui" title="A robot avatar"></ngx-avatar>';

  public example2 = '<ngx-avatar icon="fa fa-user" size="L" title="A user icon avatar"></ngx-avatar>';

  public example3 = '<ngx-avatar letter="T" size="S" title="A letter T avatar"></ngx-avatar>';
}
