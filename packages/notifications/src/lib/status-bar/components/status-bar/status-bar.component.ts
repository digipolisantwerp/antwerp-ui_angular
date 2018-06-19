import {
	Inject,
	Component,
	Input,
	Output,
	EventEmitter,
	OnChanges,
	ChangeDetectionStrategy
} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Notification } from '@acpaas-ui/js-notification-store';
import { Label } from '@acpaas-ui/ngx-components/utils';

import {
	STATUSBAR_AVAILABLE_TYPES,
} from '../../status-bar.conf';

@Component({
	selector: 'aui-statusbar',
	templateUrl: './status-bar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusbarComponent implements OnChanges {
	@Input() notifications: Notification[] = [];
	@Input() remainingMessage: Label = {
		singular: '%{remaining} more',
		plural: '%{remaining} more',
	};
	@Output() clearNotification = new EventEmitter();

	public activeNotification: Notification = null;
	public typeClasses: any = {};
	public iconMap: any = {};
	public replaceMap = {
		remaining: 0,
	};

	private notificationTimer;
	private scopeListener;

	constructor(
		@Inject(STATUSBAR_AVAILABLE_TYPES) private availableTypes,
		private router: Router
	) {
		Object.getOwnPropertyNames(availableTypes)
			.forEach(type => {
				this.typeClasses[type] = availableTypes[type].classList;
				this.iconMap[type] = availableTypes[type].icon;
			});
	}

	clearListeners() {
		if (this.notificationTimer) {
			clearTimeout(this.notificationTimer);
		}

		if (this.scopeListener) {
			this.scopeListener.unsubscribe();
		}
	}

	setListeners() {
		if (this.activeNotification.timer) {
			this.notificationTimer = setTimeout(this.onClearNotification.bind(this), this.activeNotification.timer);
		}

		if (this.activeNotification.scope === 'page') {
			this.scopeListener = this.router.events
				.pipe(
					filter(updatedRoute => {
						return updatedRoute instanceof NavigationStart;
					})
				)
				.subscribe((updatedRoute => {
					if (updatedRoute.url !== this.router.url) {
						this.onClearNotification();
					}
				}).bind(this));
		}
	}

	ngOnChanges() {
		this.clearListeners();

		if (Array.isArray(this.notifications) && !!this.notifications.length) {
			this.activeNotification = this.notifications.slice(-1)[0];
			this.replaceMap = {
				remaining: this.notifications.length - 1,
			};
		} else {
			this.activeNotification = null;
			this.replaceMap = {
				remaining: 0,
			};
		}

		if (this.activeNotification) {
			this.setListeners();
		}
	}

	onClearNotification() {
		this.clearNotification.emit(this.activeNotification);
	}
}
