import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';
import {Toast} from 'ngx-toastr';

@Component({
  selector: 'aui-notification',
  styleUrls: ['./notification.component.scss'],
  templateUrl: './notification.component.html',
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        opacity: 0,
      })),
      /**
       * Animation properties shamelessly copied from core branding, since we don't use CSS custom properties yet
       */
      transition('inactive => active', animate('250ms ease-in-out', keyframes([
        style({
          transform: 'translate(100%, 0)',
          opacity: 0,
        }),
        style({
          transform: 'none',
          opacity: 1,
        }),
      ]))),
      transition('active => removed', animate('300ms ease-in-out', keyframes([
        style({
          opacity: 1,
        }),
        style({
          transform: 'translate(100%, 0)',
          opacity: 0,
        }),
      ]))),
    ]),
  ],
  preserveWhitespaces: false,
})
export class NotificationComponent extends Toast {
}
