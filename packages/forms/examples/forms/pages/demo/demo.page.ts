import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class FormsDemoPageComponent {

	public maskImportExample = `import { MaskModule } from '@acpaas-ui/ngx-components/forms';
	@NgModule({
	  imports: [
		MaskModule,
	  ]
	});
export class AppModule {};`;

	public maskExampleHTML1 = `<div class="a-input">
	<input type="text" placeholder="dd/mm/yyyy" auiMask="99/99/9999" />
</div>`;

}
