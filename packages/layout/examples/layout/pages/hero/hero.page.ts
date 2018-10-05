import { Component } from '@angular/core';

@Component({
	templateUrl: './hero.page.html',
})
export class LayoutHeroDemoPageComponent {
	public hero1 = `import { HeroModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
	imports: [
		HeroModule
	]
});

export class AppModule {};`;

	public hero2 = `<div class="u-margin-bottom u-margin-top">
	<aui-hero>
		<div auiHeroCard>
			<h1>Your app</h1>
			<a>Some link</a>
		</div>
		<div auiHeroCta>
			<div class="buttons">
				<a class="a-button">Home</a>
				<a class="a-button">Another page</a>
			</div>
		</div>
	</aui-hero>
</div>`;
}
