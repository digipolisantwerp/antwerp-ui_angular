# Leaflet Component
A map component with some basic controls, based on leaflet.

Available controls:
- drag-control: switch to panning
- draw-control: switch to drawing
- fullscreen-control: toggle fullscreen mode
- locate-control: zoom map to current location
- zoom-control: zoom in and out

## Dependencies
- leaflet
- leaflet-draw
- esri-leaflet

## Installation
```
npm install @acpaas-ui/leaflet
```

Import component in **app.module.ts**
```
import { LeafletModule } from '@acpaas-ui/leaflet';

@NgModule({
    imports: [
        LeafletModule
    ]
})

export class AppModule {}
```

## Usage

### Initialization

The map component is controlled by an instance of the `LeafletMap` class.
So first thing we'll have to do is create an instance.
```
private leafletMap: LeafletMap = new LeafletMap({
    zoom: 13, // default zoom level
    center: [51.215, 4.425], // default center point
    onAddPolygon: (layer) => {},
    onAddLine: (layer) => {},
    onEditFeature: (feature) => {},
});
```

Next you should bind this map to your `aui-leaflet` component.
```
<aui-leaflet [leafletMap]="leafletMap"></aui-leaflet>
```

### Adding layers

Because leaflet needs the actual DOM element to be rendered, you can only add layers after initialization.
Therefor a callback is provided to do so. By default we export 2 basic layers which can be used, but you can use any layer you want.

```
ngOnInit() {
 this.leafletMap.onInit.subscribe(() => {
    this.leafletMap.addTileLayer(baseMapWorldGray);
    this.leafletMap.addTileLayer(baseMapAntwerp);
 });
}
```

### Adding controls

Adding controls is done by simply adding them to the content of your `aui-leaflet` component.
You can set the position of your control by using the correct attribute selectors.
You can also choose whether your component needs a sidebar or not by toggling the `hasSidebar` input.

```
<aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="true">
    <div controls top left>
        Content displayed in top left corner of map
    </div>
    <div controls top right>
        Content displayed in top right corner of map
    </div>
    <div controls bottom right>
        Content displayed in bottom right corner of map
    </div>
    <div controls bottom left>
        Content displayed in bottom left corner of map
    </div>
    <div>
        Content displayed in sidebar
    </div>
</aui-leaflet>
```

### API

#### Component

- `leafletMap`: an instance of the LeafletMap class
- `hasSidebar`: a boolean that determines whether the component should have a sidebar or not.

#### LeafletMap

- `map`: The native leaflet map instance
- `addTileLayer(layer: LeafletLayer)`: adds a tile layer to the map. (see leaflet docs)
- `addFeatureLayer(config: any)`: adds a feature layer to the map. (see esri leaflet docs)
- `addGeoJSON(geoJson: any, config: any)`: add geoJSON to the map. (see leaflet docs)
- `fitFeatureLayers(featureLayers)`: Fit the map bounds to the given feature layers.
- `removeLayer(layer)`: removes a layer
- `zoomIn()`: Zoom in
- `zoomOut()`: Zoom out
- `toggleFullscreen()`: Toggle fullscreen
- `locate()`: Start zooming to current location
- `setView(center, zoom)`: Zoom to the given center and zoom values.
- `addMarker(position, options)`: Adds a marker to the given position. (see leaflet docs)
- `addHTMLMarker`: Adds an HTML marker to the given position.
