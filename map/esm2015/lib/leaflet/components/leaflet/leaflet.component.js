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
export class LeafletComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Make sure the map is properly rendered before initializing it
        setTimeout(() => {
            this.leafletMap.init(this.map.nativeElement);
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        [
            this.fullScreenControl,
            this.zoomControl,
            this.locateControl,
            this.dragControl,
            this.drawControl,
        ].forEach(control => control ? control.map = this.leafletMap : null);
    }
}
LeafletComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-leaflet',
                template: `<div class="aui-leaflet" [ngClass]="{'is-full-screen': leafletMap.fullScreen}">
	<div class="aui-leaflet__content" [ngClass]="{'has-content': hasSidebar}" #content>
		<ng-content></ng-content>
	</div>
	<div class="aui-leaflet__wrapper">
		<div #map class="aui-leaflet__map"></div>
		<div class="aui-leaflet__controls aui-leaflet__controls--top-left">
			<ng-content select="[controls][top][left]"></ng-content>
		</div>
		<div class="aui-leaflet__controls aui-leaflet__controls--top-right">
			<ng-content select="[controls][top][right]"></ng-content>
		</div>
		<div class="aui-leaflet__controls aui-leaflet__controls--bottom-right">
			<ng-content select="[controls][bottom][right]"></ng-content>
		</div>
		<div class="aui-leaflet__controls aui-leaflet__controls--bottom-left">
			<ng-content select="[controls][bottom][left]"></ng-content>
		</div>
	</div>
</div>
`,
                styles: [`.aui-leaflet{border:1px solid #b0b0b0;display:flex;height:600px;width:100%}.aui-leaflet__wrapper{flex:1;height:100%;overflow:hidden;position:relative}.aui-leaflet.is-full-screen{border:none;bottom:0;position:fixed;height:100%;left:0;right:0;top:0;z-index:10}.aui-leaflet__map{font-size:inherit;font-family:inherit;height:100%;position:relative;z-index:1}.aui-leaflet__content{background-color:#fff;overflow:auto;width:0}.aui-leaflet.is-full-screen .aui-leaflet__content{border:1px solid #b0b0b0;box-shadow:7px 7px 0 rgba(0,0,0,.1);position:absolute;left:20px;max-height:calc(100% - 160px);top:20px;width:350px;z-index:2}.aui-leaflet__content.has-content{border-right:1px solid #b0b0b0;padding:20px;width:300px}.aui-leaflet__controls{position:absolute;z-index:2}.aui-leaflet__controls--bottom-left{bottom:20px;left:20px}.aui-leaflet__controls--bottom-right{bottom:20px;right:20px}.aui-leaflet__controls--top-left{left:20px;top:20px}.aui-leaflet.is-full-screen .aui-leaflet__controls--top-left{left:390px}.aui-leaflet__controls--top-right{right:20px;top:20px}.aui-leaflet__control{float:left}.aui-leaflet__controls--top-left .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-bottom:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--bottom-right .aui-leaflet__control{margin-top:5px}.aui-leaflet__controls--bottom-left .aui-leaflet__control,.aui-leaflet__controls--top-left .aui-leaflet__control{margin-right:5px}.aui-leaflet__controls--bottom-right .aui-leaflet__control,.aui-leaflet__controls--top-right .aui-leaflet__control{margin-left:5px}.aui-leaflet__zoom-control{display:block}.aui-leaflet__html-icon{background-color:transparent;border:none}.leaflet-popup-content-wrapper{border:1px solid #f3f3f3!important;border-radius:0!important;box-shadow:.5rem .5rem 0 rgba(0,0,0,.1)!important;position:relative}.leaflet-popup-content-wrapper::after{content:'';position:absolute;bottom:-1px;height:1px;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:22px}.leaflet-popup-content{margin:10px!important;font-size:14px}.leaflet-container{font-family:inherit!important}.leaflet-popup-close-button{right:5px!important;top:5px!important;z-index:1}`],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAvIiwic291cmNlcyI6WyJsaWIvbGVhZmxldC9jb21wb25lbnRzL2xlYWZsZXQvbGVhZmxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUVaLGlCQUFpQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDaEksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDcEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDOUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUE0QjlHLE1BQU07Ozs7SUFXTCxlQUFlOztRQUVkLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdDLENBQUMsQ0FBQztLQUNIOzs7O0lBRUQsa0JBQWtCO1FBQ2pCO1lBQ0MsSUFBSSxDQUFDLGlCQUFpQjtZQUN0QixJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsYUFBYTtZQUNsQixJQUFJLENBQUMsV0FBVztZQUNoQixJQUFJLENBQUMsV0FBVztTQUNoQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyRTs7O1lBcERELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CVjtnQkFDQSxNQUFNLEVBQUUsQ0FBQyxtdEVBQW10RSxDQUFDOztnQkFDN3RFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7a0JBRUMsU0FBUyxTQUFDLEtBQUs7c0JBQ2YsU0FBUyxTQUFDLFNBQVM7Z0NBQ25CLFlBQVksU0FBQyxpQ0FBaUM7MEJBQzlDLFlBQVksU0FBQywyQkFBMkI7NEJBQ3hDLFlBQVksU0FBQyw2QkFBNkI7MEJBQzFDLFlBQVksU0FBQywyQkFBMkI7MEJBQ3hDLFlBQVksU0FBQywyQkFBMkI7eUJBQ3hDLEtBQUs7eUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0SW5wdXQsXG5cdFZpZXdDaGlsZCxcblx0Q29udGVudENoaWxkLFxuXHRBZnRlckNvbnRlbnRJbml0LFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExlYWZsZXRNYXAgfSBmcm9tICcuLi8uLi9jbGFzc2VzL2xlYWZsZXQtbWFwJztcbmltcG9ydCB7IExlYWZsZXRGdWxsc2NyZWVuQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sL2xlYWZsZXQtZnVsbHNjcmVlbi1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0Wm9vbUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LXpvb20tY29udHJvbC9sZWFmbGV0LXpvb20tY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWxvY2F0ZS1jb250cm9sL2xlYWZsZXQtbG9jYXRlLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IExlYWZsZXREcmFnQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbnRyb2xzL2xlYWZsZXQtZHJhZy1jb250cm9sL2xlYWZsZXQtZHJhZy1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWFmbGV0RHJhd0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9jb250cm9scy9sZWFmbGV0LWRyYXctY29udHJvbC9sZWFmbGV0LWRyYXctY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktbGVhZmxldCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0XCIgW25nQ2xhc3NdPVwieydpcy1mdWxsLXNjcmVlbic6IGxlYWZsZXRNYXAuZnVsbFNjcmVlbn1cIj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250ZW50XCIgW25nQ2xhc3NdPVwieydoYXMtY29udGVudCc6IGhhc1NpZGViYXJ9XCIgI2NvbnRlbnQ+XG5cdFx0PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X193cmFwcGVyXCI+XG5cdFx0PGRpdiAjbWFwIGNsYXNzPVwiYXVpLWxlYWZsZXRfX21hcFwiPjwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVt0b3BdW2xlZnRdXCI+PC9uZy1jb250ZW50PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJhdWktbGVhZmxldF9fY29udHJvbHMgYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtcmlnaHRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bdG9wXVtyaWdodF1cIj48L25nLWNvbnRlbnQ+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImF1aS1sZWFmbGV0X19jb250cm9scyBhdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodFwiPlxuXHRcdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwiW2NvbnRyb2xzXVtib3R0b21dW3JpZ2h0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYXVpLWxlYWZsZXRfX2NvbnRyb2xzIGF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnRcIj5cblx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cIltjb250cm9sc11bYm90dG9tXVtsZWZ0XVwiPjwvbmctY29udGVudD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbmAsXG5cdHN0eWxlczogW2AuYXVpLWxlYWZsZXR7Ym9yZGVyOjFweCBzb2xpZCAjYjBiMGIwO2Rpc3BsYXk6ZmxleDtoZWlnaHQ6NjAwcHg7d2lkdGg6MTAwJX0uYXVpLWxlYWZsZXRfX3dyYXBwZXJ7ZmxleDoxO2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW57Ym9yZGVyOm5vbmU7Ym90dG9tOjA7cG9zaXRpb246Zml4ZWQ7aGVpZ2h0OjEwMCU7bGVmdDowO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMH0uYXVpLWxlYWZsZXRfX21hcHtmb250LXNpemU6aW5oZXJpdDtmb250LWZhbWlseTppbmhlcml0O2hlaWdodDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0uYXVpLWxlYWZsZXRfX2NvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO292ZXJmbG93OmF1dG87d2lkdGg6MH0uYXVpLWxlYWZsZXQuaXMtZnVsbC1zY3JlZW4gLmF1aS1sZWFmbGV0X19jb250ZW50e2JvcmRlcjoxcHggc29saWQgI2IwYjBiMDtib3gtc2hhZG93OjdweCA3cHggMCByZ2JhKDAsMCwwLC4xKTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAxNjBweCk7dG9wOjIwcHg7d2lkdGg6MzUwcHg7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udGVudC5oYXMtY29udGVudHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiMGIwYjA7cGFkZGluZzoyMHB4O3dpZHRoOjMwMHB4fS5hdWktbGVhZmxldF9fY29udHJvbHN7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyfS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1sZWZ0e2JvdHRvbToyMHB4O2xlZnQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS1ib3R0b20tcmlnaHR7Ym90dG9tOjIwcHg7cmlnaHQ6MjBweH0uYXVpLWxlYWZsZXRfX2NvbnRyb2xzLS10b3AtbGVmdHtsZWZ0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0LmlzLWZ1bGwtc2NyZWVuIC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0e2xlZnQ6MzkwcHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0e3JpZ2h0OjIwcHg7dG9wOjIwcHh9LmF1aS1sZWFmbGV0X19jb250cm9se2Zsb2F0OmxlZnR9LmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLWJvdHRvbTo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2x7bWFyZ2luLXRvcDo1cHh9LmF1aS1sZWFmbGV0X19jb250cm9scy0tYm90dG9tLWxlZnQgLmF1aS1sZWFmbGV0X19jb250cm9sLC5hdWktbGVhZmxldF9fY29udHJvbHMtLXRvcC1sZWZ0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tcmlnaHQ6NXB4fS5hdWktbGVhZmxldF9fY29udHJvbHMtLWJvdHRvbS1yaWdodCAuYXVpLWxlYWZsZXRfX2NvbnRyb2wsLmF1aS1sZWFmbGV0X19jb250cm9scy0tdG9wLXJpZ2h0IC5hdWktbGVhZmxldF9fY29udHJvbHttYXJnaW4tbGVmdDo1cHh9LmF1aS1sZWFmbGV0X196b29tLWNvbnRyb2x7ZGlzcGxheTpibG9ja30uYXVpLWxlYWZsZXRfX2h0bWwtaWNvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjpub25lfS5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcntib3JkZXI6MXB4IHNvbGlkICNmM2YzZjMhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzouNXJlbSAuNXJlbSAwIHJnYmEoMCwwLDAsLjEpIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX0ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXI6OmFmdGVye2NvbnRlbnQ6Jyc7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOi0xcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt3aWR0aDoyMnB4fS5sZWFmbGV0LXBvcHVwLWNvbnRlbnR7bWFyZ2luOjEwcHghaW1wb3J0YW50O2ZvbnQtc2l6ZToxNHB4fS5sZWFmbGV0LWNvbnRhaW5lcntmb250LWZhbWlseTppbmhlcml0IWltcG9ydGFudH0ubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b257cmlnaHQ6NXB4IWltcG9ydGFudDt0b3A6NXB4IWltcG9ydGFudDt6LWluZGV4OjF9YF0sIC8vIEB0b2RvOiBtb3ZlIHRoaXMgdG8gYXVpLWtpdC9jb3JlIGJyYW5kaW5nPyBjaGVjayB3aXRoIHN0eWxlZ3VpZGUgdGVhbVxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cdEBWaWV3Q2hpbGQoJ21hcCcpIG1hcDogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50KSBmdWxsU2NyZWVuQ29udHJvbDogTGVhZmxldEZ1bGxzY3JlZW5Db250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudCkgem9vbUNvbnRyb2w6IExlYWZsZXRab29tQ29udHJvbENvbXBvbmVudDtcblx0QENvbnRlbnRDaGlsZChMZWFmbGV0TG9jYXRlQ29udHJvbENvbXBvbmVudCkgbG9jYXRlQ29udHJvbDogTGVhZmxldExvY2F0ZUNvbnRyb2xDb21wb25lbnQ7XG5cdEBDb250ZW50Q2hpbGQoTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50KSBkcmFnQ29udHJvbDogTGVhZmxldERyYWdDb250cm9sQ29tcG9uZW50O1xuXHRAQ29udGVudENoaWxkKExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudCkgZHJhd0NvbnRyb2w6IExlYWZsZXREcmF3Q29udHJvbENvbXBvbmVudDtcblx0QElucHV0KCkgbGVhZmxldE1hcDogTGVhZmxldE1hcDtcblx0QElucHV0KCkgaGFzU2lkZWJhcjtcblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoZSBtYXAgaXMgcHJvcGVybHkgcmVuZGVyZWQgYmVmb3JlIGluaXRpYWxpemluZyBpdFxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5sZWFmbGV0TWFwLmluaXQodGhpcy5tYXAubmF0aXZlRWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudEluaXQoKSB7XG5cdFx0W1xuXHRcdFx0dGhpcy5mdWxsU2NyZWVuQ29udHJvbCxcblx0XHRcdHRoaXMuem9vbUNvbnRyb2wsXG5cdFx0XHR0aGlzLmxvY2F0ZUNvbnRyb2wsXG5cdFx0XHR0aGlzLmRyYWdDb250cm9sLFxuXHRcdFx0dGhpcy5kcmF3Q29udHJvbCxcblx0XHRdLmZvckVhY2goY29udHJvbCA9PiBjb250cm9sID8gY29udHJvbC5tYXAgPSB0aGlzLmxlYWZsZXRNYXAgOiBudWxsKTtcblx0fVxufVxuIl19