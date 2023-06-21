import { Component } from '@angular/core';

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

  public example1 = `<aui-avatar icon="ai-alarm-bell"  title="An alarm bell icon" size="S"></aui-avatar>
<aui-avatar icon="ai-alarm-bell"  title="An alarm bell icon"></aui-avatar>
<aui-avatar icon="ai-alarm-bell"  title="An alarm bell icon" size="L"></aui-avatar>`;

  public example2 = `<aui-avatar image="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg" title="A robot avatar" size="S"></aui-avatar>
<aui-avatar image="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg" title="A robot avatar"></aui-avatar>
<aui-avatar image="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg" title="A robot avatar" size="L"></aui-avatar>`;

  public example3 = `<aui-avatar letter="T"  title="A letter T avatar" size="S"></aui-avatar>
<aui-avatar letter="T"  title="A letter T avatar"></aui-avatar>
<aui-avatar letter="T"  title="A letter T avatar" size="L"></aui-avatar>`;

  public example4 = `<aui-avatar icon="ai-alarm-bell"  title="An alarm bell icon" size="S" rounded="true"></aui-avatar>
<aui-avatar letter="T"  title="A letter T avatar" rounded="true"></aui-avatar>
<aui-avatar image="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg" title="A robot avatar" size="L" rounded="true"></aui-avatar>`;
}
