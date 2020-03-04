export interface StatusbarNotificationType {
	type?: string;
	icon?: string;
	classList?: string;
}

export interface StatusbarAvailableTypes {
	[key: string]: StatusbarNotificationType;
}
