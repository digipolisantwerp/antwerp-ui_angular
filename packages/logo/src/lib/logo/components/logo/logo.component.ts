import { Component, Input } from '@angular/core';

@Component({
  selector: 'aui-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input()
  title = 'Default';

  @Input()
  src = 'https://place-hold.it/170x170';

  @Input()
  link ? = '/';

  @Input()
  onClick?: Function;
}
