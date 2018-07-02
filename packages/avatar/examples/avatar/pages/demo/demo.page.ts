import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class AvatarDemoPageComponent {
	public importModule = 'import { CodeSnippetModule } from \'@acpaas-ui/ngx-components/code-snippet\';';
	public example1 = '<aui-avatar image="https://robohash.org/acpaas-ui" title="My image"></aui-avatar>';
	public example2 = '<aui-avatar icon="fa fa-user" title="An icon" size="L"></aui-avatar>';
	public example3 = '<aui-avatar letter="T" title="The letter T" size="S"></aui-avatar>';
}
