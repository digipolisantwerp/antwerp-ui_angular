# @acpaas-ui/ngx-components/map

This module renders a map component with some basic controls, based on leaflet.

## Usage

```typescript
import { LeafletMap } from '@acpaas-ui/ngx-components/avatar'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Selectable list module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() leafletMap: LeafletMap;` | `-` | A custom LeafletMap. |
| `@Input() hasSidebar: boolean;` | `-` | Define if the map has a sidebar. |

#### Example

```typescript
import { LeafletMap, baseMapWorldGray, baseMapAntwerp } from '@acpaas-ui/ngx-components/map';

public leafletMap: LeafletMap = new LeafletMap({
  zoom: 13, // default zoom level
  center: [51.215, 4.425], // default center point
  onAddPolygon: (layer) => {},
  onAddLine: (layer) => {},
  onEditFeature: (feature) => {},
});

public ngOnInit(): void {
  this.leafletMap.onInit.subscribe(() => {
    this.leafletMap.addTileLayer(baseMapWorldGray);
    this.leafletMap.addTileLayer(baseMapAntwerp);
  });
}
```

```html
<aui-leaflet [leafletMap]="leafletMap" [hasSidebar]="true">
  <div controls top left>
    <aui-leaflet-drag-control></aui-leaflet-drag-control>
    <aui-leaflet-draw-control></aui-leaflet-draw-control>
  </div>
  <div controls top right>
    <aui-leaflet-fullscreen-control></aui-leaflet-fullscreen-control>
  </div>
  <div controls bottom left>
    <aui-leaflet-locate-control></aui-leaflet-locate-control>
  </div>
  <div controls bottom right>
    <aui-leaflet-zoom-control></aui-leaflet-zoom-control>
  </div>
  <div>
    Content displayed in sidebar
  </div>
</aui-leaflet>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
