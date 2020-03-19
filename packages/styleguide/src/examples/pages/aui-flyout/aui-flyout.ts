import {Component} from '@angular/core';

@Component({
  templateUrl: './aui-flyout.html',
})
export class FlyoutDemoPage {

  public codeExampleJS1 = `import { FlyoutModule } from '@acpaas-ui/ngx-flyout';

@NgModule({
	imports: [
		FlyoutModule
	]
});

export class AppModule {};`;

  public codeExampleJS2 = `import { FlyoutModule } from '@acpaas-ui/ngx-flyout';`;

  public codeExampleHTML1 = `<div auiFlyout size="small" data-align="left">
	<button type="button" class="a-button" auiFlyoutAction>Open flyout</button>
	<div auiFlyoutZone class="has-padding u-text-center">
		<div class="u-margin-bottom">
			<p>Hello world!</p>
		</div>
		<div>
			<button type="button" class="a-button" auiFlyoutClose>Close flyout</button>
		</div>
	</div>
</div>`;

  public codeExampleJS3 = `import { FlyoutButtonModule } from '@acpaas-ui/ngx-flyout';

@NgModule({
	imports: [
		FlyoutButtonModule
	]
});

export class AppModule {};`;

  public codeExampleJS4 = `import { FlyoutButtonModule } from '@acpaas-ui/ngx-flyout';`;

  public codeExampleHTML2 = `<aui-flyout-button
	icon="fa fa-user"
	label="Open flyout"
	data-align="right"
	title="Click to open!"
	outline=true
	flyoutSize="small"
	buttonSize="large">
	<div class="u-margin u-text-center">
		<p>Hello world!</p>
	</div>
</aui-flyout-button>`;
}
