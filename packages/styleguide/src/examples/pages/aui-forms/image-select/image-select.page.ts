import { Component } from '@angular/core';
import { ImageSelectChoice } from '../../../../../../ngx-forms/src/lib/image-select/types/image-select.types';

@Component({
  templateUrl: './image-select.page.html',
})
export class ImageSelectDemoPageComponent {

  public javascript1 = `import { ImageSelectModule } from '@acpaas-ui/ngx-image-select';

@NgModule({
	imports: [
		ImageSelectModule
	]
});

export class AppModule {};`;
  public javascript2 = `
 public fruits: ImageSelectChoice[] = [
    {
      label: 'Kiwi',
      key: 'kiwi',
      alt: 'Kiwi',
      url: 'url to image here'
    },
    {
      label: 'Apple',
      key: 'apple',
      alt: 'Apple',
      url: 'url to image here'
      },
    {
      label: 'Raspberry',
      key: 'raspberry',
      alt: 'Raspberry',
      url: 'url to image here'
     },
  ];

  public selectedImageKeys: string[] = [];

  prettyPrint(selectedImageKeys: string[]): string {
    return selectedImageKeys
      .map(selected => this.fruits.find(fruit => fruit.key === selected).label)
      .toString();
  }
`;

  public html = ` <h3 class="h4 u-margin-bottom">Select your favorite fruits</h3>
  <div class="u-container">
    <aui-image-select [(ngModel)]="selectedImageKeys" [disabled]="isDisabled" [choices]="fruits" [maxSelectable]="2">
    </aui-image-select>
  </div>
  <p class="u-margin-top"><strong>Active fruits</strong>: {{ prettyPrint(selectedImageKeys)}}</p>`;

  public fruits: ImageSelectChoice[] = [
    {
      label: 'Kiwi',
      key: 'kiwi',
      alt: 'Kiwi',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1591796079433-7f41b45eb95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2004&q=80'
    },
    {
      label: 'Apple',
      key: 'apple',
      alt: 'Apple',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      label: 'Raspberry',
      key: 'raspberry',
      alt: 'Raspberry',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
    }
  ];
  public selectedImageKeys: string[] = [];
  public isDisabled = false;

  prettyPrint(selectedImageKeys: string[]): string {
    return selectedImageKeys
      .map(selected => this.fruits.find(fruit => fruit.key === selected).label)
      .toString();
  }
}
