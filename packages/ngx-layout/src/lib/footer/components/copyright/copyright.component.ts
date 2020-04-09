import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'aui-copyright',
  templateUrl: './copyright.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent {
  @Input() domain?: string;

  public currentYear = new Date().getFullYear();
}
