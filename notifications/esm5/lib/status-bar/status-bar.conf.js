/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { InjectionToken } from '@angular/core';
export var /** @type {?} */ STATUSBAR_AVAILABLE_TYPES = new InjectionToken('availableTypes');
export var /** @type {?} */ STATUSBAR_DEFAULT_TYPES = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5jb25mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zdGF0dXMtYmFyL3N0YXR1cy1iYXIuY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvQyxNQUFNLENBQUMscUJBQU0seUJBQXlCLEdBQUcsSUFBSSxjQUFjLENBQTBCLGdCQUFnQixDQUFDLENBQUM7QUFFdkcsTUFBTSxDQUFDLHFCQUFNLHVCQUF1QixHQUE0QjtJQUMvRCxDQUFDLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsQ0FBQyxFQUFFO1FBQ0YsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsZUFBZTtRQUNyQixTQUFTLEVBQUUsT0FBTztLQUNsQjtJQUNELENBQUMsRUFBRTtRQUNGLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLGVBQWU7UUFDckIsU0FBUyxFQUFFLFNBQVM7S0FDcEI7SUFDRCxDQUFDLEVBQUU7UUFDRixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxhQUFhO1FBQ25CLFNBQVMsRUFBRSxTQUFTO0tBQ3BCO0lBQ0QsQ0FBQyxFQUFFO1FBQ0YsSUFBSSxFQUFFLGNBQWM7UUFDcEIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsU0FBUyxFQUFFLGNBQWM7S0FDekI7Q0FDRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgfSBmcm9tICcuL3R5cGVzL3N0YXR1cy1iYXIudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgU1RBVFVTQkFSX0FWQUlMQUJMRV9UWVBFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTdGF0dXNiYXJBdmFpbGFibGVUeXBlcz4oJ2F2YWlsYWJsZVR5cGVzJyk7XG5cbmV4cG9ydCBjb25zdCBTVEFUVVNCQVJfREVGQVVMVF9UWVBFUzogU3RhdHVzYmFyQXZhaWxhYmxlVHlwZXMgPSB7XG5cdEk6IHtcblx0XHR0eXBlOiAnaW5mbycsXG5cdFx0aWNvbjogJ2ZhIGZhLWluZm8nLFxuXHRcdGNsYXNzTGlzdDogJ2luZm8nLFxuXHR9LFxuXHRFOiB7XG5cdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRpY29uOiAnZmEgZmEtd2FybmluZycsXG5cdFx0Y2xhc3NMaXN0OiAnZXJyb3InLFxuXHR9LFxuXHRXOiB7XG5cdFx0dHlwZTogJ3dhcm5pbmcnLFxuXHRcdGljb246ICdmYSBmYS13YXJuaW5nJyxcblx0XHRjbGFzc0xpc3Q6ICd3YXJuaW5nJyxcblx0fSxcblx0Uzoge1xuXHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRpY29uOiAnZmEgZmEtY2hlY2snLFxuXHRcdGNsYXNzTGlzdDogJ3N1Y2Nlc3MnLFxuXHR9LFxuXHROOiB7XG5cdFx0dHlwZTogJ25vdGlmaWNhdGlvbicsXG5cdFx0aWNvbjogJ2ZhIGZhLWJlbGwtbycsXG5cdFx0Y2xhc3NMaXN0OiAnbm90aWZpY2F0aW9uJyxcblx0fSxcbn07XG4iXX0=