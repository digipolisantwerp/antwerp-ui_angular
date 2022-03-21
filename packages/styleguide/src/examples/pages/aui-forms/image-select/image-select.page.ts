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
      label: 'Lemon',
      key: 'lemon',
      alt: 'Lemon',
      url: 'url to image here'
      },
    {
      label: 'Orange',
      key: 'orange',
      alt: 'Orange',
      url: 'url to image here'
     },
     {
      label: 'Watermelon',
      key: 'watermelon',
      alt: 'Watermelon',
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
      url: 'https://images.unsplash.com/photo-1587334106914-b90ecebe9845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
    },
    {
      label: 'Lemon',
      key: 'lemon',
      alt: 'lemon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'
    },
    {
      label: 'Orange',
      key: 'orange',
      alt: 'Orange',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'
    },
    {
      label: 'Watermelon',
      key: 'watermelon',
      alt: 'Watermelon',
      // tslint:disable-next-line:max-line-length
      url: 'https://images.unsplash.com/photo-1581074817932-af423ba4566e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'
    }
  ];
  public selectedImageKeys: string[] = [];
  public isDisabled = false;

  prettyPrint(selectedImageKeys: string[]): string {
    return selectedImageKeys
      .map(selected => this.fruits.find(fruit => fruit.key === selected).label)
      .join(', ');
  }
}
