import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {

  public codeExampleJS1 = `import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout'`;
  public codeExampleHTML1 =
`<div auiFlyout size="small" align="left">
  <button class="a-button" auiFlyoutAction>Open flyout</button>
  <div auiFlyoutZone class="has-padding u-text-center">
    <div class="u-margin-bottom">
      <p>Hello world!</p>
    </div>
    <div>
      <button class="a-button" auiFlyoutClose>Close flyout</button>
    </div>
  </div>
</div>`;

  public codeExampleJS2 = `import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout'`;
  public codeExampleHTML2 =
`<aui-flyout-button
  icon="fa fa-user"
  label="Open flyout"
  align="right"
  title="Click to open!"
  outline=true
  flyoutSize="small"
  buttonSize="large">
  <div class="u-margin u-text-center">
    <p>Hello world!</p>
  </div>
</aui-flyout-button>`;
}
