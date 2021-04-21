import { Component } from '@angular/core';

@Component({
  templateUrl: './aui-icon.page.html',
})
export class IconDemoPageComponent {
  public javascript = `import { IconModule } from '@acpaas-ui/ngx-icon';

@NgModule({
	imports: [
		IconModule
	]
});

export class AppModule {};`;

  public html = `<aui-icon name="ai-alarm-bell" ariaLabel="This is a bell" className="u-text-primary" style="font-size: 2rem;"></aui-icon>`;
}
