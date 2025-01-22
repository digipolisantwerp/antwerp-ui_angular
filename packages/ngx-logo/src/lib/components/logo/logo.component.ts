import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aui-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() title = 'Ga naar homepage.';
  @Input() src = 'https://cdn.antwerpen.be/core_branding_scss/7.0.0-beta.6/assets/images/a-logo.svg';
  @Input() link?: string;
  @Input() onClick?: (event: MouseEvent) => void;

  constructor(
    private router: Router
  ) {
  }

  public logoClicked(event) {
    event.preventDefault();
    if (this.link && this.link !== '#') {
      if (!event.metaKey) {
        this.router.navigate([this.link]);
      } else {
        this.router.navigate([]).then(result => {
          window.open(this.link, '_blank');
        });
      }
    }
    if (this.onClick) {
      this.onClick(event);
    }
  }
}
