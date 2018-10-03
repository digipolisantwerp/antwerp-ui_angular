import { Component } from '@angular/core';

@Component({
	templateUrl: './pane.page.html',
})
export class LayoutPaneDemoPageComponent {
	public pane = 'closed';
	public opened = false;
	public backdrop = true;

	public pane1 = `import { PaneModule } from '@acpaas-ui/ngx-components/layout';

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

	public pane3 = `<button class="a-button" (click)="myPane.togglePane()">Toggle pane</button>
<button class="a-button" (click)="myPane.openPane()">Open pane</button>
<p class="u-margin-top-xs">The pane is <strong>{{ pane }}</strong>.</p>
<aui-pane #myPane
	[side]="'left'"
	[opened]="opened"
	[backdrop]="backdrop"
	(open)="onOpen()"
	(close)="onClose()">
    Pane content
	<button class="a-button" (click)="myPane.closePane()">Close pane</button>
</aui-pane>`;

	public onOpen() {
		this.pane = 'open';
	}

	public onClose() {
		this.pane = 'closed';
	}
}
