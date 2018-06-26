/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, ContentChild, ViewEncapsulation, } from '@angular/core';
import { LeafletMap } from '../../classes/leaflet-map';
import { LeafletFullscreenControlComponent } from '../controls/leaflet-fullscreen-control/leaflet-fullscreen-control.component';
import { LeafletZoomControlComponent } from '../controls/leaflet-zoom-control/leaflet-zoom-control.component';
import { LeafletLocateControlComponent } from '../controls/leaflet-locate-control/leaflet-locate-control.component';
import { LeafletDragControlComponent } from '../controls/leaflet-drag-control/leaflet-drag-control.component';
import { LeafletDrawControlComponent } from '../controls/leaflet-draw-control/leaflet-draw-control.component';
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent() {
    }
    /**
     * @return {?}
     */
    LeafletComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Make sure the map is properly rendered before initializing it
        setTimeout(function () {
            _this.leafletMap.init(_this.map.nativeElement);
        });
    };
    /**
     * @return {?}
     */
    LeafletComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        [
            this.fullScreenControl,
            this.zoomControl,
            this.locateControl,
            this.dragControl,
            this.drawControl,
        ].forEach(function (control) { return control ? control.map = _this.leafletMap : null; });
    };
    LeafletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet',
                    template: "<div class=\"aui-leaflet\" [ngClass]=\"{'is-full-screen': leafletMap.fullScreen}\">\n\t<div class=\"aui-leaflet__content\" [ngClass]=\"{'has-content': hasSidebar}\" #content>\n\t\t<ng-content></ng-content>\n\t</div>\n\t<div class=\"aui-leaflet__wrapper\">\n\t\t<div #map class=\"aui-leaflet__map\"></div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-left\">\n\t\t\t<ng-content select=\"[controls][top][left]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--top-right\">\n\t\t\t<ng-content select=\"[controls][top][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-right\">\n\t\t\t<ng-content select=\"[controls][bottom][right]\"></ng-content>\n\t\t</div>\n\t\t<div class=\"aui-leaflet__controls aui-leaflet__controls--bottom-left\">\n\t\t\t<ng-content select=\"[controls][bottom][left]\"></ng-content>\n\t\t</div>\n\t</div>\n</div>\n",
                    styles: [".aui-leaflet{border:1px solid #b0b0b0;display:flex;height:600px;width:100%}.aui-leaflet__wrapper{flex:1;height:100%;overflow:hidden;position:relative}.aui-leaflet.is-full-screen{border:none;bottom:0;position:fixed;height:100%;left:0;right:0;top:0;z-index:10}.aui-leaflet__map{font-size:inherit;font-family:inherit;height:100%;position:relative;z-index:1}.aui-leaflet__content{background-color:#fff;overflow:auto;width:0}.aui-leaflet.is-full-screen .aui-leaflet__content{border:1px solid #b0b0b0;box-shadow:7px 7px 0 rgba(0,0,0,.1);position:absolute;left:20px;max-height:calc(100% - 160px);top:20px;width:350px;z-index:2}.aui-leaflet__content.has-content{border-right:1px solid #b0b0b0;padding:20px;width:300px}.aui-leaflet__controls{position:absolute;z-index:2}.aui-leaflet__controls--bottom-left{bottom:20px;left:20px}.aui-leaflet__controls--bottom-right{bottom:20px;right:20px}.aui-leaflet__controls--top-left{left:20px;top:20px}.aui-leaflet.is-full-screen .aui-leaflet__controls--top-left{left:390px}.aui-leaflet__controls--top-right{right:20px;top:20px}.aui-leaflet__control{float:left}.aui-leaflet__controls--top-left .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-bottom:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--bottom-right .aui-leaflet__control{margin-top:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--top-left .aui-leaflet__control{margin-right:5px}.aui-leaflet__controls--bottom-right .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-left:5px}.aui-leaflet__zoom-control{display:block}.aui-leaflet__html-icon{background-color:transparent;border:none}.leaflet-popup-content-wrapper{border:1px solid #f3f3f3!important;border-radius:0!important;box-shadow:.5rem .5rem 0 rgba(0,0,0,.1)!important;position:relative}.leaflet-popup-content-wrapper::after{content:'';position:absolute;bottom:-1px;height:1px;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.leaflet-popup-content{margin:10px!important;font-size:14px}.leaflet-container{font-family:inherit!important}.leaflet-popup-close-button{right:5px!important;top:5px!important;z-index:1}"],
                    // @todo: move this to aui-kit/core branding? check with styleguide team
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
    LeafletComponent.propDecorators = {
        map: [{ type: ViewChild, args: ['map',] }],
        content: [{ type: ViewChild, args: ['content',] }],
        fullScreenControl: [{ type: ContentChild, args: [LeafletFullscreenControlComponent,] }],
        zoomControl: [{ type: ContentChild, args: [LeafletZoomControlComponent,] }],
        locateControl: [{ type: ContentChild, args: [LeafletLocateControlComponent,] }],
        dragControl: [{ type: ContentChild, args: [LeafletDragControlComponent,] }],
        drawControl: [{ type: ContentChild, args: [LeafletDrawControlComponent,] }],
        leafletMap: [{ type: Input }],
        hasSidebar: [{ type: Input }]
    };
    return LeafletComponent;
}());
export { LeafletComponent };
function LeafletComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LeafletComponent.prototype.map;
    /** @type {?} */
    LeafletComponent.prototype.content;
    /** @type {?} */
    LeafletComponent.prototype.fullScreenControl;
    /** @type {?} */
    LeafletComponent.prototype.zoomControl;
    /** @type {?} */
    LeafletComponent.prototype.locateControl;
    /** @type {?} */
    LeafletComponent.prototype.dragControl;
    /** @type {?} */
    LeafletComponent.prototype.drawControl;
    /** @type {?} */
    LeafletComponent.prototype.leafletMap;
    /** @type {?} */
    LeafletComponent.prototype.hasSidebar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAvIiwic291cmNlcyI6WyJsaWIvbGVhZmxldC9jb21wb25lbnRzL2xlYWZsZXQvbGVhZmxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLGlCQUFpQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDaEksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7Ozs7Ozs7SUF1QzdHLDBDQUFlOzs7SUFBZjtRQUFBLGlCQUtDOztRQUhBLFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0tBQ0g7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQVFDO1FBUEE7WUFDQyxJQUFJLENBQUMsaUJBQWlCO1lBQ3RCLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxXQUFXO1NBQ2hCLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0tBQ3JFOztnQkFwREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsMDdCQW9CVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyxtdEVBQW10RSxDQUFDOztvQkFDN3RFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7O3NCQUVDLFNBQVMsU0FBQyxLQUFLOzBCQUNmLFNBQVMsU0FBQyxTQUFTO29DQUNuQixZQUFZLFNBQUMsaUNBQWlDOzhCQUM5QyxZQUFZLFNBQUMsMkJBQTJCO2dDQUN4QyxZQUFZLFNBQUMsNkJBQTZCOzhCQUMxQyxZQUFZLFNBQUMsMkJBQTJCOzhCQUN4QyxZQUFZLFNBQUMsMkJBQTJCOzZCQUN4QyxLQUFLOzZCQUNMLEtBQUs7OzJCQXJEUDs7U0E0Q2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0QWZ0ZXJWaWV3SW5pdCxcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0Vmlld0NoaWxkLFxuXHRDb250ZW50Q2hpbGQsXG5cdEFmdGVyQ29udGVudEluaXQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGVhZmxldE1hcCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvbGVhZmxldC1tYXAnO1xuaW1wb3J0IHsgTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbHMvbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wvbGVhZmxldC1mdWxsc2NyZWVuLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtem9vbS1jb250cm9sL2xlYWZsZXQtem9vbS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wvbGVhZmxldC1sb2NhdGUtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vY29udHJvbHMvbGVhZmxldC1kcmFnLWNvbnRyb2wvbGVhZmxldC1kcmFnLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZHJhdy1jb250cm9sL2xlYWZsZXQtZHJhdy1jb250cm9sLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0Jyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRcIiBbbmdDbGFzc109XCJ7J2lzLWZ1bGwtc2NyZWVuJzogbGVhZmxldE1hcC5mdWxsU2NyZWVufVwiPlxuXHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRlbnRcIiBbbmdDbGFzc109XCJ7J2hhcy1jb250ZW50JzogaGFzU2lkZWJhcn1cIiAjY29udGVudD5cblx0XHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX3dyYXBwZXJcIj5cblx0XHQ8ZGl2ICNtYXAgY2xhc3M9XCJhdWktbGVhZmxldF9fbWFwXCI+PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0XCI+XG5cdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbY29udHJvbHNdW3RvcF1bbGVmdF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1yaWdodFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVt0b3BdW3JpZ2h0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2xzIGF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLXJpZ2h0XCI+XG5cdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJbY29udHJvbHNdW2JvdHRvbV1bcmlnaHRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tbGVmdFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVtib3R0b21dW2xlZnRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcblx0c3R5bGVzOiBbYC5hdWktbGVhZmxldHtib3JkZXI6MXB4IHNvbGlkICNiMGIwYjA7ZGlzcGxheTpmbGV4O2hlaWdodDo2MDBweDt3aWR0aDoxMDAlfS5hdWktbGVhZmxldF9fd3JhcHBlcntmbGV4OjE7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5hdWktbGVhZmxldC5pcy1mdWxsLXNjcmVlbntib3JkZXI6bm9uZTtib3R0b206MDtwb3NpdGlvbjpmaXhlZDtoZWlnaHQ6MTAwJTtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDt6LWluZGV4OjEwfS5hdWktbGVhZmxldF9fbWFwe2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtZmFtaWx5OmluaGVyaXQ7aGVpZ2h0OjEwMCU7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxfS5hdWktbGVhZmxldF9fY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3ZlcmZsb3c6YXV0bzt3aWR0aDowfS5hdWktbGVhZmxldC5pcy1mdWxsLXNjcmVlbiAuYXVpLWxlYWZsZXRfX2NvbnRlbnR7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2JveC1zaGFkb3c6N3B4IDdweCAwIHJnYmEoMCwwLDAsLjEpO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MjBweDttYXgtaGVpZ2h0OmNhbGMoMTAwJSAtIDE2MHB4KTt0b3A6MjBweDt3aWR0aDozNTBweDt6LWluZGV4OjJ9LmF1aS1sZWFmbGV0X19jb250ZW50Lmhhcy1jb250ZW50e2JvcmRlci1yaWdodDoxcHggc29saWQgI2IwYjBiMDtwYWRkaW5nOjIwcHg7d2lkdGg6MzAwcHh9LmF1aS1sZWFmbGV0X19jb250cm9sc3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjJ9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnR7Ym90dG9tOjIwcHg7bGVmdDoyMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodHtib3R0b206MjBweDtyaWdodDoyMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0e2xlZnQ6MjBweDt0b3A6MjBweH0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW4gLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnR7bGVmdDozOTBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHR7cmlnaHQ6MjBweDt0b3A6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2x7ZmxvYXQ6bGVmdH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tYm90dG9tOjVweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tbGVmdCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tdG9wOjVweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tbGVmdCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9se21hcmdpbi1yaWdodDo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbCwuYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHQgLmF1aS1sZWFmbGV0X19jb250cm9se21hcmdpbi1sZWZ0OjVweH0uYXVpLWxlYWZsZXRfX3pvb20tY29udHJvbHtkaXNwbGF5OmJsb2NrfS5hdWktbGVhZmxldF9faHRtbC1pY29ue2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmV9LmxlYWZsZXQtcG9wdXAtY29udGVudC13cmFwcGVye2JvcmRlcjoxcHggc29saWQgI2YzZjNmMyFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudDtib3gtc2hhZG93Oi41cmVtIC41cmVtIDAgcmdiYSgwLDAsMCwuMSkhaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlfS5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcjo6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206LTFweDtoZWlnaHQ6MXB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3dpZHRoOjIycHh9LmxlYWZsZXQtcG9wdXAtY29udGVudHttYXJnaW46MTBweCFpbXBvcnRhbnQ7Zm9udC1zaXplOjE0cHh9LmxlYWZsZXQtY29udGFpbmVye2ZvbnQtZmFtaWx5OmluaGVyaXQhaW1wb3J0YW50fS5sZWFmbGV0LXBvcHVwLWNsb3NlLWJ1dHRvbntyaWdodDo1cHghaW1wb3J0YW50O3RvcDo1cHghaW1wb3J0YW50O3otaW5kZXg6MX1gXSwgLy8gQHRvZG86IG1vdmUgdGhpcyB0byBhdWkta2l0L2NvcmUgYnJhbmRpbmc/IGNoZWNrIHdpdGggc3R5bGVndWlkZSB0ZWFtXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblx0QFZpZXdDaGlsZCgnbWFwJykgbWFwOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0RnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQpIGZ1bGxTY3JlZW5Db250cm9sOiBMZWFmbGV0RnVsbHNjcmVlbkNvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldFpvb21Db250cm9sQ29tcG9uZW50KSB6b29tQ29udHJvbDogTGVhZmxldFpvb21Db250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXRMb2NhdGVDb250cm9sQ29tcG9uZW50KSBsb2NhdGVDb250cm9sOiBMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQpIGRyYWdDb250cm9sOiBMZWFmbGV0RHJhZ0NvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50KSBkcmF3Q29udHJvbDogTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50O1xuXHRASW5wdXQoKSBsZWFmbGV0TWFwOiBMZWFmbGV0TWFwO1xuXHRASW5wdXQoKSBoYXNTaWRlYmFyO1xuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHQvLyBNYWtlIHN1cmUgdGhlIG1hcCBpcyBwcm9wZXJseSByZW5kZXJlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGl0XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmxlYWZsZXRNYXAuaW5pdCh0aGlzLm1hcC5uYXRpdmVFbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHRbXG5cdFx0XHR0aGlzLmZ1bGxTY3JlZW5Db250cm9sLFxuXHRcdFx0dGhpcy56b29tQ29udHJvbCxcblx0XHRcdHRoaXMubG9jYXRlQ29udHJvbCxcblx0XHRcdHRoaXMuZHJhZ0NvbnRyb2wsXG5cdFx0XHR0aGlzLmRyYXdDb250cm9sLFxuXHRcdF0uZm9yRWFjaChjb250cm9sID0+IGNvbnRyb2wgPyBjb250cm9sLm1hcCA9IHRoaXMubGVhZmxldE1hcCA6IG51bGwpO1xuXHR9XG59XG4iXX0=