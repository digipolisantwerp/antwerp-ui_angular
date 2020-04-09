import {Component, Input} from '@angular/core';
import {Routes} from '@angular/router';

@Component({
  selector: 'guide-registry',
  templateUrl: './registry.component.html',
})
export class RegistryComponent {
  @Input() public items: Routes;
}
