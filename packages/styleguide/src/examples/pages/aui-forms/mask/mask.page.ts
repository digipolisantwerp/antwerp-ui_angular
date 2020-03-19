import {Component} from '@angular/core';

@Component({
  templateUrl: './mask.page.html',
})
export class FormsMaskDemoPageComponent {
  public maskImportExample = `import { MaskModule } from '@acpaas-ui/ngx-forms';
	@NgModule({
		imports: [
				MaskModule,
		]
	});
export class AppModule {};`;

  public maskExampleHTML1 = `<div class="a-input">
	<label class="a-input__label" for="mask-example">Bank account</label>
	<input
		type="text"
		id="mask-example"
		name="mask-example"
		placeholder="BE99 9999 9999 9999"
		auiMask="BE99 9999 9999 9999" />
</div>`;
}
