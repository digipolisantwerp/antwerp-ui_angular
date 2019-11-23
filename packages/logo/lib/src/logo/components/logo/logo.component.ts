import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aui-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() title = 'Officieel Logo Antwerpen.';
  @Input() src = 'http://cdn.antwerpen.be/core_branding_scss/4.0.0/assets/images/a-logo.svg';
  @Input() link?: string;
  @Input() onClick?: Function;

  constructor(
  	private router: Router
  ) { }

  public logoClicked(event) {
  	event.preventDefault();
  	if (this.link && this.link !== '#') {
  		this.router.navigate([this.link]);
  	}
  	if (this.onClick) {
  		this.onClick(event);
  	}
  }
}
