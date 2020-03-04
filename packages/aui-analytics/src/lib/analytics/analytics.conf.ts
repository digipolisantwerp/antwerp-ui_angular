import {InjectionToken} from '@angular/core';
import {GTMConfig} from './types/analytics.types';

export const GTM_CONFIG = new InjectionToken('GTM_CONFIG');

export const GTM_CONFIG_DEFAULT: GTMConfig = {
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
