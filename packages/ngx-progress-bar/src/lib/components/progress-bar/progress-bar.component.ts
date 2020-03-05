import {Component, Input} from '@angular/core';

@Component({
  selector: 'aui-progress-bar',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
  @Input() public value = 0;
  @Input() public max = 0;

  public calcProgress() {
    if (this.max > 0 && this.value > 0) {
      const res = (this.value / this.max);
      return Math.floor(res * 100) + '%';
    }

    return 0;
  }
}
