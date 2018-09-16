import { Component, Input } from '@angular/core';

@Component({
  selector: 'aui-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() title = 'Placeholder';

  @Input() src = 'https://place-hold.it/192x192';

  @Input() link ? = '/';

  @Input() onClick?: Function;
}
