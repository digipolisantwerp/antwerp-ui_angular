import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class DemoPageComponent {

  public codeExampleHTML =
	`
<div auiFlyout size="small" align="left">
  <button class="a-button" auiFlyoutAction>Open flyout</button>
  <div auiFlyoutZone class="has-padding u-text-center">
    <div class="u-margin-bottom">
      <p>Hello world!</p>
    </div>
    <div class="u-margin-bottom">
      <button class="a-button" auiFlyoutClose>Close flyout</button>
    </div>
  </div>
</div>
	`;
}
