import {LatLngExpression} from 'leaflet';

export interface LeafletLayer {
  name: string;
  url: string;
  options?: any;
}

export interface LeafletMapOptions {
  center: LatLngExpression;
  zoom: number;
  lineColor?: string;
  onAddLine?: (v) => void;
  polygonColor?: string;
  onAddPolygon?: (v) => void;
  onEditFeature?: (v) => void;
}

export interface LatLngExpression {
  latLng: any;
}
