import { Component, Input } from '@angular/core';

export enum sizes {
  S = 'S',
  M = 'M',
  L = 'L',
}
@Component({
  selector: 'aui-avatar',
  templateUrl: './avatar.component.html',

})
export class AvatarComponent {
  @Input() title = '';
  @Input() image: string;
  @Input() icon: string;
  @Input() letter: string = '';
  @Input() className = '';
  @Input() size: sizes = sizes.M;
  @Input() rounded: boolean = false;       

  public avatarSizes = {
    S: 'a-avatar--s',
    M: '',
    L: 'a-avatar--l',
  };
  
}