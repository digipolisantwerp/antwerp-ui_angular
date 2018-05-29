import { OpaqueToken } from '@angular/core';

export const GTM_CONFIG = new OpaqueToken('GTM_CONFIG');

export interface GTMConfig {
	PAGE_VIEW: {
		TRIGGER: string;
	};
	EVENT: {
		TRIGGER: string;
		CATEGORY: string;
		ACTION: string;
		LABEL: string;
		VALUE: string;
	};
}

export const defaultGTMConfig: GTMConfig = {
	PAGE_VIEW: {
		TRIGGER: 'virtualPageView',
	},
	EVENT: {
		TRIGGER: 'eventTrigger',
		CATEGORY: 'eventCategory',
		ACTION: 'eventAction',
		LABEL: 'eventLabel',
		VALUE: 'eventValue',
	},
};
