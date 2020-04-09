import {Component} from '@angular/core';

@Component({
  templateUrl: './pane.page.html',
})
export class LayoutPaneDemoPageComponent {
  public pane = 'closed';
  public opened = false;
  public backdrop = true;

  public pane1 = `import { PaneModule } from '@acpaas-ui/ngx-layout';

@NgModule({
	imports: [
		PaneModule,
	]
});

export class AppModule {};`;

  public pane2 = `public pane = 'closed';
public opened = false;
public backdrop = true;

public onOpen() {
	this.pane = 'open';
}

public onClose() {
	this.pane = 'closed';
}`;

  public pane3 = `
<button class="a-button" (click)="myPane.togglePane()" [attr.aria-controls]="myPane.id" [attr.aria-expanded]="myPane.opened">
Toggle pane
</button>
<button class="a-button" (click)="myPane.openPane()" [attr.aria-controls]="myPane.id" [attr.aria-expanded]="myPane.opened">
Open pane
</button>
<p class="u-margin-top-xs">The pane is <strong>{{ pane }}</strong>.</p>
<aui-pane #myPane
	data-id="demoPane"
	[side]="'left'"
	[ariaLabel]="'Demo pane'"
	[ariaLabelClose]="'Close pane'"
	[opened]="opened"
	[backdrop]="backdrop"
	(open)="onOpen()"
	(close)="onClose()">
    Pane content
	<button type="button" class="a-button" (click)="myPane.closePane()">Close pane</button>
</aui-pane>`;

  public onOpen() {
    this.pane = 'open';
  }

  public onClose() {
    this.pane = 'closed';
  }
}
