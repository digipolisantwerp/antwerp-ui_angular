import {InjectionToken} from '@angular/core';

import {ContextConfig} from './types/context.types';

export const CONTEXT_CONFIG: InjectionToken<ContextConfig> = new InjectionToken<ContextConfig>('contextConfig');

export const CONTEXT_CONFIG_DEFAULT: ContextConfig = {
  useTitleSuffix: false,
  extendTitle: false,
  titleDelimiter: ' | ',
  defaults: {},
  routerContext: true,
};
