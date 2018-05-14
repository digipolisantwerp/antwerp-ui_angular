export interface StatusbarNotificationType {
    type?: string;
    icon?: string;
    classList?: string;
}

export interface StatusbarAvailableTypes {
    [key: string]: StatusbarNotificationType;
}

export interface StatusbarNotification {
    timer?: number;
    scope?: string;
    message?: string;
    handle?: string;
    target?: string;
}
