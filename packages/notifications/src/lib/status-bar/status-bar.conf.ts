import { InjectionToken } from '@angular/core';

import { StatusbarAvailableTypes } from './types/status-bar.types';

export const STATUSBAR_AVAILABLE_TYPES = new InjectionToken<StatusbarAvailableTypes>('availableTypes');

export const STATUSBAR_DEFAULT_TYPES: StatusbarAvailableTypes = {
	I: {
		type: 'info',
		icon: 'fa fa-info',
		classList: 'info',
	},
	E: {
		type: 'error',
		icon: 'fa fa-warning',
		classList: 'error',
	},
	W: {
		type: 'warning',
		icon: 'fa fa-warning',
		classList: 'warning',
	},
	S: {
		type: 'success',
		icon: 'fa fa-check',
		classList: 'success',
	},
	N: {
		type: 'notification',
		icon: 'fa fa-bell-o',
		classList: 'notification',
	},
};
