import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'aui-subfooter',
  templateUrl: './subfooter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubFooterComponent {
  @Input() public ariaGoUpLabel = 'Ga terug naar boven';

  public goToTop() {
    window.scrollTo(0, 0);
  }
}
