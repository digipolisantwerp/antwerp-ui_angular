import {Component, Input} from '@angular/core';

@Component({
  selector: 'guide-hero',
  styleUrls: [
    './hero.component.scss',
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() title: string;
  @Input() description: string;
}
