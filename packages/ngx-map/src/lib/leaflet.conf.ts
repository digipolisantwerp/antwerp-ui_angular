import {LeafletLayer} from './types/leaflet.types';

export const baseMapWorldGray: LeafletLayer = {
  name: 'Base world gray',
  url: 'https://{s}.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
  options: {
    subdomains: ['server', 'services'],
    maxNativeZoom: 16,
  },
};

export const baseMapAntwerp: LeafletLayer = {
  name: 'Base antwerp',
  url: 'https://basemap.antwerpen.be/tile/{z}/{y}/{x}',
  options: {
    minZoom: 13,
    maxNativeZoom: 19,
    maxZoom: 21,
  },
};
