export interface Label {
  singular: string;
  plural: string;
}

export interface Labels {
  [key: string]: Label;
}

export interface ReplaceData {
  [key: string]: string | number;
}
