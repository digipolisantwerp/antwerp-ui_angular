/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { WYSIWYG_DEFAULT_CONFIG } from '../../wysiwyg.conf';
var WysiwygComponent = /** @class */ (function () {
    function WysiwygComponent() {
        this.setClass = true;
        this.basic = false;
        this.emitContent = new EventEmitter();
        this.ckeditorConfig = WYSIWYG_DEFAULT_CONFIG;
        this.updateModel = function () { };
    }
    // NG_VALUE_ACCESSOR_INTERFACE
    /**
     * @param {?} value
     * @return {?}
     */
    WysiwygComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.ckeditorContent = value;
        this.updateModel(value);
        this.emitContent.emit(this.ckeditorContent);
    };
    /**
     * @param {?} onChange
     * @return {?}
     */
    WysiwygComponent.prototype.registerOnChange = /**
     * @param {?} onChange
     * @return {?}
     */
    function (onChange) {
        this.updateModel = onChange;
    };
    /**
     * @return {?}
     */
    WysiwygComponent.prototype.registerOnTouched = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    WysiwygComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setConfig();
        if (!this.ckeditorContent) {
            this.ckeditorContent = this.placeholder;
        }
    };
    /**
     * @return {?}
     */
    WysiwygComponent.prototype.setConfig = /**
     * @return {?}
     */
    function () {
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
    };
    WysiwygComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-wysiwyg',
                    template: "<div class=\"aui-wysiwyg__inner\">\n    <ckeditor [(ngModel)]=\"ckeditorContent\" [config]=\"ckeditorConfig\" [debounce]=\"debounce\" (ngModelChange)=\"writeValue($event)\"></ckeditor>\n</div>\n",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return WysiwygComponent; }),
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
    return WysiwygComponent;
}());
export { WysiwygComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXd5Zy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi93eXNpd3lnL2NvbXBvbmVudHMvd3lzaXd5Zy93eXNpd3lnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixXQUFXLEVBRVgsVUFBVSxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHTixpQkFBaUIsRUFFakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQ04sc0JBQXNCLEVBQ3RCLE1BQU0sb0JBQW9CLENBQUM7Ozt3QkFla0IsSUFBSTtxQkFJaEMsS0FBSzsyQkFPd0IsSUFBSSxZQUFZLEVBQUU7OEJBR3hDLHNCQUFzQjsyQkFFZCxlQUFROztJQUV4Qyw4QkFBOEI7Ozs7O0lBQzlCLHFDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQzVDOzs7OztJQUVELDJDQUFnQjs7OztJQUFoQixVQUFpQixRQUFrQjtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztLQUM1Qjs7OztJQUVELDRDQUFpQjs7O0lBQWpCLGVBQTRCOzs7O0lBRXJCLG1DQUFROzs7O1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3hDOzs7OztJQUdNLG9DQUFTOzs7O1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4QztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN0QztZQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3JEO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDL0Q7U0FDRDs7O2dCQXZFRixTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxvTUFHVjtvQkFDQSxTQUFTLEVBQUUsQ0FBQzs0QkFDWCxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsQ0FBQzs7NEJBQy9DLEtBQUssRUFBRSxJQUFJO3lCQUNYLENBQUM7aUJBQ0Y7OzsyQkFFQyxXQUFXLFNBQUMsbUJBQW1CO29DQUUvQixLQUFLO2dDQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFFTCxLQUFLOzhCQUVMLE1BQU07OzJCQTVDUjs7U0FnQ2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdEhvc3RCaW5kaW5nLFxuXHRPbkluaXQsXG5cdGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuXHRDb250cm9sVmFsdWVBY2Nlc3Nvcixcblx0Rm9ybUNvbnRyb2wsXG5cdE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHROR19WQUxJREFUT1JTXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0V1lTSVdZR19ERUZBVUxUX0NPTkZJR1xufSBmcm9tICcuLi8uLi93eXNpd3lnLmNvbmYnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktd3lzaXd5ZycsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS13eXNpd3lnX19pbm5lclwiPlxuICAgIDxja2VkaXRvciBbKG5nTW9kZWwpXT1cImNrZWRpdG9yQ29udGVudFwiIFtjb25maWddPVwiY2tlZGl0b3JDb25maWdcIiBbZGVib3VuY2VdPVwiZGVib3VuY2VcIiAobmdNb2RlbENoYW5nZSk9XCJ3cml0ZVZhbHVlKCRldmVudClcIj48L2NrZWRpdG9yPlxuPC9kaXY+XG5gLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0dXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gV3lzaXd5Z0NvbXBvbmVudCksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZm9yd2FyZC1yZWZcblx0XHRtdWx0aTogdHJ1ZSxcblx0fV0sXG59KVxuZXhwb3J0IGNsYXNzIFd5c2l3eWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QEhvc3RCaW5kaW5nKCdjbGFzcy5hdWktd3lzaXd5ZycpIHNldENsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBhZGRpdGlvbmFsU3R5bGluZzogc3RyaW5nW107XG5cdEBJbnB1dCgpIGF2YWlsYWJsZVRhZ3M6IHN0cmluZztcblx0QElucHV0KCkgYmFzaWMgPSBmYWxzZTtcblx0QElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcblx0QElucHV0KCkgdWlDb2xvdXI6IHN0cmluZztcblx0QElucHV0KCkgZGVib3VuY2U6IG51bWJlcjtcblxuXHRASW5wdXQoKSBjdXN0b21Db25maWc6IGFueTtcblxuXHRAT3V0cHV0KCkgZW1pdENvbnRlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBja2VkaXRvckNvbnRlbnQ6IHN0cmluZztcblx0cHVibGljIGNrZWRpdG9yQ29uZmlnID0gV1lTSVdZR19ERUZBVUxUX0NPTkZJRztcblxuXHRwcml2YXRlIHVwZGF0ZU1vZGVsOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG5cdC8vIE5HX1ZBTFVFX0FDQ0VTU09SX0lOVEVSRkFDRVxuXHR3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNrZWRpdG9yQ29udGVudCA9IHZhbHVlO1xuXHRcdHRoaXMudXBkYXRlTW9kZWwodmFsdWUpO1xuXHRcdHRoaXMuZW1pdENvbnRlbnQuZW1pdCh0aGlzLmNrZWRpdG9yQ29udGVudCk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlOiBGdW5jdGlvbik6IHZvaWQge1xuXHRcdHRoaXMudXBkYXRlTW9kZWwgPSBvbkNoYW5nZTtcblx0fVxuXG5cdHJlZ2lzdGVyT25Ub3VjaGVkKCk6IHZvaWQge31cblxuXHRwdWJsaWMgbmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zZXRDb25maWcoKTtcblxuXHRcdGlmICghdGhpcy5ja2VkaXRvckNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY2tlZGl0b3JDb250ZW50ID0gdGhpcy5wbGFjZWhvbGRlcjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHNldENvbmZpZygpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5jdXN0b21Db25maWcpIHtcblx0XHRcdHRoaXMuY2tlZGl0b3JDb25maWcgPSB0aGlzLmN1c3RvbUNvbmZpZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuYmFzaWMpIHtcblx0XHRcdFx0dGhpcy5ja2VkaXRvckNvbmZpZy50b29sYmFyID0gJ0Jhc2ljJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlVGFncykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLmZvcm1hdF90YWdzID0gdGhpcy5hdmFpbGFibGVUYWdzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy51aUNvbG91cikge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLnVpQ29sb3IgPSB0aGlzLnVpQ29sb3VyO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5hZGRpdGlvbmFsU3R5bGluZykge1xuXHRcdFx0XHR0aGlzLmNrZWRpdG9yQ29uZmlnLmNvbnRlbnRzQ3NzLmNvbmNhdCh0aGlzLmFkZGl0aW9uYWxTdHlsaW5nKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ==