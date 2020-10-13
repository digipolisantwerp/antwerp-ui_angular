import {ConstructableCell} from '../../types/table.types';

export function hasMetadata(component: ConstructableCell) {
  return !!Object.keys(component).find(k => k === 'metadata');
}
