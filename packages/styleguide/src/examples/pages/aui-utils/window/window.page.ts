import {Component, Inject} from '@angular/core';
import {WINDOW} from '../../../../../../ngx-utils/src/public-api';

@Component({
  templateUrl: './window.page.html',
})
export class UtilsWindowDemoPageComponent {
  public importModule = `import { WindowModule, WINDOW_PROVIDERS } from '@acpaas-ui/ngx-utils';

@NgModule({
	imports: [
		WindowModule
	],
	providers: [WINDOW_PROVIDERS],
})

export class AppModule {};`;

  public codeExampleJS1 = `import { WINDOW } from '@acpaas-ui/ngx-utils';`;

  public codeExampleJS2 = `constructor(
	@Inject(WINDOW) public window
) {}`;

  public codeExampleHTML = `<dl>
	<dt>Height:</dt>
		<dd><pre class="a-pre a-pre--scrollable">{{ window.innerHeight }}</pre></dd>
	<dt>Width:</dt>
		<dd><pre class="a-pre a-pre--scrollable">{{ window.innerWidth }}</pre></dd>
</dl>`;

  constructor(
    @Inject(WINDOW) public window
  ) {
  }
}
