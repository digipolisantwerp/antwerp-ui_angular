/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { interpolate } from '../utils/interpolation';
export class InterpolateLabelPipe {
    /**
     * @param {?} label
     * @param {?} replaceData
     * @return {?}
     */
    transform(label, replaceData) {
        if (!replaceData || !label) {
            return label;
        }
        return interpolate(label, replaceData);
    }
}
InterpolateLabelPipe.decorators = [
    { type: Pipe, args: [{
                name: 'interpolateLabel',
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJwb2xhdGUtbGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3V0aWxzLyIsInNvdXJjZXMiOlsibGliL2xhYmVscy9waXBlcy9pbnRlcnBvbGF0ZS1sYWJlbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFNckQsTUFBTTs7Ozs7O0lBQ0wsU0FBUyxDQUFDLEtBQWEsRUFBRSxXQUF3QjtRQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNiO1FBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDdkM7OztZQVZELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsa0JBQWtCO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpbnRlcnBvbGF0ZSB9IGZyb20gJy4uL3V0aWxzL2ludGVycG9sYXRpb24nO1xuaW1wb3J0IHsgUmVwbGFjZURhdGEsIExhYmVsIH0gZnJvbSAnLi4vdHlwZXMvbGFiZWxzLnR5cGVzJztcblxuQFBpcGUoe1xuXHRuYW1lOiAnaW50ZXJwb2xhdGVMYWJlbCcsXG59KVxuZXhwb3J0IGNsYXNzIEludGVycG9sYXRlTGFiZWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cdHRyYW5zZm9ybShsYWJlbDogc3RyaW5nLCByZXBsYWNlRGF0YTogUmVwbGFjZURhdGEpOiBzdHJpbmcge1xuXHRcdGlmICghcmVwbGFjZURhdGEgfHwgIWxhYmVsKSB7XG5cdFx0XHRyZXR1cm4gbGFiZWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGludGVycG9sYXRlKGxhYmVsLCByZXBsYWNlRGF0YSk7XG5cdH1cbn1cbiJdfQ==