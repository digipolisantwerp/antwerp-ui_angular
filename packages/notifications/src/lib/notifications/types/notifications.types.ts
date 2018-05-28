export interface Notification {
	handle: string;
	type: string;
	target: string;
	message: string;
	scope: string;
	timer: number;
}

export interface Notifications {
	[key: string]: Notification[];
}

export interface NotificationsMessages {
	[key: string]: string;
}

export interface NotificationsOptions {
	allowOverrides?: boolean;
	defaultHandle?: string;
	defaultTarget?: string;
	defaultMessage?: string;
	defaultScope?: string;
	defaultTimer?: number;
}
