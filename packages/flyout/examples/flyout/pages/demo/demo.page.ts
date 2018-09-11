import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {

  public codeExampleJS1 = `import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout'`;
  public codeExampleHTML1 =
	`
<div auiFlyout size="small" align="left">
  <button class="a-button" auiFlyoutAction>Open flyout</button>
  <div auiFlyoutZone class="has-padding u-text-center">
    <div class="u-margin-bottom">
      <p>Hello world!</p>
    </div>
    <div>
      <button class="a-button" auiFlyoutClose>Close flyout</button>
    </div>
  </div>
</div>
	`;

  public codeExampleJS2 = `import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout'`;
  public codeExampleHTML2 =
	`
<aui-flyout-buttonicon="fa fa-user"
  label="Open flyout"
  direction="left"
  title="Click to open!"
  size="small">
  <div class="u-margin">
    <p>Hello world!</p>
  </div>
</aui-flyout-button>
	`;
}
