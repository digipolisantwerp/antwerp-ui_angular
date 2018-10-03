import { Component } from '@angular/core';

@Component({
	templateUrl: './footer.page.html',
})
export class LayoutFooterDemoPageComponent {
	public footer1 = `import { FooterModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		FooterModule,
	]
});

export class AppModule {};`;

	public footer2 = `<aui-footer isExtended="false">
	<div class="u-margin-bottom u-margin-top">
		<div auiFooterContent>
			Footer content goes here
		</div>
		<div auiFooterBottom>
			<aui-subfooter>
				<aui-copyright domain="Digipolis"></aui-copyright>
			</aui-subfooter>
		</div>
	</div>
</aui-footer>`;
}
