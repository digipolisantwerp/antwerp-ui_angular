import {Component, Input} from '@angular/core';

export enum sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  R = 'R',
}

@Component({
  selector: 'aui-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent {
  public avatarSizes = {
    S: 'a-avatar--small',
    M: 'a-avatar--medium',
    L: 'a-avatar--large',
    R: '',
  };

  @Input() title = '';
  @Input() image: string;
  @Input() icon: string;
  @Input() letter: string;
  @Input() className = '';
  @Input() size: sizes = sizes.R;
}
