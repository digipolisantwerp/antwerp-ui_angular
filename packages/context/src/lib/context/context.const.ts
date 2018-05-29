import { InjectionToken } from '@angular/core';
import { ContextConfig } from './context';

export const CONTEXT_CONFIG: InjectionToken<ContextConfig> = new InjectionToken<ContextConfig>('contextConfig');
