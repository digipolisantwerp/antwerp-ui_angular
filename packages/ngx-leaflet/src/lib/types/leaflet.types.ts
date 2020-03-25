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
  onAddLine?: () => void;
  polygonColor?: string;
  onAddPolygon?: () => void;
  onEditFeature?: () => void;
}

export interface LatLngExpression {
  latLng: any;
}
