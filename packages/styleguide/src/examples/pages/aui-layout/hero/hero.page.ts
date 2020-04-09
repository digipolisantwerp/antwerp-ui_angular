import {Component} from '@angular/core';

@Component({
  templateUrl: './hero.page.html',
})
export class LayoutHeroDemoPageComponent {
  public hero1 = `import { HeroModule } from '@acpaas-ui/ngx-layout';

@NgModule({
	imports: [
		HeroModule
	]
});

export class AppModule {};`;

  public hero2 = `<div class="u-margin-bottom u-margin-top">
	<aui-hero>
		<div auiHeroCard>
			<h1>App title</h1>
			<p class="u-margin-top-xs">Tag line</p>
		</div>
		<div auiHeroCta>
			<div class="buttons">
				<a class="a-button">Call to action</a>
			</div>
		</div>
	</aui-hero>
</div>`;
}
