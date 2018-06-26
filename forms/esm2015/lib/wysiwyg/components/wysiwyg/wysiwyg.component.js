/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { WYSIWYG_DEFAULT_CONFIG } from '../../wysiwyg.conf';
export class WysiwygComponent {
    constructor() {
        this.setClass = true;
        this.basic = false;
        this.emitContent = new EventEmitter();
        this.ckeditorConfig = WYSIWYG_DEFAULT_CONFIG;
        this.updateModel = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.ckeditorContent = value;
        this.updateModel(value);
        this.emitContent.emit(this.ckeditorContent);
    }
    /**
     * @param {?} onChange
     * @return {?}
     */
    registerOnChange(onChange) {
        this.updateModel = onChange;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setConfig();
        if (!this.ckeditorContent) {
            this.ckeditorContent = this.placeholder;
        }
    }
    /**
     * @return {?}
     */
    setConfig() {
        if (this.customConfig) {
            this.ckeditorConfig = this.customConfig;
        }
        else {
            if (this.basic) {
                this.ckeditorConfig.toolbar = 'Basic';
            }
            if (this.availableTags) {
                this.ckeditorConfig.format_tags = this.availableTags;
            }
            if (this.uiColour) {
                this.ckeditorConfig.uiColor = this.uiColour;
            }
            if (this.additionalStyling) {
                this.ckeditorConfig.contentsCss.concat(this.additionalStyling);
            }
        }
    }
}
WysiwygComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-wysiwyg',
                template: `<div class="aui-wysiwyg__inner">
    <ckeditor [(ngModel)]="ckeditorContent" [config]="ckeditorConfig" [debounce]="debounce" (ngModelChange)="writeValue($event)"></ckeditor>
</div>
`,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => WysiwygComponent),
                        // tslint:disable-line:no-forward-ref
                        multi: true,
                    }],
            },] },
];
WysiwygComponent.propDecorators = {
    setClass: [{ type: HostBinding, args: ['class.aui-wysiwyg',] }],
    additionalStyling: [{ type: Input }],
    availableTags: [{ type: Input }],
    basic: [{ type: Input }],
    placeholder: [{ type: Input }],
    uiColour: [{ type: Input }],
    debounce: [{ type: Input }],
    customConfig: [{ type: Input }],
    emitContent: [{ type: Output }]
};
function WysiwygComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    WysiwygComponent.prototype.setClass;
    /** @type {?} */
    WysiwygComponent.prototype.additionalStyling;
    /** @type {?} */
    WysiwygComponent.prototype.availableTags;
    /** @type {?} */
    WysiwygComponent.prototype.basic;
    /** @type {?} */
    WysiwygComponent.prototype.placeholder;
    /** @type {?} */
    WysiwygComponent.prototype.uiColour;
    /** @type {?} */
    WysiwygComponent.prototype.debounce;
    /** @type {?} */
    WysiwygComponent.prototype.customConfig;
    /** @type {?} */
    WysiwygComponent.prototype.emitContent;
    /** @type {?} */
    WysiwygComponent.prototype.ckeditorContent;
    /** @type {?} */
    WysiwygComponent.prototype.ckeditorConfig;
    /** @type {?} */
    WysiwygComponent.prototype.updateModel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXd5Zy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi93eXNpd3lnL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBRVgsVUFBVSxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTixpQkFBaUIsRUFFakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ04sc0JBQXNCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFjNUIsTUFBTTs7d0JBQ3dDLElBQUk7cUJBSWhDLEtBQUs7MkJBT3dCLElBQUksWUFBWSxFQUFFOzhCQUd4QyxzQkFBc0I7MkJBRWQsR0FBRyxFQUFFLElBQUc7Ozs7OztJQUd4QyxVQUFVLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUM1Qzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFrQjtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztLQUM1Qjs7OztJQUVELGlCQUFpQixNQUFXOzs7O0lBRXJCLFFBQVE7UUFDZCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7Ozs7O0lBR00sU0FBUztRQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDeEM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdEM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNyRDtZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzVDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Q7Ozs7WUF2RUYsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7OztDQUdWO2dCQUNBLFNBQVMsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7O3dCQUMvQyxLQUFLLEVBQUUsSUFBSTtxQkFDWCxDQUFDO2FBQ0Y7Ozt1QkFFQyxXQUFXLFNBQUMsbUJBQW1CO2dDQUUvQixLQUFLOzRCQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFFTCxLQUFLOzBCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDb21wb25lbnQsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdE9uSW5pdCxcblx0Zm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuXHRGb3JtQ29udHJvbCxcblx0TkdfVkFMVUVfQUNDRVNTT1IsXG5cdE5HX1ZBTElEQVRPUlNcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuXHRXWVNJV1lHX0RFRkFVTFRfQ09ORklHXG59IGZyb20gJy4uLy4uL3d5c2l3eWcuY29uZic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS13eXNpd3lnJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLXd5c2l3eWdfX2lubmVyXCI+XG4gICAgPGNrZWRpdG9yIFsobmdNb2RlbCldPVwiY2tlZGl0b3JDb250ZW50XCIgW2NvbmZpZ109XCJja2VkaXRvckNvbmZpZ1wiIFtkZWJvdW5jZV09XCJkZWJvdW5jZVwiIChuZ01vZGVsQ2hhbmdlKT1cIndyaXRlVmFsdWUoJGV2ZW50KVwiPjwvY2tlZGl0b3I+XG48L2Rpdj5cbmAsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBXeXNpd3lnQ29tcG9uZW50KSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1mb3J3YXJkLXJlZlxuXHRcdG11bHRpOiB0cnVlLFxuXHR9XSxcbn0pXG5leHBvcnQgY2xhc3MgV3lzaXd5Z0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmF1aS13eXNpd3lnJykgc2V0Q2xhc3MgPSB0cnVlO1xuXG5cdEBJbnB1dCgpIGFkZGl0aW9uYWxTdHlsaW5nOiBzdHJpbmdbXTtcblx0QElucHV0KCkgYXZhaWxhYmxlVGFnczogc3RyaW5nO1xuXHRASW5wdXQoKSBiYXNpYyA9IGZhbHNlO1xuXHRASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXHRASW5wdXQoKSB1aUNvbG91cjogc3RyaW5nO1xuXHRASW5wdXQoKSBkZWJvdW5jZTogbnVtYmVyO1xuXG5cdEBJbnB1dCgpIGN1c3RvbUNvbmZpZzogYW55O1xuXG5cdEBPdXRwdXQoKSBlbWl0Q29udGVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIGNrZWRpdG9yQ29udGVudDogc3RyaW5nO1xuXHRwdWJsaWMgY2tlZGl0b3JDb25maWcgPSBXWVNJV1lHX0RFRkFVTFRfQ09ORklHO1xuXG5cdHByaXZhdGUgdXBkYXRlTW9kZWw6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cblx0Ly8gTkdfVkFMVUVfQUNDRVNTT1JfSU5URVJGQUNFXG5cdHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY2tlZGl0b3JDb250ZW50ID0gdmFsdWU7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCh2YWx1ZSk7XG5cdFx0dGhpcy5lbWl0Q29udGVudC5lbWl0KHRoaXMuY2tlZGl0b3JDb250ZW50KTtcblx0fVxuXG5cdHJlZ2lzdGVyT25DaGFuZ2Uob25DaGFuZ2U6IEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy51cGRhdGVNb2RlbCA9IG9uQ2hhbmdlO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoKTogdm9pZCB7fVxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNldENvbmZpZygpO1xuXG5cdFx0aWYgKCF0aGlzLmNrZWRpdG9yQ29udGVudCkge1xuXHRcdFx0dGhpcy5ja2VkaXRvckNvbnRlbnQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0Q29uZmlnKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmN1c3RvbUNvbmZpZykge1xuXHRcdFx0dGhpcy5ja2VkaXRvckNvbmZpZyA9IHRoaXMuY3VzdG9tQ29uZmlnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5iYXNpYykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLnRvb2xiYXIgPSAnQmFzaWMnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5hdmFpbGFibGVUYWdzKSB7XG5cdFx0XHRcdHRoaXMuY2tlZGl0b3JDb25maWcuZm9ybWF0X3RhZ3MgPSB0aGlzLmF2YWlsYWJsZVRhZ3M7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnVpQ29sb3VyKSB7XG5cdFx0XHRcdHRoaXMuY2tlZGl0b3JDb25maWcudWlDb2xvciA9IHRoaXMudWlDb2xvdXI7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmFkZGl0aW9uYWxTdHlsaW5nKSB7XG5cdFx0XHRcdHRoaXMuY2tlZGl0b3JDb25maWcuY29udGVudHNDc3MuY29uY2F0KHRoaXMuYWRkaXRpb25hbFN0eWxpbmcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl19