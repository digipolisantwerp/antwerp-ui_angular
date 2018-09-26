import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class ContextDemoPageComponent {
	public codeExampleJS1 = `
import { ContextModule } from '@acpaas-ui/ngx-components/context';

@NgModule({
  imports: [
    ContextModule
  ]
})

export class AppModule {}`;
}
