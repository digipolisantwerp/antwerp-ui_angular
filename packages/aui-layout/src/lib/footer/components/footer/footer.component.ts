import {AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild} from '@angular/core';

import {FooterContentDirective} from '../../directives/content.directive';

@Component({
  selector: 'aui-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements AfterContentChecked {
  @ContentChild(FooterContentDirective, {static: true}) footerContent: FooterContentDirective;
  public isExtended = false;

  constructor(private ref: ChangeDetectorRef) {
  }

  ngAfterContentChecked() {
    const hasCols = this.footerContent !== undefined;
    const shouldUpdate = hasCols !== this.isExtended;

    if (shouldUpdate) {
      this.isExtended = hasCols;
      this.ref.markForCheck();
    }
  }
}
