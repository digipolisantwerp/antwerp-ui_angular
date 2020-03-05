import {ReplaceData} from '../types/labels.types';

export const interpolate = (label: string, replaceData?: ReplaceData): string => {
  if (!replaceData) {
    return label;
  }

  const escapeStringRegExp = prop => prop.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  const pattern = new RegExp(`\%{(${Object.keys(replaceData).map(escapeStringRegExp).join('|')})\}`, 'g');

  return label.replace(pattern, (match, prop) => replaceData[prop] ? String(replaceData[prop]) : '');
};
